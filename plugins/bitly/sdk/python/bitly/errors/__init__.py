from .add_custom_bitlink_error import AddCustomBitlinkErrorBody, add_custom_bitlink_error_mapper
from .create_bitlink_error import CreateBitlinkErrorBody, create_bitlink_error_mapper
from .create_campaign_error import CreateCampaignErrorBody, create_campaign_error_mapper
from .create_channel_error import CreateChannelErrorBody, create_channel_error_mapper
from .create_full_bitlink_error import CreateFullBitlinkErrorBody, create_full_bitlink_error_mapper
from .create_qr_code_public_error import CreateQrCodePublicErrorBody, create_qr_code_public_error_mapper
from .create_static_qr_code_public_error import (
    CreateStaticQrCodePublicErrorBody,
    create_static_qr_code_public_error_mapper,
)
from .create_webhook_error import CreateWebhookErrorBody, create_webhook_error_mapper
from .delete_bitlink_error import DeleteBitlinkErrorBody, delete_bitlink_error_mapper
from .delete_qr_code_error import DeleteQrCodeErrorBody, delete_qr_code_error_mapper
from .delete_webhook_error import DeleteWebhookErrorBody, delete_webhook_error_mapper
from .expand_bitlink_error import ExpandBitlinkErrorBody, expand_bitlink_error_mapper
from .get_bitlink_error import GetBitlinkErrorBody, get_bitlink_error_mapper
from .get_bitlinks_by_group_error import GetBitlinksByGroupErrorBody, get_bitlinks_by_group_error_mapper
from .get_bs_ds_error import GetBsDsErrorBody, get_bs_ds_error_mapper
from .get_campaign_error import GetCampaignErrorBody, get_campaign_error_mapper
from .get_campaigns_error import GetCampaignsErrorBody, get_campaigns_error_mapper
from .get_channel_error import GetChannelErrorBody, get_channel_error_mapper
from .get_channels_error import GetChannelsErrorBody, get_channels_error_mapper
from .get_clicks_for_bitlink_error import GetClicksForBitlinkErrorBody, get_clicks_for_bitlink_error_mapper
from .get_clicks_for_custom_bitlink_error import (
    GetClicksForCustomBitlinkErrorBody,
    get_clicks_for_custom_bitlink_error_mapper,
)
from .get_clicks_summary_for_bitlink_error import (
    GetClicksSummaryForBitlinkErrorBody,
    get_clicks_summary_for_bitlink_error_mapper,
)
from .get_custom_bitlink_error import GetCustomBitlinkErrorBody, get_custom_bitlink_error_mapper
from .get_custom_bitlink_metrics_by_destination_error import (
    GetCustomBitlinkMetricsByDestinationErrorBody,
    get_custom_bitlink_metrics_by_destination_error_mapper,
)
from .get_engagements_error import GetEngagementsErrorBody, get_engagements_error_mapper
from .get_engagements_summary_error import GetEngagementsSummaryErrorBody, get_engagements_summary_error_mapper
from .get_group_clicks_error import GetGroupClicksErrorBody, get_group_clicks_error_mapper
from .get_group_code_scans_by_city_error import (
    GetGroupCodeScansByCityErrorBody,
    get_group_code_scans_by_city_error_mapper,
)
from .get_group_code_scans_by_country_error import (
    GetGroupCodeScansByCountryErrorBody,
    get_group_code_scans_by_country_error_mapper,
)
from .get_group_code_scans_over_time_error import (
    GetGroupCodeScansOverTimeErrorBody,
    get_group_code_scans_over_time_error_mapper,
)
from .get_group_error import GetGroupErrorBody, get_group_error_mapper
from .get_group_feature_usage_error import GetGroupFeatureUsageErrorBody, get_group_feature_usage_error_mapper
from .get_group_historical_usage_error import GetGroupHistoricalUsageErrorBody, get_group_historical_usage_error_mapper
from .get_group_link_clicks_by_city_error import (
    GetGroupLinkClicksByCityErrorBody,
    get_group_link_clicks_by_city_error_mapper,
)
from .get_group_link_clicks_by_country_error import (
    GetGroupLinkClicksByCountryErrorBody,
    get_group_link_clicks_by_country_error_mapper,
)
from .get_group_link_clicks_by_device_error import (
    GetGroupLinkClicksByDeviceErrorBody,
    get_group_link_clicks_by_device_error_mapper,
)
from .get_group_link_clicks_by_referrer_error import (
    GetGroupLinkClicksByReferrerErrorBody,
    get_group_link_clicks_by_referrer_error_mapper,
)
from .get_group_link_clicks_over_time_error import (
    GetGroupLinkClicksOverTimeErrorBody,
    get_group_link_clicks_over_time_error_mapper,
)
from .get_group_metrics_by_cities_error import (
    GetGroupMetricsByCitiesErrorBody,
    get_group_metrics_by_cities_error_mapper,
)
from .get_group_metrics_by_countries_error import (
    GetGroupMetricsByCountriesErrorBody,
    get_group_metrics_by_countries_error_mapper,
)
from .get_group_metrics_by_devices_error import (
    GetGroupMetricsByDevicesErrorBody,
    get_group_metrics_by_devices_error_mapper,
)
from .get_group_metrics_by_referrer_error import (
    GetGroupMetricsByReferrerErrorBody,
    get_group_metrics_by_referrer_error_mapper,
)
from .get_group_metrics_by_referring_networks_error import (
    GetGroupMetricsByReferringNetworksErrorBody,
    get_group_metrics_by_referring_networks_error_mapper,
)
from .get_group_metrics_over_time_error import (
    GetGroupMetricsOverTimeErrorBody,
    get_group_metrics_over_time_error_mapper,
)
from .get_group_preferences_error import GetGroupPreferencesErrorBody, get_group_preferences_error_mapper
from .get_group_shorten_counts_error import GetGroupShortenCountsErrorBody, get_group_shorten_counts_error_mapper
from .get_group_tags_error import GetGroupTagsErrorBody, get_group_tags_error_mapper
from .get_group_top_code_scans_error import GetGroupTopCodeScansErrorBody, get_group_top_code_scans_error_mapper
from .get_group_top_link_clicks_error import GetGroupTopLinkClicksErrorBody, get_group_top_link_clicks_error_mapper
from .get_group_top_metrics_error import GetGroupTopMetricsErrorBody, get_group_top_metrics_error_mapper
from .get_groups_error import GetGroupsErrorBody, get_groups_error_mapper
from .get_metrics_for_bitlink_by_cities_error import (
    GetMetricsForBitlinkByCitiesErrorBody,
    get_metrics_for_bitlink_by_cities_error_mapper,
)
from .get_metrics_for_bitlink_by_countries_error import (
    GetMetricsForBitlinkByCountriesErrorBody,
    get_metrics_for_bitlink_by_countries_error_mapper,
)
from .get_metrics_for_bitlink_by_devices_error import (
    GetMetricsForBitlinkByDevicesErrorBody,
    get_metrics_for_bitlink_by_devices_error_mapper,
)
from .get_metrics_for_bitlink_by_referrer_name_error import (
    GetMetricsForBitlinkByReferrerNameErrorBody,
    get_metrics_for_bitlink_by_referrer_name_error_mapper,
)
from .get_metrics_for_bitlink_by_referrers_by_domains_error import (
    GetMetricsForBitlinkByReferrersByDomainsErrorBody,
    get_metrics_for_bitlink_by_referrers_by_domains_error_mapper,
)
from .get_metrics_for_bitlink_by_referrers_error import (
    GetMetricsForBitlinkByReferrersErrorBody,
    get_metrics_for_bitlink_by_referrers_error_mapper,
)
from .get_metrics_for_bitlink_by_referring_domains_error import (
    GetMetricsForBitlinkByReferringDomainsErrorBody,
    get_metrics_for_bitlink_by_referring_domains_error_mapper,
)
from .get_o_auth_app_error import GetOAuthAppErrorBody, get_o_auth_app_error_mapper
from .get_organization_error import GetOrganizationErrorBody, get_organization_error_mapper
from .get_organization_shorten_counts_by_group_error import (
    GetOrganizationShortenCountsByGroupErrorBody,
    get_organization_shorten_counts_by_group_error_mapper,
)
from .get_organization_shorten_counts_error import (
    GetOrganizationShortenCountsErrorBody,
    get_organization_shorten_counts_error_mapper,
)
from .get_organizations_error import GetOrganizationsErrorBody, get_organizations_error_mapper
from .get_plan_limits_error import GetPlanLimitsErrorBody, get_plan_limits_error_mapper
from .get_platform_limits_error import GetPlatformLimitsErrorBody, get_platform_limits_error_mapper
from .get_qr_code_by_id_public_error import GetQrCodeByIdPublicErrorBody, get_qr_code_by_id_public_error_mapper
from .get_qr_code_image_public_error import GetQrCodeImagePublicErrorBody, get_qr_code_image_public_error_mapper
from .get_scan_metrics_for_qr_code_by_browser_error import (
    GetScanMetricsForQrCodeByBrowserErrorBody,
    get_scan_metrics_for_qr_code_by_browser_error_mapper,
)
from .get_scan_metrics_for_qr_code_by_cities_error import (
    GetScanMetricsForQrCodeByCitiesErrorBody,
    get_scan_metrics_for_qr_code_by_cities_error_mapper,
)
from .get_scan_metrics_for_qr_code_by_countries_error import (
    GetScanMetricsForQrCodeByCountriesErrorBody,
    get_scan_metrics_for_qr_code_by_countries_error_mapper,
)
from .get_scan_metrics_for_qr_code_by_devices_os_error import (
    GetScanMetricsForQrCodeByDevicesOsErrorBody,
    get_scan_metrics_for_qr_code_by_devices_os_error_mapper,
)
from .get_scan_metrics_for_qr_code_error import (
    GetScanMetricsForQrCodeErrorBody,
    get_scan_metrics_for_qr_code_error_mapper,
)
from .get_scan_metrics_summary_for_qr_code_error import (
    GetScanMetricsSummaryForQrCodeErrorBody,
    get_scan_metrics_summary_for_qr_code_error_mapper,
)
from .get_sorted_bitlinks_error import GetSortedBitlinksErrorBody, get_sorted_bitlinks_error_mapper
from .get_top_links_and_qr_codes_by_engagements_error import (
    GetTopLinksAndQrCodesByEngagementsErrorBody,
    get_top_links_and_qr_codes_by_engagements_error_mapper,
)
from .get_user_error import GetUserErrorBody, get_user_error_mapper
from .get_webhook_error import GetWebhookErrorBody, get_webhook_error_mapper
from .get_webhooks_error import GetWebhooksErrorBody, get_webhooks_error_mapper
from .list_qr_minimal_error import ListQrMinimalErrorBody, list_qr_minimal_error_mapper
from .post_create_group_export_error import PostCreateGroupExportErrorBody, post_create_group_export_error_mapper
from .redirect_qr_code_destination_error import (
    RedirectQrCodeDestinationErrorBody,
    redirect_qr_code_destination_error_mapper,
)
from .update_bitlink_error import UpdateBitlinkErrorBody, update_bitlink_error_mapper
from .update_bitlinks_by_group_error import UpdateBitlinksByGroupErrorBody, update_bitlinks_by_group_error_mapper
from .update_campaign_error import UpdateCampaignErrorBody, update_campaign_error_mapper
from .update_channel_error import UpdateChannelErrorBody, update_channel_error_mapper
from .update_custom_bitlink_error import UpdateCustomBitlinkErrorBody, update_custom_bitlink_error_mapper
from .update_group_error import UpdateGroupErrorBody, update_group_error_mapper
from .update_group_preferences_error import UpdateGroupPreferencesErrorBody, update_group_preferences_error_mapper
from .update_qr_code_public_error import UpdateQrCodePublicErrorBody, update_qr_code_public_error_mapper
from .update_qr_codes_by_group_error import UpdateQrCodesByGroupErrorBody, update_qr_codes_by_group_error_mapper
from .update_user_error import UpdateUserErrorBody, update_user_error_mapper
from .update_webhook_error import UpdateWebhookErrorBody, update_webhook_error_mapper
from .upgrade_qr_code_to_bitlink_error import UpgradeQrCodeToBitlinkErrorBody, upgrade_qr_code_to_bitlink_error_mapper
from .verify_webhook_error import VerifyWebhookErrorBody, verify_webhook_error_mapper

