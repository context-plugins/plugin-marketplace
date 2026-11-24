from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.analyticsadmin_properties_acknowledge_user_data_collection_error import (
    AnalyticsadminPropertiesAcknowledgeUserDataCollectionErrorBody,
    analyticsadmin_properties_acknowledge_user_data_collection_error_mapper,
)
from ..errors.analyticsadmin_properties_conversion_events_create_error import (
    AnalyticsadminPropertiesConversionEventsCreateErrorBody,
    analyticsadmin_properties_conversion_events_create_error_mapper,
)
from ..errors.analyticsadmin_properties_conversion_events_delete_error import (
    AnalyticsadminPropertiesConversionEventsDeleteErrorBody,
    analyticsadmin_properties_conversion_events_delete_error_mapper,
)
from ..errors.analyticsadmin_properties_conversion_events_get_error import (
    AnalyticsadminPropertiesConversionEventsGetErrorBody,
    analyticsadmin_properties_conversion_events_get_error_mapper,
)
from ..errors.analyticsadmin_properties_conversion_events_list_error import (
    AnalyticsadminPropertiesConversionEventsListErrorBody,
    analyticsadmin_properties_conversion_events_list_error_mapper,
)
from ..errors.analyticsadmin_properties_conversion_events_patch_error import (
    AnalyticsadminPropertiesConversionEventsPatchErrorBody,
    analyticsadmin_properties_conversion_events_patch_error_mapper,
)
from ..errors.analyticsadmin_properties_create_error import (
    AnalyticsadminPropertiesCreateErrorBody,
    analyticsadmin_properties_create_error_mapper,
)
from ..errors.analyticsadmin_properties_custom_dimensions_archive_error import (
    AnalyticsadminPropertiesCustomDimensionsArchiveErrorBody,
    analyticsadmin_properties_custom_dimensions_archive_error_mapper,
)
from ..errors.analyticsadmin_properties_custom_dimensions_create_error import (
    AnalyticsadminPropertiesCustomDimensionsCreateErrorBody,
    analyticsadmin_properties_custom_dimensions_create_error_mapper,
)
from ..errors.analyticsadmin_properties_custom_dimensions_get_error import (
    AnalyticsadminPropertiesCustomDimensionsGetErrorBody,
    analyticsadmin_properties_custom_dimensions_get_error_mapper,
)
from ..errors.analyticsadmin_properties_custom_dimensions_list_error import (
    AnalyticsadminPropertiesCustomDimensionsListErrorBody,
    analyticsadmin_properties_custom_dimensions_list_error_mapper,
)
from ..errors.analyticsadmin_properties_custom_dimensions_patch_error import (
    AnalyticsadminPropertiesCustomDimensionsPatchErrorBody,
    analyticsadmin_properties_custom_dimensions_patch_error_mapper,
)
from ..errors.analyticsadmin_properties_custom_metrics_archive_error import (
    AnalyticsadminPropertiesCustomMetricsArchiveErrorBody,
    analyticsadmin_properties_custom_metrics_archive_error_mapper,
)
from ..errors.analyticsadmin_properties_custom_metrics_create_error import (
    AnalyticsadminPropertiesCustomMetricsCreateErrorBody,
    analyticsadmin_properties_custom_metrics_create_error_mapper,
)
from ..errors.analyticsadmin_properties_custom_metrics_get_error import (
    AnalyticsadminPropertiesCustomMetricsGetErrorBody,
    analyticsadmin_properties_custom_metrics_get_error_mapper,
)
from ..errors.analyticsadmin_properties_custom_metrics_list_error import (
    AnalyticsadminPropertiesCustomMetricsListErrorBody,
    analyticsadmin_properties_custom_metrics_list_error_mapper,
)
from ..errors.analyticsadmin_properties_custom_metrics_patch_error import (
    AnalyticsadminPropertiesCustomMetricsPatchErrorBody,
    analyticsadmin_properties_custom_metrics_patch_error_mapper,
)
from ..errors.analyticsadmin_properties_data_streams_create_error import (
    AnalyticsadminPropertiesDataStreamsCreateErrorBody,
    analyticsadmin_properties_data_streams_create_error_mapper,
)
from ..errors.analyticsadmin_properties_data_streams_delete_error import (
    AnalyticsadminPropertiesDataStreamsDeleteErrorBody,
    analyticsadmin_properties_data_streams_delete_error_mapper,
)
from ..errors.analyticsadmin_properties_data_streams_get_error import (
    AnalyticsadminPropertiesDataStreamsGetErrorBody,
    analyticsadmin_properties_data_streams_get_error_mapper,
)
from ..errors.analyticsadmin_properties_data_streams_list_error import (
    AnalyticsadminPropertiesDataStreamsListErrorBody,
    analyticsadmin_properties_data_streams_list_error_mapper,
)
from ..errors.analyticsadmin_properties_data_streams_measurement_protocol_secrets_create_error import (
    AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateErrorBody,
    analyticsadmin_properties_data_streams_measurement_protocol_secrets_create_error_mapper,
)
from ..errors.analyticsadmin_properties_data_streams_measurement_protocol_secrets_delete_error import (
    AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteErrorBody,
    analyticsadmin_properties_data_streams_measurement_protocol_secrets_delete_error_mapper,
)
from ..errors.analyticsadmin_properties_data_streams_measurement_protocol_secrets_get_error import (
    AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetErrorBody,
    analyticsadmin_properties_data_streams_measurement_protocol_secrets_get_error_mapper,
)
from ..errors.analyticsadmin_properties_data_streams_measurement_protocol_secrets_list_error import (
    AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListErrorBody,
    analyticsadmin_properties_data_streams_measurement_protocol_secrets_list_error_mapper,
)
from ..errors.analyticsadmin_properties_data_streams_measurement_protocol_secrets_patch_error import (
    AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchErrorBody,
    analyticsadmin_properties_data_streams_measurement_protocol_secrets_patch_error_mapper,
)
from ..errors.analyticsadmin_properties_data_streams_patch_error import (
    AnalyticsadminPropertiesDataStreamsPatchErrorBody,
    analyticsadmin_properties_data_streams_patch_error_mapper,
)
from ..errors.analyticsadmin_properties_delete_error import (
    AnalyticsadminPropertiesDeleteErrorBody,
    analyticsadmin_properties_delete_error_mapper,
)
from ..errors.analyticsadmin_properties_firebase_links_create_error import (
    AnalyticsadminPropertiesFirebaseLinksCreateErrorBody,
    analyticsadmin_properties_firebase_links_create_error_mapper,
)
from ..errors.analyticsadmin_properties_firebase_links_delete_error import (
    AnalyticsadminPropertiesFirebaseLinksDeleteErrorBody,
    analyticsadmin_properties_firebase_links_delete_error_mapper,
)
from ..errors.analyticsadmin_properties_firebase_links_list_error import (
    AnalyticsadminPropertiesFirebaseLinksListErrorBody,
    analyticsadmin_properties_firebase_links_list_error_mapper,
)
from ..errors.analyticsadmin_properties_get_data_retention_settings_error import (
    AnalyticsadminPropertiesGetDataRetentionSettingsErrorBody,
    analyticsadmin_properties_get_data_retention_settings_error_mapper,
)
from ..errors.analyticsadmin_properties_get_error import (
    AnalyticsadminPropertiesGetErrorBody,
    analyticsadmin_properties_get_error_mapper,
)
from ..errors.analyticsadmin_properties_google_ads_links_create_error import (
    AnalyticsadminPropertiesGoogleAdsLinksCreateErrorBody,
    analyticsadmin_properties_google_ads_links_create_error_mapper,
)
from ..errors.analyticsadmin_properties_google_ads_links_delete_error import (
    AnalyticsadminPropertiesGoogleAdsLinksDeleteErrorBody,
    analyticsadmin_properties_google_ads_links_delete_error_mapper,
)
from ..errors.analyticsadmin_properties_google_ads_links_list_error import (
    AnalyticsadminPropertiesGoogleAdsLinksListErrorBody,
    analyticsadmin_properties_google_ads_links_list_error_mapper,
)
from ..errors.analyticsadmin_properties_google_ads_links_patch_error import (
    AnalyticsadminPropertiesGoogleAdsLinksPatchErrorBody,
    analyticsadmin_properties_google_ads_links_patch_error_mapper,
)
from ..errors.analyticsadmin_properties_key_events_create_error import (
    AnalyticsadminPropertiesKeyEventsCreateErrorBody,
    analyticsadmin_properties_key_events_create_error_mapper,
)
from ..errors.analyticsadmin_properties_key_events_delete_error import (
    AnalyticsadminPropertiesKeyEventsDeleteErrorBody,
    analyticsadmin_properties_key_events_delete_error_mapper,
)
from ..errors.analyticsadmin_properties_key_events_get_error import (
    AnalyticsadminPropertiesKeyEventsGetErrorBody,
    analyticsadmin_properties_key_events_get_error_mapper,
)
from ..errors.analyticsadmin_properties_key_events_list_error import (
    AnalyticsadminPropertiesKeyEventsListErrorBody,
    analyticsadmin_properties_key_events_list_error_mapper,
)
from ..errors.analyticsadmin_properties_key_events_patch_error import (
    AnalyticsadminPropertiesKeyEventsPatchErrorBody,
    analyticsadmin_properties_key_events_patch_error_mapper,
)
from ..errors.analyticsadmin_properties_list_error import (
    AnalyticsadminPropertiesListErrorBody,
    analyticsadmin_properties_list_error_mapper,
)
from ..errors.analyticsadmin_properties_patch_error import (
    AnalyticsadminPropertiesPatchErrorBody,
    analyticsadmin_properties_patch_error_mapper,
)
from ..errors.analyticsadmin_properties_run_access_report_error import (
    AnalyticsadminPropertiesRunAccessReportErrorBody,
    analyticsadmin_properties_run_access_report_error_mapper,
)
from ..errors.analyticsadmin_properties_update_data_retention_settings_error import (
    AnalyticsadminPropertiesUpdateDataRetentionSettingsErrorBody,
    analyticsadmin_properties_update_data_retention_settings_error_mapper,
)
from ..errors.analyticsdata_properties_audience_exports_create_error import (
    AnalyticsdataPropertiesAudienceExportsCreateErrorBody,
    analyticsdata_properties_audience_exports_create_error_mapper,
)
from ..errors.analyticsdata_properties_audience_exports_get_error import (
    AnalyticsdataPropertiesAudienceExportsGetErrorBody,
    analyticsdata_properties_audience_exports_get_error_mapper,
)
from ..errors.analyticsdata_properties_audience_exports_list_error import (
    AnalyticsdataPropertiesAudienceExportsListErrorBody,
    analyticsdata_properties_audience_exports_list_error_mapper,
)
from ..errors.analyticsdata_properties_audience_exports_query_error import (
    AnalyticsdataPropertiesAudienceExportsQueryErrorBody,
    analyticsdata_properties_audience_exports_query_error_mapper,
)
from ..errors.analyticsdata_properties_batch_run_pivot_reports_error import (
    AnalyticsdataPropertiesBatchRunPivotReportsErrorBody,
    analyticsdata_properties_batch_run_pivot_reports_error_mapper,
)
from ..errors.analyticsdata_properties_batch_run_reports_error import (
    AnalyticsdataPropertiesBatchRunReportsErrorBody,
    analyticsdata_properties_batch_run_reports_error_mapper,
)
from ..errors.analyticsdata_properties_check_compatibility_error import (
    AnalyticsdataPropertiesCheckCompatibilityErrorBody,
    analyticsdata_properties_check_compatibility_error_mapper,
)
from ..errors.analyticsdata_properties_get_metadata_error import (
    AnalyticsdataPropertiesGetMetadataErrorBody,
    analyticsdata_properties_get_metadata_error_mapper,
)
from ..errors.analyticsdata_properties_run_pivot_report_error import (
    AnalyticsdataPropertiesRunPivotReportErrorBody,
    analyticsdata_properties_run_pivot_report_error_mapper,
)
from ..errors.analyticsdata_properties_run_realtime_report_error import (
    AnalyticsdataPropertiesRunRealtimeReportErrorBody,
    analyticsdata_properties_run_realtime_report_error_mapper,
)
from ..errors.analyticsdata_properties_run_report_error import (
    AnalyticsdataPropertiesRunReportErrorBody,
    analyticsdata_properties_run_report_error_mapper,
)
from ..models.audience_export import AudienceExport, AudienceExportDict
from ..models.batch_run_pivot_reports_request import BatchRunPivotReportsRequest, BatchRunPivotReportsRequestDict
from ..models.batch_run_pivot_reports_response import BatchRunPivotReportsResponse
from ..models.batch_run_reports_request import BatchRunReportsRequest, BatchRunReportsRequestDict
from ..models.batch_run_reports_response import BatchRunReportsResponse
from ..models.check_compatibility_request import CheckCompatibilityRequest, CheckCompatibilityRequestDict
from ..models.check_compatibility_response import CheckCompatibilityResponse
from ..models.google_analytics_admin_v1_beta_acknowledge_user_data_collection_request import (
    GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest,
    GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequestDict,
)
from ..models.google_analytics_admin_v1_beta_conversion_event import (
    GoogleAnalyticsAdminV1BetaConversionEvent,
    GoogleAnalyticsAdminV1BetaConversionEventDict,
)
from ..models.google_analytics_admin_v1_beta_custom_dimension import (
    GoogleAnalyticsAdminV1BetaCustomDimension,
    GoogleAnalyticsAdminV1BetaCustomDimensionDict,
)
from ..models.google_analytics_admin_v1_beta_custom_metric import (
    GoogleAnalyticsAdminV1BetaCustomMetric,
    GoogleAnalyticsAdminV1BetaCustomMetricDict,
)
from ..models.google_analytics_admin_v1_beta_data_retention_settings import (
    GoogleAnalyticsAdminV1BetaDataRetentionSettings,
    GoogleAnalyticsAdminV1BetaDataRetentionSettingsDict,
)
from ..models.google_analytics_admin_v1_beta_data_stream import (
    GoogleAnalyticsAdminV1BetaDataStream,
    GoogleAnalyticsAdminV1BetaDataStreamDict,
)
from ..models.google_analytics_admin_v1_beta_firebase_link import (
    GoogleAnalyticsAdminV1BetaFirebaseLink,
    GoogleAnalyticsAdminV1BetaFirebaseLinkDict,
)
from ..models.google_analytics_admin_v1_beta_google_ads_link import (
    GoogleAnalyticsAdminV1BetaGoogleAdsLink,
    GoogleAnalyticsAdminV1BetaGoogleAdsLinkDict,
)
from ..models.google_analytics_admin_v1_beta_key_event import (
    GoogleAnalyticsAdminV1BetaKeyEvent,
    GoogleAnalyticsAdminV1BetaKeyEventDict,
)
from ..models.google_analytics_admin_v1_beta_list_conversion_events_response import (
    GoogleAnalyticsAdminV1BetaListConversionEventsResponse,
)
from ..models.google_analytics_admin_v1_beta_list_custom_dimensions_response import (
    GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse,
)
from ..models.google_analytics_admin_v1_beta_list_custom_metrics_response import (
    GoogleAnalyticsAdminV1BetaListCustomMetricsResponse,
)
from ..models.google_analytics_admin_v1_beta_list_data_streams_response import (
    GoogleAnalyticsAdminV1BetaListDataStreamsResponse,
)
from ..models.google_analytics_admin_v1_beta_list_firebase_links_response import (
    GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse,
)
from ..models.google_analytics_admin_v1_beta_list_google_ads_links_response import (
    GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse,
)
from ..models.google_analytics_admin_v1_beta_list_key_events_response import (
    GoogleAnalyticsAdminV1BetaListKeyEventsResponse,
)
from ..models.google_analytics_admin_v1_beta_list_measurement_protocol_secrets_response import (
    GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse,
)
from ..models.google_analytics_admin_v1_beta_list_properties_response import (
    GoogleAnalyticsAdminV1BetaListPropertiesResponse,
)
from ..models.google_analytics_admin_v1_beta_measurement_protocol_secret import (
    GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret,
    GoogleAnalyticsAdminV1BetaMeasurementProtocolSecretDict,
)
from ..models.google_analytics_admin_v1_beta_property import (
    GoogleAnalyticsAdminV1BetaProperty,
    GoogleAnalyticsAdminV1BetaPropertyDict,
)
from ..models.google_analytics_admin_v1_beta_run_access_report_request import (
    GoogleAnalyticsAdminV1BetaRunAccessReportRequest,
    GoogleAnalyticsAdminV1BetaRunAccessReportRequestDict,
)
from ..models.google_analytics_admin_v1_beta_run_access_report_response import (
    GoogleAnalyticsAdminV1BetaRunAccessReportResponse,
)
from ..models.list_audience_exports_response import ListAudienceExportsResponse
from ..models.metadata import Metadata
from ..models.operation_google_analytics_properties_api import OperationGoogleAnalyticsPropertiesApi
from ..models.query_audience_export_request import QueryAudienceExportRequest, QueryAudienceExportRequestDict
from ..models.query_audience_export_response import QueryAudienceExportResponse
from ..models.run_pivot_report_request import RunPivotReportRequest, RunPivotReportRequestDict
from ..models.run_pivot_report_response import RunPivotReportResponse
from ..models.run_realtime_report_request import RunRealtimeReportRequest, RunRealtimeReportRequestDict
from ..models.run_realtime_report_response import RunRealtimeReportResponse
from ..models.run_report_request import RunReportRequest, RunReportRequestDict
from ..models.run_report_response import RunReportResponse
from ..server.server import Server


