from . import enums, unions
from .add_custom_bitlink import AddCustomBitlink, AddCustomBitlinkDict
from .base_channel import BaseChannel, BaseChannelDict
from .base_channel_bitlink import BaseChannelBitlink, BaseChannelBitlinkDict
from .base_metrics import BaseMetrics, BaseMetricsDict
from .base_metrics_bitly_custom_bitlinks_api import (
    BaseMetricsBitlyCustomBitlinksApi,
    BaseMetricsBitlyCustomBitlinksApiDict,
)
from .base_scan_metrics import BaseScanMetrics, BaseScanMetricsDict
from .bitlink_body import BitlinkBody, BitlinkBodyDict
from .bitlink_scans import BitlinkScans, BitlinkScansDict
from .bitlink_scans_summary import BitlinkScansSummary, BitlinkScansSummaryDict
from .bitlink_update import BitlinkUpdate, BitlinkUpdateDict
from .bitlink_update_body import BitlinkUpdateBody, BitlinkUpdateBodyDict
from .bitlinks import Bitlinks, BitlinksDict
from .bitlinks_pagination import BitlinksPagination, BitlinksPaginationDict
from .bs_ds_response import BsDsResponse, BsDsResponseDict
from .bulk_update import BulkUpdate, BulkUpdateDict
from .bulk_update_request import BulkUpdateRequest, BulkUpdateRequestDict
from .campaign import Campaign, CampaignDict
from .campaign_modify import CampaignModify, CampaignModifyDict
from .campaigns import Campaigns, CampaignsDict
from .channel import Channel, ChannelDict
from .channel_modify import ChannelModify, ChannelModifyDict
from .channels import Channels, ChannelsDict
from .city_metric import CityMetric, CityMetricDict
from .city_metrics import CityMetrics, CityMetricsDict
from .city_metrics_bitly_groups_api import CityMetricsBitlyGroupsApi, CityMetricsBitlyGroupsApiDict
from .city_scan_metric import CityScanMetric, CityScanMetricDict
from .city_scan_metrics import CityScanMetrics, CityScanMetricsDict
from .click_link import ClickLink, ClickLinkDict
from .click_metric import ClickMetric, ClickMetricDict
from .click_metrics import ClickMetrics, ClickMetricsDict
from .click_metrics_bitly_custom_bitlinks_api import (
    ClickMetricsBitlyCustomBitlinksApi,
    ClickMetricsBitlyCustomBitlinksApiDict,
)
from .clicks import Clicks, ClicksDict
from .clicks_summary import ClicksSummary, ClicksSummaryDict
from .colors import Colors, ColorsDict
from .count_item import CountItem, CountItemDict
from .custom_bitlink_bitly_custom_bitlinks_api import (
    CustomBitlinkBitlyCustomBitlinksApi,
    CustomBitlinkBitlyCustomBitlinksApiDict,
)
from .custom_bitlink_history import CustomBitlinkHistory, CustomBitlinkHistoryDict
from .deeplink import Deeplink, DeeplinkDict
from .deeplink_rule import DeeplinkRule, DeeplinkRuleDict
from .deleted_link import DeletedLink, DeletedLinkDict
from .deleted_qr_code import DeletedQrCode, DeletedQrCodeDict
from .device_metric import DeviceMetric, DeviceMetricDict
from .device_metrics import DeviceMetrics, DeviceMetricsDict
from .device_metrics_bitly_groups_api import DeviceMetricsBitlyGroupsApi, DeviceMetricsBitlyGroupsApiDict
from .dynamic_routing_rule import DynamicRoutingRule, DynamicRoutingRuleDict
from .email import Email, EmailDict
from .engagement import Engagement, EngagementDict
from .engagement_subtotal import EngagementSubtotal, EngagementSubtotalDict
from .engagements import Engagements, EngagementsDict
from .error import Error, ErrorDict
from .error_error import ErrorError, ErrorErrorDict
from .expand_bitlink import ExpandBitlink, ExpandBitlinkDict
from .expanded_bitlink import ExpandedBitlink, ExpandedBitlinkDict
from .field_error import FieldError, FieldErrorDict
from .full_shorten import FullShorten, FullShortenDict
from .gradient_color import GradientColor, GradientColorDict
from .group import Group, GroupDict
from .group_clicks import GroupClicks, GroupClicksDict
from .group_consumable_feature_usage import GroupConsumableFeatureUsage, GroupConsumableFeatureUsageDict
from .group_export_filter import GroupExportFilter, GroupExportFilterDict
from .group_export_request_body import GroupExportRequestBody, GroupExportRequestBodyDict
from .group_export_response import GroupExportResponse, GroupExportResponseDict
from .group_feature_usage import GroupFeatureUsage, GroupFeatureUsageDict
from .group_historical_usage import GroupHistoricalUsage, GroupHistoricalUsageDict
from .group_preferences import GroupPreferences, GroupPreferencesDict
from .group_update import GroupUpdate, GroupUpdateDict
from .groups import Groups, GroupsDict
from .groups_links_clicks_devices_response import GroupsLinksClicksDevicesResponse, GroupsLinksClicksDevicesResponseDict
from .gs1_metadata import Gs1Metadata, Gs1MetadataDict
from .gs1_value import Gs1Value, Gs1ValueDict
from .has_references import HasReferences, HasReferencesDict
from .historical_feature_usage import HistoricalFeatureUsage, HistoricalFeatureUsageDict
from .historical_usage import HistoricalUsage, HistoricalUsageDict
from .link_clicks import LinkClicks, LinkClicksDict
from .link_deletion_response import LinkDeletionResponse, LinkDeletionResponseDict
from .method_limit import MethodLimit, MethodLimitDict
from .metric import Metric, MetricDict
from .metrics import Metrics, MetricsDict
from .o_auth_app import OAuthApp, OAuthAppDict
from .organization import Organization, OrganizationDict
from .organizations import Organizations, OrganizationsDict
from .other_metrics import OtherMetrics, OtherMetricsDict
from .other_scan_metrics import OtherScanMetrics, OtherScanMetricsDict
from .plan_limit import PlanLimit, PlanLimitDict
from .plan_limits import PlanLimits, PlanLimitsDict
from .platform_limit import PlatformLimit, PlatformLimitDict
from .platform_limits import PlatformLimits, PlatformLimitsDict
from .public_create_qr_code_request import PublicCreateQrCodeRequest, PublicCreateQrCodeRequestDict
from .public_create_static_qr_code_request import PublicCreateStaticQrCodeRequest, PublicCreateStaticQrCodeRequestDict
from .public_delete_qr_code_response import PublicDeleteQrCodeResponse, PublicDeleteQrCodeResponseDict
from .public_qr_code_image_response import PublicQrCodeImageResponse, PublicQrCodeImageResponseDict
from .public_static_qr_code_response import PublicStaticQrCodeResponse, PublicStaticQrCodeResponseDict
from .public_update_qr_code_request import PublicUpdateQrCodeRequest, PublicUpdateQrCodeRequestDict
from .qr_code_branding import QrCodeBranding, QrCodeBrandingDict
from .qr_code_corner import QrCodeCorner, QrCodeCornerDict
from .qr_code_corners import QrCodeCorners, QrCodeCornersDict
from .qr_code_customizations_public import QrCodeCustomizationsPublic, QrCodeCustomizationsPublicDict
from .qr_code_customizations_static_public import QrCodeCustomizationsStaticPublic, QrCodeCustomizationsStaticPublicDict
from .qr_code_destination import QrCodeDestination, QrCodeDestinationDict
from .qr_code_details import QrCodeDetails, QrCodeDetailsDict
from .qr_code_frame_request import QrCodeFrameRequest, QrCodeFrameRequestDict
from .qr_code_gradient import QrCodeGradient, QrCodeGradientDict
from .qr_code_logo_public import QrCodeLogoPublic, QrCodeLogoPublicDict
from .qr_code_minimal import QrCodeMinimal, QrCodeMinimalDict
from .qr_code_spec_settings_public import QrCodeSpecSettingsPublic, QrCodeSpecSettingsPublicDict
from .qr_code_text import QrCodeText, QrCodeTextDict
from .qr_codes_minimal import QrCodesMinimal, QrCodesMinimalDict
from .qr_pagination import QrPagination, QrPaginationDict
from .qr_scans import QrScans, QrScansDict
from .qrc_bulk_update import QrcBulkUpdate, QrcBulkUpdateDict
from .qrc_bulk_update_request import QrcBulkUpdateRequest, QrcBulkUpdateRequestDict
from .redirect_qr_code_request import RedirectQrCodeRequest, RedirectQrCodeRequestDict
from .referrers_by_domain import ReferrersByDomain, ReferrersByDomainDict
from .referrers_by_domains import ReferrersByDomains, ReferrersByDomainsDict
from .scan_metric import ScanMetric, ScanMetricDict
from .scan_metrics import ScanMetrics, ScanMetricsDict
from .shorten import Shorten, ShortenDict
from .shorten_bitlink_body import ShortenBitlinkBody, ShortenBitlinkBodyDict
from .simplified_error import SimplifiedError, SimplifiedErrorDict
from .simplified_error_error import SimplifiedErrorError, SimplifiedErrorErrorDict
from .sorted_links import SortedLinks, SortedLinksDict
from .tags import Tags, TagsDict
from .text import Text, TextDict
from .text1 import Text1, Text1Dict
from .top_links_and_qr_codes import TopLinksAndQrCodes, TopLinksAndQrCodesDict
from .total_engagements import TotalEngagements, TotalEngagementsDict
from .total_engagements_summary import TotalEngagementsSummary, TotalEngagementsSummaryDict
from .unions import GroupsCodesScansTopResponse, GroupsCodesScansTopResponseDict
from .update_custom_bitlink import UpdateCustomBitlink, UpdateCustomBitlinkDict
from .user import User, UserDict
from .user_update import UserUpdate, UserUpdateDict
from .webhook import Webhook, WebhookDict
from .webhook_create import WebhookCreate, WebhookCreateDict
from .webhook_update import WebhookUpdate, WebhookUpdateDict
from .webhooks_model import WebhooksModel, WebhooksModelDict

