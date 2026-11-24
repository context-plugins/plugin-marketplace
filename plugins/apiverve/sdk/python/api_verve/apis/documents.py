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
from ..errors.htmltopdf_error import HtmltopdfErrorBody, htmltopdf_error_mapper
from ..errors.invoicegenerator_error import InvoicegeneratorErrorBody, invoicegenerator_error_mapper
from ..errors.websitetopdf_error import WebsitetopdfErrorBody, websitetopdf_error_mapper
from ..models.v1_htmltopdf_request import V1HtmltopdfRequest, V1HtmltopdfRequestDict
from ..models.v1_htmltopdf_response import V1HtmltopdfResponse
from ..models.v1_invoicegenerator_request import V1InvoicegeneratorRequest, V1InvoicegeneratorRequestDict
from ..models.v1_invoicegenerator_response import V1InvoicegeneratorResponse
from ..models.v1_websitetopdf_request import V1WebsitetopdfRequest, V1WebsitetopdfRequestDict
from ..models.v1_websitetopdf_response import V1WebsitetopdfResponse
from ..server.server import Server


class Documents:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DocumentsWithRawResponse(client, server, auth)

    def htmltopdf(
        self, body: V1HtmltopdfRequest | V1HtmltopdfRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1HtmltopdfResponse:
        """Convert HTML content to a PDF file

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.htmltopdf(body, request_options=request_options))

    def invoicegenerator(
        self,
        body: V1InvoicegeneratorRequest | V1InvoicegeneratorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1InvoicegeneratorResponse:
        """Generate an invoice

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.invoicegenerator(body, request_options=request_options))

    def websitetopdf(
        self,
        body: V1WebsitetopdfRequest | V1WebsitetopdfRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1WebsitetopdfResponse:
        """Convert a website to a PDF file

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.websitetopdf(body, request_options=request_options))

    @property
    def with_raw_response(self) -> DocumentsWithRawResponse:
        return self._with_raw_response


class AsyncDocuments:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDocumentsWithRawResponse(client, server, auth)

    async def htmltopdf(
        self,
        body: V1HtmltopdfRequest | V1HtmltopdfRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1HtmltopdfResponse:
        """Convert HTML content to a PDF file

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.htmltopdf(body, request_options=request_options))

    async def invoicegenerator(
        self,
        body: V1InvoicegeneratorRequest | V1InvoicegeneratorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1InvoicegeneratorResponse:
        """Generate an invoice

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.invoicegenerator(body, request_options=request_options))

    async def websitetopdf(
        self,
        body: V1WebsitetopdfRequest | V1WebsitetopdfRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1WebsitetopdfResponse:
        """Convert a website to a PDF file

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.websitetopdf(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDocumentsWithRawResponse:
        return self._with_raw_response


class DocumentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def htmltopdf(
        self, body: V1HtmltopdfRequest | V1HtmltopdfRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1HtmltopdfResponse, HtmltopdfErrorBody]:
        """Convert HTML content to a PDF file

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/htmltopdf"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1HtmltopdfRequest | V1HtmltopdfRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1HtmltopdfResponse],
            error_mapper=htmltopdf_error_mapper,
            request_options=request_options,
        )

    def invoicegenerator(
        self,
        body: V1InvoicegeneratorRequest | V1InvoicegeneratorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1InvoicegeneratorResponse, InvoicegeneratorErrorBody]:
        """Generate an invoice

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/invoicegenerator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1InvoicegeneratorRequest | V1InvoicegeneratorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1InvoicegeneratorResponse],
            error_mapper=invoicegenerator_error_mapper,
            request_options=request_options,
        )

    def websitetopdf(
        self,
        body: V1WebsitetopdfRequest | V1WebsitetopdfRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WebsitetopdfResponse, WebsitetopdfErrorBody]:
        """Convert a website to a PDF file

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/websitetopdf"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1WebsitetopdfRequest | V1WebsitetopdfRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1WebsitetopdfResponse],
            error_mapper=websitetopdf_error_mapper,
            request_options=request_options,
        )


class AsyncDocumentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def htmltopdf(
        self,
        body: V1HtmltopdfRequest | V1HtmltopdfRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1HtmltopdfResponse, HtmltopdfErrorBody]:
        """Convert HTML content to a PDF file

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/htmltopdf"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1HtmltopdfRequest | V1HtmltopdfRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1HtmltopdfResponse],
            error_mapper=htmltopdf_error_mapper,
            request_options=request_options,
        )

    async def invoicegenerator(
        self,
        body: V1InvoicegeneratorRequest | V1InvoicegeneratorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1InvoicegeneratorResponse, InvoicegeneratorErrorBody]:
        """Generate an invoice

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/invoicegenerator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1InvoicegeneratorRequest | V1InvoicegeneratorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1InvoicegeneratorResponse],
            error_mapper=invoicegenerator_error_mapper,
            request_options=request_options,
        )

    async def websitetopdf(
        self,
        body: V1WebsitetopdfRequest | V1WebsitetopdfRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WebsitetopdfResponse, WebsitetopdfErrorBody]:
        """Convert a website to a PDF file

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/websitetopdf"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1WebsitetopdfRequest | V1WebsitetopdfRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1WebsitetopdfResponse],
            error_mapper=websitetopdf_error_mapper,
            request_options=request_options,
        )
