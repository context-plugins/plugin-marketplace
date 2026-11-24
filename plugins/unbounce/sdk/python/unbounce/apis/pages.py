from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..models.page import Page
from ..models.page_collection import PageCollection
from ..models.pages_form_fields_response import PagesFormFieldsResponse
from ..server.server import Server


class Pages:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PagesWithRawResponse(client, server, auth)

    def get_page(self, page_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Page:
        """Send a ``GET`` request.

        Args:
            page_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Page

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_page(page_id, request_options=request_options))

    def list_account_pages(
        self, account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PageCollection:
        """Send a ``GET`` request.

        Args:
            account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Page collection

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_account_pages(account_id, request_options=request_options))

    def list_form_fields(
        self, page_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PagesFormFieldsResponse:
        """Send a ``GET`` request.

        Args:
            page_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Form field collection

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_form_fields(page_id, request_options=request_options))

    def list_pages(self, *, request_options: RequestOptionsOrDict | None = None) -> PageCollection:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Page collection

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_pages(request_options=request_options))

    def list_pages_for_domain(
        self, domain_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PageCollection:
        """Send a ``GET`` request.

        Args:
            domain_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Page collection

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_pages_for_domain(domain_id, request_options=request_options))

    def list_sub_account_pages(
        self, sub_account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PageCollection:
        """Send a ``GET`` request.

        Args:
            sub_account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Page collection

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_sub_account_pages(sub_account_id, request_options=request_options))

    @property
    def with_raw_response(self) -> PagesWithRawResponse:
        return self._with_raw_response


class AsyncPages:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPagesWithRawResponse(client, server, auth)

    async def get_page(self, page_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Page:
        """Send a ``GET`` request.

        Args:
            page_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Page

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_page(page_id, request_options=request_options))

    async def list_account_pages(
        self, account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PageCollection:
        """Send a ``GET`` request.

        Args:
            account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Page collection

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_account_pages(account_id, request_options=request_options))

    async def list_form_fields(
        self, page_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PagesFormFieldsResponse:
        """Send a ``GET`` request.

        Args:
            page_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Form field collection

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_form_fields(page_id, request_options=request_options))

    async def list_pages(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> PageCollection:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Page collection

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_pages(request_options=request_options))

    async def list_pages_for_domain(
        self, domain_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PageCollection:
        """Send a ``GET`` request.

        Args:
            domain_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Page collection

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_pages_for_domain(domain_id, request_options=request_options))

    async def list_sub_account_pages(
        self, sub_account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PageCollection:
        """Send a ``GET`` request.

        Args:
            sub_account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Page collection

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_sub_account_pages(sub_account_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncPagesWithRawResponse:
        return self._with_raw_response


class PagesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_page(
        self, page_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Page, RawError]:
        """Send a ``GET`` request.

        Args:
            page_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/pages/{page_id}"),
            path_params=[param[str]("page_id", page_id)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=json_decoder[Page],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_account_pages(
        self, account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PageCollection, RawError]:
        """Send a ``GET`` request.

        Args:
            account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/accounts/{account_id}/pages"),
            path_params=[param[str]("account_id", account_id)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=json_decoder[PageCollection],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_form_fields(
        self, page_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PagesFormFieldsResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            page_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/pages/{page_id}/form_fields"),
            path_params=[param[str]("page_id", page_id)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=json_decoder[PagesFormFieldsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_pages(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PageCollection, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/pages"),
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=json_decoder[PageCollection],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_pages_for_domain(
        self, domain_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PageCollection, RawError]:
        """Send a ``GET`` request.

        Args:
            domain_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/domains/{domain_id}/pages"),
            path_params=[param[str]("domain_id", domain_id)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=json_decoder[PageCollection],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_sub_account_pages(
        self, sub_account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PageCollection, RawError]:
        """Send a ``GET`` request.

        Args:
            sub_account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sub_accounts/{sub_account_id}/pages"),
            path_params=[param[str]("sub_account_id", sub_account_id)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=json_decoder[PageCollection],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncPagesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_page(
        self, page_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Page, RawError]:
        """Send a ``GET`` request.

        Args:
            page_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/pages/{page_id}"),
            path_params=[param[str]("page_id", page_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=async_json_decoder[Page],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_account_pages(
        self, account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PageCollection, RawError]:
        """Send a ``GET`` request.

        Args:
            account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/accounts/{account_id}/pages"),
            path_params=[param[str]("account_id", account_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=async_json_decoder[PageCollection],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_form_fields(
        self, page_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PagesFormFieldsResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            page_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/pages/{page_id}/form_fields"),
            path_params=[param[str]("page_id", page_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=async_json_decoder[PagesFormFieldsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_pages(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PageCollection, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/pages"),
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=async_json_decoder[PageCollection],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_pages_for_domain(
        self, domain_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PageCollection, RawError]:
        """Send a ``GET`` request.

        Args:
            domain_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/domains/{domain_id}/pages"),
            path_params=[param[str]("domain_id", domain_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=async_json_decoder[PageCollection],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_sub_account_pages(
        self, sub_account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PageCollection, RawError]:
        """Send a ``GET`` request.

        Args:
            sub_account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sub_accounts/{sub_account_id}/pages"),
            path_params=[param[str]("sub_account_id", sub_account_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=async_json_decoder[PageCollection],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
