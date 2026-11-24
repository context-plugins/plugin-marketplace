from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    raw_error_response,
    unwrap,
)
from ..models.capability_statement import CapabilityStatement
from ..server.server import Server


class CapabilityStatementApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CapabilityStatementApiWithRawResponse(client, server, auth)

    def get_capability_statement(self, *, request_options: RequestOptionsOrDict | None = None) -> CapabilityStatement:
        """Returns the FHIR R4 CapabilityStatement describing supported resources, search parameters, operations, and
        authentication.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_capability_statement(request_options=request_options))

    @property
    def with_raw_response(self) -> CapabilityStatementApiWithRawResponse:
        return self._with_raw_response


class AsyncCapabilityStatementApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCapabilityStatementApiWithRawResponse(client, server, auth)

    async def get_capability_statement(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CapabilityStatement:
        """Returns the FHIR R4 CapabilityStatement describing supported resources, search parameters, operations, and
        authentication.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_capability_statement(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCapabilityStatementApiWithRawResponse:
        return self._with_raw_response


class CapabilityStatementApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_capability_statement(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CapabilityStatement, RawError]:
        """Returns the FHIR R4 CapabilityStatement describing supported resources, search parameters, operations, and
        authentication.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/metadata"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CapabilityStatement],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncCapabilityStatementApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_capability_statement(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CapabilityStatement, RawError]:
        """Returns the FHIR R4 CapabilityStatement describing supported resources, search parameters, operations, and
        authentication.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/metadata"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CapabilityStatement],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
