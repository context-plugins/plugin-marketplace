from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.index7_error import Index7ErrorBody, index7_error_mapper
from ..errors.patch_error import PatchErrorBody, patch_error_mapper
from ..errors.put_error import PutErrorBody, put_error_mapper
from ..errors.show4_error import Show4ErrorBody, show4_error_mapper
from ..models.bulk_subscription_updates_get_response import BulkSubscriptionUpdatesGetResponse
from ..models.bulk_subscription_updates_list_response import BulkSubscriptionUpdatesListResponse
from ..models.publications_subscriptions_bulk_actions_request import (
    PublicationsSubscriptionsBulkActionsRequest,
    PublicationsSubscriptionsBulkActionsRequestDict,
)
from ..models.publications_subscriptions_request import (
    PublicationsSubscriptionsRequest,
    PublicationsSubscriptionsRequestDict,
)
from ..models.subscriptions_patch_response import SubscriptionsPatchResponse
from ..server.server import Server


class BulkSubscriptionUpdates:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = BulkSubscriptionUpdatesWithRawResponse(client, server)

    def index7(
        self, publication_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> BulkSubscriptionUpdatesListResponse:
        """Returns a list of Subscription Update objects for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.index7(publication_id, authorization, request_options=request_options))

    def patch(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: (
            PublicationsSubscriptionsBulkActionsRequest | PublicationsSubscriptionsBulkActionsRequestDict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SubscriptionsPatchResponse:
        """Bulk update multiple subscriptions fields, including status, custom fields, and tiers.

        Args:
            publication_id: The prefixed ID of the publication object
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
            self._with_raw_response.patch(publication_id, authorization, body=body, request_options=request_options)
        )

    def patch_status(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsSubscriptionsRequest | PublicationsSubscriptionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Bulk update subscriptions' status.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.patch_status(
                publication_id, authorization, body=body, request_options=request_options
            ),
        )

    def put(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: (
            PublicationsSubscriptionsBulkActionsRequest | PublicationsSubscriptionsBulkActionsRequestDict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SubscriptionsPatchResponse:
        """Bulk update multiple subscriptions fields, including status, custom fields, and tiers.

        Args:
            publication_id: The prefixed ID of the publication object
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
            self._with_raw_response.put(publication_id, authorization, body=body, request_options=request_options)
        )

    def put_status(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsSubscriptionsRequest | PublicationsSubscriptionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Bulk update subscriptions' status.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.put_status(
                publication_id, authorization, body=body, request_options=request_options
            ),
        )

    def show4(
        self, publication_id: str, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> BulkSubscriptionUpdatesGetResponse:
        """Returns a single Subscription Update object for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            id_: The ID of the Subscription Update object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.show4(publication_id, id_, authorization, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> BulkSubscriptionUpdatesWithRawResponse:
        return self._with_raw_response


class AsyncBulkSubscriptionUpdates:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncBulkSubscriptionUpdatesWithRawResponse(client, server)

    async def index7(
        self, publication_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BulkSubscriptionUpdatesListResponse:
        """Returns a list of Subscription Update objects for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.index7(publication_id, authorization, request_options=request_options)
        )

    async def patch(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: (
            PublicationsSubscriptionsBulkActionsRequest | PublicationsSubscriptionsBulkActionsRequestDict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SubscriptionsPatchResponse:
        """Bulk update multiple subscriptions fields, including status, custom fields, and tiers.

        Args:
            publication_id: The prefixed ID of the publication object
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
            await self._with_raw_response.patch(
                publication_id, authorization, body=body, request_options=request_options
            ),
        )

    async def patch_status(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsSubscriptionsRequest | PublicationsSubscriptionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Bulk update subscriptions' status.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.patch_status(
                publication_id, authorization, body=body, request_options=request_options
            ),
        )

    async def put(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: (
            PublicationsSubscriptionsBulkActionsRequest | PublicationsSubscriptionsBulkActionsRequestDict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SubscriptionsPatchResponse:
        """Bulk update multiple subscriptions fields, including status, custom fields, and tiers.

        Args:
            publication_id: The prefixed ID of the publication object
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
            await self._with_raw_response.put(publication_id, authorization, body=body, request_options=request_options)
        )

    async def put_status(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsSubscriptionsRequest | PublicationsSubscriptionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Bulk update subscriptions' status.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.put_status(
                publication_id, authorization, body=body, request_options=request_options
            ),
        )

    async def show4(
        self,
        publication_id: str,
        id_: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BulkSubscriptionUpdatesGetResponse:
        """Returns a single Subscription Update object for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            id_: The ID of the Subscription Update object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.show4(publication_id, id_, authorization, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncBulkSubscriptionUpdatesWithRawResponse:
        return self._with_raw_response


class BulkSubscriptionUpdatesWithRawResponse(BaseRawResponse[RawClient, Server]):
    def index7(
        self, publication_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BulkSubscriptionUpdatesListResponse, Index7ErrorBody]:
        """Returns a list of Subscription Update objects for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/bulk_subscription_updates"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[BulkSubscriptionUpdatesListResponse],
            error_mapper=index7_error_mapper,
            request_options=request_options,
        )

    def patch(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: (
            PublicationsSubscriptionsBulkActionsRequest | PublicationsSubscriptionsBulkActionsRequestDict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionsPatchResponse, PatchErrorBody]:
        """Bulk update multiple subscriptions fields, including status, custom fields, and tiers.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/publications/{publicationId}/subscriptions/bulk_actions"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                PublicationsSubscriptionsBulkActionsRequest | PublicationsSubscriptionsBulkActionsRequestDict | None
            ](body),
            decoder=json_decoder[SubscriptionsPatchResponse],
            error_mapper=patch_error_mapper,
            request_options=request_options,
        )

    def patch_status(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsSubscriptionsRequest | PublicationsSubscriptionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Bulk update subscriptions' status.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/publications/{publicationId}/subscriptions"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsSubscriptionsRequest | PublicationsSubscriptionsRequestDict | None](body),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def put(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: (
            PublicationsSubscriptionsBulkActionsRequest | PublicationsSubscriptionsBulkActionsRequestDict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionsPatchResponse, PutErrorBody]:
        """Bulk update multiple subscriptions fields, including status, custom fields, and tiers.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/publications/{publicationId}/subscriptions/bulk_actions"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                PublicationsSubscriptionsBulkActionsRequest | PublicationsSubscriptionsBulkActionsRequestDict | None
            ](body),
            decoder=json_decoder[SubscriptionsPatchResponse],
            error_mapper=put_error_mapper,
            request_options=request_options,
        )

    def put_status(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsSubscriptionsRequest | PublicationsSubscriptionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Bulk update subscriptions' status.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/publications/{publicationId}/subscriptions"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsSubscriptionsRequest | PublicationsSubscriptionsRequestDict | None](body),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def show4(
        self, publication_id: str, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BulkSubscriptionUpdatesGetResponse, Show4ErrorBody]:
        """Returns a single Subscription Update object for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            id_: The ID of the Subscription Update object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/bulk_subscription_updates/{id}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[BulkSubscriptionUpdatesGetResponse],
            error_mapper=show4_error_mapper,
            request_options=request_options,
        )


class AsyncBulkSubscriptionUpdatesWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def index7(
        self, publication_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BulkSubscriptionUpdatesListResponse, Index7ErrorBody]:
        """Returns a list of Subscription Update objects for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/bulk_subscription_updates"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[BulkSubscriptionUpdatesListResponse],
            error_mapper=index7_error_mapper,
            request_options=request_options,
        )

    async def patch(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: (
            PublicationsSubscriptionsBulkActionsRequest | PublicationsSubscriptionsBulkActionsRequestDict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionsPatchResponse, PatchErrorBody]:
        """Bulk update multiple subscriptions fields, including status, custom fields, and tiers.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/publications/{publicationId}/subscriptions/bulk_actions"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                PublicationsSubscriptionsBulkActionsRequest | PublicationsSubscriptionsBulkActionsRequestDict | None
            ](body),
            decoder=async_json_decoder[SubscriptionsPatchResponse],
            error_mapper=patch_error_mapper,
            request_options=request_options,
        )

    async def patch_status(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsSubscriptionsRequest | PublicationsSubscriptionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Bulk update subscriptions' status.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/publications/{publicationId}/subscriptions"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsSubscriptionsRequest | PublicationsSubscriptionsRequestDict | None](body),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def put(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: (
            PublicationsSubscriptionsBulkActionsRequest | PublicationsSubscriptionsBulkActionsRequestDict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionsPatchResponse, PutErrorBody]:
        """Bulk update multiple subscriptions fields, including status, custom fields, and tiers.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/publications/{publicationId}/subscriptions/bulk_actions"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                PublicationsSubscriptionsBulkActionsRequest | PublicationsSubscriptionsBulkActionsRequestDict | None
            ](body),
            decoder=async_json_decoder[SubscriptionsPatchResponse],
            error_mapper=put_error_mapper,
            request_options=request_options,
        )

    async def put_status(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsSubscriptionsRequest | PublicationsSubscriptionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Bulk update subscriptions' status.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/publications/{publicationId}/subscriptions"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsSubscriptionsRequest | PublicationsSubscriptionsRequestDict | None](body),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def show4(
        self,
        publication_id: str,
        id_: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkSubscriptionUpdatesGetResponse, Show4ErrorBody]:
        """Returns a single Subscription Update object for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            id_: The ID of the Subscription Update object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/bulk_subscription_updates/{id}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[BulkSubscriptionUpdatesGetResponse],
            error_mapper=show4_error_mapper,
            request_options=request_options,
        )