__all__ = [
    "AddCustomBitlinkErrorBody",
    "CreateBitlinkErrorBody",
    "CreateCampaignErrorBody",
    "CreateChannelErrorBody",
    "CreateFullBitlinkErrorBody",
    "CreateQrCodePublicErrorBody",
    "CreateStaticQrCodePublicErrorBody",
    "CreateWebhookErrorBody",
    "DeleteBitlinkErrorBody",
    "DeleteQrCodeErrorBody",
    "DeleteWebhookErrorBody",
    "ExpandBitlinkErrorBody",
    "GetBitlinkErrorBody",
    "GetBitlinksByGroupErrorBody",
    "GetBsDsErrorBody",
    "GetCampaignErrorBody",
    "GetCampaignsErrorBody",
    "GetChannelErrorBody",
    "GetChannelsErrorBody",
    "GetClicksForBitlinkErrorBody",
    "GetClicksForCustomBitlinkErrorBody",
    "GetClicksSummaryForBitlinkErrorBody",
    "GetCustomBitlinkErrorBody",
    "GetCustomBitlinkMetricsByDestinationErrorBody",
    "GetEngagementsErrorBody",
    "GetEngagementsSummaryErrorBody",
    "GetGroupClicksErrorBody",
    "GetGroupCodeScansByCityErrorBody",
    "GetGroupCodeScansByCountryErrorBody",
    "GetGroupCodeScansOverTimeErrorBody",
    "GetGroupErrorBody",
    "GetGroupFeatureUsageErrorBody",
    "GetGroupHistoricalUsageErrorBody",
    "GetGroupLinkClicksByCityErrorBody",
    "GetGroupLinkClicksByCountryErrorBody",
    "GetGroupLinkClicksByDeviceErrorBody",
    "GetGroupLinkClicksByReferrerErrorBody",
    "GetGroupLinkClicksOverTimeErrorBody",
    "GetGroupMetricsByCitiesErrorBody",
    "GetGroupMetricsByCountriesErrorBody",
    "GetGroupMetricsByDevicesErrorBody",
    "GetGroupMetricsByReferrerErrorBody",
    "GetGroupMetricsByReferringNetworksErrorBody",
    "GetGroupMetricsOverTimeErrorBody",
    "GetGroupPreferencesErrorBody",
    "GetGroupShortenCountsErrorBody",
    "GetGroupTagsErrorBody",
    "GetGroupTopCodeScansErrorBody",
    "GetGroupTopLinkClicksErrorBody",
    "GetGroupTopMetricsErrorBody",
    "GetGroupsErrorBody",
    "GetMetricsForBitlinkByCitiesErrorBody",
    "GetMetricsForBitlinkByCountriesErrorBody",
    "GetMetricsForBitlinkByDevicesErrorBody",
    "GetMetricsForBitlinkByReferrerNameErrorBody",
    "GetMetricsForBitlinkByReferrersByDomainsErrorBody",
    "GetMetricsForBitlinkByReferrersErrorBody",
    "GetMetricsForBitlinkByReferringDomainsErrorBody",
    "GetOAuthAppErrorBody",
    "GetOrganizationErrorBody",
    "GetOrganizationShortenCountsByGroupErrorBody",
    "GetOrganizationShortenCountsErrorBody",
    "GetOrganizationsErrorBody",
    "GetPlanLimitsErrorBody",
    "GetPlatformLimitsErrorBody",
    "GetQrCodeByIdPublicErrorBody",
    "GetQrCodeImagePublicErrorBody",
    "GetScanMetricsForQrCodeByBrowserErrorBody",
    "GetScanMetricsForQrCodeByCitiesErrorBody",
    "GetScanMetricsForQrCodeByCountriesErrorBody",
    "GetScanMetricsForQrCodeByDevicesOsErrorBody",
    "GetScanMetricsForQrCodeErrorBody",
    "GetScanMetricsSummaryForQrCodeErrorBody",
    "GetSortedBitlinksErrorBody",
    "GetTopLinksAndQrCodesByEngagementsErrorBody",
    "GetUserErrorBody",
    "GetWebhookErrorBody",
    "GetWebhooksErrorBody",
    "ListQrMinimalErrorBody",
    "PostCreateGroupExportErrorBody",
    "RedirectQrCodeDestinationErrorBody",
    "UpdateBitlinkErrorBody",
    "UpdateBitlinksByGroupErrorBody",
    "UpdateCampaignErrorBody",
    "UpdateChannelErrorBody",
    "UpdateCustomBitlinkErrorBody",
    "UpdateGroupErrorBody",
    "UpdateGroupPreferencesErrorBody",
    "UpdateQrCodePublicErrorBody",
    "UpdateQrCodesByGroupErrorBody",
    "UpdateUserErrorBody",
    "UpdateWebhookErrorBody",
    "UpgradeQrCodeToBitlinkErrorBody",
    "VerifyWebhookErrorBody",
    "add_custom_bitlink_error_mapper",
    "create_bitlink_error_mapper",
    "create_campaign_error_mapper",
    "create_channel_error_mapper",
    "create_full_bitlink_error_mapper",
    "create_qr_code_public_error_mapper",
    "create_static_qr_code_public_error_mapper",
    "create_webhook_error_mapper",
    "delete_bitlink_error_mapper",
    "delete_qr_code_error_mapper",
    "delete_webhook_error_mapper",
    "expand_bitlink_error_mapper",
    "get_bitlink_error_mapper",
    "get_bitlinks_by_group_error_mapper",
    "get_bs_ds_error_mapper",
    "get_campaign_error_mapper",
    "get_campaigns_error_mapper",
    "get_channel_error_mapper",
    "get_channels_error_mapper",
    "get_clicks_for_bitlink_error_mapper",
    "get_clicks_for_custom_bitlink_error_mapper",
    "get_clicks_summary_for_bitlink_error_mapper",
    "get_custom_bitlink_error_mapper",
    "get_custom_bitlink_metrics_by_destination_error_mapper",
    "get_engagements_error_mapper",
    "get_engagements_summary_error_mapper",
    "get_group_clicks_error_mapper",
    "get_group_code_scans_by_city_error_mapper",
    "get_group_code_scans_by_country_error_mapper",
    "get_group_code_scans_over_time_error_mapper",
    "get_group_error_mapper",
    "get_group_feature_usage_error_mapper",
    "get_group_historical_usage_error_mapper",
    "get_group_link_clicks_by_city_error_mapper",
    "get_group_link_clicks_by_country_error_mapper",
    "get_group_link_clicks_by_device_error_mapper",
    "get_group_link_clicks_by_referrer_error_mapper",
    "get_group_link_clicks_over_time_error_mapper",
    "get_group_metrics_by_cities_error_mapper",
    "get_group_metrics_by_countries_error_mapper",
    "get_group_metrics_by_devices_error_mapper",
    "get_group_metrics_by_referrer_error_mapper",
    "get_group_metrics_by_referring_networks_error_mapper",
    "get_group_metrics_over_time_error_mapper",
    "get_group_preferences_error_mapper",
    "get_group_shorten_counts_error_mapper",
    "get_group_tags_error_mapper",
    "get_group_top_code_scans_error_mapper",
    "get_group_top_link_clicks_error_mapper",
    "get_group_top_metrics_error_mapper",
    "get_groups_error_mapper",
    "get_metrics_for_bitlink_by_cities_error_mapper",
    "get_metrics_for_bitlink_by_countries_error_mapper",
    "get_metrics_for_bitlink_by_devices_error_mapper",
    "get_metrics_for_bitlink_by_referrer_name_error_mapper",
    "get_metrics_for_bitlink_by_referrers_by_domains_error_mapper",
    "get_metrics_for_bitlink_by_referrers_error_mapper",
    "get_metrics_for_bitlink_by_referring_domains_error_mapper",
    "get_o_auth_app_error_mapper",
    "get_organization_error_mapper",
    "get_organization_shorten_counts_by_group_error_mapper",
    "get_organization_shorten_counts_error_mapper",
    "get_organizations_error_mapper",
    "get_plan_limits_error_mapper",
    "get_platform_limits_error_mapper",
    "get_qr_code_by_id_public_error_mapper",
    "get_qr_code_image_public_error_mapper",
    "get_scan_metrics_for_qr_code_by_browser_error_mapper",
    "get_scan_metrics_for_qr_code_by_cities_error_mapper",
    "get_scan_metrics_for_qr_code_by_countries_error_mapper",
    "get_scan_metrics_for_qr_code_by_devices_os_error_mapper",
    "get_scan_metrics_for_qr_code_error_mapper",
    "get_scan_metrics_summary_for_qr_code_error_mapper",
    "get_sorted_bitlinks_error_mapper",
    "get_top_links_and_qr_codes_by_engagements_error_mapper",
    "get_user_error_mapper",
    "get_webhook_error_mapper",
    "get_webhooks_error_mapper",
    "list_qr_minimal_error_mapper",
    "post_create_group_export_error_mapper",
    "redirect_qr_code_destination_error_mapper",
    "update_bitlink_error_mapper",
    "update_bitlinks_by_group_error_mapper",
    "update_campaign_error_mapper",
    "update_channel_error_mapper",
    "update_custom_bitlink_error_mapper",
    "update_group_error_mapper",
    "update_group_preferences_error_mapper",
    "update_qr_code_public_error_mapper",
    "update_qr_codes_by_group_error_mapper",
    "update_user_error_mapper",
    "update_webhook_error_mapper",
    "upgrade_qr_code_to_bitlink_error_mapper",
    "verify_webhook_error_mapper",
]
