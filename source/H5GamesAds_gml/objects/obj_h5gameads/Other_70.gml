
show_debug_message(json_encode(async_load))

switch(async_load[?"type"])
{
	case "H5GamesAds_Interstitial_BreakDone":
		var breakType = async_load[?"breakType"]//"start","pause","next","browse"
		var breakStatus = async_load[?"breakStatus"]//"noAdPreloaded","viewed","frequencyCapped"
		var breakFormat = async_load[?"breakFormat"]//"interstitial"
	break
	
	case "H5GamesAds_Interstitial_BeforeAd":
	break
	
	case "H5GamesAds_Interstitial_AfterAd":
	break
	
	case "H5GamesAds_RewardVideo_BreakDone":
	break
	
	case "H5GamesAds_RewardVideo_BeforeAd":
	break
	
	case "H5GamesAds_RewardVideo_AfterAd":
	break
	
	case "H5GamesAds_RewardVideo_BeforeReward":
	break
	
	case "H5GamesAds_RewardVideo_AdDismissed":
	break
	
	case "H5GamesAds_RewardVideo_AdViewed":
		show_debug_message("Video Reward ->  Reward")
		var breakType = async_load[?"breakType"]//"reward"
		var breakStatus = async_load[?"breakStatus"]//"noAdPreloaded","viewed","frequencyCapped"
		var breakFormat = async_load[?"breakFormat"]//"reward","interstitial"
	break
	
}
