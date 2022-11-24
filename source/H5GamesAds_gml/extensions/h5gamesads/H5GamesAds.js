
function H5GamesAds_Sound(value)
{
	var value_str;
	if(value >= 0.5)
		value_str = 'on';
	else
		value_str = 'off';
		
	adConfig({sound: value_str});
}

//only works at start
// function H5GamesAds_PreloadAdBreaks(value)
// {
	// var value_str;
	// if(value >= 0.5)
		// value_str = 'on';
	// else
		// value_str = 'off';
	
	// adConfig({preloadAdBreaks: value_str});
// }

function H5GamesAds_Interstitial(placement_type)
{
    adBreak({
      type: placement_type,
	  adBreakDone: (info) => {
			GMS_API.send_async_event_social({
				"type":"H5GamesAds_Interstitial_BreakDone",
				"breakStatus":info.breakStatus,
				"breakFormat":info.breakFormat,
				"breakType":info.breakType,
			});
			
	  },
	  beforeAd: () => {
		  
			GMS_API.send_async_event_social({
				"type":"H5GamesAds_Interstitial_BeforeAd",
			});
	  },
	  afterAd: () => {
		  
			GMS_API.send_async_event_social({
				"type":"H5GamesAds_Interstitial_AfterAd",
			});
	},
	});
}

function H5GamesAds_RewardVideo()
{

	adBreak({
	  type: 'reward',
	  adBreakDone: (info) => {
			GMS_API.send_async_event_social({
				"type":"H5GamesAds_RewardVideo_BreakDone",
				"breakStatus":info.breakStatus,
				"breakFormat":info.breakFormat,
				"breakType":info.breakType,
			});
			
	  },
	  beforeAd: () => {
		  
			GMS_API.send_async_event_social({
				"type":"H5GamesAds_RewardVideo_BeforeAd",
			});
	  },
	  afterAd: () => {
		  
			GMS_API.send_async_event_social({
				"type":"H5GamesAds_RewardVideo_AfterAd",
			});

		
	  },
	  beforeReward: (showAdFn) => {

			GMS_API.send_async_event_social({
				"type":"H5GamesAds_RewardVideo_BeforeReward",
			});

		  showAdFn();
	  },
	  adDismissed: () => {
		  
			GMS_API.send_async_event_social({
				"type":"H5GamesAds_RewardVideo_AdDismissed",
			});

	  },
	  adViewed: () => {

			GMS_API.send_async_event_social({
				"type":"H5GamesAds_RewardVideo_AdViewed",
			});

	  }
	});
}

