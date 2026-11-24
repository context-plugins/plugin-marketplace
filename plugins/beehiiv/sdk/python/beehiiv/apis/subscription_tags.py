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
from ..errors.create10_error import Create10ErrorBody, create10_error_mapper
from ..models.publications_subscriptions_tags_request import (
    PublicationsSubscriptionsTagsRequest,
    PublicationsSubscriptionsTagsRequestDict,
)
from ..models.subscription_tags_create_response import SubscriptionTagsCreateResponse
from ..server.server import Server


class SubscriptionTags:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = SubscriptionTagsWithRawResponse(client, server)

    def create10(
        self,
        publication_id: str,
        subscription_id: str,
        authorization: str,
        *,
        body: PublicationsSubscriptionsTagsRequest | PublicationsSubscriptionsTagsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SubscriptionTagsCreateResponse:
        """Adds tags to a subscription. If the tag does not exist on the publication, it will be created automatically.

        Args:
            publication_id: Value sent with the request.
            subscription_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create10(
                publication_id, subscription_id, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> SubscriptionTagsWithRawResponse:
        return self._with_raw_response


class AsyncSubscriptionTags:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncSubscriptionTagsWithRawResponse(client, server)

    async def create10(
        self,
        publication_id: str,
        subscription_id: str,
        authorization: str,
        *,
        body: PublicationsSubscriptionsTagsRequest | PublicationsSubscriptionsTagsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SubscriptionTagsCreateResponse:
        """Adds tags to a subscription. If the tag does not exist on the publication, it will be created automatically.

        Args:
            publication_id: Value sent with the request.
            subscription_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create10(
                publication_id, subscription_id, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSubscriptionTagsWithRawResponse:
        return self._with_raw_response


class SubscriptionTagsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create10(
        self,
        publication_id: str,
        subscription_id: str,
        authorization: str,
        *,
        body: PublicationsSubscriptionsTagsRequest | PublicationsSubscriptionsTagsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionTagsCreateResponse, Create10ErrorBody]:
        """Adds tags to a subscription. If the tag does not exist on the publication, it will be created automatically.

        Args:
            publication_id: Value sent with the request.
            subscription_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/publications/{publicationId}/subscriptions/{subscriptionId}/tags"),
            path_params=[param[str]("publicationId", publication_id), param[str]("subscriptionId", subscription_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsSubscriptionsTagsRequest | PublicationsSubscriptionsTagsRequestDict | None](
                body
            ),
            decoder=json_decoder[SubscriptionTagsCreateResponse],
            error_mapper=create10_error_mapper,
            request_options=request_options,
        )


class AsyncSubscriptionTagsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create10(
        self,
        publication_id: str,
        subscription_id: str,
        authorization: str,
        *,
        body: PublicationsSubscriptionsTagsRequest | PublicationsSubscriptionsTagsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionTagsCreateResponse, Create10ErrorBody]:
        """Adds tags to a subscription. If the tag does not exist on the publication, it will be created automatically.

        Args:
            publication_id: Value sent with the request.
            subscription_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/publications/{publicationId}/subscriptions/{subscriptionId}/tags"),
            path_params=[param[str]("publicationId", publication_id), param[str]("subscriptionId", subscription_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsSubscriptionsTagsRequest | PublicationsSubscriptionsTagsRequestDict | None](
                body
            ),
            decoder=async_json_decoder[SubscriptionTagsCreateResponse],
            error_mapper=create10_error_mapper,
            request_options=request_options,
        )
