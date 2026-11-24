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
from ..errors.create6_error import Create6ErrorBody, create6_error_mapper
from ..errors.index13_error import Index13ErrorBody, index13_error_mapper
from ..errors.show9_error import Show9ErrorBody, show9_error_mapper
from ..errors.update_by_subscription_id_error import (
    UpdateBySubscriptionIdErrorBody,
    update_by_subscription_id_error_mapper,
)
from ..errors.update_error import UpdateErrorBody, update_error_mapper
from ..models.enums.request_direction import RequestDirection, RequestDirectionOrStr
from ..models.newsletter_list_subscription_index_response import NewsletterListSubscriptionIndexResponse
from ..models.newsletter_list_subscription_response import NewsletterListSubscriptionResponse
from ..models.publications_newsletter_lists_subscriptions_by_subscription_id_subscription_id_request import (
    PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequest,
    PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequestDict,
)
from ..models.publications_newsletter_lists_subscriptions_newsletter_list_subscription_id_request import (
    PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequest,
    PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequestDict,
)
from ..models.publications_newsletter_lists_subscriptions_request import (
    PublicationsNewsletterListsSubscriptionsRequest,
    PublicationsNewsletterListsSubscriptionsRequestDict,
)
from ..server.server import Server


class NewsletterListSubscriptions:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = NewsletterListSubscriptionsWithRawResponse(client, server)

    def create6(
        self,
        publication_id: str,
        newsletter_list_id: str,
        authorization: str,
        *,
        body: (
            PublicationsNewsletterListsSubscriptionsRequest | PublicationsNewsletterListsSubscriptionsRequestDict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> NewsletterListSubscriptionResponse:
        """Subscribe a subscription to a newsletter list. Accepts either a subscription_id or email to identify the
        subscription.

        This endpoint only enrolls **existing** subscriptions. To create a new subscription **and** enroll it in one or
        more newsletter lists in a single call, use the Create subscription endpoint and pass the
        ``newsletter_list_ids`` parameter.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Unprocessable Entity Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.create6(
                publication_id, newsletter_list_id, authorization, body=body, request_options=request_options
            ),
        )

    def index13(
        self,
        publication_id: str,
        newsletter_list_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        page: int | None = None,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        request_options: RequestOptionsOrDict | None = None,
    ) -> NewsletterListSubscriptionIndexResponse:
        """List all subscriptions for a newsletter list.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of
                results. When provided, pagination will use cursor-based method which is more efficient and consistent
                than offset-based pagination.
            page: **Offset-based pagination (deprecated)**: Page number for offset-based pagination. Please migrate to
                cursor-based pagination using the ``cursor`` parameter. If not specified, results 1-10 from page 1 will
                be returned.
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.index13(
                publication_id,
                newsletter_list_id,
                authorization,
                limit=limit,
                cursor=cursor,
                page=page,
                direction=direction,
                request_options=request_options,
            ),
        )

    def show9(
        self,
        publication_id: str,
        newsletter_list_id: str,
        newsletter_list_subscription_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> NewsletterListSubscriptionResponse:
        """Retrieve a single newsletter list subscription.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            newsletter_list_subscription_id: The prefixed ID of the newsletter list subscription object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.show9(
                publication_id,
                newsletter_list_id,
                newsletter_list_subscription_id,
                authorization,
                request_options=request_options,
            ),
        )

    def update(
        self,
        publication_id: str,
        newsletter_list_id: str,
        newsletter_list_subscription_id: str,
        authorization: str,
        *,
        body: (
            PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequest
            | PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequestDict
            | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> NewsletterListSubscriptionResponse:
        """Update a newsletter list subscription. Currently supports unsubscribing a subscription from a newsletter
        list.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            newsletter_list_subscription_id: The prefixed ID of the newsletter list subscription object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Unprocessable Entity Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.update(
                publication_id,
                newsletter_list_id,
                newsletter_list_subscription_id,
                authorization,
                body=body,
                request_options=request_options,
            ),
        )

    def update_by_subscription_id(
        self,
        publication_id: str,
        newsletter_list_id: str,
        subscription_id: str,
        authorization: str,
        *,
        body: (
            PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequest
            | PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequestDict
            | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> NewsletterListSubscriptionResponse:
        """Update a newsletter list subscription by subscription ID. An alternative to the update endpoint when you
        don't have the newsletter list subscription ID. Accepts either a subscription_id or email to identify the
        subscription. Currently supports unsubscribing a subscription from a newsletter list.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            subscription_id: The prefixed ID of the subscription
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Unprocessable Entity Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.update_by_subscription_id(
                publication_id,
                newsletter_list_id,
                subscription_id,
                authorization,
                body=body,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> NewsletterListSubscriptionsWithRawResponse:
        return self._with_raw_response


class AsyncNewsletterListSubscriptions:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncNewsletterListSubscriptionsWithRawResponse(client, server)

    async def create6(
        self,
        publication_id: str,
        newsletter_list_id: str,
        authorization: str,
        *,
        body: (
            PublicationsNewsletterListsSubscriptionsRequest | PublicationsNewsletterListsSubscriptionsRequestDict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> NewsletterListSubscriptionResponse:
        """Subscribe a subscription to a newsletter list. Accepts either a subscription_id or email to identify the
        subscription.

        This endpoint only enrolls **existing** subscriptions. To create a new subscription **and** enroll it in one or
        more newsletter lists in a single call, use the Create subscription endpoint and pass the
        ``newsletter_list_ids`` parameter.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Unprocessable Entity Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.create6(
                publication_id, newsletter_list_id, authorization, body=body, request_options=request_options
            ),
        )

    async def index13(
        self,
        publication_id: str,
        newsletter_list_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        page: int | None = None,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> NewsletterListSubscriptionIndexResponse:
        """List all subscriptions for a newsletter list.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of
                results. When provided, pagination will use cursor-based method which is more efficient and consistent
                than offset-based pagination.
            page: **Offset-based pagination (deprecated)**: Page number for offset-based pagination. Please migrate to
                cursor-based pagination using the ``cursor`` parameter. If not specified, results 1-10 from page 1 will
                be returned.
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.index13(
                publication_id,
                newsletter_list_id,
                authorization,
                limit=limit,
                cursor=cursor,
                page=page,
                direction=direction,
                request_options=request_options,
            ),
        )

    async def show9(
        self,
        publication_id: str,
        newsletter_list_id: str,
        newsletter_list_subscription_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> NewsletterListSubscriptionResponse:
        """Retrieve a single newsletter list subscription.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            newsletter_list_subscription_id: The prefixed ID of the newsletter list subscription object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.show9(
                publication_id,
                newsletter_list_id,
                newsletter_list_subscription_id,
                authorization,
                request_options=request_options,
            ),
        )

    async def update(
        self,
        publication_id: str,
        newsletter_list_id: str,
        newsletter_list_subscription_id: str,
        authorization: str,
        *,
        body: (
            PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequest
            | PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequestDict
            | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> NewsletterListSubscriptionResponse:
        """Update a newsletter list subscription. Currently supports unsubscribing a subscription from a newsletter
        list.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            newsletter_list_subscription_id: The prefixed ID of the newsletter list subscription object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Unprocessable Entity Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.update(
                publication_id,
                newsletter_list_id,
                newsletter_list_subscription_id,
                authorization,
                body=body,
                request_options=request_options,
            ),
        )

    async def update_by_subscription_id(
        self,
        publication_id: str,
        newsletter_list_id: str,
        subscription_id: str,
        authorization: str,
        *,
        body: (
            PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequest
            | PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequestDict
            | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> NewsletterListSubscriptionResponse:
        """Update a newsletter list subscription by subscription ID. An alternative to the update endpoint when you
        don't have the newsletter list subscription ID. Accepts either a subscription_id or email to identify the
        subscription. Currently supports unsubscribing a subscription from a newsletter list.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            subscription_id: The prefixed ID of the subscription
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Unprocessable Entity Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.update_by_subscription_id(
                publication_id,
                newsletter_list_id,
                subscription_id,
                authorization,
                body=body,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncNewsletterListSubscriptionsWithRawResponse:
        return self._with_raw_response


class NewsletterListSubscriptionsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create6(
        self,
        publication_id: str,
        newsletter_list_id: str,
        authorization: str,
        *,
        body: (
            PublicationsNewsletterListsSubscriptionsRequest | PublicationsNewsletterListsSubscriptionsRequestDict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsletterListSubscriptionResponse, Create6ErrorBody]:
        """Subscribe a subscription to a newsletter list. Accepts either a subscription_id or email to identify the
        subscription.

        This endpoint only enrolls **existing** subscriptions. To create a new subscription **and** enroll it in one or
        more newsletter lists in a single call, use the Create subscription endpoint and pass the
        ``newsletter_list_ids`` parameter.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions"
            ),
            path_params=[
                param[str]("publicationId", publication_id), param[str]("newsletterListId", newsletter_list_id)
            ],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    PublicationsNewsletterListsSubscriptionsRequest
                    | PublicationsNewsletterListsSubscriptionsRequestDict
                    | None
                )
            ](body),
            decoder=json_decoder[NewsletterListSubscriptionResponse],
            error_mapper=create6_error_mapper,
            request_options=request_options,
        )

    def index13(
        self,
        publication_id: str,
        newsletter_list_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        page: int | None = None,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsletterListSubscriptionIndexResponse, Index13ErrorBody]:
        """List all subscriptions for a newsletter list.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of
                results. When provided, pagination will use cursor-based method which is more efficient and consistent
                than offset-based pagination.
            page: **Offset-based pagination (deprecated)**: Page number for offset-based pagination. Please migrate to
                cursor-based pagination using the ``cursor`` parameter. If not specified, results 1-10 from page 1 will
                be returned.
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions"
            ),
            path_params=[
                param[str]("publicationId", publication_id), param[str]("newsletterListId", newsletter_list_id)
            ],
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[int | None]("page", page),
                param[RequestDirectionOrStr | None]("direction", direction),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[NewsletterListSubscriptionIndexResponse],
            error_mapper=index13_error_mapper,
            request_options=request_options,
        )

    def show9(
        self,
        publication_id: str,
        newsletter_list_id: str,
        newsletter_list_subscription_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsletterListSubscriptionResponse, Show9ErrorBody]:
        """Retrieve a single newsletter list subscription.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            newsletter_list_subscription_id: The prefixed ID of the newsletter list subscription object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions/{newsletterListSubscriptionId}",
            ),
            path_params=[
                param[str]("publicationId", publication_id),
                param[str]("newsletterListId", newsletter_list_id),
                param[str]("newsletterListSubscriptionId", newsletter_list_subscription_id),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[NewsletterListSubscriptionResponse],
            error_mapper=show9_error_mapper,
            request_options=request_options,
        )

    def update(
        self,
        publication_id: str,
        newsletter_list_id: str,
        newsletter_list_subscription_id: str,
        authorization: str,
        *,
        body: (
            PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequest
            | PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequestDict
            | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsletterListSubscriptionResponse, UpdateErrorBody]:
        """Update a newsletter list subscription. Currently supports unsubscribing a subscription from a newsletter
        list.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            newsletter_list_subscription_id: The prefixed ID of the newsletter list subscription object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions/{newsletterListSubscriptionId}",
            ),
            path_params=[
                param[str]("publicationId", publication_id),
                param[str]("newsletterListId", newsletter_list_id),
                param[str]("newsletterListSubscriptionId", newsletter_list_subscription_id),
            ],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequest
                    | PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequestDict
                    | None
                )
            ](body),
            decoder=json_decoder[NewsletterListSubscriptionResponse],
            error_mapper=update_error_mapper,
            request_options=request_options,
        )

    def update_by_subscription_id(
        self,
        publication_id: str,
        newsletter_list_id: str,
        subscription_id: str,
        authorization: str,
        *,
        body: (
            PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequest
            | PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequestDict
            | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsletterListSubscriptionResponse, UpdateBySubscriptionIdErrorBody]:
        """Update a newsletter list subscription by subscription ID. An alternative to the update endpoint when you
        don't have the newsletter list subscription ID. Accepts either a subscription_id or email to identify the
        subscription. Currently supports unsubscribing a subscription from a newsletter list.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            subscription_id: The prefixed ID of the subscription
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions/by_subscription_id/{subscriptionId}",
            ),
            path_params=[
                param[str]("publicationId", publication_id),
                param[str]("newsletterListId", newsletter_list_id),
                param[str]("subscriptionId", subscription_id),
            ],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequest
                    | PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequestDict
                    | None
                )
            ](body),
            decoder=json_decoder[NewsletterListSubscriptionResponse],
            error_mapper=update_by_subscription_id_error_mapper,
            request_options=request_options,
        )


class AsyncNewsletterListSubscriptionsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create6(
        self,
        publication_id: str,
        newsletter_list_id: str,
        authorization: str,
        *,
        body: (
            PublicationsNewsletterListsSubscriptionsRequest | PublicationsNewsletterListsSubscriptionsRequestDict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsletterListSubscriptionResponse, Create6ErrorBody]:
        """Subscribe a subscription to a newsletter list. Accepts either a subscription_id or email to identify the
        subscription.

        This endpoint only enrolls **existing** subscriptions. To create a new subscription **and** enroll it in one or
        more newsletter lists in a single call, use the Create subscription endpoint and pass the
        ``newsletter_list_ids`` parameter.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions"
            ),
            path_params=[
                param[str]("publicationId", publication_id), param[str]("newsletterListId", newsletter_list_id)
            ],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    PublicationsNewsletterListsSubscriptionsRequest
                    | PublicationsNewsletterListsSubscriptionsRequestDict
                    | None
                )
            ](body),
            decoder=async_json_decoder[NewsletterListSubscriptionResponse],
            error_mapper=create6_error_mapper,
            request_options=request_options,
        )

    async def index13(
        self,
        publication_id: str,
        newsletter_list_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        page: int | None = None,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsletterListSubscriptionIndexResponse, Index13ErrorBody]:
        """List all subscriptions for a newsletter list.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of
                results. When provided, pagination will use cursor-based method which is more efficient and consistent
                than offset-based pagination.
            page: **Offset-based pagination (deprecated)**: Page number for offset-based pagination. Please migrate to
                cursor-based pagination using the ``cursor`` parameter. If not specified, results 1-10 from page 1 will
                be returned.
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions"
            ),
            path_params=[
                param[str]("publicationId", publication_id), param[str]("newsletterListId", newsletter_list_id)
            ],
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[int | None]("page", page),
                param[RequestDirectionOrStr | None]("direction", direction),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[NewsletterListSubscriptionIndexResponse],
            error_mapper=index13_error_mapper,
            request_options=request_options,
        )

    async def show9(
        self,
        publication_id: str,
        newsletter_list_id: str,
        newsletter_list_subscription_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsletterListSubscriptionResponse, Show9ErrorBody]:
        """Retrieve a single newsletter list subscription.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            newsletter_list_subscription_id: The prefixed ID of the newsletter list subscription object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions/{newsletterListSubscriptionId}",
            ),
            path_params=[
                param[str]("publicationId", publication_id),
                param[str]("newsletterListId", newsletter_list_id),
                param[str]("newsletterListSubscriptionId", newsletter_list_subscription_id),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[NewsletterListSubscriptionResponse],
            error_mapper=show9_error_mapper,
            request_options=request_options,
        )

    async def update(
        self,
        publication_id: str,
        newsletter_list_id: str,
        newsletter_list_subscription_id: str,
        authorization: str,
        *,
        body: (
            PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequest
            | PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequestDict
            | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsletterListSubscriptionResponse, UpdateErrorBody]:
        """Update a newsletter list subscription. Currently supports unsubscribing a subscription from a newsletter
        list.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            newsletter_list_subscription_id: The prefixed ID of the newsletter list subscription object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions/{newsletterListSubscriptionId}",
            ),
            path_params=[
                param[str]("publicationId", publication_id),
                param[str]("newsletterListId", newsletter_list_id),
                param[str]("newsletterListSubscriptionId", newsletter_list_subscription_id),
            ],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequest
                    | PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequestDict
                    | None
                )
            ](body),
            decoder=async_json_decoder[NewsletterListSubscriptionResponse],
            error_mapper=update_error_mapper,
            request_options=request_options,
        )

    async def update_by_subscription_id(
        self,
        publication_id: str,
        newsletter_list_id: str,
        subscription_id: str,
        authorization: str,
        *,
        body: (
            PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequest
            | PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequestDict
            | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsletterListSubscriptionResponse, UpdateBySubscriptionIdErrorBody]:
        """Update a newsletter list subscription by subscription ID. An alternative to the update endpoint when you
        don't have the newsletter list subscription ID. Accepts either a subscription_id or email to identify the
        subscription. Currently supports unsubscribing a subscription from a newsletter list.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            subscription_id: The prefixed ID of the subscription
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions/by_subscription_id/{subscriptionId}",
            ),
            path_params=[
                param[str]("publicationId", publication_id),
                param[str]("newsletterListId", newsletter_list_id),
                param[str]("subscriptionId", subscription_id),
            ],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequest
                    | PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequestDict
                    | None
                )
            ](body),
            decoder=async_json_decoder[NewsletterListSubscriptionResponse],
            error_mapper=update_by_subscription_id_error_mapper,
            request_options=request_options,
        )
