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
from ..errors.seal_document_error import SealDocumentErrorBody, seal_document_error_mapper
from ..models.create_seal_request import CreateSealRequest, CreateSealRequestDict
from ..models.create_seal_response import CreateSealResponse
from ..server.server import Server


class Seal:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SealWithRawResponse(client, server, auth)

    def seal_document(
        self, body: CreateSealRequest | CreateSealRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> CreateSealResponse:
        """Uploads a document and affixes an electronic seal in a single call.

        Optionally, a visual signature can also be placed on the document.

        The response contains the ``document_id`` of the newly created sealed document, which can be used to retrieve
        it.

        Args:
            body: Content base64-encoded in a JSON object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Not acceptable Too many requests Internal server error
                Service unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(self._with_raw_response.seal_document(body, request_options=request_options))

    @property
    def with_raw_response(self) -> SealWithRawResponse:
        return self._with_raw_response


class AsyncSeal:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSealWithRawResponse(client, server, auth)

    async def seal_document(
        self,
        body: CreateSealRequest | CreateSealRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateSealResponse:
        """Uploads a document and affixes an electronic seal in a single call.

        Optionally, a visual signature can also be placed on the document.

        The response contains the ``document_id`` of the newly created sealed document, which can be used to retrieve
        it.

        Args:
            body: Content base64-encoded in a JSON object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Not acceptable Too many requests Internal server error
                Service unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(await self._with_raw_response.seal_document(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSealWithRawResponse:
        return self._with_raw_response


class SealWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def seal_document(
        self, body: CreateSealRequest | CreateSealRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CreateSealResponse, SealDocumentErrorBody]:
        """Uploads a document and affixes an electronic seal in a single call.

        Optionally, a visual signature can also be placed on the document.

        The response contains the ``document_id`` of the newly created sealed document, which can be used to retrieve
        it.

        Args:
            body: Content base64-encoded in a JSON object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_seal_api("/seal"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateSealRequest | CreateSealRequestDict](body),
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[CreateSealResponse],
            error_mapper=seal_document_error_mapper,
            request_options=request_options,
        )


class AsyncSealWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def seal_document(
        self,
        body: CreateSealRequest | CreateSealRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateSealResponse, SealDocumentErrorBody]:
        """Uploads a document and affixes an electronic seal in a single call.

        Optionally, a visual signature can also be placed on the document.

        The response contains the ``document_id`` of the newly created sealed document, which can be used to retrieve
        it.

        Args:
            body: Content base64-encoded in a JSON object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_seal_api("/seal"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateSealRequest | CreateSealRequestDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[CreateSealResponse],
            error_mapper=seal_document_error_mapper,
            request_options=request_options,
        )
