from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileResponse,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_file_decoder,
    file_decoder,
    json_body,
    param,
    raw_error_response,
    unwrap,
)
from ..models.product_unit import ProductUnit, ProductUnitDict
from ..server.server import Server


class ProductUnitApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProductUnitApiWithRawResponse(client, server, auth)

    def product_unit_create_product_unit(
        self, culture: str, body: ProductUnit | ProductUnitDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A ``FileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.product_unit_create_product_unit(culture, body, request_options=request_options)
        )

    def product_unit_delete_product_unit(
        self, id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A ``FileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.product_unit_delete_product_unit(id_, culture, request_options=request_options)
        )

    def product_unit_get_product_unit_list(
        self, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A ``FileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.product_unit_get_product_unit_list(culture, request_options=request_options)
        )

    def product_unit_update_product_unit(
        self,
        id_: int,
        culture: str,
        body: ProductUnit | ProductUnitDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FileResponse:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A ``FileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.product_unit_update_product_unit(
                id_, culture, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ProductUnitApiWithRawResponse:
        return self._with_raw_response


class AsyncProductUnitApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProductUnitApiWithRawResponse(client, server, auth)

    async def product_unit_create_product_unit(
        self,
        culture: str,
        body: ProductUnit | ProductUnitDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncFileResponse:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``AsyncFileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.product_unit_create_product_unit(
                culture, body, request_options=request_options
            ),
        )

    async def product_unit_delete_product_unit(
        self, id_: int, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``AsyncFileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.product_unit_delete_product_unit(
                id_, culture, request_options=request_options
            ),
        )

    async def product_unit_get_product_unit_list(
        self, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``AsyncFileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.product_unit_get_product_unit_list(culture, request_options=request_options)
        )

    async def product_unit_update_product_unit(
        self,
        id_: int,
        culture: str,
        body: ProductUnit | ProductUnitDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncFileResponse:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``AsyncFileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.product_unit_update_product_unit(
                id_, culture, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncProductUnitApiWithRawResponse:
        return self._with_raw_response


class ProductUnitApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def product_unit_create_product_unit(
        self, culture: str, body: ProductUnit | ProductUnitDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/products/units"),
            path_params=[param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProductUnit | ProductUnitDict](body),
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def product_unit_delete_product_unit(
        self, id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/{culture}/products/units/{id}"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def product_unit_get_product_unit_list(
        self, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/products/units"),
            path_params=[param[str]("culture", culture)],
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def product_unit_update_product_unit(
        self,
        id_: int,
        culture: str,
        body: ProductUnit | ProductUnitDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/{culture}/products/units/{id}"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProductUnit | ProductUnitDict](body),
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncProductUnitApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def product_unit_create_product_unit(
        self,
        culture: str,
        body: ProductUnit | ProductUnitDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/products/units"),
            path_params=[param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProductUnit | ProductUnitDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def product_unit_delete_product_unit(
        self, id_: int, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/{culture}/products/units/{id}"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def product_unit_get_product_unit_list(
        self, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/products/units"),
            path_params=[param[str]("culture", culture)],
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def product_unit_update_product_unit(
        self,
        id_: int,
        culture: str,
        body: ProductUnit | ProductUnitDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/{culture}/products/units/{id}"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProductUnit | ProductUnitDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )
