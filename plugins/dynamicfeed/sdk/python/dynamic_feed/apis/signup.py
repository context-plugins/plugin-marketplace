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
from ..errors.signup_signup_post_error import SignupSignupPostErrorBody, signup_signup_post_error_mapper
from ..models.body_signup_signup_post import BodySignupSignupPost, BodySignupSignupPostDict
from ..server.server import Server


class Signup:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = SignupWithRawResponse(client, server)

    def signup_signup_post(
        self,
        *,
        body: BodySignupSignupPost | BodySignupSignupPostDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Get a free API key instantly.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.signup_signup_post(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> SignupWithRawResponse:
        return self._with_raw_response


class AsyncSignup:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncSignupWithRawResponse(client, server)

    async def signup_signup_post(
        self,
        *,
        body: BodySignupSignupPost | BodySignupSignupPostDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Get a free API key instantly.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(await self._with_raw_response.signup_signup_post(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSignupWithRawResponse:
        return self._with_raw_response


class SignupWithRawResponse(BaseRawResponse[RawClient, Server]):
    def signup_signup_post(
        self,
        *,
        body: BodySignupSignupPost | BodySignupSignupPostDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, SignupSignupPostErrorBody]:
        """Get a free API key instantly.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/signup"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BodySignupSignupPost | BodySignupSignupPostDict | None](body),
            decoder=json_decoder[Any],
            error_mapper=signup_signup_post_error_mapper,
            request_options=request_options,
        )


class AsyncSignupWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def signup_signup_post(
        self,
        *,
        body: BodySignupSignupPost | BodySignupSignupPostDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, SignupSignupPostErrorBody]:
        """Get a free API key instantly.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/signup"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BodySignupSignupPost | BodySignupSignupPostDict | None](body),
            decoder=async_json_decoder[Any],
            error_mapper=signup_signup_post_error_mapper,
            request_options=request_options,
        )
