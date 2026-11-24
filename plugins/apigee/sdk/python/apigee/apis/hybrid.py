from __future__ import annotations

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
    json_decoder,
    unwrap,
)
from ..errors.apigee_hybrid_issuers_list_error import (
    ApigeeHybridIssuersListErrorBody,
    apigee_hybrid_issuers_list_error_mapper,
)
from ..models.google_cloud_apigee_v1_list_hybrid_issuers_response import GoogleCloudApigeeV1ListHybridIssuersResponse
from ..server.server import Server


class Hybrid:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = HybridWithRawResponse(client, server, auth)

    def apigee_hybrid_issuers_list(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> GoogleCloudApigeeV1ListHybridIssuersResponse:
        """Lists hybrid services and its trusted issuers service account ids. This api is authenticated and
        unauthorized(allow all the users) and used by runtime authn-authz service to query control plane's issuer
        service account ids.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(self._with_raw_response.apigee_hybrid_issuers_list(request_options=request_options))

    @property
    def with_raw_response(self) -> HybridWithRawResponse:
        return self._with_raw_response


class AsyncHybrid:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncHybridWithRawResponse(client, server, auth)

    async def apigee_hybrid_issuers_list(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GoogleCloudApigeeV1ListHybridIssuersResponse:
        """Lists hybrid services and its trusted issuers service account ids. This api is authenticated and
        unauthorized(allow all the users) and used by runtime authn-authz service to query control plane's issuer
        service account ids.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(await self._with_raw_response.apigee_hybrid_issuers_list(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncHybridWithRawResponse:
        return self._with_raw_response


class HybridWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def apigee_hybrid_issuers_list(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleCloudApigeeV1ListHybridIssuersResponse, ApigeeHybridIssuersListErrorBody]:
        """Lists hybrid services and its trusted issuers service account ids. This api is authenticated and
        unauthorized(allow all the users) and used by runtime authn-authz service to query control plane's issuer
        service account ids.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/hybrid/issuers"),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApigeeV1ListHybridIssuersResponse],
            error_mapper=apigee_hybrid_issuers_list_error_mapper,
            request_options=request_options,
        )


class AsyncHybridWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def apigee_hybrid_issuers_list(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleCloudApigeeV1ListHybridIssuersResponse, ApigeeHybridIssuersListErrorBody]:
        """Lists hybrid services and its trusted issuers service account ids. This api is authenticated and
        unauthorized(allow all the users) and used by runtime authn-authz service to query control plane's issuer
        service account ids.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/hybrid/issuers"),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApigeeV1ListHybridIssuersResponse],
            error_mapper=apigee_hybrid_issuers_list_error_mapper,
            request_options=request_options,
        )
