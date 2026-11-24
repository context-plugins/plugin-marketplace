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
from ..errors.create3_error import Create3ErrorBody, create3_error_mapper
from ..models.bulk_subscription_create_response import BulkSubscriptionCreateResponse
from ..models.publications_bulk_subscriptions_request import (
    PublicationsBulkSubscriptionsRequest,
    PublicationsBulkSubscriptionsRequestDict,
)
from ..server.server import Server


class BulkSubscriptions:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = BulkSubscriptionsWithRawResponse(client, server)

    def create3(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsBulkSubscriptionsRequest | PublicationsBulkSubscriptionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BulkSubscriptionCreateResponse:
        """Create new subscriptions for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Subscriptions created

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create3(publication_id, authorization, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> BulkSubscriptionsWithRawResponse:
        return self._with_raw_response


class AsyncBulkSubscriptions:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncBulkSubscriptionsWithRawResponse(client, server)

    async def create3(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsBulkSubscriptionsRequest | PublicationsBulkSubscriptionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BulkSubscriptionCreateResponse:
        """Create new subscriptions for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Subscriptions created

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create3(
                publication_id, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncBulkSubscriptionsWithRawResponse:
        return self._with_raw_response


class BulkSubscriptionsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create3(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsBulkSubscriptionsRequest | PublicationsBulkSubscriptionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkSubscriptionCreateResponse, Create3ErrorBody]:
        """Create new subscriptions for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/publications/{publicationId}/bulk_subscriptions"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsBulkSubscriptionsRequest | PublicationsBulkSubscriptionsRequestDict | None](
                body
            ),
            decoder=json_decoder[BulkSubscriptionCreateResponse],
            error_mapper=create3_error_mapper,
            request_options=request_options,
        )


class AsyncBulkSubscriptionsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create3(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsBulkSubscriptionsRequest | PublicationsBulkSubscriptionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkSubscriptionCreateResponse, Create3ErrorBody]:
        """Create new subscriptions for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/publications/{publicationId}/bulk_subscriptions"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsBulkSubscriptionsRequest | PublicationsBulkSubscriptionsRequestDict | None](
                body
            ),
            decoder=async_json_decoder[BulkSubscriptionCreateResponse],
            error_mapper=create3_error_mapper,
            request_options=request_options,
        )