__all__ = [
    "enums",
    "unions",
    "AddCustomBitlink",
    "AddCustomBitlinkDict",
    "BaseChannel",
    "BaseChannelBitlink",
    "BaseChannelBitlinkDict",
    "BaseChannelDict",
    "BaseMetrics",
    "BaseMetricsBitlyCustomBitlinksApi",
    "BaseMetricsBitlyCustomBitlinksApiDict",
    "BaseMetricsDict",
    "BaseScanMetrics",
    "BaseScanMetricsDict",
    "BitlinkBody",
    "BitlinkBodyDict",
    "BitlinkScans",
    "BitlinkScansDict",
    "BitlinkScansSummary",
    "BitlinkScansSummaryDict",
    "BitlinkUpdate",
    "BitlinkUpdateBody",
    "BitlinkUpdateBodyDict",
    "BitlinkUpdateDict",
    "Bitlinks",
    "BitlinksDict",
    "BitlinksPagination",
    "BitlinksPaginationDict",
    "BsDsResponse",
    "BsDsResponseDict",
    "BulkUpdate",
    "BulkUpdateDict",
    "BulkUpdateRequest",
    "BulkUpdateRequestDict",
    "Campaign",
    "CampaignDict",
    "CampaignModify",
    "CampaignModifyDict",
    "Campaigns",
    "CampaignsDict",
    "Channel",
    "ChannelDict",
    "ChannelModify",
    "ChannelModifyDict",
    "Channels",
    "ChannelsDict",
    "CityMetric",
    "CityMetricDict",
    "CityMetrics",
    "CityMetricsBitlyGroupsApi",
    "CityMetricsBitlyGroupsApiDict",
    "CityMetricsDict",
    "CityScanMetric",
    "CityScanMetricDict",
    "CityScanMetrics",
    "CityScanMetricsDict",
    "ClickLink",
    "ClickLinkDict",
    "ClickMetric",
    "ClickMetricDict",
    "ClickMetrics",
    "ClickMetricsBitlyCustomBitlinksApi",
    "ClickMetricsBitlyCustomBitlinksApiDict",
    "ClickMetricsDict",
    "Clicks",
    "ClicksDict",
    "ClicksSummary",
    "ClicksSummaryDict",
    "Colors",
    "ColorsDict",
    "CountItem",
    "CountItemDict",
    "CustomBitlinkBitlyCustomBitlinksApi",
    "CustomBitlinkBitlyCustomBitlinksApiDict",
    "CustomBitlinkHistory",
    "CustomBitlinkHistoryDict",
    "Deeplink",
    "DeeplinkDict",
    "DeeplinkRule",
    "DeeplinkRuleDict",
    "DeletedLink",
    "DeletedLinkDict",
    "DeletedQrCode",
    "DeletedQrCodeDict",
    "DeviceMetric",
    "DeviceMetricDict",
    "DeviceMetrics",
    "DeviceMetricsBitlyGroupsApi",
    "DeviceMetricsBitlyGroupsApiDict",
    "DeviceMetricsDict",
    "DynamicRoutingRule",
    "DynamicRoutingRuleDict",
    "Email",
    "EmailDict",
    "Engagement",
    "EngagementDict",
    "EngagementSubtotal",
    "EngagementSubtotalDict",
    "Engagements",
    "EngagementsDict",
    "Error",
    "ErrorDict",
    "ErrorError",
    "ErrorErrorDict",
    "ExpandBitlink",
    "ExpandBitlinkDict",
    "ExpandedBitlink",
    "ExpandedBitlinkDict",
    "FieldError",
    "FieldErrorDict",
    "FullShorten",
    "FullShortenDict",
    "GradientColor",
    "GradientColorDict",
    "Group",
    "GroupClicks",
    "GroupClicksDict",
    "GroupConsumableFeatureUsage",
    "GroupConsumableFeatureUsageDict",
    "GroupDict",
    "GroupExportFilter",
    "GroupExportFilterDict",
    "GroupExportRequestBody",
    "GroupExportRequestBodyDict",
    "GroupExportResponse",
    "GroupExportResponseDict",
    "GroupFeatureUsage",
    "GroupFeatureUsageDict",
    "GroupHistoricalUsage",
    "GroupHistoricalUsageDict",
    "GroupPreferences",
    "GroupPreferencesDict",
    "GroupUpdate",
    "GroupUpdateDict",
    "Groups",
    "GroupsCodesScansTopResponse",
    "GroupsCodesScansTopResponseDict",
    "GroupsDict",
    "GroupsLinksClicksDevicesResponse",
    "GroupsLinksClicksDevicesResponseDict",
    "Gs1Metadata",
    "Gs1MetadataDict",
    "Gs1Value",
    "Gs1ValueDict",
    "HasReferences",
    "HasReferencesDict",
    "HistoricalFeatureUsage",
    "HistoricalFeatureUsageDict",
    "HistoricalUsage",
    "HistoricalUsageDict",
    "LinkClicks",
    "LinkClicksDict",
    "LinkDeletionResponse",
    "LinkDeletionResponseDict",
    "MethodLimit",
    "MethodLimitDict",
    "Metric",
    "MetricDict",
    "Metrics",
    "MetricsDict",
    "OAuthApp",
    "OAuthAppDict",
    "Organization",
    "OrganizationDict",
    "Organizations",
    "OrganizationsDict",
    "OtherMetrics",
    "OtherMetricsDict",
    "OtherScanMetrics",
    "OtherScanMetricsDict",
    "PlanLimit",
    "PlanLimitDict",
    "PlanLimits",
    "PlanLimitsDict",
    "PlatformLimit",
    "PlatformLimitDict",
    "PlatformLimits",
    "PlatformLimitsDict",
    "PublicCreateQrCodeRequest",
    "PublicCreateQrCodeRequestDict",
    "PublicCreateStaticQrCodeRequest",
    "PublicCreateStaticQrCodeRequestDict",
    "PublicDeleteQrCodeResponse",
    "PublicDeleteQrCodeResponseDict",
    "PublicQrCodeImageResponse",
    "PublicQrCodeImageResponseDict",
    "PublicStaticQrCodeResponse",
    "PublicStaticQrCodeResponseDict",
    "PublicUpdateQrCodeRequest",
    "PublicUpdateQrCodeRequestDict",
    "QrCodeBranding",
    "QrCodeBrandingDict",
    "QrCodeCorner",
    "QrCodeCornerDict",
    "QrCodeCorners",
    "QrCodeCornersDict",
    "QrCodeCustomizationsPublic",
    "QrCodeCustomizationsPublicDict",
    "QrCodeCustomizationsStaticPublic",
    "QrCodeCustomizationsStaticPublicDict",
    "QrCodeDestination",
    "QrCodeDestinationDict",
    "QrCodeDetails",
    "QrCodeDetailsDict",
    "QrCodeFrameRequest",
    "QrCodeFrameRequestDict",
    "QrCodeGradient",
    "QrCodeGradientDict",
    "QrCodeLogoPublic",
    "QrCodeLogoPublicDict",
    "QrCodeMinimal",
    "QrCodeMinimalDict",
    "QrCodeSpecSettingsPublic",
    "QrCodeSpecSettingsPublicDict",
    "QrCodeText",
    "QrCodeTextDict",
    "QrCodesMinimal",
    "QrCodesMinimalDict",
    "QrPagination",
    "QrPaginationDict",
    "QrScans",
    "QrScansDict",
    "QrcBulkUpdate",
    "QrcBulkUpdateDict",
    "QrcBulkUpdateRequest",
    "QrcBulkUpdateRequestDict",
    "RedirectQrCodeRequest",
    "RedirectQrCodeRequestDict",
    "ReferrersByDomain",
    "ReferrersByDomainDict",
    "ReferrersByDomains",
    "ReferrersByDomainsDict",
    "ScanMetric",
    "ScanMetricDict",
    "ScanMetrics",
    "ScanMetricsDict",
    "Shorten",
    "ShortenBitlinkBody",
    "ShortenBitlinkBodyDict",
    "ShortenDict",
    "SimplifiedError",
    "SimplifiedErrorDict",
    "SimplifiedErrorError",
    "SimplifiedErrorErrorDict",
    "SortedLinks",
    "SortedLinksDict",
    "Tags",
    "TagsDict",
    "Text",
    "Text1",
    "Text1Dict",
    "TextDict",
    "TopLinksAndQrCodes",
    "TopLinksAndQrCodesDict",
    "TotalEngagements",
    "TotalEngagementsDict",
    "TotalEngagementsSummary",
    "TotalEngagementsSummaryDict",
    "UpdateCustomBitlink",
    "UpdateCustomBitlinkDict",
    "User",
    "UserDict",
    "UserUpdate",
    "UserUpdateDict",
    "Webhook",
    "WebhookCreate",
    "WebhookCreateDict",
    "WebhookDict",
    "WebhookUpdate",
    "WebhookUpdateDict",
    "WebhooksModel",
    "WebhooksModelDict",
]
