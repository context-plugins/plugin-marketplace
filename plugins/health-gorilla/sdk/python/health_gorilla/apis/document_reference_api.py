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
    param,
    raw_error_response,
    unwrap,
)
from ..models.bundle import Bundle
from ..models.document_reference import DocumentReference
from ..server.server import Server


class DocumentReferenceApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DocumentReferenceApiWithRawResponse(client, server, auth)

    def read_document_reference(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DocumentReference:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.read_document_reference(id_, request_options=request_options))

    def search_document_references(
        self,
        *,
        patient: str | None = None,
        type_: str | None = None,
        count: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Bundle:
        """Send a ``GET`` request.

        Args:
            patient: Reference to the subject Patient (e.g. Patient/{id}).
            type_: Value sent with the request.
            count: Number of results per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A FHIR Bundle of DocumentReference resources.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.search_document_references(
                patient=patient, type_=type_, count=count, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> DocumentReferenceApiWithRawResponse:
        return self._with_raw_response


class AsyncDocumentReferenceApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDocumentReferenceApiWithRawResponse(client, server, auth)

    async def read_document_reference(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DocumentReference:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.read_document_reference(id_, request_options=request_options))

    async def search_document_references(
        self,
        *,
        patient: str | None = None,
        type_: str | None = None,
        count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Bundle:
        """Send a ``GET`` request.

        Args:
            patient: Reference to the subject Patient (e.g. Patient/{id}).
            type_: Value sent with the request.
            count: Number of results per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A FHIR Bundle of DocumentReference resources.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.search_document_references(
                patient=patient, type_=type_, count=count, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncDocumentReferenceApiWithRawResponse:
        return self._with_raw_response


class DocumentReferenceApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def read_document_reference(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DocumentReference, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/DocumentReference/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DocumentReference],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def search_document_references(
        self,
        *,
        patient: str | None = None,
        type_: str | None = None,
        count: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Bundle, RawError]:
        """Send a ``GET`` request.

        Args:
            patient: Reference to the subject Patient (e.g. Patient/{id}).
            type_: Value sent with the request.
            count: Number of results per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/DocumentReference"),
            query_params=[
                param[str | None]("patient", patient),
                param[str | None]("type", type_),
                param[int | None]("_count", count),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Bundle],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncDocumentReferenceApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def read_document_reference(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DocumentReference, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/DocumentReference/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DocumentReference],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def search_document_references(
        self,
        *,
        patient: str | None = None,
        type_: str | None = None,
        count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Bundle, RawError]:
        """Send a ``GET`` request.

        Args:
            patient: Reference to the subject Patient (e.g. Patient/{id}).
            type_: Value sent with the request.
            count: Number of results per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/DocumentReference"),
            query_params=[
                param[str | None]("patient", patient),
                param[str | None]("type", type_),
                param[int | None]("_count", count),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Bundle],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
