from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
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
from ..errors.post_management_v1_partner_configuration_by_feature_error import (
    PostManagementV1PartnerConfigurationByFeatureErrorBody,
    post_management_v1_partner_configuration_by_feature_error_mapper,
)
from ..errors.post_management_v1_partner_configurations_error import (
    PostManagementV1PartnerConfigurationsErrorBody,
    post_management_v1_partner_configurations_error_mapper,
)
from ..errors.put_management_v1_partner_configuration_by_feature_error import (
    PutManagementV1PartnerConfigurationByFeatureErrorBody,
    put_management_v1_partner_configuration_by_feature_error_mapper,
)
from ..models.list_partner_configuration_features_request import (
    ListPartnerConfigurationFeaturesRequest,
    ListPartnerConfigurationFeaturesRequestDict,
)
from ..models.list_partner_configuration_features_response import ListPartnerConfigurationFeaturesResponse
from ..models.list_partner_configurations_request import (
    ListPartnerConfigurationsRequest,
    ListPartnerConfigurationsRequestDict,
)
from ..models.list_partner_configurations_response import ListPartnerConfigurationsResponse
from ..models.partner_configuration_feature_output import PartnerConfigurationFeatureOutput
from ..models.upsert_partner_configuration_features_request import (
    UpsertPartnerConfigurationFeaturesRequest,
    UpsertPartnerConfigurationFeaturesRequestDict,
)
from ..server.server import Server


