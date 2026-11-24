from __future__ import annotations

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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.activate_feature_error import ActivateFeatureErrorBody, activate_feature_error_mapper
from ..errors.deactivate_feature_error import DeactivateFeatureErrorBody, deactivate_feature_error_mapper
from ..errors.list_features_error import ListFeaturesErrorBody, list_features_error_mapper
from ..models.companies_api_features_api_microsoft_nav_activate_request import (
    CompaniesApiFeaturesApiMicrosoftNavActivateRequest,
    CompaniesApiFeaturesApiMicrosoftNavActivateRequestDict,
)
from ..models.companies_api_features_response import CompaniesApiFeaturesResponse
from ..server.server import Server


class Features:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FeaturesWithRawResponse(client, server, auth)

    def activate_feature(
        self,
        company_id: UUID,
        feature_id: str,
        *,
        body: (
            CompaniesApiFeaturesApiMicrosoftNavActivateRequest
            | CompaniesApiFeaturesApiMicrosoftNavActivateRequestDict
            | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Activates the specified feature.

        Args:
            company_id: The unique identifier of the company
            feature_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Feature activated

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.activate_feature(company_id, feature_id, body=body, request_options=request_options)
        )

    def deactivate_feature(
        self, company_id: UUID, feature_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deactivates the specified feature.

        Args:
            company_id: The unique identifier of the company
            feature_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Feature deactivated

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.deactivate_feature(company_id, feature_id, request_options=request_options)
        )

    def list_features(
        self, company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesApiFeaturesResponse:
        """Returns a list of features available in feature management.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved features

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.list_features(company_id, request_options=request_options))

    @property
    def with_raw_response(self) -> FeaturesWithRawResponse:
        return self._with_raw_response


class AsyncFeatures:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFeaturesWithRawResponse(client, server, auth)

    async def activate_feature(
        self,
        company_id: UUID,
        feature_id: str,
        *,
        body: (
            CompaniesApiFeaturesApiMicrosoftNavActivateRequest
            | CompaniesApiFeaturesApiMicrosoftNavActivateRequestDict
            | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Activates the specified feature.

        Args:
            company_id: The unique identifier of the company
            feature_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Feature activated

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.activate_feature(
                company_id, feature_id, body=body, request_options=request_options
            ),
        )

    async def deactivate_feature(
        self, company_id: UUID, feature_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deactivates the specified feature.

        Args:
            company_id: The unique identifier of the company
            feature_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Feature deactivated

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.deactivate_feature(company_id, feature_id, request_options=request_options)
        )

    async def list_features(
        self, company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesApiFeaturesResponse:
        """Returns a list of features available in feature management.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved features

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.list_features(company_id, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncFeaturesWithRawResponse:
        return self._with_raw_response


class FeaturesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def activate_feature(
        self,
        company_id: UUID,
        feature_id: str,
        *,
        body: (
            CompaniesApiFeaturesApiMicrosoftNavActivateRequest
            | CompaniesApiFeaturesApiMicrosoftNavActivateRequestDict
            | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ActivateFeatureErrorBody]:
        """Activates the specified feature.

        Args:
            company_id: The unique identifier of the company
            feature_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/features({feature_id})/Microsoft.NAV.activate"
            ),
            path_params=[param[UUID]("company_id", company_id), param[str]("feature_id", feature_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    CompaniesApiFeaturesApiMicrosoftNavActivateRequest
                    | CompaniesApiFeaturesApiMicrosoftNavActivateRequestDict
                    | None
                )
            ](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=empty_response,
            error_mapper=activate_feature_error_mapper,
            request_options=request_options,
        )

    def deactivate_feature(
        self, company_id: UUID, feature_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeactivateFeatureErrorBody]:
        """Deactivates the specified feature.

        Args:
            company_id: The unique identifier of the company
            feature_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/features({feature_id})/Microsoft.NAV.deactivate"
            ),
            path_params=[param[UUID]("company_id", company_id), param[str]("feature_id", feature_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=empty_response,
            error_mapper=deactivate_feature_error_mapper,
            request_options=request_options,
        )

    def list_features(
        self, company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesApiFeaturesResponse, ListFeaturesErrorBody]:
        """Returns a list of features available in feature management.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/features"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[CompaniesApiFeaturesResponse],
            error_mapper=list_features_error_mapper,
            request_options=request_options,
        )


class AsyncFeaturesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def activate_feature(
        self,
        company_id: UUID,
        feature_id: str,
        *,
        body: (
            CompaniesApiFeaturesApiMicrosoftNavActivateRequest
            | CompaniesApiFeaturesApiMicrosoftNavActivateRequestDict
            | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ActivateFeatureErrorBody]:
        """Activates the specified feature.

        Args:
            company_id: The unique identifier of the company
            feature_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/features({feature_id})/Microsoft.NAV.activate"
            ),
            path_params=[param[UUID]("company_id", company_id), param[str]("feature_id", feature_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    CompaniesApiFeaturesApiMicrosoftNavActivateRequest
                    | CompaniesApiFeaturesApiMicrosoftNavActivateRequestDict
                    | None
                )
            ](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_empty_response,
            error_mapper=activate_feature_error_mapper,
            request_options=request_options,
        )

    async def deactivate_feature(
        self, company_id: UUID, feature_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeactivateFeatureErrorBody]:
        """Deactivates the specified feature.

        Args:
            company_id: The unique identifier of the company
            feature_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/features({feature_id})/Microsoft.NAV.deactivate"
            ),
            path_params=[param[UUID]("company_id", company_id), param[str]("feature_id", feature_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_empty_response,
            error_mapper=deactivate_feature_error_mapper,
            request_options=request_options,
        )

    async def list_features(
        self, company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesApiFeaturesResponse, ListFeaturesErrorBody]:
        """Returns a list of features available in feature management.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/features"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[CompaniesApiFeaturesResponse],
            error_mapper=list_features_error_mapper,
            request_options=request_options,
        )
