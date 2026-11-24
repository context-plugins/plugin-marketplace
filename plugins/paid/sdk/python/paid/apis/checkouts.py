from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.archive_checkout_error import ArchiveCheckoutErrorBody, archive_checkout_error_mapper
from ..errors.create_checkout_error import CreateCheckoutErrorBody, create_checkout_error_mapper
from ..errors.get_checkout_error import GetCheckoutErrorBody, get_checkout_error_mapper
from ..errors.list_checkouts_error import ListCheckoutsErrorBody, list_checkouts_error_mapper
from ..models.checkout import Checkout
from ..models.checkout_details import CheckoutDetails
from ..models.checkout_list_response import CheckoutListResponse
from ..models.create_checkout_request import CreateCheckoutRequest, CreateCheckoutRequestDict
from ..models.enums.checkouts_get_parameters_status import CheckoutsGetParametersStatusOrStr
from ..server.server import Server


class Checkouts:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = CheckoutsWithRawResponse(client, server)

    def archive_checkout(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Archive a checkout by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.archive_checkout(id_, authorization, request_options=request_options))

    def create_checkout(
        self,
        authorization: str,
        *,
        body: CreateCheckoutRequest | CreateCheckoutRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Checkout:
        """Creates a checkout link that generates a URL for a customer to complete a purchase

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.create_checkout(authorization, body=body, request_options=request_options)
        )

    def get_checkout(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CheckoutDetails:
        """Get a checkout by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_checkout(id_, authorization, request_options=request_options))

    def list_checkouts(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        status: CheckoutsGetParametersStatusOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CheckoutListResponse:
        """Get a list of checkouts for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_checkouts(
                authorization, limit=limit, offset=offset, status=status, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> CheckoutsWithRawResponse:
        return self._with_raw_response


class AsyncCheckouts:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncCheckoutsWithRawResponse(client, server)

    async def archive_checkout(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Archive a checkout by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.archive_checkout(id_, authorization, request_options=request_options)
        )

    async def create_checkout(
        self,
        authorization: str,
        *,
        body: CreateCheckoutRequest | CreateCheckoutRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Checkout:
        """Creates a checkout link that generates a URL for a customer to complete a purchase

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_checkout(authorization, body=body, request_options=request_options)
        )

    async def get_checkout(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CheckoutDetails:
        """Get a checkout by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_checkout(id_, authorization, request_options=request_options))

    async def list_checkouts(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        status: CheckoutsGetParametersStatusOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CheckoutListResponse:
        """Get a list of checkouts for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_checkouts(
                authorization, limit=limit, offset=offset, status=status, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCheckoutsWithRawResponse:
        return self._with_raw_response


class CheckoutsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def archive_checkout(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, ArchiveCheckoutErrorBody]:
        """Archive a checkout by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_reference_analytics_experimental_api("/checkouts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=archive_checkout_error_mapper,
            request_options=request_options,
        )

    def create_checkout(
        self,
        authorization: str,
        *,
        body: CreateCheckoutRequest | CreateCheckoutRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Checkout, CreateCheckoutErrorBody]:
        """Creates a checkout link that generates a URL for a customer to complete a purchase

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/checkouts/"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCheckoutRequest | CreateCheckoutRequestDict | None](body),
            decoder=json_decoder[Checkout],
            error_mapper=create_checkout_error_mapper,
            request_options=request_options,
        )

    def get_checkout(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CheckoutDetails, GetCheckoutErrorBody]:
        """Get a checkout by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/checkouts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[CheckoutDetails],
            error_mapper=get_checkout_error_mapper,
            request_options=request_options,
        )

    def list_checkouts(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        status: CheckoutsGetParametersStatusOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CheckoutListResponse, ListCheckoutsErrorBody]:
        """Get a list of checkouts for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/checkouts/"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[CheckoutsGetParametersStatusOrStr | None]("status", status),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[CheckoutListResponse],
            error_mapper=list_checkouts_error_mapper,
            request_options=request_options,
        )


class AsyncCheckoutsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def archive_checkout(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, ArchiveCheckoutErrorBody]:
        """Archive a checkout by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_reference_analytics_experimental_api("/checkouts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=archive_checkout_error_mapper,
            request_options=request_options,
        )

    async def create_checkout(
        self,
        authorization: str,
        *,
        body: CreateCheckoutRequest | CreateCheckoutRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Checkout, CreateCheckoutErrorBody]:
        """Creates a checkout link that generates a URL for a customer to complete a purchase

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/checkouts/"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCheckoutRequest | CreateCheckoutRequestDict | None](body),
            decoder=async_json_decoder[Checkout],
            error_mapper=create_checkout_error_mapper,
            request_options=request_options,
        )

    async def get_checkout(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CheckoutDetails, GetCheckoutErrorBody]:
        """Get a checkout by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/checkouts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[CheckoutDetails],
            error_mapper=get_checkout_error_mapper,
            request_options=request_options,
        )

    async def list_checkouts(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        status: CheckoutsGetParametersStatusOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CheckoutListResponse, ListCheckoutsErrorBody]:
        """Get a list of checkouts for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/checkouts/"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[CheckoutsGetParametersStatusOrStr | None]("status", status),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[CheckoutListResponse],
            error_mapper=list_checkouts_error_mapper,
            request_options=request_options,
        )