class Properties:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PropertiesWithRawResponse(client, server, auth)

    def analyticsadmin_properties_acknowledge_user_data_collection(
        self,
        properties_id: str,
        body: (
            GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest
            | GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequestDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Acknowledges the terms of user data collection for the specified property. This acknowledgement must be
        completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may
        be created.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_acknowledge_user_data_collection(
                properties_id, body, request_options=request_options
            ),
        )

    def analyticsadmin_properties_conversion_events_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaConversionEvent | GoogleAnalyticsAdminV1BetaConversionEventDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaConversionEvent:
        """Deprecated: Use ``CreateKeyEvent`` instead. Creates a conversion event with the specified attributes.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_conversion_events_create(
                properties_id, body, request_options=request_options
            ),
        )

    def analyticsadmin_properties_conversion_events_delete(
        self, properties_id: str, conversion_events_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Deprecated: Use ``DeleteKeyEvent`` instead. Deletes a conversion event in a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            conversion_events_id: Resource name segment (conversionEventsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_conversion_events_delete(
                properties_id, conversion_events_id, request_options=request_options
            ),
        )

    def analyticsadmin_properties_conversion_events_get(
        self, properties_id: str, conversion_events_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GoogleAnalyticsAdminV1BetaConversionEvent:
        """Deprecated: Use ``GetKeyEvent`` instead. Retrieve a single conversion event.

        Args:
            properties_id: Resource name segment (propertiesId).
            conversion_events_id: Resource name segment (conversionEventsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_conversion_events_get(
                properties_id, conversion_events_id, request_options=request_options
            ),
        )

    def analyticsadmin_properties_conversion_events_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaListConversionEventsResponse:
        """Deprecated: Use ``ListKeyEvents`` instead. Returns a list of conversion events in the specified parent
        property. Returns an empty list if no conversion events are found.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be
                returned. The maximum value is 200; (higher values will be coerced to the maximum)
            page_token: Optional. A page token, received from a previous ``ListConversionEvents`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListConversionEvents``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_conversion_events_list(
                properties_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    def analyticsadmin_properties_conversion_events_patch(
        self,
        properties_id: str,
        conversion_events_id: str,
        body: GoogleAnalyticsAdminV1BetaConversionEvent | GoogleAnalyticsAdminV1BetaConversionEventDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaConversionEvent:
        """Deprecated: Use ``UpdateKeyEvent`` instead. Updates a conversion event with the specified attributes.

        Args:
            properties_id: Resource name segment (propertiesId).
            conversion_events_id: Resource name segment (conversionEventsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Field names must be in snake case (e.g.,
                "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with
                the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_conversion_events_patch(
                properties_id, conversion_events_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    def analyticsadmin_properties_create(
        self,
        body: GoogleAnalyticsAdminV1BetaProperty | GoogleAnalyticsAdminV1BetaPropertyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaProperty:
        """Creates a Google Analytics property with the specified location and attributes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(self._with_raw_response.analyticsadmin_properties_create(body, request_options=request_options))

    def analyticsadmin_properties_custom_dimensions_archive(
        self,
        properties_id: str,
        custom_dimensions_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Archives a CustomDimension on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            custom_dimensions_id: Resource name segment (customDimensionsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_custom_dimensions_archive(
                properties_id, custom_dimensions_id, body, request_options=request_options
            ),
        )

    def analyticsadmin_properties_custom_dimensions_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaCustomDimension | GoogleAnalyticsAdminV1BetaCustomDimensionDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaCustomDimension:
        """Creates a CustomDimension. Warning: It's not permissible to use this method to collect data on individual
        users. In particular, sending user IDs in custom dimensions violates the Google Analytics Terms of Service.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_custom_dimensions_create(
                properties_id, body, request_options=request_options
            ),
        )

    def analyticsadmin_properties_custom_dimensions_get(
        self, properties_id: str, custom_dimensions_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GoogleAnalyticsAdminV1BetaCustomDimension:
        """Lookup for a single CustomDimension.

        Args:
            properties_id: Resource name segment (propertiesId).
            custom_dimensions_id: Resource name segment (customDimensionsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_custom_dimensions_get(
                properties_id, custom_dimensions_id, request_options=request_options
            ),
        )

    def analyticsadmin_properties_custom_dimensions_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse:
        """Lists CustomDimensions on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be
                returned. The maximum value is 200 (higher values will be coerced to the maximum).
            page_token: Optional. A page token, received from a previous ``ListCustomDimensions`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListCustomDimensions``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_custom_dimensions_list(
                properties_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    def analyticsadmin_properties_custom_dimensions_patch(
        self,
        properties_id: str,
        custom_dimensions_id: str,
        body: GoogleAnalyticsAdminV1BetaCustomDimension | GoogleAnalyticsAdminV1BetaCustomDimensionDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaCustomDimension:
        """Updates a CustomDimension on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            custom_dimensions_id: Resource name segment (customDimensionsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Omitted fields will not be updated. To replace the
                entire entity, use one path with the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_custom_dimensions_patch(
                properties_id, custom_dimensions_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    def analyticsadmin_properties_custom_metrics_archive(
        self,
        properties_id: str,
        custom_metrics_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Archives a CustomMetric on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            custom_metrics_id: Resource name segment (customMetricsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_custom_metrics_archive(
                properties_id, custom_metrics_id, body, request_options=request_options
            ),
        )

    def analyticsadmin_properties_custom_metrics_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaCustomMetric | GoogleAnalyticsAdminV1BetaCustomMetricDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaCustomMetric:
        """Creates a CustomMetric.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_custom_metrics_create(
                properties_id, body, request_options=request_options
            ),
        )

    def analyticsadmin_properties_custom_metrics_get(
        self, properties_id: str, custom_metrics_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GoogleAnalyticsAdminV1BetaCustomMetric:
        """Lookup for a single CustomMetric.

        Args:
            properties_id: Resource name segment (propertiesId).
            custom_metrics_id: Resource name segment (customMetricsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_custom_metrics_get(
                properties_id, custom_metrics_id, request_options=request_options
            ),
        )

    def analyticsadmin_properties_custom_metrics_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaListCustomMetricsResponse:
        """Lists CustomMetrics on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: The maximum number of resources to return. If unspecified, at most 50 resources will be returned.
                The maximum value is 200 (higher values will be coerced to the maximum).
            page_token: A page token, received from a previous ``ListCustomMetrics`` call. Provide this to retrieve the
                subsequent page. When paginating, all other parameters provided to ``ListCustomMetrics`` must match the
                call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_custom_metrics_list(
                properties_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    def analyticsadmin_properties_custom_metrics_patch(
        self,
        properties_id: str,
        custom_metrics_id: str,
        body: GoogleAnalyticsAdminV1BetaCustomMetric | GoogleAnalyticsAdminV1BetaCustomMetricDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaCustomMetric:
        """Updates a CustomMetric on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            custom_metrics_id: Resource name segment (customMetricsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Omitted fields will not be updated. To replace the
                entire entity, use one path with the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_custom_metrics_patch(
                properties_id, custom_metrics_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    def analyticsadmin_properties_data_streams_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaDataStream | GoogleAnalyticsAdminV1BetaDataStreamDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaDataStream:
        """Creates a DataStream.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_data_streams_create(
                properties_id, body, request_options=request_options
            ),
        )

    def analyticsadmin_properties_data_streams_delete(
        self, properties_id: str, data_streams_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes a DataStream on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_data_streams_delete(
                properties_id, data_streams_id, request_options=request_options
            ),
        )

    def analyticsadmin_properties_data_streams_get(
        self, properties_id: str, data_streams_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GoogleAnalyticsAdminV1BetaDataStream:
        """Lookup for a single DataStream.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_data_streams_get(
                properties_id, data_streams_id, request_options=request_options
            ),
        )

    def analyticsadmin_properties_data_streams_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaListDataStreamsResponse:
        """Lists DataStreams on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: The maximum number of resources to return. If unspecified, at most 50 resources will be returned.
                The maximum value is 200 (higher values will be coerced to the maximum).
            page_token: A page token, received from a previous ``ListDataStreams`` call. Provide this to retrieve the
                subsequent page. When paginating, all other parameters provided to ``ListDataStreams`` must match the
                call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_data_streams_list(
                properties_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    def analyticsadmin_properties_data_streams_measurement_protocol_secrets_create(
        self,
        properties_id: str,
        data_streams_id: str,
        body: (
            GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
            | GoogleAnalyticsAdminV1BetaMeasurementProtocolSecretDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret:
        """Creates a measurement protocol secret.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_data_streams_measurement_protocol_secrets_create(
                properties_id, data_streams_id, body, request_options=request_options
            ),
        )

    def analyticsadmin_properties_data_streams_measurement_protocol_secrets_delete(
        self,
        properties_id: str,
        data_streams_id: str,
        measurement_protocol_secrets_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Deletes target MeasurementProtocolSecret.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            measurement_protocol_secrets_id: Resource name segment (measurementProtocolSecretsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_data_streams_measurement_protocol_secrets_delete(
                properties_id, data_streams_id, measurement_protocol_secrets_id, request_options=request_options
            ),
        )

    def analyticsadmin_properties_data_streams_measurement_protocol_secrets_get(
        self,
        properties_id: str,
        data_streams_id: str,
        measurement_protocol_secrets_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret:
        """Lookup for a single MeasurementProtocolSecret.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            measurement_protocol_secrets_id: Resource name segment (measurementProtocolSecretsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_data_streams_measurement_protocol_secrets_get(
                properties_id, data_streams_id, measurement_protocol_secrets_id, request_options=request_options
            ),
        )

    def analyticsadmin_properties_data_streams_measurement_protocol_secrets_list(
        self,
        properties_id: str,
        data_streams_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse:
        """Returns child MeasurementProtocolSecrets under the specified parent Property.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            page_size: Optional. The maximum number of resources to return. If unspecified, at most 10 resources will be
                returned. The maximum value is 10. Higher values will be coerced to the maximum.
            page_token: Optional. A page token, received from a previous ``ListMeasurementProtocolSecrets`` call.
                Provide this to retrieve the subsequent page. When paginating, all other parameters provided to
                ``ListMeasurementProtocolSecrets`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_data_streams_measurement_protocol_secrets_list(
                properties_id,
                data_streams_id,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def analyticsadmin_properties_data_streams_measurement_protocol_secrets_patch(
        self,
        properties_id: str,
        data_streams_id: str,
        measurement_protocol_secrets_id: str,
        body: (
            GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
            | GoogleAnalyticsAdminV1BetaMeasurementProtocolSecretDict
        ),
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret:
        """Updates a measurement protocol secret.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            measurement_protocol_secrets_id: Resource name segment (measurementProtocolSecretsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Omitted fields will not be updated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_data_streams_measurement_protocol_secrets_patch(
                properties_id,
                data_streams_id,
                measurement_protocol_secrets_id,
                body,
                update_mask=update_mask,
                request_options=request_options,
            ),
        )

    def analyticsadmin_properties_data_streams_patch(
        self,
        properties_id: str,
        data_streams_id: str,
        body: GoogleAnalyticsAdminV1BetaDataStream | GoogleAnalyticsAdminV1BetaDataStreamDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaDataStream:
        """Updates a DataStream on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Omitted fields will not be updated. To replace the
                entire entity, use one path with the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_data_streams_patch(
                properties_id, data_streams_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    def analyticsadmin_properties_delete(
        self, properties_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GoogleAnalyticsAdminV1BetaProperty:
        """Marks target Property as soft-deleted (ie: "trashed") and returns it. This API does not have a method to
        restore soft-deleted properties. However, they can be restored using the Trash Can UI. If the properties are not
        restored before the expiration time, the Property and all child resources (eg: GoogleAdsLinks, Streams,
        AccessBindings) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error
        if the target is not found.

        Args:
            properties_id: Resource name segment (propertiesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_delete(properties_id, request_options=request_options)
        )

    def analyticsadmin_properties_firebase_links_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaFirebaseLink | GoogleAnalyticsAdminV1BetaFirebaseLinkDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaFirebaseLink:
        """Creates a FirebaseLink. Properties can have at most one FirebaseLink.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_firebase_links_create(
                properties_id, body, request_options=request_options
            ),
        )

    def analyticsadmin_properties_firebase_links_delete(
        self, properties_id: str, firebase_links_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes a FirebaseLink on a property

        Args:
            properties_id: Resource name segment (propertiesId).
            firebase_links_id: Resource name segment (firebaseLinksId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_firebase_links_delete(
                properties_id, firebase_links_id, request_options=request_options
            ),
        )

    def analyticsadmin_properties_firebase_links_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse:
        """Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: Optional. The maximum number of resources to return. The service may return fewer than this
                value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The
                maximum value is 200; (higher values will be coerced to the maximum)
            page_token: Optional. A page token, received from a previous ``ListFirebaseLinks`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListFirebaseLinks``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_firebase_links_list(
                properties_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    def analyticsadmin_properties_get(
        self, properties_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GoogleAnalyticsAdminV1BetaProperty:
        """Lookup for a single GA Property.

        Args:
            properties_id: Resource name segment (propertiesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_get(properties_id, request_options=request_options)
        )

    def analyticsadmin_properties_get_data_retention_settings(
        self, properties_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GoogleAnalyticsAdminV1BetaDataRetentionSettings:
        """Returns the singleton data retention settings for this property.

        Args:
            properties_id: Resource name segment (propertiesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_get_data_retention_settings(
                properties_id, request_options=request_options
            ),
        )

    def analyticsadmin_properties_google_ads_links_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaGoogleAdsLink | GoogleAnalyticsAdminV1BetaGoogleAdsLinkDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaGoogleAdsLink:
        """Creates a GoogleAdsLink.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_google_ads_links_create(
                properties_id, body, request_options=request_options
            ),
        )

    def analyticsadmin_properties_google_ads_links_delete(
        self, properties_id: str, google_ads_links_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes a GoogleAdsLink on a property

        Args:
            properties_id: Resource name segment (propertiesId).
            google_ads_links_id: Resource name segment (googleAdsLinksId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_google_ads_links_delete(
                properties_id, google_ads_links_id, request_options=request_options
            ),
        )

    def analyticsadmin_properties_google_ads_links_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse:
        """Lists GoogleAdsLinks on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be
                returned. The maximum value is 200 (higher values will be coerced to the maximum).
            page_token: Optional. A page token, received from a previous ``ListGoogleAdsLinks`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListGoogleAdsLinks``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_google_ads_links_list(
                properties_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    def analyticsadmin_properties_google_ads_links_patch(
        self,
        properties_id: str,
        google_ads_links_id: str,
        body: GoogleAnalyticsAdminV1BetaGoogleAdsLink | GoogleAnalyticsAdminV1BetaGoogleAdsLinkDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaGoogleAdsLink:
        """Updates a GoogleAdsLink on a property

        Args:
            properties_id: Resource name segment (propertiesId).
            google_ads_links_id: Resource name segment (googleAdsLinksId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Field names must be in snake case (e.g.,
                "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with
                the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_google_ads_links_patch(
                properties_id, google_ads_links_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    def analyticsadmin_properties_key_events_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaKeyEvent | GoogleAnalyticsAdminV1BetaKeyEventDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaKeyEvent:
        """Creates a Key Event.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_key_events_create(
                properties_id, body, request_options=request_options
            ),
        )

    def analyticsadmin_properties_key_events_delete(
        self, properties_id: str, key_events_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes a Key Event.

        Args:
            properties_id: Resource name segment (propertiesId).
            key_events_id: Resource name segment (keyEventsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_key_events_delete(
                properties_id, key_events_id, request_options=request_options
            ),
        )

    def analyticsadmin_properties_key_events_get(
        self, properties_id: str, key_events_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GoogleAnalyticsAdminV1BetaKeyEvent:
        """Retrieves a single Key Event.

        Args:
            properties_id: Resource name segment (propertiesId).
            key_events_id: Resource name segment (keyEventsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_key_events_get(
                properties_id, key_events_id, request_options=request_options
            ),
        )

    def analyticsadmin_properties_key_events_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaListKeyEventsResponse:
        """Returns a list of Key Events in the specified parent property. Returns an empty list if no Key Events are
        found.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be
                returned. The maximum value is 200; (higher values will be coerced to the maximum)
            page_token: Optional. A page token, received from a previous ``ListKeyEvents`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListKeyEvents`` must
                match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_key_events_list(
                properties_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    def analyticsadmin_properties_key_events_patch(
        self,
        properties_id: str,
        key_events_id: str,
        body: GoogleAnalyticsAdminV1BetaKeyEvent | GoogleAnalyticsAdminV1BetaKeyEventDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaKeyEvent:
        """Updates a Key Event.

        Args:
            properties_id: Resource name segment (propertiesId).
            key_events_id: Resource name segment (keyEventsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Field names must be in snake case (e.g.,
                "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with
                the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_key_events_patch(
                properties_id, key_events_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    def analyticsadmin_properties_list(
        self,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        show_deleted: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaListPropertiesResponse:
        """Returns child Properties under the specified parent Account. Properties will be excluded if the caller does
        not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no
        relevant properties are found.

        Args:
            filter_: Required. An expression for filtering the results of the request. Fields eligible for filtering
                are: ``parent:``(The resource name of the parent account/property) or ``ancestor:``(The resource name of
                the parent account) or ``firebase_project:``(The id or number of the linked firebase project). Some
                examples of filters: ```` | Filter | Description |
                |-----------------------------|-------------------------------------------| | parent:accounts/123 | The
                account with account id: 123. | | parent:properties/123 | The property with property id: 123. | |
                ancestor:accounts/123 | The account with account id: 123. | | firebase_project:project-id | The firebase
                project with id: project-id. | | firebase_project:123 | The firebase project with number: 123. | ````
            page_size: Optional. The maximum number of resources to return. The service may return fewer than this
                value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The
                maximum value is 200; (higher values will be coerced to the maximum)
            page_token: Optional. A page token, received from a previous ``ListProperties`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListProperties`` must
                match the call that provided the page token.
            show_deleted: Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be
                inspected to determine whether they are deleted or not.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_list(
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                show_deleted=show_deleted,
                request_options=request_options,
            ),
        )

    def analyticsadmin_properties_patch(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaProperty | GoogleAnalyticsAdminV1BetaPropertyDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaProperty:
        """Updates a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Field names must be in snake case (e.g.,
                "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with
                the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_patch(
                properties_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    def analyticsadmin_properties_run_access_report(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaRunAccessReportRequest | GoogleAnalyticsAdminV1BetaRunAccessReportRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaRunAccessReportResponse:
        """Returns a customized report of data access records. The report provides records of each time a user reads
        Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be
        requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota
        can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These
        data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase &
        Admob that can retrieve data from Google Analytics through a linkage. These records don't include property
        configuration changes like adding a stream or changing a property's time zone. For configuration change history,
        see searchChangeHistoryEvents. To give your feedback on this API, complete the Google Analytics Access Reports
        feedback form.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_run_access_report(
                properties_id, body, request_options=request_options
            ),
        )

    def analyticsadmin_properties_update_data_retention_settings(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaDataRetentionSettings | GoogleAnalyticsAdminV1BetaDataRetentionSettingsDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaDataRetentionSettings:
        """Updates the singleton data retention settings for this property.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Field names must be in snake case (e.g.,
                "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with
                the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_properties_update_data_retention_settings(
                properties_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    def analyticsdata_properties_audience_exports_create(
        self,
        properties_id: str,
        body: AudienceExport | AudienceExportDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OperationGoogleAnalyticsPropertiesApi:
        """Creates an audience export for later retrieval. This method quickly returns the audience export's resource
        name and initiates a long running asynchronous request to form an audience export. To export the users in an
        audience export, first create the audience export through this method and then send the audience resource name
        to the ``QueryAudienceExport`` method. See Creating an Audience Export for an introduction to Audience Exports
        with examples. An audience export is a snapshot of the users currently in the audience at the time of audience
        export creation. Creating audience exports for one audience on different days will return different results as
        users enter and exit the audience. Audiences in Google Analytics 4 allow you to segment your users in the ways
        that are important to your business. To learn more, see https://support.google.com/analytics/answer/9267572.
        Audience exports contain the users in each audience. Audience Export APIs have some methods at alpha and other
        methods at beta stability. The intention is to advance methods to beta stability after some feedback and
        adoption. To give your feedback on this API, complete the Google Analytics Audience Export API Feedback form.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsdata_properties_audience_exports_create(
                properties_id, body, request_options=request_options
            ),
        )

    def analyticsdata_properties_audience_exports_get(
        self, properties_id: str, audience_exports_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> AudienceExport:
        """Gets configuration metadata about a specific audience export. This method can be used to understand an
        audience export after it has been created. See Creating an Audience Export for an introduction to Audience
        Exports with examples. Audience Export APIs have some methods at alpha and other methods at beta stability. The
        intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on
        this API, complete the Google Analytics Audience Export API Feedback form.

        Args:
            properties_id: Resource name segment (propertiesId).
            audience_exports_id: Resource name segment (audienceExportsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsdata_properties_audience_exports_get(
                properties_id, audience_exports_id, request_options=request_options
            ),
        )

    def analyticsdata_properties_audience_exports_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListAudienceExportsResponse:
        """Lists all audience exports for a property. This method can be used for you to find and reuse existing
        audience exports rather than creating unnecessary new audience exports. The same audience can have multiple
        audience exports that represent the export of users that were in an audience on different days. See Creating an
        Audience Export for an introduction to Audience Exports with examples. Audience Export APIs have some methods at
        alpha and other methods at beta stability. The intention is to advance methods to beta stability after some
        feedback and adoption. To give your feedback on this API, complete the Google Analytics Audience Export API
        Feedback form.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: Optional. The maximum number of audience exports to return. The service may return fewer than
                this value. If unspecified, at most 200 audience exports will be returned. The maximum value is 1000
                (higher values will be coerced to the maximum).
            page_token: Optional. A page token, received from a previous ``ListAudienceExports`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListAudienceExports``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsdata_properties_audience_exports_list(
                properties_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    def analyticsdata_properties_audience_exports_query(
        self,
        properties_id: str,
        audience_exports_id: str,
        body: QueryAudienceExportRequest | QueryAudienceExportRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> QueryAudienceExportResponse:
        """Retrieves an audience export of users. After creating an audience, the users are not immediately available
        for exporting. First, a request to ``CreateAudienceExport`` is necessary to create an audience export of users,
        and then second, this method is used to retrieve the users in the audience export. See Creating an Audience
        Export for an introduction to Audience Exports with examples. Audiences in Google Analytics 4 allow you to
        segment your users in the ways that are important to your business. To learn more, see
        https://support.google.com/analytics/answer/9267572. Audience Export APIs have some methods at alpha and other
        methods at beta stability. The intention is to advance methods to beta stability after some feedback and
        adoption. To give your feedback on this API, complete the Google Analytics Audience Export API Feedback form.

        Args:
            properties_id: Resource name segment (propertiesId).
            audience_exports_id: Resource name segment (audienceExportsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsdata_properties_audience_exports_query(
                properties_id, audience_exports_id, body, request_options=request_options
            ),
        )

    def analyticsdata_properties_batch_run_pivot_reports(
        self,
        properties_id: str,
        body: BatchRunPivotReportsRequest | BatchRunPivotReportsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BatchRunPivotReportsResponse:
        """Returns multiple pivot reports in a batch. All reports must be for the same Google Analytics property.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsdata_properties_batch_run_pivot_reports(
                properties_id, body, request_options=request_options
            ),
        )

    def analyticsdata_properties_batch_run_reports(
        self,
        properties_id: str,
        body: BatchRunReportsRequest | BatchRunReportsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BatchRunReportsResponse:
        """Returns multiple reports in a batch. All reports must be for the same Google Analytics property.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsdata_properties_batch_run_reports(
                properties_id, body, request_options=request_options
            ),
        )

    def analyticsdata_properties_check_compatibility(
        self,
        properties_id: str,
        body: CheckCompatibilityRequest | CheckCompatibilityRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CheckCompatibilityResponse:
        """This compatibility method lists dimensions and metrics that can be added to a report request and maintain
        compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics,
        reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove
        dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core
        reports have different compatibility rules. This method checks compatibility for Core reports.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsdata_properties_check_compatibility(
                properties_id, body, request_options=request_options
            ),
        )

    def analyticsdata_properties_get_metadata(
        self, properties_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Metadata:
        """Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions
        and metrics. In this method, a Google Analytics property identifier is specified in the request, and the
        metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom
        metric with parameter name ``levels_unlocked`` is registered to a property, the Metadata response will contain
        ``customEvent:levels_unlocked``. Universal metadata are dimensions and metrics applicable to any property such
        as ``country`` and ``totalUsers``.

        Args:
            properties_id: Resource name segment (propertiesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsdata_properties_get_metadata(
                properties_id, request_options=request_options
            ),
        )

    def analyticsdata_properties_run_pivot_report(
        self,
        properties_id: str,
        body: RunPivotReportRequest | RunPivotReportRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RunPivotReportResponse:
        """Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and
        expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in
        a pivot. Multiple pivots can be specified to further dissect your data.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsdata_properties_run_pivot_report(
                properties_id, body, request_options=request_options
            ),
        )

    def analyticsdata_properties_run_realtime_report(
        self,
        properties_id: str,
        body: RunRealtimeReportRequest | RunRealtimeReportRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RunRealtimeReportResponse:
        """Returns a customized report of realtime event data for your property. Events appear in realtime reports
        seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the
        periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360
        properties). For a guide to constructing realtime requests & understanding responses, see Creating a Realtime
        Report.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsdata_properties_run_realtime_report(
                properties_id, body, request_options=request_options
            ),
        )

    def analyticsdata_properties_run_report(
        self,
        properties_id: str,
        body: RunReportRequest | RunReportRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RunReportResponse:
        """Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data
        collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for
        the requested dimensions and metrics. Metrics are individual measurements of user activity on your property,
        such as active users or event count. Dimensions break down metrics across some common criteria, such as country
        or event name. For a guide to constructing requests & understanding responses, see Creating a Report.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsdata_properties_run_report(
                properties_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> PropertiesWithRawResponse:
        return self._with_raw_response


class AsyncProperties:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPropertiesWithRawResponse(client, server, auth)

    async def analyticsadmin_properties_acknowledge_user_data_collection(
        self,
        properties_id: str,
        body: (
            GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest
            | GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequestDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Acknowledges the terms of user data collection for the specified property. This acknowledgement must be
        completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may
        be created.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_acknowledge_user_data_collection(
                properties_id, body, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_conversion_events_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaConversionEvent | GoogleAnalyticsAdminV1BetaConversionEventDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaConversionEvent:
        """Deprecated: Use ``CreateKeyEvent`` instead. Creates a conversion event with the specified attributes.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_conversion_events_create(
                properties_id, body, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_conversion_events_delete(
        self, properties_id: str, conversion_events_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Deprecated: Use ``DeleteKeyEvent`` instead. Deletes a conversion event in a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            conversion_events_id: Resource name segment (conversionEventsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_conversion_events_delete(
                properties_id, conversion_events_id, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_conversion_events_get(
        self, properties_id: str, conversion_events_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GoogleAnalyticsAdminV1BetaConversionEvent:
        """Deprecated: Use ``GetKeyEvent`` instead. Retrieve a single conversion event.

        Args:
            properties_id: Resource name segment (propertiesId).
            conversion_events_id: Resource name segment (conversionEventsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_conversion_events_get(
                properties_id, conversion_events_id, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_conversion_events_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaListConversionEventsResponse:
        """Deprecated: Use ``ListKeyEvents`` instead. Returns a list of conversion events in the specified parent
        property. Returns an empty list if no conversion events are found.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be
                returned. The maximum value is 200; (higher values will be coerced to the maximum)
            page_token: Optional. A page token, received from a previous ``ListConversionEvents`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListConversionEvents``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_conversion_events_list(
                properties_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_conversion_events_patch(
        self,
        properties_id: str,
        conversion_events_id: str,
        body: GoogleAnalyticsAdminV1BetaConversionEvent | GoogleAnalyticsAdminV1BetaConversionEventDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaConversionEvent:
        """Deprecated: Use ``UpdateKeyEvent`` instead. Updates a conversion event with the specified attributes.

        Args:
            properties_id: Resource name segment (propertiesId).
            conversion_events_id: Resource name segment (conversionEventsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Field names must be in snake case (e.g.,
                "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with
                the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_conversion_events_patch(
                properties_id, conversion_events_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_create(
        self,
        body: GoogleAnalyticsAdminV1BetaProperty | GoogleAnalyticsAdminV1BetaPropertyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaProperty:
        """Creates a Google Analytics property with the specified location and attributes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_create(body, request_options=request_options)
        )

    async def analyticsadmin_properties_custom_dimensions_archive(
        self,
        properties_id: str,
        custom_dimensions_id: str,
        body: Any,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Archives a CustomDimension on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            custom_dimensions_id: Resource name segment (customDimensionsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_custom_dimensions_archive(
                properties_id, custom_dimensions_id, body, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_custom_dimensions_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaCustomDimension | GoogleAnalyticsAdminV1BetaCustomDimensionDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaCustomDimension:
        """Creates a CustomDimension. Warning: It's not permissible to use this method to collect data on individual
        users. In particular, sending user IDs in custom dimensions violates the Google Analytics Terms of Service.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_custom_dimensions_create(
                properties_id, body, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_custom_dimensions_get(
        self, properties_id: str, custom_dimensions_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GoogleAnalyticsAdminV1BetaCustomDimension:
        """Lookup for a single CustomDimension.

        Args:
            properties_id: Resource name segment (propertiesId).
            custom_dimensions_id: Resource name segment (customDimensionsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_custom_dimensions_get(
                properties_id, custom_dimensions_id, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_custom_dimensions_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse:
        """Lists CustomDimensions on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be
                returned. The maximum value is 200 (higher values will be coerced to the maximum).
            page_token: Optional. A page token, received from a previous ``ListCustomDimensions`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListCustomDimensions``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_custom_dimensions_list(
                properties_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_custom_dimensions_patch(
        self,
        properties_id: str,
        custom_dimensions_id: str,
        body: GoogleAnalyticsAdminV1BetaCustomDimension | GoogleAnalyticsAdminV1BetaCustomDimensionDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaCustomDimension:
        """Updates a CustomDimension on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            custom_dimensions_id: Resource name segment (customDimensionsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Omitted fields will not be updated. To replace the
                entire entity, use one path with the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_custom_dimensions_patch(
                properties_id, custom_dimensions_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_custom_metrics_archive(
        self,
        properties_id: str,
        custom_metrics_id: str,
        body: Any,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Archives a CustomMetric on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            custom_metrics_id: Resource name segment (customMetricsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_custom_metrics_archive(
                properties_id, custom_metrics_id, body, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_custom_metrics_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaCustomMetric | GoogleAnalyticsAdminV1BetaCustomMetricDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaCustomMetric:
        """Creates a CustomMetric.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_custom_metrics_create(
                properties_id, body, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_custom_metrics_get(
        self, properties_id: str, custom_metrics_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GoogleAnalyticsAdminV1BetaCustomMetric:
        """Lookup for a single CustomMetric.

        Args:
            properties_id: Resource name segment (propertiesId).
            custom_metrics_id: Resource name segment (customMetricsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_custom_metrics_get(
                properties_id, custom_metrics_id, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_custom_metrics_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaListCustomMetricsResponse:
        """Lists CustomMetrics on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: The maximum number of resources to return. If unspecified, at most 50 resources will be returned.
                The maximum value is 200 (higher values will be coerced to the maximum).
            page_token: A page token, received from a previous ``ListCustomMetrics`` call. Provide this to retrieve the
                subsequent page. When paginating, all other parameters provided to ``ListCustomMetrics`` must match the
                call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_custom_metrics_list(
                properties_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_custom_metrics_patch(
        self,
        properties_id: str,
        custom_metrics_id: str,
        body: GoogleAnalyticsAdminV1BetaCustomMetric | GoogleAnalyticsAdminV1BetaCustomMetricDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaCustomMetric:
        """Updates a CustomMetric on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            custom_metrics_id: Resource name segment (customMetricsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Omitted fields will not be updated. To replace the
                entire entity, use one path with the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_custom_metrics_patch(
                properties_id, custom_metrics_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_data_streams_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaDataStream | GoogleAnalyticsAdminV1BetaDataStreamDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaDataStream:
        """Creates a DataStream.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_data_streams_create(
                properties_id, body, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_data_streams_delete(
        self, properties_id: str, data_streams_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes a DataStream on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_data_streams_delete(
                properties_id, data_streams_id, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_data_streams_get(
        self, properties_id: str, data_streams_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GoogleAnalyticsAdminV1BetaDataStream:
        """Lookup for a single DataStream.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_data_streams_get(
                properties_id, data_streams_id, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_data_streams_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaListDataStreamsResponse:
        """Lists DataStreams on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: The maximum number of resources to return. If unspecified, at most 50 resources will be returned.
                The maximum value is 200 (higher values will be coerced to the maximum).
            page_token: A page token, received from a previous ``ListDataStreams`` call. Provide this to retrieve the
                subsequent page. When paginating, all other parameters provided to ``ListDataStreams`` must match the
                call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_data_streams_list(
                properties_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_data_streams_measurement_protocol_secrets_create(
        self,
        properties_id: str,
        data_streams_id: str,
        body: (
            GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
            | GoogleAnalyticsAdminV1BetaMeasurementProtocolSecretDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret:
        """Creates a measurement protocol secret.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_data_streams_measurement_protocol_secrets_create(
                properties_id, data_streams_id, body, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_data_streams_measurement_protocol_secrets_delete(
        self,
        properties_id: str,
        data_streams_id: str,
        measurement_protocol_secrets_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Deletes target MeasurementProtocolSecret.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            measurement_protocol_secrets_id: Resource name segment (measurementProtocolSecretsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_data_streams_measurement_protocol_secrets_delete(
                properties_id, data_streams_id, measurement_protocol_secrets_id, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_data_streams_measurement_protocol_secrets_get(
        self,
        properties_id: str,
        data_streams_id: str,
        measurement_protocol_secrets_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret:
        """Lookup for a single MeasurementProtocolSecret.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            measurement_protocol_secrets_id: Resource name segment (measurementProtocolSecretsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_data_streams_measurement_protocol_secrets_get(
                properties_id, data_streams_id, measurement_protocol_secrets_id, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_data_streams_measurement_protocol_secrets_list(
        self,
        properties_id: str,
        data_streams_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse:
        """Returns child MeasurementProtocolSecrets under the specified parent Property.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            page_size: Optional. The maximum number of resources to return. If unspecified, at most 10 resources will be
                returned. The maximum value is 10. Higher values will be coerced to the maximum.
            page_token: Optional. A page token, received from a previous ``ListMeasurementProtocolSecrets`` call.
                Provide this to retrieve the subsequent page. When paginating, all other parameters provided to
                ``ListMeasurementProtocolSecrets`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_data_streams_measurement_protocol_secrets_list(
                properties_id,
                data_streams_id,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def analyticsadmin_properties_data_streams_measurement_protocol_secrets_patch(
        self,
        properties_id: str,
        data_streams_id: str,
        measurement_protocol_secrets_id: str,
        body: (
            GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
            | GoogleAnalyticsAdminV1BetaMeasurementProtocolSecretDict
        ),
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret:
        """Updates a measurement protocol secret.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            measurement_protocol_secrets_id: Resource name segment (measurementProtocolSecretsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Omitted fields will not be updated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_data_streams_measurement_protocol_secrets_patch(
                properties_id,
                data_streams_id,
                measurement_protocol_secrets_id,
                body,
                update_mask=update_mask,
                request_options=request_options,
            ),
        )

    async def analyticsadmin_properties_data_streams_patch(
        self,
        properties_id: str,
        data_streams_id: str,
        body: GoogleAnalyticsAdminV1BetaDataStream | GoogleAnalyticsAdminV1BetaDataStreamDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaDataStream:
        """Updates a DataStream on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Omitted fields will not be updated. To replace the
                entire entity, use one path with the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_data_streams_patch(
                properties_id, data_streams_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_delete(
        self, properties_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GoogleAnalyticsAdminV1BetaProperty:
        """Marks target Property as soft-deleted (ie: "trashed") and returns it. This API does not have a method to
        restore soft-deleted properties. However, they can be restored using the Trash Can UI. If the properties are not
        restored before the expiration time, the Property and all child resources (eg: GoogleAdsLinks, Streams,
        AccessBindings) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error
        if the target is not found.

        Args:
            properties_id: Resource name segment (propertiesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_delete(
                properties_id, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_firebase_links_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaFirebaseLink | GoogleAnalyticsAdminV1BetaFirebaseLinkDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaFirebaseLink:
        """Creates a FirebaseLink. Properties can have at most one FirebaseLink.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_firebase_links_create(
                properties_id, body, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_firebase_links_delete(
        self, properties_id: str, firebase_links_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes a FirebaseLink on a property

        Args:
            properties_id: Resource name segment (propertiesId).
            firebase_links_id: Resource name segment (firebaseLinksId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_firebase_links_delete(
                properties_id, firebase_links_id, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_firebase_links_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse:
        """Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: Optional. The maximum number of resources to return. The service may return fewer than this
                value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The
                maximum value is 200; (higher values will be coerced to the maximum)
            page_token: Optional. A page token, received from a previous ``ListFirebaseLinks`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListFirebaseLinks``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_firebase_links_list(
                properties_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_get(
        self, properties_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GoogleAnalyticsAdminV1BetaProperty:
        """Lookup for a single GA Property.

        Args:
            properties_id: Resource name segment (propertiesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_get(properties_id, request_options=request_options)
        )

    async def analyticsadmin_properties_get_data_retention_settings(
        self, properties_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GoogleAnalyticsAdminV1BetaDataRetentionSettings:
        """Returns the singleton data retention settings for this property.

        Args:
            properties_id: Resource name segment (propertiesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_get_data_retention_settings(
                properties_id, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_google_ads_links_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaGoogleAdsLink | GoogleAnalyticsAdminV1BetaGoogleAdsLinkDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaGoogleAdsLink:
        """Creates a GoogleAdsLink.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_google_ads_links_create(
                properties_id, body, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_google_ads_links_delete(
        self, properties_id: str, google_ads_links_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes a GoogleAdsLink on a property

        Args:
            properties_id: Resource name segment (propertiesId).
            google_ads_links_id: Resource name segment (googleAdsLinksId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_google_ads_links_delete(
                properties_id, google_ads_links_id, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_google_ads_links_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse:
        """Lists GoogleAdsLinks on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be
                returned. The maximum value is 200 (higher values will be coerced to the maximum).
            page_token: Optional. A page token, received from a previous ``ListGoogleAdsLinks`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListGoogleAdsLinks``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_google_ads_links_list(
                properties_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_google_ads_links_patch(
        self,
        properties_id: str,
        google_ads_links_id: str,
        body: GoogleAnalyticsAdminV1BetaGoogleAdsLink | GoogleAnalyticsAdminV1BetaGoogleAdsLinkDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaGoogleAdsLink:
        """Updates a GoogleAdsLink on a property

        Args:
            properties_id: Resource name segment (propertiesId).
            google_ads_links_id: Resource name segment (googleAdsLinksId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Field names must be in snake case (e.g.,
                "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with
                the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_google_ads_links_patch(
                properties_id, google_ads_links_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_key_events_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaKeyEvent | GoogleAnalyticsAdminV1BetaKeyEventDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaKeyEvent:
        """Creates a Key Event.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_key_events_create(
                properties_id, body, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_key_events_delete(
        self, properties_id: str, key_events_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes a Key Event.

        Args:
            properties_id: Resource name segment (propertiesId).
            key_events_id: Resource name segment (keyEventsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_key_events_delete(
                properties_id, key_events_id, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_key_events_get(
        self, properties_id: str, key_events_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GoogleAnalyticsAdminV1BetaKeyEvent:
        """Retrieves a single Key Event.

        Args:
            properties_id: Resource name segment (propertiesId).
            key_events_id: Resource name segment (keyEventsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_key_events_get(
                properties_id, key_events_id, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_key_events_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaListKeyEventsResponse:
        """Returns a list of Key Events in the specified parent property. Returns an empty list if no Key Events are
        found.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be
                returned. The maximum value is 200; (higher values will be coerced to the maximum)
            page_token: Optional. A page token, received from a previous ``ListKeyEvents`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListKeyEvents`` must
                match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_key_events_list(
                properties_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_key_events_patch(
        self,
        properties_id: str,
        key_events_id: str,
        body: GoogleAnalyticsAdminV1BetaKeyEvent | GoogleAnalyticsAdminV1BetaKeyEventDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaKeyEvent:
        """Updates a Key Event.

        Args:
            properties_id: Resource name segment (propertiesId).
            key_events_id: Resource name segment (keyEventsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Field names must be in snake case (e.g.,
                "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with
                the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_key_events_patch(
                properties_id, key_events_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_list(
        self,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        show_deleted: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaListPropertiesResponse:
        """Returns child Properties under the specified parent Account. Properties will be excluded if the caller does
        not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no
        relevant properties are found.

        Args:
            filter_: Required. An expression for filtering the results of the request. Fields eligible for filtering
                are: ``parent:``(The resource name of the parent account/property) or ``ancestor:``(The resource name of
                the parent account) or ``firebase_project:``(The id or number of the linked firebase project). Some
                examples of filters: ```` | Filter | Description |
                |-----------------------------|-------------------------------------------| | parent:accounts/123 | The
                account with account id: 123. | | parent:properties/123 | The property with property id: 123. | |
                ancestor:accounts/123 | The account with account id: 123. | | firebase_project:project-id | The firebase
                project with id: project-id. | | firebase_project:123 | The firebase project with number: 123. | ````
            page_size: Optional. The maximum number of resources to return. The service may return fewer than this
                value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The
                maximum value is 200; (higher values will be coerced to the maximum)
            page_token: Optional. A page token, received from a previous ``ListProperties`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListProperties`` must
                match the call that provided the page token.
            show_deleted: Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be
                inspected to determine whether they are deleted or not.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_list(
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                show_deleted=show_deleted,
                request_options=request_options,
            ),
        )

    async def analyticsadmin_properties_patch(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaProperty | GoogleAnalyticsAdminV1BetaPropertyDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaProperty:
        """Updates a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Field names must be in snake case (e.g.,
                "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with
                the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_patch(
                properties_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_run_access_report(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaRunAccessReportRequest | GoogleAnalyticsAdminV1BetaRunAccessReportRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaRunAccessReportResponse:
        """Returns a customized report of data access records. The report provides records of each time a user reads
        Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be
        requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota
        can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These
        data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase &
        Admob that can retrieve data from Google Analytics through a linkage. These records don't include property
        configuration changes like adding a stream or changing a property's time zone. For configuration change history,
        see searchChangeHistoryEvents. To give your feedback on this API, complete the Google Analytics Access Reports
        feedback form.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_run_access_report(
                properties_id, body, request_options=request_options
            ),
        )

    async def analyticsadmin_properties_update_data_retention_settings(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaDataRetentionSettings | GoogleAnalyticsAdminV1BetaDataRetentionSettingsDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaDataRetentionSettings:
        """Updates the singleton data retention settings for this property.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Field names must be in snake case (e.g.,
                "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with
                the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_properties_update_data_retention_settings(
                properties_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    async def analyticsdata_properties_audience_exports_create(
        self,
        properties_id: str,
        body: AudienceExport | AudienceExportDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OperationGoogleAnalyticsPropertiesApi:
        """Creates an audience export for later retrieval. This method quickly returns the audience export's resource
        name and initiates a long running asynchronous request to form an audience export. To export the users in an
        audience export, first create the audience export through this method and then send the audience resource name
        to the ``QueryAudienceExport`` method. See Creating an Audience Export for an introduction to Audience Exports
        with examples. An audience export is a snapshot of the users currently in the audience at the time of audience
        export creation. Creating audience exports for one audience on different days will return different results as
        users enter and exit the audience. Audiences in Google Analytics 4 allow you to segment your users in the ways
        that are important to your business. To learn more, see https://support.google.com/analytics/answer/9267572.
        Audience exports contain the users in each audience. Audience Export APIs have some methods at alpha and other
        methods at beta stability. The intention is to advance methods to beta stability after some feedback and
        adoption. To give your feedback on this API, complete the Google Analytics Audience Export API Feedback form.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsdata_properties_audience_exports_create(
                properties_id, body, request_options=request_options
            ),
        )

    async def analyticsdata_properties_audience_exports_get(
        self, properties_id: str, audience_exports_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AudienceExport:
        """Gets configuration metadata about a specific audience export. This method can be used to understand an
        audience export after it has been created. See Creating an Audience Export for an introduction to Audience
        Exports with examples. Audience Export APIs have some methods at alpha and other methods at beta stability. The
        intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on
        this API, complete the Google Analytics Audience Export API Feedback form.

        Args:
            properties_id: Resource name segment (propertiesId).
            audience_exports_id: Resource name segment (audienceExportsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsdata_properties_audience_exports_get(
                properties_id, audience_exports_id, request_options=request_options
            ),
        )

    async def analyticsdata_properties_audience_exports_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListAudienceExportsResponse:
        """Lists all audience exports for a property. This method can be used for you to find and reuse existing
        audience exports rather than creating unnecessary new audience exports. The same audience can have multiple
        audience exports that represent the export of users that were in an audience on different days. See Creating an
        Audience Export for an introduction to Audience Exports with examples. Audience Export APIs have some methods at
        alpha and other methods at beta stability. The intention is to advance methods to beta stability after some
        feedback and adoption. To give your feedback on this API, complete the Google Analytics Audience Export API
        Feedback form.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: Optional. The maximum number of audience exports to return. The service may return fewer than
                this value. If unspecified, at most 200 audience exports will be returned. The maximum value is 1000
                (higher values will be coerced to the maximum).
            page_token: Optional. A page token, received from a previous ``ListAudienceExports`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListAudienceExports``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsdata_properties_audience_exports_list(
                properties_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    async def analyticsdata_properties_audience_exports_query(
        self,
        properties_id: str,
        audience_exports_id: str,
        body: QueryAudienceExportRequest | QueryAudienceExportRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> QueryAudienceExportResponse:
        """Retrieves an audience export of users. After creating an audience, the users are not immediately available
        for exporting. First, a request to ``CreateAudienceExport`` is necessary to create an audience export of users,
        and then second, this method is used to retrieve the users in the audience export. See Creating an Audience
        Export for an introduction to Audience Exports with examples. Audiences in Google Analytics 4 allow you to
        segment your users in the ways that are important to your business. To learn more, see
        https://support.google.com/analytics/answer/9267572. Audience Export APIs have some methods at alpha and other
        methods at beta stability. The intention is to advance methods to beta stability after some feedback and
        adoption. To give your feedback on this API, complete the Google Analytics Audience Export API Feedback form.

        Args:
            properties_id: Resource name segment (propertiesId).
            audience_exports_id: Resource name segment (audienceExportsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsdata_properties_audience_exports_query(
                properties_id, audience_exports_id, body, request_options=request_options
            ),
        )

    async def analyticsdata_properties_batch_run_pivot_reports(
        self,
        properties_id: str,
        body: BatchRunPivotReportsRequest | BatchRunPivotReportsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BatchRunPivotReportsResponse:
        """Returns multiple pivot reports in a batch. All reports must be for the same Google Analytics property.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsdata_properties_batch_run_pivot_reports(
                properties_id, body, request_options=request_options
            ),
        )

    async def analyticsdata_properties_batch_run_reports(
        self,
        properties_id: str,
        body: BatchRunReportsRequest | BatchRunReportsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BatchRunReportsResponse:
        """Returns multiple reports in a batch. All reports must be for the same Google Analytics property.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsdata_properties_batch_run_reports(
                properties_id, body, request_options=request_options
            ),
        )

    async def analyticsdata_properties_check_compatibility(
        self,
        properties_id: str,
        body: CheckCompatibilityRequest | CheckCompatibilityRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CheckCompatibilityResponse:
        """This compatibility method lists dimensions and metrics that can be added to a report request and maintain
        compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics,
        reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove
        dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core
        reports have different compatibility rules. This method checks compatibility for Core reports.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsdata_properties_check_compatibility(
                properties_id, body, request_options=request_options
            ),
        )

    async def analyticsdata_properties_get_metadata(
        self, properties_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Metadata:
        """Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions
        and metrics. In this method, a Google Analytics property identifier is specified in the request, and the
        metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom
        metric with parameter name ``levels_unlocked`` is registered to a property, the Metadata response will contain
        ``customEvent:levels_unlocked``. Universal metadata are dimensions and metrics applicable to any property such
        as ``country`` and ``totalUsers``.

        Args:
            properties_id: Resource name segment (propertiesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsdata_properties_get_metadata(
                properties_id, request_options=request_options
            ),
        )

    async def analyticsdata_properties_run_pivot_report(
        self,
        properties_id: str,
        body: RunPivotReportRequest | RunPivotReportRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RunPivotReportResponse:
        """Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and
        expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in
        a pivot. Multiple pivots can be specified to further dissect your data.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsdata_properties_run_pivot_report(
                properties_id, body, request_options=request_options
            ),
        )

    async def analyticsdata_properties_run_realtime_report(
        self,
        properties_id: str,
        body: RunRealtimeReportRequest | RunRealtimeReportRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RunRealtimeReportResponse:
        """Returns a customized report of realtime event data for your property. Events appear in realtime reports
        seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the
        periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360
        properties). For a guide to constructing realtime requests & understanding responses, see Creating a Realtime
        Report.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsdata_properties_run_realtime_report(
                properties_id, body, request_options=request_options
            ),
        )

    async def analyticsdata_properties_run_report(
        self,
        properties_id: str,
        body: RunReportRequest | RunReportRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RunReportResponse:
        """Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data
        collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for
        the requested dimensions and metrics. Metrics are individual measurements of user activity on your property,
        such as active users or event count. Dimensions break down metrics across some common criteria, such as country
        or event name. For a guide to constructing requests & understanding responses, see Creating a Report.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsdata_properties_run_report(
                properties_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPropertiesWithRawResponse:
        return self._with_raw_response


class PropertiesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def analyticsadmin_properties_acknowledge_user_data_collection(
        self,
        properties_id: str,
        body: (
            GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest
            | GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequestDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, AnalyticsadminPropertiesAcknowledgeUserDataCollectionErrorBody]:
        """Acknowledges the terms of user data collection for the specified property. This acknowledgement must be
        completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may
        be created.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}:acknowledgeUserDataCollection"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest
                    | GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequestDict
                )
            ](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=analyticsadmin_properties_acknowledge_user_data_collection_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_conversion_events_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaConversionEvent | GoogleAnalyticsAdminV1BetaConversionEventDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaConversionEvent, AnalyticsadminPropertiesConversionEventsCreateErrorBody]:
        """Deprecated: Use ``CreateKeyEvent`` instead. Creates a conversion event with the specified attributes.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/conversionEvents"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaConversionEvent | GoogleAnalyticsAdminV1BetaConversionEventDict](
                body
            ),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaConversionEvent],
            error_mapper=analyticsadmin_properties_conversion_events_create_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_conversion_events_delete(
        self, properties_id: str, conversion_events_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, AnalyticsadminPropertiesConversionEventsDeleteErrorBody]:
        """Deprecated: Use ``DeleteKeyEvent`` instead. Deletes a conversion event in a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            conversion_events_id: Resource name segment (conversionEventsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/conversionEvents/{conversionEventsId}"
            ),
            path_params=[
                param[str]("propertiesId", properties_id), param[str]("conversionEventsId", conversion_events_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=analyticsadmin_properties_conversion_events_delete_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_conversion_events_get(
        self, properties_id: str, conversion_events_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaConversionEvent, AnalyticsadminPropertiesConversionEventsGetErrorBody]:
        """Deprecated: Use ``GetKeyEvent`` instead. Retrieve a single conversion event.

        Args:
            properties_id: Resource name segment (propertiesId).
            conversion_events_id: Resource name segment (conversionEventsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/conversionEvents/{conversionEventsId}"
            ),
            path_params=[
                param[str]("propertiesId", properties_id), param[str]("conversionEventsId", conversion_events_id)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaConversionEvent],
            error_mapper=analyticsadmin_properties_conversion_events_get_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_conversion_events_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaListConversionEventsResponse, AnalyticsadminPropertiesConversionEventsListErrorBody
    ]:
        """Deprecated: Use ``ListKeyEvents`` instead. Returns a list of conversion events in the specified parent
        property. Returns an empty list if no conversion events are found.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be
                returned. The maximum value is 200; (higher values will be coerced to the maximum)
            page_token: Optional. A page token, received from a previous ``ListConversionEvents`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListConversionEvents``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/conversionEvents"),
            path_params=[param[str]("propertiesId", properties_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaListConversionEventsResponse],
            error_mapper=analyticsadmin_properties_conversion_events_list_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_conversion_events_patch(
        self,
        properties_id: str,
        conversion_events_id: str,
        body: GoogleAnalyticsAdminV1BetaConversionEvent | GoogleAnalyticsAdminV1BetaConversionEventDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaConversionEvent, AnalyticsadminPropertiesConversionEventsPatchErrorBody]:
        """Deprecated: Use ``UpdateKeyEvent`` instead. Updates a conversion event with the specified attributes.

        Args:
            properties_id: Resource name segment (propertiesId).
            conversion_events_id: Resource name segment (conversionEventsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Field names must be in snake case (e.g.,
                "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with
                the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/conversionEvents/{conversionEventsId}"
            ),
            path_params=[
                param[str]("propertiesId", properties_id), param[str]("conversionEventsId", conversion_events_id)
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaConversionEvent | GoogleAnalyticsAdminV1BetaConversionEventDict](
                body
            ),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaConversionEvent],
            error_mapper=analyticsadmin_properties_conversion_events_patch_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_create(
        self,
        body: GoogleAnalyticsAdminV1BetaProperty | GoogleAnalyticsAdminV1BetaPropertyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaProperty, AnalyticsadminPropertiesCreateErrorBody]:
        """Creates a Google Analytics property with the specified location and attributes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaProperty | GoogleAnalyticsAdminV1BetaPropertyDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaProperty],
            error_mapper=analyticsadmin_properties_create_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_custom_dimensions_archive(
        self,
        properties_id: str,
        custom_dimensions_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, AnalyticsadminPropertiesCustomDimensionsArchiveErrorBody]:
        """Archives a CustomDimension on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            custom_dimensions_id: Resource name segment (customDimensionsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/customDimensions/{customDimensionsId}:archive"
            ),
            path_params=[
                param[str]("propertiesId", properties_id), param[str]("customDimensionsId", custom_dimensions_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=analyticsadmin_properties_custom_dimensions_archive_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_custom_dimensions_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaCustomDimension | GoogleAnalyticsAdminV1BetaCustomDimensionDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaCustomDimension, AnalyticsadminPropertiesCustomDimensionsCreateErrorBody]:
        """Creates a CustomDimension. Warning: It's not permissible to use this method to collect data on individual
        users. In particular, sending user IDs in custom dimensions violates the Google Analytics Terms of Service.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/customDimensions"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaCustomDimension | GoogleAnalyticsAdminV1BetaCustomDimensionDict](
                body
            ),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaCustomDimension],
            error_mapper=analyticsadmin_properties_custom_dimensions_create_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_custom_dimensions_get(
        self, properties_id: str, custom_dimensions_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaCustomDimension, AnalyticsadminPropertiesCustomDimensionsGetErrorBody]:
        """Lookup for a single CustomDimension.

        Args:
            properties_id: Resource name segment (propertiesId).
            custom_dimensions_id: Resource name segment (customDimensionsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/customDimensions/{customDimensionsId}"
            ),
            path_params=[
                param[str]("propertiesId", properties_id), param[str]("customDimensionsId", custom_dimensions_id)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaCustomDimension],
            error_mapper=analyticsadmin_properties_custom_dimensions_get_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_custom_dimensions_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse, AnalyticsadminPropertiesCustomDimensionsListErrorBody
    ]:
        """Lists CustomDimensions on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be
                returned. The maximum value is 200 (higher values will be coerced to the maximum).
            page_token: Optional. A page token, received from a previous ``ListCustomDimensions`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListCustomDimensions``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/customDimensions"),
            path_params=[param[str]("propertiesId", properties_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse],
            error_mapper=analyticsadmin_properties_custom_dimensions_list_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_custom_dimensions_patch(
        self,
        properties_id: str,
        custom_dimensions_id: str,
        body: GoogleAnalyticsAdminV1BetaCustomDimension | GoogleAnalyticsAdminV1BetaCustomDimensionDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaCustomDimension, AnalyticsadminPropertiesCustomDimensionsPatchErrorBody]:
        """Updates a CustomDimension on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            custom_dimensions_id: Resource name segment (customDimensionsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Omitted fields will not be updated. To replace the
                entire entity, use one path with the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/customDimensions/{customDimensionsId}"
            ),
            path_params=[
                param[str]("propertiesId", properties_id), param[str]("customDimensionsId", custom_dimensions_id)
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaCustomDimension | GoogleAnalyticsAdminV1BetaCustomDimensionDict](
                body
            ),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaCustomDimension],
            error_mapper=analyticsadmin_properties_custom_dimensions_patch_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_custom_metrics_archive(
        self,
        properties_id: str,
        custom_metrics_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, AnalyticsadminPropertiesCustomMetricsArchiveErrorBody]:
        """Archives a CustomMetric on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            custom_metrics_id: Resource name segment (customMetricsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/customMetrics/{customMetricsId}:archive"
            ),
            path_params=[param[str]("propertiesId", properties_id), param[str]("customMetricsId", custom_metrics_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=analyticsadmin_properties_custom_metrics_archive_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_custom_metrics_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaCustomMetric | GoogleAnalyticsAdminV1BetaCustomMetricDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaCustomMetric, AnalyticsadminPropertiesCustomMetricsCreateErrorBody]:
        """Creates a CustomMetric.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/customMetrics"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaCustomMetric | GoogleAnalyticsAdminV1BetaCustomMetricDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaCustomMetric],
            error_mapper=analyticsadmin_properties_custom_metrics_create_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_custom_metrics_get(
        self, properties_id: str, custom_metrics_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaCustomMetric, AnalyticsadminPropertiesCustomMetricsGetErrorBody]:
        """Lookup for a single CustomMetric.

        Args:
            properties_id: Resource name segment (propertiesId).
            custom_metrics_id: Resource name segment (customMetricsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/customMetrics/{customMetricsId}"),
            path_params=[param[str]("propertiesId", properties_id), param[str]("customMetricsId", custom_metrics_id)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaCustomMetric],
            error_mapper=analyticsadmin_properties_custom_metrics_get_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_custom_metrics_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaListCustomMetricsResponse, AnalyticsadminPropertiesCustomMetricsListErrorBody
    ]:
        """Lists CustomMetrics on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: The maximum number of resources to return. If unspecified, at most 50 resources will be returned.
                The maximum value is 200 (higher values will be coerced to the maximum).
            page_token: A page token, received from a previous ``ListCustomMetrics`` call. Provide this to retrieve the
                subsequent page. When paginating, all other parameters provided to ``ListCustomMetrics`` must match the
                call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/customMetrics"),
            path_params=[param[str]("propertiesId", properties_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaListCustomMetricsResponse],
            error_mapper=analyticsadmin_properties_custom_metrics_list_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_custom_metrics_patch(
        self,
        properties_id: str,
        custom_metrics_id: str,
        body: GoogleAnalyticsAdminV1BetaCustomMetric | GoogleAnalyticsAdminV1BetaCustomMetricDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaCustomMetric, AnalyticsadminPropertiesCustomMetricsPatchErrorBody]:
        """Updates a CustomMetric on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            custom_metrics_id: Resource name segment (customMetricsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Omitted fields will not be updated. To replace the
                entire entity, use one path with the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/customMetrics/{customMetricsId}"),
            path_params=[param[str]("propertiesId", properties_id), param[str]("customMetricsId", custom_metrics_id)],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaCustomMetric | GoogleAnalyticsAdminV1BetaCustomMetricDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaCustomMetric],
            error_mapper=analyticsadmin_properties_custom_metrics_patch_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_data_streams_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaDataStream | GoogleAnalyticsAdminV1BetaDataStreamDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaDataStream, AnalyticsadminPropertiesDataStreamsCreateErrorBody]:
        """Creates a DataStream.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/dataStreams"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaDataStream | GoogleAnalyticsAdminV1BetaDataStreamDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaDataStream],
            error_mapper=analyticsadmin_properties_data_streams_create_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_data_streams_delete(
        self, properties_id: str, data_streams_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, AnalyticsadminPropertiesDataStreamsDeleteErrorBody]:
        """Deletes a DataStream on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}"),
            path_params=[param[str]("propertiesId", properties_id), param[str]("dataStreamsId", data_streams_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=analyticsadmin_properties_data_streams_delete_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_data_streams_get(
        self, properties_id: str, data_streams_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaDataStream, AnalyticsadminPropertiesDataStreamsGetErrorBody]:
        """Lookup for a single DataStream.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}"),
            path_params=[param[str]("propertiesId", properties_id), param[str]("dataStreamsId", data_streams_id)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaDataStream],
            error_mapper=analyticsadmin_properties_data_streams_get_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_data_streams_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaListDataStreamsResponse, AnalyticsadminPropertiesDataStreamsListErrorBody]:
        """Lists DataStreams on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: The maximum number of resources to return. If unspecified, at most 50 resources will be returned.
                The maximum value is 200 (higher values will be coerced to the maximum).
            page_token: A page token, received from a previous ``ListDataStreams`` call. Provide this to retrieve the
                subsequent page. When paginating, all other parameters provided to ``ListDataStreams`` must match the
                call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/dataStreams"),
            path_params=[param[str]("propertiesId", properties_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaListDataStreamsResponse],
            error_mapper=analyticsadmin_properties_data_streams_list_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_data_streams_measurement_protocol_secrets_create(
        self,
        properties_id: str,
        data_streams_id: str,
        body: (
            GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
            | GoogleAnalyticsAdminV1BetaMeasurementProtocolSecretDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret,
        AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateErrorBody,
    ]:
        """Creates a measurement protocol secret.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets"
            ),
            path_params=[param[str]("propertiesId", properties_id), param[str]("dataStreamsId", data_streams_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
                    | GoogleAnalyticsAdminV1BetaMeasurementProtocolSecretDict
                )
            ](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret],
            error_mapper=analyticsadmin_properties_data_streams_measurement_protocol_secrets_create_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_data_streams_measurement_protocol_secrets_delete(
        self,
        properties_id: str,
        data_streams_id: str,
        measurement_protocol_secrets_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteErrorBody]:
        """Deletes target MeasurementProtocolSecret.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            measurement_protocol_secrets_id: Resource name segment (measurementProtocolSecretsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets/{measurementProtocolSecretsId}",
            ),
            path_params=[
                param[str]("propertiesId", properties_id),
                param[str]("dataStreamsId", data_streams_id),
                param[str]("measurementProtocolSecretsId", measurement_protocol_secrets_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=analyticsadmin_properties_data_streams_measurement_protocol_secrets_delete_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_data_streams_measurement_protocol_secrets_get(
        self,
        properties_id: str,
        data_streams_id: str,
        measurement_protocol_secrets_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret,
        AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetErrorBody,
    ]:
        """Lookup for a single MeasurementProtocolSecret.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            measurement_protocol_secrets_id: Resource name segment (measurementProtocolSecretsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets/{measurementProtocolSecretsId}",
            ),
            path_params=[
                param[str]("propertiesId", properties_id),
                param[str]("dataStreamsId", data_streams_id),
                param[str]("measurementProtocolSecretsId", measurement_protocol_secrets_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret],
            error_mapper=analyticsadmin_properties_data_streams_measurement_protocol_secrets_get_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_data_streams_measurement_protocol_secrets_list(
        self,
        properties_id: str,
        data_streams_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse,
        AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListErrorBody,
    ]:
        """Returns child MeasurementProtocolSecrets under the specified parent Property.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            page_size: Optional. The maximum number of resources to return. If unspecified, at most 10 resources will be
                returned. The maximum value is 10. Higher values will be coerced to the maximum.
            page_token: Optional. A page token, received from a previous ``ListMeasurementProtocolSecrets`` call.
                Provide this to retrieve the subsequent page. When paginating, all other parameters provided to
                ``ListMeasurementProtocolSecrets`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets"
            ),
            path_params=[param[str]("propertiesId", properties_id), param[str]("dataStreamsId", data_streams_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse],
            error_mapper=analyticsadmin_properties_data_streams_measurement_protocol_secrets_list_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_data_streams_measurement_protocol_secrets_patch(
        self,
        properties_id: str,
        data_streams_id: str,
        measurement_protocol_secrets_id: str,
        body: (
            GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
            | GoogleAnalyticsAdminV1BetaMeasurementProtocolSecretDict
        ),
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret,
        AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchErrorBody,
    ]:
        """Updates a measurement protocol secret.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            measurement_protocol_secrets_id: Resource name segment (measurementProtocolSecretsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Omitted fields will not be updated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets/{measurementProtocolSecretsId}",
            ),
            path_params=[
                param[str]("propertiesId", properties_id),
                param[str]("dataStreamsId", data_streams_id),
                param[str]("measurementProtocolSecretsId", measurement_protocol_secrets_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
                    | GoogleAnalyticsAdminV1BetaMeasurementProtocolSecretDict
                )
            ](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret],
            error_mapper=analyticsadmin_properties_data_streams_measurement_protocol_secrets_patch_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_data_streams_patch(
        self,
        properties_id: str,
        data_streams_id: str,
        body: GoogleAnalyticsAdminV1BetaDataStream | GoogleAnalyticsAdminV1BetaDataStreamDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaDataStream, AnalyticsadminPropertiesDataStreamsPatchErrorBody]:
        """Updates a DataStream on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Omitted fields will not be updated. To replace the
                entire entity, use one path with the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}"),
            path_params=[param[str]("propertiesId", properties_id), param[str]("dataStreamsId", data_streams_id)],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaDataStream | GoogleAnalyticsAdminV1BetaDataStreamDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaDataStream],
            error_mapper=analyticsadmin_properties_data_streams_patch_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_delete(
        self, properties_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaProperty, AnalyticsadminPropertiesDeleteErrorBody]:
        """Marks target Property as soft-deleted (ie: "trashed") and returns it. This API does not have a method to
        restore soft-deleted properties. However, they can be restored using the Trash Can UI. If the properties are not
        restored before the expiration time, the Property and all child resources (eg: GoogleAdsLinks, Streams,
        AccessBindings) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error
        if the target is not found.

        Args:
            properties_id: Resource name segment (propertiesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1beta/properties/{propertiesId}"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaProperty],
            error_mapper=analyticsadmin_properties_delete_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_firebase_links_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaFirebaseLink | GoogleAnalyticsAdminV1BetaFirebaseLinkDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaFirebaseLink, AnalyticsadminPropertiesFirebaseLinksCreateErrorBody]:
        """Creates a FirebaseLink. Properties can have at most one FirebaseLink.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/firebaseLinks"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaFirebaseLink | GoogleAnalyticsAdminV1BetaFirebaseLinkDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaFirebaseLink],
            error_mapper=analyticsadmin_properties_firebase_links_create_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_firebase_links_delete(
        self, properties_id: str, firebase_links_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, AnalyticsadminPropertiesFirebaseLinksDeleteErrorBody]:
        """Deletes a FirebaseLink on a property

        Args:
            properties_id: Resource name segment (propertiesId).
            firebase_links_id: Resource name segment (firebaseLinksId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/firebaseLinks/{firebaseLinksId}"),
            path_params=[param[str]("propertiesId", properties_id), param[str]("firebaseLinksId", firebase_links_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=analyticsadmin_properties_firebase_links_delete_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_firebase_links_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse, AnalyticsadminPropertiesFirebaseLinksListErrorBody
    ]:
        """Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: Optional. The maximum number of resources to return. The service may return fewer than this
                value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The
                maximum value is 200; (higher values will be coerced to the maximum)
            page_token: Optional. A page token, received from a previous ``ListFirebaseLinks`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListFirebaseLinks``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/firebaseLinks"),
            path_params=[param[str]("propertiesId", properties_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse],
            error_mapper=analyticsadmin_properties_firebase_links_list_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_get(
        self, properties_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaProperty, AnalyticsadminPropertiesGetErrorBody]:
        """Lookup for a single GA Property.

        Args:
            properties_id: Resource name segment (propertiesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}"),
            path_params=[param[str]("propertiesId", properties_id)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaProperty],
            error_mapper=analyticsadmin_properties_get_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_get_data_retention_settings(
        self, properties_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaDataRetentionSettings, AnalyticsadminPropertiesGetDataRetentionSettingsErrorBody
    ]:
        """Returns the singleton data retention settings for this property.

        Args:
            properties_id: Resource name segment (propertiesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/dataRetentionSettings"),
            path_params=[param[str]("propertiesId", properties_id)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaDataRetentionSettings],
            error_mapper=analyticsadmin_properties_get_data_retention_settings_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_google_ads_links_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaGoogleAdsLink | GoogleAnalyticsAdminV1BetaGoogleAdsLinkDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaGoogleAdsLink, AnalyticsadminPropertiesGoogleAdsLinksCreateErrorBody]:
        """Creates a GoogleAdsLink.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/googleAdsLinks"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaGoogleAdsLink | GoogleAnalyticsAdminV1BetaGoogleAdsLinkDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaGoogleAdsLink],
            error_mapper=analyticsadmin_properties_google_ads_links_create_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_google_ads_links_delete(
        self, properties_id: str, google_ads_links_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, AnalyticsadminPropertiesGoogleAdsLinksDeleteErrorBody]:
        """Deletes a GoogleAdsLink on a property

        Args:
            properties_id: Resource name segment (propertiesId).
            google_ads_links_id: Resource name segment (googleAdsLinksId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/googleAdsLinks/{googleAdsLinksId}"),
            path_params=[
                param[str]("propertiesId", properties_id), param[str]("googleAdsLinksId", google_ads_links_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=analyticsadmin_properties_google_ads_links_delete_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_google_ads_links_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse, AnalyticsadminPropertiesGoogleAdsLinksListErrorBody
    ]:
        """Lists GoogleAdsLinks on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be
                returned. The maximum value is 200 (higher values will be coerced to the maximum).
            page_token: Optional. A page token, received from a previous ``ListGoogleAdsLinks`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListGoogleAdsLinks``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/googleAdsLinks"),
            path_params=[param[str]("propertiesId", properties_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse],
            error_mapper=analyticsadmin_properties_google_ads_links_list_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_google_ads_links_patch(
        self,
        properties_id: str,
        google_ads_links_id: str,
        body: GoogleAnalyticsAdminV1BetaGoogleAdsLink | GoogleAnalyticsAdminV1BetaGoogleAdsLinkDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaGoogleAdsLink, AnalyticsadminPropertiesGoogleAdsLinksPatchErrorBody]:
        """Updates a GoogleAdsLink on a property

        Args:
            properties_id: Resource name segment (propertiesId).
            google_ads_links_id: Resource name segment (googleAdsLinksId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Field names must be in snake case (e.g.,
                "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with
                the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/googleAdsLinks/{googleAdsLinksId}"),
            path_params=[
                param[str]("propertiesId", properties_id), param[str]("googleAdsLinksId", google_ads_links_id)
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaGoogleAdsLink | GoogleAnalyticsAdminV1BetaGoogleAdsLinkDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaGoogleAdsLink],
            error_mapper=analyticsadmin_properties_google_ads_links_patch_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_key_events_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaKeyEvent | GoogleAnalyticsAdminV1BetaKeyEventDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaKeyEvent, AnalyticsadminPropertiesKeyEventsCreateErrorBody]:
        """Creates a Key Event.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/keyEvents"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaKeyEvent | GoogleAnalyticsAdminV1BetaKeyEventDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaKeyEvent],
            error_mapper=analyticsadmin_properties_key_events_create_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_key_events_delete(
        self, properties_id: str, key_events_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, AnalyticsadminPropertiesKeyEventsDeleteErrorBody]:
        """Deletes a Key Event.

        Args:
            properties_id: Resource name segment (propertiesId).
            key_events_id: Resource name segment (keyEventsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/keyEvents/{keyEventsId}"),
            path_params=[param[str]("propertiesId", properties_id), param[str]("keyEventsId", key_events_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=analyticsadmin_properties_key_events_delete_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_key_events_get(
        self, properties_id: str, key_events_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaKeyEvent, AnalyticsadminPropertiesKeyEventsGetErrorBody]:
        """Retrieves a single Key Event.

        Args:
            properties_id: Resource name segment (propertiesId).
            key_events_id: Resource name segment (keyEventsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/keyEvents/{keyEventsId}"),
            path_params=[param[str]("propertiesId", properties_id), param[str]("keyEventsId", key_events_id)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaKeyEvent],
            error_mapper=analyticsadmin_properties_key_events_get_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_key_events_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaListKeyEventsResponse, AnalyticsadminPropertiesKeyEventsListErrorBody]:
        """Returns a list of Key Events in the specified parent property. Returns an empty list if no Key Events are
        found.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be
                returned. The maximum value is 200; (higher values will be coerced to the maximum)
            page_token: Optional. A page token, received from a previous ``ListKeyEvents`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListKeyEvents`` must
                match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/keyEvents"),
            path_params=[param[str]("propertiesId", properties_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaListKeyEventsResponse],
            error_mapper=analyticsadmin_properties_key_events_list_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_key_events_patch(
        self,
        properties_id: str,
        key_events_id: str,
        body: GoogleAnalyticsAdminV1BetaKeyEvent | GoogleAnalyticsAdminV1BetaKeyEventDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaKeyEvent, AnalyticsadminPropertiesKeyEventsPatchErrorBody]:
        """Updates a Key Event.

        Args:
            properties_id: Resource name segment (propertiesId).
            key_events_id: Resource name segment (keyEventsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Field names must be in snake case (e.g.,
                "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with
                the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/keyEvents/{keyEventsId}"),
            path_params=[param[str]("propertiesId", properties_id), param[str]("keyEventsId", key_events_id)],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaKeyEvent | GoogleAnalyticsAdminV1BetaKeyEventDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaKeyEvent],
            error_mapper=analyticsadmin_properties_key_events_patch_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_list(
        self,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        show_deleted: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaListPropertiesResponse, AnalyticsadminPropertiesListErrorBody]:
        """Returns child Properties under the specified parent Account. Properties will be excluded if the caller does
        not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no
        relevant properties are found.

        Args:
            filter_: Required. An expression for filtering the results of the request. Fields eligible for filtering
                are: ``parent:``(The resource name of the parent account/property) or ``ancestor:``(The resource name of
                the parent account) or ``firebase_project:``(The id or number of the linked firebase project). Some
                examples of filters: ```` | Filter | Description |
                |-----------------------------|-------------------------------------------| | parent:accounts/123 | The
                account with account id: 123. | | parent:properties/123 | The property with property id: 123. | |
                ancestor:accounts/123 | The account with account id: 123. | | firebase_project:project-id | The firebase
                project with id: project-id. | | firebase_project:123 | The firebase project with number: 123. | ````
            page_size: Optional. The maximum number of resources to return. The service may return fewer than this
                value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The
                maximum value is 200; (higher values will be coerced to the maximum)
            page_token: Optional. A page token, received from a previous ``ListProperties`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListProperties`` must
                match the call that provided the page token.
            show_deleted: Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be
                inspected to determine whether they are deleted or not.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties"),
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
                param[bool | None]("showDeleted", show_deleted),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaListPropertiesResponse],
            error_mapper=analyticsadmin_properties_list_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_patch(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaProperty | GoogleAnalyticsAdminV1BetaPropertyDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaProperty, AnalyticsadminPropertiesPatchErrorBody]:
        """Updates a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Field names must be in snake case (e.g.,
                "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with
                the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1beta/properties/{propertiesId}"),
            path_params=[param[str]("propertiesId", properties_id)],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaProperty | GoogleAnalyticsAdminV1BetaPropertyDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaProperty],
            error_mapper=analyticsadmin_properties_patch_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_run_access_report(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaRunAccessReportRequest | GoogleAnalyticsAdminV1BetaRunAccessReportRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaRunAccessReportResponse, AnalyticsadminPropertiesRunAccessReportErrorBody]:
        """Returns a customized report of data access records. The report provides records of each time a user reads
        Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be
        requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota
        can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These
        data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase &
        Admob that can retrieve data from Google Analytics through a linkage. These records don't include property
        configuration changes like adding a stream or changing a property's time zone. For configuration change history,
        see searchChangeHistoryEvents. To give your feedback on this API, complete the Google Analytics Access Reports
        feedback form.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}:runAccessReport"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                GoogleAnalyticsAdminV1BetaRunAccessReportRequest | GoogleAnalyticsAdminV1BetaRunAccessReportRequestDict
            ](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaRunAccessReportResponse],
            error_mapper=analyticsadmin_properties_run_access_report_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_properties_update_data_retention_settings(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaDataRetentionSettings | GoogleAnalyticsAdminV1BetaDataRetentionSettingsDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaDataRetentionSettings, AnalyticsadminPropertiesUpdateDataRetentionSettingsErrorBody
    ]:
        """Updates the singleton data retention settings for this property.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Field names must be in snake case (e.g.,
                "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with
                the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/dataRetentionSettings"),
            path_params=[param[str]("propertiesId", properties_id)],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                GoogleAnalyticsAdminV1BetaDataRetentionSettings | GoogleAnalyticsAdminV1BetaDataRetentionSettingsDict
            ](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaDataRetentionSettings],
            error_mapper=analyticsadmin_properties_update_data_retention_settings_error_mapper,
            request_options=request_options,
        )

    def analyticsdata_properties_audience_exports_create(
        self,
        properties_id: str,
        body: AudienceExport | AudienceExportDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OperationGoogleAnalyticsPropertiesApi, AnalyticsdataPropertiesAudienceExportsCreateErrorBody]:
        """Creates an audience export for later retrieval. This method quickly returns the audience export's resource
        name and initiates a long running asynchronous request to form an audience export. To export the users in an
        audience export, first create the audience export through this method and then send the audience resource name
        to the ``QueryAudienceExport`` method. See Creating an Audience Export for an introduction to Audience Exports
        with examples. An audience export is a snapshot of the users currently in the audience at the time of audience
        export creation. Creating audience exports for one audience on different days will return different results as
        users enter and exit the audience. Audiences in Google Analytics 4 allow you to segment your users in the ways
        that are important to your business. To learn more, see https://support.google.com/analytics/answer/9267572.
        Audience exports contain the users in each audience. Audience Export APIs have some methods at alpha and other
        methods at beta stability. The intention is to advance methods to beta stability after some feedback and
        adoption. To give your feedback on this API, complete the Google Analytics Audience Export API Feedback form.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/audienceExports"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AudienceExport | AudienceExportDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[OperationGoogleAnalyticsPropertiesApi],
            error_mapper=analyticsdata_properties_audience_exports_create_error_mapper,
            request_options=request_options,
        )

    def analyticsdata_properties_audience_exports_get(
        self, properties_id: str, audience_exports_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AudienceExport, AnalyticsdataPropertiesAudienceExportsGetErrorBody]:
        """Gets configuration metadata about a specific audience export. This method can be used to understand an
        audience export after it has been created. See Creating an Audience Export for an introduction to Audience
        Exports with examples. Audience Export APIs have some methods at alpha and other methods at beta stability. The
        intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on
        this API, complete the Google Analytics Audience Export API Feedback form.

        Args:
            properties_id: Resource name segment (propertiesId).
            audience_exports_id: Resource name segment (audienceExportsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/audienceExports/{audienceExportsId}"),
            path_params=[
                param[str]("propertiesId", properties_id), param[str]("audienceExportsId", audience_exports_id)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[AudienceExport],
            error_mapper=analyticsdata_properties_audience_exports_get_error_mapper,
            request_options=request_options,
        )

    def analyticsdata_properties_audience_exports_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListAudienceExportsResponse, AnalyticsdataPropertiesAudienceExportsListErrorBody]:
        """Lists all audience exports for a property. This method can be used for you to find and reuse existing
        audience exports rather than creating unnecessary new audience exports. The same audience can have multiple
        audience exports that represent the export of users that were in an audience on different days. See Creating an
        Audience Export for an introduction to Audience Exports with examples. Audience Export APIs have some methods at
        alpha and other methods at beta stability. The intention is to advance methods to beta stability after some
        feedback and adoption. To give your feedback on this API, complete the Google Analytics Audience Export API
        Feedback form.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: Optional. The maximum number of audience exports to return. The service may return fewer than
                this value. If unspecified, at most 200 audience exports will be returned. The maximum value is 1000
                (higher values will be coerced to the maximum).
            page_token: Optional. A page token, received from a previous ``ListAudienceExports`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListAudienceExports``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/audienceExports"),
            path_params=[param[str]("propertiesId", properties_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListAudienceExportsResponse],
            error_mapper=analyticsdata_properties_audience_exports_list_error_mapper,
            request_options=request_options,
        )

    def analyticsdata_properties_audience_exports_query(
        self,
        properties_id: str,
        audience_exports_id: str,
        body: QueryAudienceExportRequest | QueryAudienceExportRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[QueryAudienceExportResponse, AnalyticsdataPropertiesAudienceExportsQueryErrorBody]:
        """Retrieves an audience export of users. After creating an audience, the users are not immediately available
        for exporting. First, a request to ``CreateAudienceExport`` is necessary to create an audience export of users,
        and then second, this method is used to retrieve the users in the audience export. See Creating an Audience
        Export for an introduction to Audience Exports with examples. Audiences in Google Analytics 4 allow you to
        segment your users in the ways that are important to your business. To learn more, see
        https://support.google.com/analytics/answer/9267572. Audience Export APIs have some methods at alpha and other
        methods at beta stability. The intention is to advance methods to beta stability after some feedback and
        adoption. To give your feedback on this API, complete the Google Analytics Audience Export API Feedback form.

        Args:
            properties_id: Resource name segment (propertiesId).
            audience_exports_id: Resource name segment (audienceExportsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/audienceExports/{audienceExportsId}:query"
            ),
            path_params=[
                param[str]("propertiesId", properties_id), param[str]("audienceExportsId", audience_exports_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QueryAudienceExportRequest | QueryAudienceExportRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[QueryAudienceExportResponse],
            error_mapper=analyticsdata_properties_audience_exports_query_error_mapper,
            request_options=request_options,
        )

    def analyticsdata_properties_batch_run_pivot_reports(
        self,
        properties_id: str,
        body: BatchRunPivotReportsRequest | BatchRunPivotReportsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchRunPivotReportsResponse, AnalyticsdataPropertiesBatchRunPivotReportsErrorBody]:
        """Returns multiple pivot reports in a batch. All reports must be for the same Google Analytics property.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}:batchRunPivotReports"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchRunPivotReportsRequest | BatchRunPivotReportsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[BatchRunPivotReportsResponse],
            error_mapper=analyticsdata_properties_batch_run_pivot_reports_error_mapper,
            request_options=request_options,
        )

    def analyticsdata_properties_batch_run_reports(
        self,
        properties_id: str,
        body: BatchRunReportsRequest | BatchRunReportsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchRunReportsResponse, AnalyticsdataPropertiesBatchRunReportsErrorBody]:
        """Returns multiple reports in a batch. All reports must be for the same Google Analytics property.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}:batchRunReports"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchRunReportsRequest | BatchRunReportsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[BatchRunReportsResponse],
            error_mapper=analyticsdata_properties_batch_run_reports_error_mapper,
            request_options=request_options,
        )

    def analyticsdata_properties_check_compatibility(
        self,
        properties_id: str,
        body: CheckCompatibilityRequest | CheckCompatibilityRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CheckCompatibilityResponse, AnalyticsdataPropertiesCheckCompatibilityErrorBody]:
        """This compatibility method lists dimensions and metrics that can be added to a report request and maintain
        compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics,
        reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove
        dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core
        reports have different compatibility rules. This method checks compatibility for Core reports.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}:checkCompatibility"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CheckCompatibilityRequest | CheckCompatibilityRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[CheckCompatibilityResponse],
            error_mapper=analyticsdata_properties_check_compatibility_error_mapper,
            request_options=request_options,
        )

    def analyticsdata_properties_get_metadata(
        self, properties_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Metadata, AnalyticsdataPropertiesGetMetadataErrorBody]:
        """Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions
        and metrics. In this method, a Google Analytics property identifier is specified in the request, and the
        metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom
        metric with parameter name ``levels_unlocked`` is registered to a property, the Metadata response will contain
        ``customEvent:levels_unlocked``. Universal metadata are dimensions and metrics applicable to any property such
        as ``country`` and ``totalUsers``.

        Args:
            properties_id: Resource name segment (propertiesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/metadata"),
            path_params=[param[str]("propertiesId", properties_id)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Metadata],
            error_mapper=analyticsdata_properties_get_metadata_error_mapper,
            request_options=request_options,
        )

    def analyticsdata_properties_run_pivot_report(
        self,
        properties_id: str,
        body: RunPivotReportRequest | RunPivotReportRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RunPivotReportResponse, AnalyticsdataPropertiesRunPivotReportErrorBody]:
        """Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and
        expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in
        a pivot. Multiple pivots can be specified to further dissect your data.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}:runPivotReport"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RunPivotReportRequest | RunPivotReportRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[RunPivotReportResponse],
            error_mapper=analyticsdata_properties_run_pivot_report_error_mapper,
            request_options=request_options,
        )

    def analyticsdata_properties_run_realtime_report(
        self,
        properties_id: str,
        body: RunRealtimeReportRequest | RunRealtimeReportRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RunRealtimeReportResponse, AnalyticsdataPropertiesRunRealtimeReportErrorBody]:
        """Returns a customized report of realtime event data for your property. Events appear in realtime reports
        seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the
        periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360
        properties). For a guide to constructing realtime requests & understanding responses, see Creating a Realtime
        Report.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}:runRealtimeReport"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RunRealtimeReportRequest | RunRealtimeReportRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[RunRealtimeReportResponse],
            error_mapper=analyticsdata_properties_run_realtime_report_error_mapper,
            request_options=request_options,
        )

    def analyticsdata_properties_run_report(
        self,
        properties_id: str,
        body: RunReportRequest | RunReportRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RunReportResponse, AnalyticsdataPropertiesRunReportErrorBody]:
        """Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data
        collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for
        the requested dimensions and metrics. Metrics are individual measurements of user activity on your property,
        such as active users or event count. Dimensions break down metrics across some common criteria, such as country
        or event name. For a guide to constructing requests & understanding responses, see Creating a Report.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}:runReport"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RunReportRequest | RunReportRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[RunReportResponse],
            error_mapper=analyticsdata_properties_run_report_error_mapper,
            request_options=request_options,
        )


class AsyncPropertiesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def analyticsadmin_properties_acknowledge_user_data_collection(
        self,
        properties_id: str,
        body: (
            GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest
            | GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequestDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, AnalyticsadminPropertiesAcknowledgeUserDataCollectionErrorBody]:
        """Acknowledges the terms of user data collection for the specified property. This acknowledgement must be
        completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may
        be created.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}:acknowledgeUserDataCollection"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest
                    | GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequestDict
                )
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=analyticsadmin_properties_acknowledge_user_data_collection_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_conversion_events_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaConversionEvent | GoogleAnalyticsAdminV1BetaConversionEventDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaConversionEvent, AnalyticsadminPropertiesConversionEventsCreateErrorBody]:
        """Deprecated: Use ``CreateKeyEvent`` instead. Creates a conversion event with the specified attributes.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/conversionEvents"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaConversionEvent | GoogleAnalyticsAdminV1BetaConversionEventDict](
                body
            ),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaConversionEvent],
            error_mapper=analyticsadmin_properties_conversion_events_create_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_conversion_events_delete(
        self, properties_id: str, conversion_events_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, AnalyticsadminPropertiesConversionEventsDeleteErrorBody]:
        """Deprecated: Use ``DeleteKeyEvent`` instead. Deletes a conversion event in a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            conversion_events_id: Resource name segment (conversionEventsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/conversionEvents/{conversionEventsId}"
            ),
            path_params=[
                param[str]("propertiesId", properties_id), param[str]("conversionEventsId", conversion_events_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=analyticsadmin_properties_conversion_events_delete_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_conversion_events_get(
        self, properties_id: str, conversion_events_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaConversionEvent, AnalyticsadminPropertiesConversionEventsGetErrorBody]:
        """Deprecated: Use ``GetKeyEvent`` instead. Retrieve a single conversion event.

        Args:
            properties_id: Resource name segment (propertiesId).
            conversion_events_id: Resource name segment (conversionEventsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/conversionEvents/{conversionEventsId}"
            ),
            path_params=[
                param[str]("propertiesId", properties_id), param[str]("conversionEventsId", conversion_events_id)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaConversionEvent],
            error_mapper=analyticsadmin_properties_conversion_events_get_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_conversion_events_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaListConversionEventsResponse, AnalyticsadminPropertiesConversionEventsListErrorBody
    ]:
        """Deprecated: Use ``ListKeyEvents`` instead. Returns a list of conversion events in the specified parent
        property. Returns an empty list if no conversion events are found.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be
                returned. The maximum value is 200; (higher values will be coerced to the maximum)
            page_token: Optional. A page token, received from a previous ``ListConversionEvents`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListConversionEvents``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/conversionEvents"),
            path_params=[param[str]("propertiesId", properties_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaListConversionEventsResponse],
            error_mapper=analyticsadmin_properties_conversion_events_list_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_conversion_events_patch(
        self,
        properties_id: str,
        conversion_events_id: str,
        body: GoogleAnalyticsAdminV1BetaConversionEvent | GoogleAnalyticsAdminV1BetaConversionEventDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaConversionEvent, AnalyticsadminPropertiesConversionEventsPatchErrorBody]:
        """Deprecated: Use ``UpdateKeyEvent`` instead. Updates a conversion event with the specified attributes.

        Args:
            properties_id: Resource name segment (propertiesId).
            conversion_events_id: Resource name segment (conversionEventsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Field names must be in snake case (e.g.,
                "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with
                the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/conversionEvents/{conversionEventsId}"
            ),
            path_params=[
                param[str]("propertiesId", properties_id), param[str]("conversionEventsId", conversion_events_id)
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaConversionEvent | GoogleAnalyticsAdminV1BetaConversionEventDict](
                body
            ),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaConversionEvent],
            error_mapper=analyticsadmin_properties_conversion_events_patch_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_create(
        self,
        body: GoogleAnalyticsAdminV1BetaProperty | GoogleAnalyticsAdminV1BetaPropertyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaProperty, AnalyticsadminPropertiesCreateErrorBody]:
        """Creates a Google Analytics property with the specified location and attributes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaProperty | GoogleAnalyticsAdminV1BetaPropertyDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaProperty],
            error_mapper=analyticsadmin_properties_create_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_custom_dimensions_archive(
        self,
        properties_id: str,
        custom_dimensions_id: str,
        body: Any,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, AnalyticsadminPropertiesCustomDimensionsArchiveErrorBody]:
        """Archives a CustomDimension on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            custom_dimensions_id: Resource name segment (customDimensionsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/customDimensions/{customDimensionsId}:archive"
            ),
            path_params=[
                param[str]("propertiesId", properties_id), param[str]("customDimensionsId", custom_dimensions_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=analyticsadmin_properties_custom_dimensions_archive_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_custom_dimensions_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaCustomDimension | GoogleAnalyticsAdminV1BetaCustomDimensionDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaCustomDimension, AnalyticsadminPropertiesCustomDimensionsCreateErrorBody]:
        """Creates a CustomDimension. Warning: It's not permissible to use this method to collect data on individual
        users. In particular, sending user IDs in custom dimensions violates the Google Analytics Terms of Service.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/customDimensions"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaCustomDimension | GoogleAnalyticsAdminV1BetaCustomDimensionDict](
                body
            ),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaCustomDimension],
            error_mapper=analyticsadmin_properties_custom_dimensions_create_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_custom_dimensions_get(
        self, properties_id: str, custom_dimensions_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaCustomDimension, AnalyticsadminPropertiesCustomDimensionsGetErrorBody]:
        """Lookup for a single CustomDimension.

        Args:
            properties_id: Resource name segment (propertiesId).
            custom_dimensions_id: Resource name segment (customDimensionsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/customDimensions/{customDimensionsId}"
            ),
            path_params=[
                param[str]("propertiesId", properties_id), param[str]("customDimensionsId", custom_dimensions_id)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaCustomDimension],
            error_mapper=analyticsadmin_properties_custom_dimensions_get_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_custom_dimensions_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse, AnalyticsadminPropertiesCustomDimensionsListErrorBody
    ]:
        """Lists CustomDimensions on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be
                returned. The maximum value is 200 (higher values will be coerced to the maximum).
            page_token: Optional. A page token, received from a previous ``ListCustomDimensions`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListCustomDimensions``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/customDimensions"),
            path_params=[param[str]("propertiesId", properties_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse],
            error_mapper=analyticsadmin_properties_custom_dimensions_list_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_custom_dimensions_patch(
        self,
        properties_id: str,
        custom_dimensions_id: str,
        body: GoogleAnalyticsAdminV1BetaCustomDimension | GoogleAnalyticsAdminV1BetaCustomDimensionDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaCustomDimension, AnalyticsadminPropertiesCustomDimensionsPatchErrorBody]:
        """Updates a CustomDimension on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            custom_dimensions_id: Resource name segment (customDimensionsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Omitted fields will not be updated. To replace the
                entire entity, use one path with the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/customDimensions/{customDimensionsId}"
            ),
            path_params=[
                param[str]("propertiesId", properties_id), param[str]("customDimensionsId", custom_dimensions_id)
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaCustomDimension | GoogleAnalyticsAdminV1BetaCustomDimensionDict](
                body
            ),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaCustomDimension],
            error_mapper=analyticsadmin_properties_custom_dimensions_patch_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_custom_metrics_archive(
        self,
        properties_id: str,
        custom_metrics_id: str,
        body: Any,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, AnalyticsadminPropertiesCustomMetricsArchiveErrorBody]:
        """Archives a CustomMetric on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            custom_metrics_id: Resource name segment (customMetricsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/customMetrics/{customMetricsId}:archive"
            ),
            path_params=[param[str]("propertiesId", properties_id), param[str]("customMetricsId", custom_metrics_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=analyticsadmin_properties_custom_metrics_archive_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_custom_metrics_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaCustomMetric | GoogleAnalyticsAdminV1BetaCustomMetricDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaCustomMetric, AnalyticsadminPropertiesCustomMetricsCreateErrorBody]:
        """Creates a CustomMetric.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/customMetrics"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaCustomMetric | GoogleAnalyticsAdminV1BetaCustomMetricDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaCustomMetric],
            error_mapper=analyticsadmin_properties_custom_metrics_create_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_custom_metrics_get(
        self, properties_id: str, custom_metrics_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaCustomMetric, AnalyticsadminPropertiesCustomMetricsGetErrorBody]:
        """Lookup for a single CustomMetric.

        Args:
            properties_id: Resource name segment (propertiesId).
            custom_metrics_id: Resource name segment (customMetricsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/customMetrics/{customMetricsId}"),
            path_params=[param[str]("propertiesId", properties_id), param[str]("customMetricsId", custom_metrics_id)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaCustomMetric],
            error_mapper=analyticsadmin_properties_custom_metrics_get_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_custom_metrics_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaListCustomMetricsResponse, AnalyticsadminPropertiesCustomMetricsListErrorBody
    ]:
        """Lists CustomMetrics on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: The maximum number of resources to return. If unspecified, at most 50 resources will be returned.
                The maximum value is 200 (higher values will be coerced to the maximum).
            page_token: A page token, received from a previous ``ListCustomMetrics`` call. Provide this to retrieve the
                subsequent page. When paginating, all other parameters provided to ``ListCustomMetrics`` must match the
                call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/customMetrics"),
            path_params=[param[str]("propertiesId", properties_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaListCustomMetricsResponse],
            error_mapper=analyticsadmin_properties_custom_metrics_list_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_custom_metrics_patch(
        self,
        properties_id: str,
        custom_metrics_id: str,
        body: GoogleAnalyticsAdminV1BetaCustomMetric | GoogleAnalyticsAdminV1BetaCustomMetricDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaCustomMetric, AnalyticsadminPropertiesCustomMetricsPatchErrorBody]:
        """Updates a CustomMetric on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            custom_metrics_id: Resource name segment (customMetricsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Omitted fields will not be updated. To replace the
                entire entity, use one path with the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/customMetrics/{customMetricsId}"),
            path_params=[param[str]("propertiesId", properties_id), param[str]("customMetricsId", custom_metrics_id)],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaCustomMetric | GoogleAnalyticsAdminV1BetaCustomMetricDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaCustomMetric],
            error_mapper=analyticsadmin_properties_custom_metrics_patch_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_data_streams_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaDataStream | GoogleAnalyticsAdminV1BetaDataStreamDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaDataStream, AnalyticsadminPropertiesDataStreamsCreateErrorBody]:
        """Creates a DataStream.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/dataStreams"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaDataStream | GoogleAnalyticsAdminV1BetaDataStreamDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaDataStream],
            error_mapper=analyticsadmin_properties_data_streams_create_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_data_streams_delete(
        self, properties_id: str, data_streams_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, AnalyticsadminPropertiesDataStreamsDeleteErrorBody]:
        """Deletes a DataStream on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}"),
            path_params=[param[str]("propertiesId", properties_id), param[str]("dataStreamsId", data_streams_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=analyticsadmin_properties_data_streams_delete_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_data_streams_get(
        self, properties_id: str, data_streams_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaDataStream, AnalyticsadminPropertiesDataStreamsGetErrorBody]:
        """Lookup for a single DataStream.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}"),
            path_params=[param[str]("propertiesId", properties_id), param[str]("dataStreamsId", data_streams_id)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaDataStream],
            error_mapper=analyticsadmin_properties_data_streams_get_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_data_streams_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaListDataStreamsResponse, AnalyticsadminPropertiesDataStreamsListErrorBody]:
        """Lists DataStreams on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: The maximum number of resources to return. If unspecified, at most 50 resources will be returned.
                The maximum value is 200 (higher values will be coerced to the maximum).
            page_token: A page token, received from a previous ``ListDataStreams`` call. Provide this to retrieve the
                subsequent page. When paginating, all other parameters provided to ``ListDataStreams`` must match the
                call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/dataStreams"),
            path_params=[param[str]("propertiesId", properties_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaListDataStreamsResponse],
            error_mapper=analyticsadmin_properties_data_streams_list_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_data_streams_measurement_protocol_secrets_create(
        self,
        properties_id: str,
        data_streams_id: str,
        body: (
            GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
            | GoogleAnalyticsAdminV1BetaMeasurementProtocolSecretDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret,
        AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateErrorBody,
    ]:
        """Creates a measurement protocol secret.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets"
            ),
            path_params=[param[str]("propertiesId", properties_id), param[str]("dataStreamsId", data_streams_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
                    | GoogleAnalyticsAdminV1BetaMeasurementProtocolSecretDict
                )
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret],
            error_mapper=analyticsadmin_properties_data_streams_measurement_protocol_secrets_create_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_data_streams_measurement_protocol_secrets_delete(
        self,
        properties_id: str,
        data_streams_id: str,
        measurement_protocol_secrets_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteErrorBody]:
        """Deletes target MeasurementProtocolSecret.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            measurement_protocol_secrets_id: Resource name segment (measurementProtocolSecretsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets/{measurementProtocolSecretsId}",
            ),
            path_params=[
                param[str]("propertiesId", properties_id),
                param[str]("dataStreamsId", data_streams_id),
                param[str]("measurementProtocolSecretsId", measurement_protocol_secrets_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=analyticsadmin_properties_data_streams_measurement_protocol_secrets_delete_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_data_streams_measurement_protocol_secrets_get(
        self,
        properties_id: str,
        data_streams_id: str,
        measurement_protocol_secrets_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret,
        AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetErrorBody,
    ]:
        """Lookup for a single MeasurementProtocolSecret.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            measurement_protocol_secrets_id: Resource name segment (measurementProtocolSecretsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets/{measurementProtocolSecretsId}",
            ),
            path_params=[
                param[str]("propertiesId", properties_id),
                param[str]("dataStreamsId", data_streams_id),
                param[str]("measurementProtocolSecretsId", measurement_protocol_secrets_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret],
            error_mapper=analyticsadmin_properties_data_streams_measurement_protocol_secrets_get_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_data_streams_measurement_protocol_secrets_list(
        self,
        properties_id: str,
        data_streams_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse,
        AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListErrorBody,
    ]:
        """Returns child MeasurementProtocolSecrets under the specified parent Property.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            page_size: Optional. The maximum number of resources to return. If unspecified, at most 10 resources will be
                returned. The maximum value is 10. Higher values will be coerced to the maximum.
            page_token: Optional. A page token, received from a previous ``ListMeasurementProtocolSecrets`` call.
                Provide this to retrieve the subsequent page. When paginating, all other parameters provided to
                ``ListMeasurementProtocolSecrets`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets"
            ),
            path_params=[param[str]("propertiesId", properties_id), param[str]("dataStreamsId", data_streams_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse],
            error_mapper=analyticsadmin_properties_data_streams_measurement_protocol_secrets_list_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_data_streams_measurement_protocol_secrets_patch(
        self,
        properties_id: str,
        data_streams_id: str,
        measurement_protocol_secrets_id: str,
        body: (
            GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
            | GoogleAnalyticsAdminV1BetaMeasurementProtocolSecretDict
        ),
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret,
        AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchErrorBody,
    ]:
        """Updates a measurement protocol secret.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            measurement_protocol_secrets_id: Resource name segment (measurementProtocolSecretsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Omitted fields will not be updated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets/{measurementProtocolSecretsId}",
            ),
            path_params=[
                param[str]("propertiesId", properties_id),
                param[str]("dataStreamsId", data_streams_id),
                param[str]("measurementProtocolSecretsId", measurement_protocol_secrets_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret
                    | GoogleAnalyticsAdminV1BetaMeasurementProtocolSecretDict
                )
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret],
            error_mapper=analyticsadmin_properties_data_streams_measurement_protocol_secrets_patch_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_data_streams_patch(
        self,
        properties_id: str,
        data_streams_id: str,
        body: GoogleAnalyticsAdminV1BetaDataStream | GoogleAnalyticsAdminV1BetaDataStreamDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaDataStream, AnalyticsadminPropertiesDataStreamsPatchErrorBody]:
        """Updates a DataStream on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            data_streams_id: Resource name segment (dataStreamsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Omitted fields will not be updated. To replace the
                entire entity, use one path with the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}"),
            path_params=[param[str]("propertiesId", properties_id), param[str]("dataStreamsId", data_streams_id)],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaDataStream | GoogleAnalyticsAdminV1BetaDataStreamDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaDataStream],
            error_mapper=analyticsadmin_properties_data_streams_patch_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_delete(
        self, properties_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaProperty, AnalyticsadminPropertiesDeleteErrorBody]:
        """Marks target Property as soft-deleted (ie: "trashed") and returns it. This API does not have a method to
        restore soft-deleted properties. However, they can be restored using the Trash Can UI. If the properties are not
        restored before the expiration time, the Property and all child resources (eg: GoogleAdsLinks, Streams,
        AccessBindings) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error
        if the target is not found.

        Args:
            properties_id: Resource name segment (propertiesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1beta/properties/{propertiesId}"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaProperty],
            error_mapper=analyticsadmin_properties_delete_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_firebase_links_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaFirebaseLink | GoogleAnalyticsAdminV1BetaFirebaseLinkDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaFirebaseLink, AnalyticsadminPropertiesFirebaseLinksCreateErrorBody]:
        """Creates a FirebaseLink. Properties can have at most one FirebaseLink.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/firebaseLinks"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaFirebaseLink | GoogleAnalyticsAdminV1BetaFirebaseLinkDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaFirebaseLink],
            error_mapper=analyticsadmin_properties_firebase_links_create_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_firebase_links_delete(
        self, properties_id: str, firebase_links_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, AnalyticsadminPropertiesFirebaseLinksDeleteErrorBody]:
        """Deletes a FirebaseLink on a property

        Args:
            properties_id: Resource name segment (propertiesId).
            firebase_links_id: Resource name segment (firebaseLinksId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/firebaseLinks/{firebaseLinksId}"),
            path_params=[param[str]("propertiesId", properties_id), param[str]("firebaseLinksId", firebase_links_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=analyticsadmin_properties_firebase_links_delete_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_firebase_links_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse, AnalyticsadminPropertiesFirebaseLinksListErrorBody
    ]:
        """Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: Optional. The maximum number of resources to return. The service may return fewer than this
                value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The
                maximum value is 200; (higher values will be coerced to the maximum)
            page_token: Optional. A page token, received from a previous ``ListFirebaseLinks`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListFirebaseLinks``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/firebaseLinks"),
            path_params=[param[str]("propertiesId", properties_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse],
            error_mapper=analyticsadmin_properties_firebase_links_list_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_get(
        self, properties_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaProperty, AnalyticsadminPropertiesGetErrorBody]:
        """Lookup for a single GA Property.

        Args:
            properties_id: Resource name segment (propertiesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}"),
            path_params=[param[str]("propertiesId", properties_id)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaProperty],
            error_mapper=analyticsadmin_properties_get_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_get_data_retention_settings(
        self, properties_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaDataRetentionSettings, AnalyticsadminPropertiesGetDataRetentionSettingsErrorBody
    ]:
        """Returns the singleton data retention settings for this property.

        Args:
            properties_id: Resource name segment (propertiesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/dataRetentionSettings"),
            path_params=[param[str]("propertiesId", properties_id)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaDataRetentionSettings],
            error_mapper=analyticsadmin_properties_get_data_retention_settings_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_google_ads_links_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaGoogleAdsLink | GoogleAnalyticsAdminV1BetaGoogleAdsLinkDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaGoogleAdsLink, AnalyticsadminPropertiesGoogleAdsLinksCreateErrorBody]:
        """Creates a GoogleAdsLink.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/googleAdsLinks"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaGoogleAdsLink | GoogleAnalyticsAdminV1BetaGoogleAdsLinkDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaGoogleAdsLink],
            error_mapper=analyticsadmin_properties_google_ads_links_create_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_google_ads_links_delete(
        self, properties_id: str, google_ads_links_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, AnalyticsadminPropertiesGoogleAdsLinksDeleteErrorBody]:
        """Deletes a GoogleAdsLink on a property

        Args:
            properties_id: Resource name segment (propertiesId).
            google_ads_links_id: Resource name segment (googleAdsLinksId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/googleAdsLinks/{googleAdsLinksId}"),
            path_params=[
                param[str]("propertiesId", properties_id), param[str]("googleAdsLinksId", google_ads_links_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=analyticsadmin_properties_google_ads_links_delete_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_google_ads_links_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse, AnalyticsadminPropertiesGoogleAdsLinksListErrorBody
    ]:
        """Lists GoogleAdsLinks on a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be
                returned. The maximum value is 200 (higher values will be coerced to the maximum).
            page_token: Optional. A page token, received from a previous ``ListGoogleAdsLinks`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListGoogleAdsLinks``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/googleAdsLinks"),
            path_params=[param[str]("propertiesId", properties_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse],
            error_mapper=analyticsadmin_properties_google_ads_links_list_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_google_ads_links_patch(
        self,
        properties_id: str,
        google_ads_links_id: str,
        body: GoogleAnalyticsAdminV1BetaGoogleAdsLink | GoogleAnalyticsAdminV1BetaGoogleAdsLinkDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaGoogleAdsLink, AnalyticsadminPropertiesGoogleAdsLinksPatchErrorBody]:
        """Updates a GoogleAdsLink on a property

        Args:
            properties_id: Resource name segment (propertiesId).
            google_ads_links_id: Resource name segment (googleAdsLinksId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Field names must be in snake case (e.g.,
                "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with
                the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/googleAdsLinks/{googleAdsLinksId}"),
            path_params=[
                param[str]("propertiesId", properties_id), param[str]("googleAdsLinksId", google_ads_links_id)
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaGoogleAdsLink | GoogleAnalyticsAdminV1BetaGoogleAdsLinkDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaGoogleAdsLink],
            error_mapper=analyticsadmin_properties_google_ads_links_patch_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_key_events_create(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaKeyEvent | GoogleAnalyticsAdminV1BetaKeyEventDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaKeyEvent, AnalyticsadminPropertiesKeyEventsCreateErrorBody]:
        """Creates a Key Event.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/keyEvents"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaKeyEvent | GoogleAnalyticsAdminV1BetaKeyEventDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaKeyEvent],
            error_mapper=analyticsadmin_properties_key_events_create_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_key_events_delete(
        self, properties_id: str, key_events_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, AnalyticsadminPropertiesKeyEventsDeleteErrorBody]:
        """Deletes a Key Event.

        Args:
            properties_id: Resource name segment (propertiesId).
            key_events_id: Resource name segment (keyEventsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/keyEvents/{keyEventsId}"),
            path_params=[param[str]("propertiesId", properties_id), param[str]("keyEventsId", key_events_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=analyticsadmin_properties_key_events_delete_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_key_events_get(
        self, properties_id: str, key_events_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaKeyEvent, AnalyticsadminPropertiesKeyEventsGetErrorBody]:
        """Retrieves a single Key Event.

        Args:
            properties_id: Resource name segment (propertiesId).
            key_events_id: Resource name segment (keyEventsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/keyEvents/{keyEventsId}"),
            path_params=[param[str]("propertiesId", properties_id), param[str]("keyEventsId", key_events_id)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaKeyEvent],
            error_mapper=analyticsadmin_properties_key_events_get_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_key_events_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaListKeyEventsResponse, AnalyticsadminPropertiesKeyEventsListErrorBody]:
        """Returns a list of Key Events in the specified parent property. Returns an empty list if no Key Events are
        found.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be
                returned. The maximum value is 200; (higher values will be coerced to the maximum)
            page_token: Optional. A page token, received from a previous ``ListKeyEvents`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListKeyEvents`` must
                match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/keyEvents"),
            path_params=[param[str]("propertiesId", properties_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaListKeyEventsResponse],
            error_mapper=analyticsadmin_properties_key_events_list_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_key_events_patch(
        self,
        properties_id: str,
        key_events_id: str,
        body: GoogleAnalyticsAdminV1BetaKeyEvent | GoogleAnalyticsAdminV1BetaKeyEventDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaKeyEvent, AnalyticsadminPropertiesKeyEventsPatchErrorBody]:
        """Updates a Key Event.

        Args:
            properties_id: Resource name segment (propertiesId).
            key_events_id: Resource name segment (keyEventsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Field names must be in snake case (e.g.,
                "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with
                the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/keyEvents/{keyEventsId}"),
            path_params=[param[str]("propertiesId", properties_id), param[str]("keyEventsId", key_events_id)],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaKeyEvent | GoogleAnalyticsAdminV1BetaKeyEventDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaKeyEvent],
            error_mapper=analyticsadmin_properties_key_events_patch_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_list(
        self,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        show_deleted: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaListPropertiesResponse, AnalyticsadminPropertiesListErrorBody]:
        """Returns child Properties under the specified parent Account. Properties will be excluded if the caller does
        not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no
        relevant properties are found.

        Args:
            filter_: Required. An expression for filtering the results of the request. Fields eligible for filtering
                are: ``parent:``(The resource name of the parent account/property) or ``ancestor:``(The resource name of
                the parent account) or ``firebase_project:``(The id or number of the linked firebase project). Some
                examples of filters: ```` | Filter | Description |
                |-----------------------------|-------------------------------------------| | parent:accounts/123 | The
                account with account id: 123. | | parent:properties/123 | The property with property id: 123. | |
                ancestor:accounts/123 | The account with account id: 123. | | firebase_project:project-id | The firebase
                project with id: project-id. | | firebase_project:123 | The firebase project with number: 123. | ````
            page_size: Optional. The maximum number of resources to return. The service may return fewer than this
                value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The
                maximum value is 200; (higher values will be coerced to the maximum)
            page_token: Optional. A page token, received from a previous ``ListProperties`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListProperties`` must
                match the call that provided the page token.
            show_deleted: Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be
                inspected to determine whether they are deleted or not.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties"),
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
                param[bool | None]("showDeleted", show_deleted),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaListPropertiesResponse],
            error_mapper=analyticsadmin_properties_list_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_patch(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaProperty | GoogleAnalyticsAdminV1BetaPropertyDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaProperty, AnalyticsadminPropertiesPatchErrorBody]:
        """Updates a property.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Field names must be in snake case (e.g.,
                "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with
                the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1beta/properties/{propertiesId}"),
            path_params=[param[str]("propertiesId", properties_id)],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaProperty | GoogleAnalyticsAdminV1BetaPropertyDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaProperty],
            error_mapper=analyticsadmin_properties_patch_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_run_access_report(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaRunAccessReportRequest | GoogleAnalyticsAdminV1BetaRunAccessReportRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaRunAccessReportResponse, AnalyticsadminPropertiesRunAccessReportErrorBody]:
        """Returns a customized report of data access records. The report provides records of each time a user reads
        Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be
        requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota
        can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These
        data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase &
        Admob that can retrieve data from Google Analytics through a linkage. These records don't include property
        configuration changes like adding a stream or changing a property's time zone. For configuration change history,
        see searchChangeHistoryEvents. To give your feedback on this API, complete the Google Analytics Access Reports
        feedback form.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}:runAccessReport"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                GoogleAnalyticsAdminV1BetaRunAccessReportRequest | GoogleAnalyticsAdminV1BetaRunAccessReportRequestDict
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaRunAccessReportResponse],
            error_mapper=analyticsadmin_properties_run_access_report_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_properties_update_data_retention_settings(
        self,
        properties_id: str,
        body: GoogleAnalyticsAdminV1BetaDataRetentionSettings | GoogleAnalyticsAdminV1BetaDataRetentionSettingsDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaDataRetentionSettings, AnalyticsadminPropertiesUpdateDataRetentionSettingsErrorBody
    ]:
        """Updates the singleton data retention settings for this property.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Field names must be in snake case (e.g.,
                "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with
                the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/dataRetentionSettings"),
            path_params=[param[str]("propertiesId", properties_id)],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                GoogleAnalyticsAdminV1BetaDataRetentionSettings | GoogleAnalyticsAdminV1BetaDataRetentionSettingsDict
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaDataRetentionSettings],
            error_mapper=analyticsadmin_properties_update_data_retention_settings_error_mapper,
            request_options=request_options,
        )

    async def analyticsdata_properties_audience_exports_create(
        self,
        properties_id: str,
        body: AudienceExport | AudienceExportDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OperationGoogleAnalyticsPropertiesApi, AnalyticsdataPropertiesAudienceExportsCreateErrorBody]:
        """Creates an audience export for later retrieval. This method quickly returns the audience export's resource
        name and initiates a long running asynchronous request to form an audience export. To export the users in an
        audience export, first create the audience export through this method and then send the audience resource name
        to the ``QueryAudienceExport`` method. See Creating an Audience Export for an introduction to Audience Exports
        with examples. An audience export is a snapshot of the users currently in the audience at the time of audience
        export creation. Creating audience exports for one audience on different days will return different results as
        users enter and exit the audience. Audiences in Google Analytics 4 allow you to segment your users in the ways
        that are important to your business. To learn more, see https://support.google.com/analytics/answer/9267572.
        Audience exports contain the users in each audience. Audience Export APIs have some methods at alpha and other
        methods at beta stability. The intention is to advance methods to beta stability after some feedback and
        adoption. To give your feedback on this API, complete the Google Analytics Audience Export API Feedback form.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/audienceExports"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AudienceExport | AudienceExportDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[OperationGoogleAnalyticsPropertiesApi],
            error_mapper=analyticsdata_properties_audience_exports_create_error_mapper,
            request_options=request_options,
        )

    async def analyticsdata_properties_audience_exports_get(
        self, properties_id: str, audience_exports_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AudienceExport, AnalyticsdataPropertiesAudienceExportsGetErrorBody]:
        """Gets configuration metadata about a specific audience export. This method can be used to understand an
        audience export after it has been created. See Creating an Audience Export for an introduction to Audience
        Exports with examples. Audience Export APIs have some methods at alpha and other methods at beta stability. The
        intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on
        this API, complete the Google Analytics Audience Export API Feedback form.

        Args:
            properties_id: Resource name segment (propertiesId).
            audience_exports_id: Resource name segment (audienceExportsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/audienceExports/{audienceExportsId}"),
            path_params=[
                param[str]("propertiesId", properties_id), param[str]("audienceExportsId", audience_exports_id)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[AudienceExport],
            error_mapper=analyticsdata_properties_audience_exports_get_error_mapper,
            request_options=request_options,
        )

    async def analyticsdata_properties_audience_exports_list(
        self,
        properties_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListAudienceExportsResponse, AnalyticsdataPropertiesAudienceExportsListErrorBody]:
        """Lists all audience exports for a property. This method can be used for you to find and reuse existing
        audience exports rather than creating unnecessary new audience exports. The same audience can have multiple
        audience exports that represent the export of users that were in an audience on different days. See Creating an
        Audience Export for an introduction to Audience Exports with examples. Audience Export APIs have some methods at
        alpha and other methods at beta stability. The intention is to advance methods to beta stability after some
        feedback and adoption. To give your feedback on this API, complete the Google Analytics Audience Export API
        Feedback form.

        Args:
            properties_id: Resource name segment (propertiesId).
            page_size: Optional. The maximum number of audience exports to return. The service may return fewer than
                this value. If unspecified, at most 200 audience exports will be returned. The maximum value is 1000
                (higher values will be coerced to the maximum).
            page_token: Optional. A page token, received from a previous ``ListAudienceExports`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListAudienceExports``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/audienceExports"),
            path_params=[param[str]("propertiesId", properties_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[ListAudienceExportsResponse],
            error_mapper=analyticsdata_properties_audience_exports_list_error_mapper,
            request_options=request_options,
        )

    async def analyticsdata_properties_audience_exports_query(
        self,
        properties_id: str,
        audience_exports_id: str,
        body: QueryAudienceExportRequest | QueryAudienceExportRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[QueryAudienceExportResponse, AnalyticsdataPropertiesAudienceExportsQueryErrorBody]:
        """Retrieves an audience export of users. After creating an audience, the users are not immediately available
        for exporting. First, a request to ``CreateAudienceExport`` is necessary to create an audience export of users,
        and then second, this method is used to retrieve the users in the audience export. See Creating an Audience
        Export for an introduction to Audience Exports with examples. Audiences in Google Analytics 4 allow you to
        segment your users in the ways that are important to your business. To learn more, see
        https://support.google.com/analytics/answer/9267572. Audience Export APIs have some methods at alpha and other
        methods at beta stability. The intention is to advance methods to beta stability after some feedback and
        adoption. To give your feedback on this API, complete the Google Analytics Audience Export API Feedback form.

        Args:
            properties_id: Resource name segment (propertiesId).
            audience_exports_id: Resource name segment (audienceExportsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1beta/properties/{propertiesId}/audienceExports/{audienceExportsId}:query"
            ),
            path_params=[
                param[str]("propertiesId", properties_id), param[str]("audienceExportsId", audience_exports_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QueryAudienceExportRequest | QueryAudienceExportRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[QueryAudienceExportResponse],
            error_mapper=analyticsdata_properties_audience_exports_query_error_mapper,
            request_options=request_options,
        )

    async def analyticsdata_properties_batch_run_pivot_reports(
        self,
        properties_id: str,
        body: BatchRunPivotReportsRequest | BatchRunPivotReportsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchRunPivotReportsResponse, AnalyticsdataPropertiesBatchRunPivotReportsErrorBody]:
        """Returns multiple pivot reports in a batch. All reports must be for the same Google Analytics property.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}:batchRunPivotReports"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchRunPivotReportsRequest | BatchRunPivotReportsRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[BatchRunPivotReportsResponse],
            error_mapper=analyticsdata_properties_batch_run_pivot_reports_error_mapper,
            request_options=request_options,
        )

    async def analyticsdata_properties_batch_run_reports(
        self,
        properties_id: str,
        body: BatchRunReportsRequest | BatchRunReportsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchRunReportsResponse, AnalyticsdataPropertiesBatchRunReportsErrorBody]:
        """Returns multiple reports in a batch. All reports must be for the same Google Analytics property.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}:batchRunReports"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchRunReportsRequest | BatchRunReportsRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[BatchRunReportsResponse],
            error_mapper=analyticsdata_properties_batch_run_reports_error_mapper,
            request_options=request_options,
        )

    async def analyticsdata_properties_check_compatibility(
        self,
        properties_id: str,
        body: CheckCompatibilityRequest | CheckCompatibilityRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CheckCompatibilityResponse, AnalyticsdataPropertiesCheckCompatibilityErrorBody]:
        """This compatibility method lists dimensions and metrics that can be added to a report request and maintain
        compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics,
        reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove
        dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core
        reports have different compatibility rules. This method checks compatibility for Core reports.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}:checkCompatibility"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CheckCompatibilityRequest | CheckCompatibilityRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[CheckCompatibilityResponse],
            error_mapper=analyticsdata_properties_check_compatibility_error_mapper,
            request_options=request_options,
        )

    async def analyticsdata_properties_get_metadata(
        self, properties_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Metadata, AnalyticsdataPropertiesGetMetadataErrorBody]:
        """Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions
        and metrics. In this method, a Google Analytics property identifier is specified in the request, and the
        metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom
        metric with parameter name ``levels_unlocked`` is registered to a property, the Metadata response will contain
        ``customEvent:levels_unlocked``. Universal metadata are dimensions and metrics applicable to any property such
        as ``country`` and ``totalUsers``.

        Args:
            properties_id: Resource name segment (propertiesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/properties/{propertiesId}/metadata"),
            path_params=[param[str]("propertiesId", properties_id)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Metadata],
            error_mapper=analyticsdata_properties_get_metadata_error_mapper,
            request_options=request_options,
        )

    async def analyticsdata_properties_run_pivot_report(
        self,
        properties_id: str,
        body: RunPivotReportRequest | RunPivotReportRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RunPivotReportResponse, AnalyticsdataPropertiesRunPivotReportErrorBody]:
        """Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and
        expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in
        a pivot. Multiple pivots can be specified to further dissect your data.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}:runPivotReport"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RunPivotReportRequest | RunPivotReportRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[RunPivotReportResponse],
            error_mapper=analyticsdata_properties_run_pivot_report_error_mapper,
            request_options=request_options,
        )

    async def analyticsdata_properties_run_realtime_report(
        self,
        properties_id: str,
        body: RunRealtimeReportRequest | RunRealtimeReportRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RunRealtimeReportResponse, AnalyticsdataPropertiesRunRealtimeReportErrorBody]:
        """Returns a customized report of realtime event data for your property. Events appear in realtime reports
        seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the
        periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360
        properties). For a guide to constructing realtime requests & understanding responses, see Creating a Realtime
        Report.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}:runRealtimeReport"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RunRealtimeReportRequest | RunRealtimeReportRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[RunRealtimeReportResponse],
            error_mapper=analyticsdata_properties_run_realtime_report_error_mapper,
            request_options=request_options,
        )

    async def analyticsdata_properties_run_report(
        self,
        properties_id: str,
        body: RunReportRequest | RunReportRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RunReportResponse, AnalyticsdataPropertiesRunReportErrorBody]:
        """Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data
        collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for
        the requested dimensions and metrics. Metrics are individual measurements of user activity on your property,
        such as active users or event count. Dimensions break down metrics across some common criteria, such as country
        or event name. For a guide to constructing requests & understanding responses, see Creating a Report.

        Args:
            properties_id: Resource name segment (propertiesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/properties/{propertiesId}:runReport"),
            path_params=[param[str]("propertiesId", properties_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RunReportRequest | RunReportRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[RunReportResponse],
            error_mapper=analyticsdata_properties_run_report_error_mapper,
            request_options=request_options,
        )
