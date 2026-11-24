from __future__ import annotations

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
from ..errors.subscribe_to_website_newsletter_error import (
    SubscribeToWebsiteNewsletterErrorBody,
    subscribe_to_website_newsletter_error_mapper,
)
from ..models.subscription_input import SubscriptionInput, SubscriptionInputDict
from ..models.success_model import SuccessModel
from ..server.server import Server


class Subscribe:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = SubscribeWithRawResponse(client, server)

    def subscribe_to_website_newsletter(
        self, body: SubscriptionInput | SubscriptionInputDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> SuccessModel:
        """Subscribes a consenting email owner through Mailchimp after server-side reCAPTCHA verification. No API key is
        required from clients. Service credentials remain server-side.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Submission accepted. Read any message for delivery caveats.

        Raises:
            ApiError: Request failed. Read code and hint before retrying. Request failed. Read code and hint before
                retrying. Request failed. Read code and hint before retrying. Request failed. Read code and hint before
                retrying. Upstream newsletter provider is rate limited. Wait before retrying. ``error`` is
                ``ErrorCelestiaWebsiteContactApi | RawError``."""
        return unwrap(self._with_raw_response.subscribe_to_website_newsletter(body, request_options=request_options))

    @property
    def with_raw_response(self) -> SubscribeWithRawResponse:
        return self._with_raw_response


class AsyncSubscribe:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncSubscribeWithRawResponse(client, server)

    async def subscribe_to_website_newsletter(
        self,
        body: SubscriptionInput | SubscriptionInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessModel:
        """Subscribes a consenting email owner through Mailchimp after server-side reCAPTCHA verification. No API key is
        required from clients. Service credentials remain server-side.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Submission accepted. Read any message for delivery caveats.

        Raises:
            ApiError: Request failed. Read code and hint before retrying. Request failed. Read code and hint before
                retrying. Request failed. Read code and hint before retrying. Request failed. Read code and hint before
                retrying. Upstream newsletter provider is rate limited. Wait before retrying. ``error`` is
                ``ErrorCelestiaWebsiteContactApi | RawError``."""
        return unwrap(
            await self._with_raw_response.subscribe_to_website_newsletter(body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncSubscribeWithRawResponse:
        return self._with_raw_response


class SubscribeWithRawResponse(BaseRawResponse[RawClient, Server]):
    def subscribe_to_website_newsletter(
        self, body: SubscriptionInput | SubscriptionInputDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessModel, SubscribeToWebsiteNewsletterErrorBody]:
        """Subscribes a consenting email owner through Mailchimp after server-side reCAPTCHA verification. No API key is
        required from clients. Service credentials remain server-side.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_celestia_website_contact_api("/api/subscribe/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SubscriptionInput | SubscriptionInputDict](body),
            decoder=json_decoder[SuccessModel],
            error_mapper=subscribe_to_website_newsletter_error_mapper,
            request_options=request_options,
        )


class AsyncSubscribeWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def subscribe_to_website_newsletter(
        self,
        body: SubscriptionInput | SubscriptionInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessModel, SubscribeToWebsiteNewsletterErrorBody]:
        """Subscribes a consenting email owner through Mailchimp after server-side reCAPTCHA verification. No API key is
        required from clients. Service credentials remain server-side.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_celestia_website_contact_api("/api/subscribe/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SubscriptionInput | SubscriptionInputDict](body),
            decoder=async_json_decoder[SuccessModel],
            error_mapper=subscribe_to_website_newsletter_error_mapper,
            request_options=request_options,
        )
