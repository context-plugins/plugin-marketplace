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
from ..errors.get_checkout_session_error import GetCheckoutSessionErrorBody, get_checkout_session_error_mapper
from ..errors.post_checkout_session_error import PostCheckoutSessionErrorBody, post_checkout_session_error_mapper
from ..models.api_v2_checkout_request import ApiV2CheckoutRequest, ApiV2CheckoutRequestDict
from ..models.checkout_session import CheckoutSession
from ..server.server import Server


class Checkout:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CheckoutWithRawResponse(client, server, auth)

    def get_checkout_session(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> CheckoutSession:
        """Use this API to retrieve the token (only if tokens used in your integration )

        Args:
            id_: ID of the session.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Checkout session object is returned.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You tried to perform an action which is forbidden. You are using an incorrect ID. Something
                bad happened. We're notified. ``error`` is ``Error400 | Error401KeyDoesntExist | Error403 | str |
                RawError``."""
        return unwrap(self._with_raw_response.get_checkout_session(id_, request_options=request_options))

    def post_checkout_session(
        self,
        body: ApiV2CheckoutRequest | ApiV2CheckoutRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CheckoutSession:
        """Creates a Checkout session. Creates Session and Payment, returns Pre-Scoring result (status), ids of Payment
        and Session.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Checkout session object is returned.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You tried to perform an action which is forbidden. You are using an incorrect ID. Something
                bad happened. We're notified. ``error`` is ``Error400CheckoutPost | Error401MerchantNull | Error403 |
                str | RawError``."""
        return unwrap(self._with_raw_response.post_checkout_session(body, request_options=request_options))

    @property
    def with_raw_response(self) -> CheckoutWithRawResponse:
        return self._with_raw_response


class AsyncCheckout:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCheckoutWithRawResponse(client, server, auth)

    async def get_checkout_session(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CheckoutSession:
        """Use this API to retrieve the token (only if tokens used in your integration )

        Args:
            id_: ID of the session.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Checkout session object is returned.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You tried to perform an action which is forbidden. You are using an incorrect ID. Something
                bad happened. We're notified. ``error`` is ``Error400 | Error401KeyDoesntExist | Error403 | str |
                RawError``."""
        return unwrap(await self._with_raw_response.get_checkout_session(id_, request_options=request_options))

    async def post_checkout_session(
        self,
        body: ApiV2CheckoutRequest | ApiV2CheckoutRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CheckoutSession:
        """Creates a Checkout session. Creates Session and Payment, returns Pre-Scoring result (status), ids of Payment
        and Session.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Checkout session object is returned.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You tried to perform an action which is forbidden. You are using an incorrect ID. Something
                bad happened. We're notified. ``error`` is ``Error400CheckoutPost | Error401MerchantNull | Error403 |
                str | RawError``."""
        return unwrap(await self._with_raw_response.post_checkout_session(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCheckoutWithRawResponse:
        return self._with_raw_response


class CheckoutWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_checkout_session(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CheckoutSession, GetCheckoutSessionErrorBody]:
        """Use this API to retrieve the token (only if tokens used in your integration )

        Args:
            id_: ID of the session.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/checkout/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CheckoutSession],
            error_mapper=get_checkout_session_error_mapper,
            request_options=request_options,
        )

    def post_checkout_session(
        self,
        body: ApiV2CheckoutRequest | ApiV2CheckoutRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CheckoutSession, PostCheckoutSessionErrorBody]:
        """Creates a Checkout session. Creates Session and Payment, returns Pre-Scoring result (status), ids of Payment
        and Session.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/checkout"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV2CheckoutRequest | ApiV2CheckoutRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CheckoutSession],
            error_mapper=post_checkout_session_error_mapper,
            request_options=request_options,
        )


class AsyncCheckoutWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_checkout_session(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CheckoutSession, GetCheckoutSessionErrorBody]:
        """Use this API to retrieve the token (only if tokens used in your integration )

        Args:
            id_: ID of the session.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/checkout/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CheckoutSession],
            error_mapper=get_checkout_session_error_mapper,
            request_options=request_options,
        )

    async def post_checkout_session(
        self,
        body: ApiV2CheckoutRequest | ApiV2CheckoutRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CheckoutSession, PostCheckoutSessionErrorBody]:
        """Creates a Checkout session. Creates Session and Payment, returns Pre-Scoring result (status), ids of Payment
        and Session.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/checkout"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV2CheckoutRequest | ApiV2CheckoutRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CheckoutSession],
            error_mapper=post_checkout_session_error_mapper,
            request_options=request_options,
        )
