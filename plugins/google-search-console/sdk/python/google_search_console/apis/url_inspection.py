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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.searchconsole_url_inspection_index_inspect_error import (
    SearchconsoleUrlInspectionIndexInspectErrorBody,
    searchconsole_url_inspection_index_inspect_error_mapper,
)
from ..models.inspect_url_index_request import InspectUrlIndexRequest, InspectUrlIndexRequestDict
from ..models.inspect_url_index_response import InspectUrlIndexResponse
from ..server.server import Server


class UrlInspection:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UrlInspectionWithRawResponse(client, server, auth)

    def searchconsole_url_inspection_index_inspect(
        self,
        body: InspectUrlIndexRequest | InspectUrlIndexRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> InspectUrlIndexResponse:
        """Index inspection.

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
            self._with_raw_response.searchconsole_url_inspection_index_inspect(body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> UrlInspectionWithRawResponse:
        return self._with_raw_response


class AsyncUrlInspection:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUrlInspectionWithRawResponse(client, server, auth)

    async def searchconsole_url_inspection_index_inspect(
        self,
        body: InspectUrlIndexRequest | InspectUrlIndexRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InspectUrlIndexResponse:
        """Index inspection.

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
            await self._with_raw_response.searchconsole_url_inspection_index_inspect(
                body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncUrlInspectionWithRawResponse:
        return self._with_raw_response


class UrlInspectionWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def searchconsole_url_inspection_index_inspect(
        self,
        body: InspectUrlIndexRequest | InspectUrlIndexRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[InspectUrlIndexResponse, SearchconsoleUrlInspectionIndexInspectErrorBody]:
        """Index inspection.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/urlInspection/index:inspect"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InspectUrlIndexRequest | InspectUrlIndexRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[InspectUrlIndexResponse],
            error_mapper=searchconsole_url_inspection_index_inspect_error_mapper,
            request_options=request_options,
        )


class AsyncUrlInspectionWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def searchconsole_url_inspection_index_inspect(
        self,
        body: InspectUrlIndexRequest | InspectUrlIndexRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InspectUrlIndexResponse, SearchconsoleUrlInspectionIndexInspectErrorBody]:
        """Index inspection.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/urlInspection/index:inspect"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InspectUrlIndexRequest | InspectUrlIndexRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[InspectUrlIndexResponse],
            error_mapper=searchconsole_url_inspection_index_inspect_error_mapper,
            request_options=request_options,
        )