class PartnerConfigurations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PartnerConfigurationsWithRawResponse(client, server, auth)

    def post_management_v1_partner_configuration_by_feature(
        self,
        feature: str,
        *,
        body: ListPartnerConfigurationFeaturesRequest | ListPartnerConfigurationFeaturesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListPartnerConfigurationFeaturesResponse:
        """Get a paginated list of configured features for a given app and partner.

        Args:
            feature: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request input. Check the response for details. Unauthorized Forbidden Internal server error.
                Please try again, or contact us at support@justtrack.io if the error persists. ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_management_v1_partner_configuration_by_feature(
                feature, body=body, request_options=request_options
            ),
        )

    def post_management_v1_partner_configurations(
        self,
        *,
        body: ListPartnerConfigurationsRequest | ListPartnerConfigurationsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListPartnerConfigurationsResponse:
        """Get a paginated list of keys used to configure features for the partners that are available to your
        organization. You configure the values for each of these keys with the Update configurations API.

        :::warning

        When you configure a partner feature, you must provide values for all keys associated with that feature from
        this API. Without them, justtrack wouldn't be able to successfully operate or integrate with the partner.

        :::

        A configuration key may appear for multiple features. **You must provide a value for each feature.**

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request input. Check the response for details. Unauthorized Internal server error. Please try
                again, or contact us at support@justtrack.io if the error persists. ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.post_management_v1_partner_configurations(
                body=body, request_options=request_options
            ),
        )

    def put_management_v1_partner_configuration_by_feature(
        self,
        feature: str,
        *,
        body: UpsertPartnerConfigurationFeaturesRequest | UpsertPartnerConfigurationFeaturesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[PartnerConfigurationFeatureOutput]:
        """Configure a feature for a given app and partner.

        :::warning

        You must provide values for all keys listed by List partner configurations.

        :::

        :::info

        For attribution viewEventTimeFrame and clickEventTimeFrame, use ISO8601 duration-only format, i.e. ``P1DT0H0M``

        :::

        Args:
            feature: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request input. Check the response for details. Unauthorized Forbidden Internal server error.
                Please try again, or contact us at support@justtrack.io if the error persists. ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.put_management_v1_partner_configuration_by_feature(
                feature, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> PartnerConfigurationsWithRawResponse:
        return self._with_raw_response


class AsyncPartnerConfigurations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPartnerConfigurationsWithRawResponse(client, server, auth)

    async def post_management_v1_partner_configuration_by_feature(
        self,
        feature: str,
        *,
        body: ListPartnerConfigurationFeaturesRequest | ListPartnerConfigurationFeaturesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListPartnerConfigurationFeaturesResponse:
        """Get a paginated list of configured features for a given app and partner.

        Args:
            feature: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request input. Check the response for details. Unauthorized Forbidden Internal server error.
                Please try again, or contact us at support@justtrack.io if the error persists. ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_management_v1_partner_configuration_by_feature(
                feature, body=body, request_options=request_options
            ),
        )

    async def post_management_v1_partner_configurations(
        self,
        *,
        body: ListPartnerConfigurationsRequest | ListPartnerConfigurationsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListPartnerConfigurationsResponse:
        """Get a paginated list of keys used to configure features for the partners that are available to your
        organization. You configure the values for each of these keys with the Update configurations API.

        :::warning

        When you configure a partner feature, you must provide values for all keys associated with that feature from
        this API. Without them, justtrack wouldn't be able to successfully operate or integrate with the partner.

        :::

        A configuration key may appear for multiple features. **You must provide a value for each feature.**

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request input. Check the response for details. Unauthorized Internal server error. Please try
                again, or contact us at support@justtrack.io if the error persists. ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.post_management_v1_partner_configurations(
                body=body, request_options=request_options
            ),
        )

    async def put_management_v1_partner_configuration_by_feature(
        self,
        feature: str,
        *,
        body: UpsertPartnerConfigurationFeaturesRequest | UpsertPartnerConfigurationFeaturesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[PartnerConfigurationFeatureOutput]:
        """Configure a feature for a given app and partner.

        :::warning

        You must provide values for all keys listed by List partner configurations.

        :::

        :::info

        For attribution viewEventTimeFrame and clickEventTimeFrame, use ISO8601 duration-only format, i.e. ``P1DT0H0M``

        :::

        Args:
            feature: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request input. Check the response for details. Unauthorized Forbidden Internal server error.
                Please try again, or contact us at support@justtrack.io if the error persists. ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.put_management_v1_partner_configuration_by_feature(
                feature, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPartnerConfigurationsWithRawResponse:
        return self._with_raw_response


class PartnerConfigurationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def post_management_v1_partner_configuration_by_feature(
        self,
        feature: str,
        *,
        body: ListPartnerConfigurationFeaturesRequest | ListPartnerConfigurationFeaturesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListPartnerConfigurationFeaturesResponse, PostManagementV1PartnerConfigurationByFeatureErrorBody]:
        """Get a paginated list of configured features for a given app and partner.

        Args:
            feature: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_management_app_partner_connection_api(
                "/management/v1/partner-configuration/{feature}"
            ),
            path_params=[param[str]("feature", feature)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ListPartnerConfigurationFeaturesRequest | ListPartnerConfigurationFeaturesRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ListPartnerConfigurationFeaturesResponse],
            error_mapper=post_management_v1_partner_configuration_by_feature_error_mapper,
            request_options=request_options,
        )

    def post_management_v1_partner_configurations(
        self,
        *,
        body: ListPartnerConfigurationsRequest | ListPartnerConfigurationsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListPartnerConfigurationsResponse, PostManagementV1PartnerConfigurationsErrorBody]:
        """Get a paginated list of keys used to configure features for the partners that are available to your
        organization. You configure the values for each of these keys with the Update configurations API.

        :::warning

        When you configure a partner feature, you must provide values for all keys associated with that feature from
        this API. Without them, justtrack wouldn't be able to successfully operate or integrate with the partner.

        :::

        A configuration key may appear for multiple features. **You must provide a value for each feature.**

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_management_app_partner_connection_api(
                "/management/v1/partner-configurations"
            ),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListPartnerConfigurationsRequest | ListPartnerConfigurationsRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ListPartnerConfigurationsResponse],
            error_mapper=post_management_v1_partner_configurations_error_mapper,
            request_options=request_options,
        )

    def put_management_v1_partner_configuration_by_feature(
        self,
        feature: str,
        *,
        body: UpsertPartnerConfigurationFeaturesRequest | UpsertPartnerConfigurationFeaturesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[PartnerConfigurationFeatureOutput], PutManagementV1PartnerConfigurationByFeatureErrorBody]:
        """Configure a feature for a given app and partner.

        :::warning

        You must provide values for all keys listed by List partner configurations.

        :::

        :::info

        For attribution viewEventTimeFrame and clickEventTimeFrame, use ISO8601 duration-only format, i.e. ``P1DT0H0M``

        :::

        Args:
            feature: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_management_app_partner_connection_api(
                "/management/v1/partner-configuration/{feature}"
            ),
            path_params=[param[str]("feature", feature)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                UpsertPartnerConfigurationFeaturesRequest | UpsertPartnerConfigurationFeaturesRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[PartnerConfigurationFeatureOutput]],
            error_mapper=put_management_v1_partner_configuration_by_feature_error_mapper,
            request_options=request_options,
        )


class AsyncPartnerConfigurationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def post_management_v1_partner_configuration_by_feature(
        self,
        feature: str,
        *,
        body: ListPartnerConfigurationFeaturesRequest | ListPartnerConfigurationFeaturesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListPartnerConfigurationFeaturesResponse, PostManagementV1PartnerConfigurationByFeatureErrorBody]:
        """Get a paginated list of configured features for a given app and partner.

        Args:
            feature: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_management_app_partner_connection_api(
                "/management/v1/partner-configuration/{feature}"
            ),
            path_params=[param[str]("feature", feature)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ListPartnerConfigurationFeaturesRequest | ListPartnerConfigurationFeaturesRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ListPartnerConfigurationFeaturesResponse],
            error_mapper=post_management_v1_partner_configuration_by_feature_error_mapper,
            request_options=request_options,
        )

    async def post_management_v1_partner_configurations(
        self,
        *,
        body: ListPartnerConfigurationsRequest | ListPartnerConfigurationsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListPartnerConfigurationsResponse, PostManagementV1PartnerConfigurationsErrorBody]:
        """Get a paginated list of keys used to configure features for the partners that are available to your
        organization. You configure the values for each of these keys with the Update configurations API.

        :::warning

        When you configure a partner feature, you must provide values for all keys associated with that feature from
        this API. Without them, justtrack wouldn't be able to successfully operate or integrate with the partner.

        :::

        A configuration key may appear for multiple features. **You must provide a value for each feature.**

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_management_app_partner_connection_api(
                "/management/v1/partner-configurations"
            ),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListPartnerConfigurationsRequest | ListPartnerConfigurationsRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ListPartnerConfigurationsResponse],
            error_mapper=post_management_v1_partner_configurations_error_mapper,
            request_options=request_options,
        )

    async def put_management_v1_partner_configuration_by_feature(
        self,
        feature: str,
        *,
        body: UpsertPartnerConfigurationFeaturesRequest | UpsertPartnerConfigurationFeaturesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[PartnerConfigurationFeatureOutput], PutManagementV1PartnerConfigurationByFeatureErrorBody]:
        """Configure a feature for a given app and partner.

        :::warning

        You must provide values for all keys listed by List partner configurations.

        :::

        :::info

        For attribution viewEventTimeFrame and clickEventTimeFrame, use ISO8601 duration-only format, i.e. ``P1DT0H0M``

        :::

        Args:
            feature: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_management_app_partner_connection_api(
                "/management/v1/partner-configuration/{feature}"
            ),
            path_params=[param[str]("feature", feature)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                UpsertPartnerConfigurationFeaturesRequest | UpsertPartnerConfigurationFeaturesRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[PartnerConfigurationFeatureOutput]],
            error_mapper=put_management_v1_partner_configuration_by_feature_error_mapper,
            request_options=request_options,
        )
