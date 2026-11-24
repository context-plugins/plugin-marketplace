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
from ..errors.create11_error import Create11ErrorBody, create11_error_mapper
from ..errors.delete5_error import Delete5ErrorBody, delete5_error_mapper
from ..errors.get_by_email_error import GetByEmailErrorBody, get_by_email_error_mapper
from ..errors.get_by_id_error import GetByIdErrorBody, get_by_id_error_mapper
from ..errors.index20_error import Index20ErrorBody, index20_error_mapper
from ..errors.patch3_error import Patch3ErrorBody, patch3_error_mapper
from ..errors.put3_error import Put3ErrorBody, put3_error_mapper
from ..errors.update_by_email_error import UpdateByEmailErrorBody, update_by_email_error_mapper
from ..models.enums.request_direction import RequestDirection, RequestDirectionOrStr
from ..models.enums.subscriptions_get_request_expand_item import SubscriptionsGetRequestExpandItemOrStr
from ..models.enums.subscriptions_list_request_expand_item import SubscriptionsListRequestExpandItemOrStr
from ..models.enums.subscriptions_list_request_order_by import (
    SubscriptionsListRequestOrderBy,
    SubscriptionsListRequestOrderByOrStr,
)
from ..models.enums.subscriptions_list_request_status import (
    SubscriptionsListRequestStatus,
    SubscriptionsListRequestStatusOrStr,
)
from ..models.enums.subscriptions_list_request_tier import (
    SubscriptionsListRequestTier,
    SubscriptionsListRequestTierOrStr,
)
from ..models.publications_subscriptions_by_email_request import (
    PublicationsSubscriptionsByEmailRequest,
    PublicationsSubscriptionsByEmailRequestDict,
)
from ..models.publications_subscriptions_request1 import (
    PublicationsSubscriptionsRequest1,
    PublicationsSubscriptionsRequest1Dict,
)
from ..models.publications_subscriptions_request_reference_subscriptions_api import (
    PublicationsSubscriptionsRequestReferenceSubscriptionsApi,
    PublicationsSubscriptionsRequestReferenceSubscriptionsApiDict,
)
from ..models.subscription_delete_response import SubscriptionDeleteResponse
from ..models.subscription_request import SubscriptionRequest, SubscriptionRequestDict
from ..models.subscription_response import SubscriptionResponse
from ..models.subscriptions_list_response import SubscriptionsListResponse
from ..server.server import Server


class Subscriptions:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = SubscriptionsWithRawResponse(client, server)

    def create11(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: SubscriptionRequest | SubscriptionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SubscriptionResponse:
        """Create new subscriptions for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Subscription created

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create11(publication_id, authorization, body=body, request_options=request_options)
        )

    def delete5(
        self,
        publication_id: str,
        subscription_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SubscriptionDeleteResponse:
        """This cannot be undone. All data associated with the subscription will also be deleted. We recommend
        unsubscribing when possible instead of deleting. If a premium subscription is deleted they will no longer be
        billed. Deletes a subscription.

        Args:
            publication_id: The prefixed ID of the publication object
            subscription_id: The prefixed ID of the subscription object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete5(
                publication_id, subscription_id, authorization, request_options=request_options
            ),
        )

    def get_by_email(
        self,
        publication_id: str,
        email: str,
        authorization: str,
        *,
        expand: SubscriptionsGetRequestExpandItemOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SubscriptionResponse:
        """Please note that this endpoint requires the email to be URL encoded. Please reference your language's
        documentation for the correct method of encoding. Retrieve a single subscription belonging to a specific email
        address in a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            email: The ID of the subscriber object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``subscription_premium_tiers `` - Returns an array of tiers
                the subscription is associated with.<br>``referrals`` - Returns an array of subscriptions with limited
                data - ``id``, ``email``, and ``status``. These are the subscriptions that were referred by this
                subscription.<br>``stats`` - Returns statistics about the subscription(s).<br>``custom_fields`` -
                Returns an array of custom field values that have been set on the subscription. <br>``tags`` - Returns
                an array of tags that have been set on the subscription.<br>``newsletter_lists`` - Returns an array of
                newsletter list prefixed IDs the subscription is actively subscribed to.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_by_email(
                publication_id, email, authorization, expand=expand, request_options=request_options
            ),
        )

    def get_by_id(
        self,
        publication_id: str,
        subscription_id: str,
        authorization: str,
        *,
        expand: SubscriptionsGetRequestExpandItemOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SubscriptionResponse:
        """In previous versions of the API, another endpoint existed to retrieve a subscription by the subscriber ID.
        This endpoint is now deprecated and will be removed in a future version of the API. Please use this endpoint
        instead. The subscription ID can be found by exporting a list of subscriptions either via the ``Settings >
        Publications > Export Data`` or by exporting a CSV in a segment. Retrieve a single subscription belonging to a
        specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            subscription_id: The prefixed ID of the subscription object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``subscription_premium_tiers`` - Returns an array of tiers
                the subscription is associated with.<br>``referrals`` - Returns an array of subscriptions with limited
                data - ``id``, ``email``, and ``status``. These are the subscriptions that were referred by this
                subscription.<br>``stats`` - Returns statistics about the subscription(s).<br>``custom_fields`` -
                Returns an array of custom field values that have been set on the subscription. <br>``tags`` - Returns
                an array of tags that have been set on the subscription.<br>``newsletter_lists`` - Returns an array of
                newsletter list prefixed IDs the subscription is actively subscribed to.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_by_id(
                publication_id, subscription_id, authorization, expand=expand, request_options=request_options
            ),
        )

    def index20(
        self,
        publication_id: str,
        authorization: str,
        *,
        expand: SubscriptionsListRequestExpandItemOrStr | None = None,
        status: SubscriptionsListRequestStatusOrStr | None = SubscriptionsListRequestStatus.ALL,
        tier: SubscriptionsListRequestTierOrStr | None = SubscriptionsListRequestTier.ALL,
        premium_tiers: str | None = None,
        premium_tier_ids: str | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        page: int | None = None,
        email: str | None = None,
        order_by: SubscriptionsListRequestOrderByOrStr | None = SubscriptionsListRequestOrderBy.CREATED,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        creation_date: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SubscriptionsListResponse:
        """Retrieve all subscriptions belonging to a specific publication.

        **New**: This endpoint now supports cursor-based pagination for better performance and consistency. Use the
        ``cursor`` parameter instead of ``page`` for new integrations. **Deprecation Notice**: Offset-based pagination
        (using ``page`` parameter) is deprecated and limited to 100 pages maximum. Please migrate to cursor-based
        pagination. See our Pagination Guide for details.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``subscription_premium_tiers `` - Returns an array of tiers
                the subscription is associated with.<br>``referrals`` - Returns an array of subscriptions with limited
                data - ``id``, ``email``, and ``status``. These are the subscriptions that were referred by this
                subscription.<br>``stats`` - Returns statistics about the subscription(s).<br>``custom_fields`` -
                Returns an array of custom field values that have been set on the subscription. <br>``newsletter_lists``
                - Returns an array of newsletter list prefixed IDs the subscription is actively subscribed to.
            status: Optionally filter the results by a status
            tier: Optionally filter the results by a their tier
            premium_tiers: Optionally filter the results by one or multiple premium tiers
            premium_tier_ids: Optionally filter the results by one or multiple premium tier ids
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of
                results. When provided, pagination will use cursor-based method which is more efficient and consistent
                than offset-based pagination. See the `Pagination Guide </welcome/pagination>`__ for more details.
            page: **Offset-based pagination (deprecated)**: Page number for offset-based pagination. This method is
                deprecated and limited to 100 pages maximum. Please migrate to cursor-based pagination using the
                ``cursor`` parameter. If not specified, results 1-10 from page 1 will be returned. See the `Pagination
                Guide </welcome/pagination>`__ for migration guidance.
            email: Optional email address to find a subscription.<br>This param must be an exact match and is case
                insensitive.
            order_by: The field that the results are sorted by. Defaults to created<br> ``created`` - The time in which
                the subscription was first created.<br>
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            creation_date: Optional date entry (in the format YYYY/MM/DD) that filters returned subscriptions by their
                creation date.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.index20(
                publication_id,
                authorization,
                expand=expand,
                status=status,
                tier=tier,
                premium_tiers=premium_tiers,
                premium_tier_ids=premium_tier_ids,
                limit=limit,
                cursor=cursor,
                page=page,
                email=email,
                order_by=order_by,
                direction=direction,
                creation_date=creation_date,
                request_options=request_options,
            ),
        )

    def patch3(
        self,
        publication_id: str,
        subscription_id: str,
        authorization: str,
        *,
        body: PublicationsSubscriptionsRequest1 | PublicationsSubscriptionsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SubscriptionResponse:
        """Update a single subscription.

        Args:
            publication_id: The prefixed ID of the publication object
            subscription_id: The prefixed ID of the subscription object
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
            self._with_raw_response.patch3(
                publication_id, subscription_id, authorization, body=body, request_options=request_options
            ),
        )

    def put3(
        self,
        publication_id: str,
        subscription_id: str,
        authorization: str,
        *,
        body: (
            PublicationsSubscriptionsRequestReferenceSubscriptionsApi
            | PublicationsSubscriptionsRequestReferenceSubscriptionsApiDict
            | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SubscriptionResponse:
        """Update a single subscription.

        Args:
            publication_id: The prefixed ID of the publication object
            subscription_id: The prefixed ID of the subscription object
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
            self._with_raw_response.put3(
                publication_id, subscription_id, authorization, body=body, request_options=request_options
            ),
        )

    def update_by_email(
        self,
        publication_id: str,
        email: str,
        authorization: str,
        *,
        body: PublicationsSubscriptionsByEmailRequest | PublicationsSubscriptionsByEmailRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SubscriptionResponse:
        """Update a single subscription by email.

        Args:
            publication_id: The prefixed ID of the publication object
            email: The email of the subscription object
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
            self._with_raw_response.update_by_email(
                publication_id, email, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> SubscriptionsWithRawResponse:
        return self._with_raw_response


class AsyncSubscriptions:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncSubscriptionsWithRawResponse(client, server)

    async def create11(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: SubscriptionRequest | SubscriptionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SubscriptionResponse:
        """Create new subscriptions for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Subscription created

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create11(
                publication_id, authorization, body=body, request_options=request_options
            ),
        )

    async def delete5(
        self,
        publication_id: str,
        subscription_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SubscriptionDeleteResponse:
        """This cannot be undone. All data associated with the subscription will also be deleted. We recommend
        unsubscribing when possible instead of deleting. If a premium subscription is deleted they will no longer be
        billed. Deletes a subscription.

        Args:
            publication_id: The prefixed ID of the publication object
            subscription_id: The prefixed ID of the subscription object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete5(
                publication_id, subscription_id, authorization, request_options=request_options
            ),
        )

    async def get_by_email(
        self,
        publication_id: str,
        email: str,
        authorization: str,
        *,
        expand: SubscriptionsGetRequestExpandItemOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SubscriptionResponse:
        """Please note that this endpoint requires the email to be URL encoded. Please reference your language's
        documentation for the correct method of encoding. Retrieve a single subscription belonging to a specific email
        address in a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            email: The ID of the subscriber object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``subscription_premium_tiers `` - Returns an array of tiers
                the subscription is associated with.<br>``referrals`` - Returns an array of subscriptions with limited
                data - ``id``, ``email``, and ``status``. These are the subscriptions that were referred by this
                subscription.<br>``stats`` - Returns statistics about the subscription(s).<br>``custom_fields`` -
                Returns an array of custom field values that have been set on the subscription. <br>``tags`` - Returns
                an array of tags that have been set on the subscription.<br>``newsletter_lists`` - Returns an array of
                newsletter list prefixed IDs the subscription is actively subscribed to.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_by_email(
                publication_id, email, authorization, expand=expand, request_options=request_options
            ),
        )

    async def get_by_id(
        self,
        publication_id: str,
        subscription_id: str,
        authorization: str,
        *,
        expand: SubscriptionsGetRequestExpandItemOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SubscriptionResponse:
        """In previous versions of the API, another endpoint existed to retrieve a subscription by the subscriber ID.
        This endpoint is now deprecated and will be removed in a future version of the API. Please use this endpoint
        instead. The subscription ID can be found by exporting a list of subscriptions either via the ``Settings >
        Publications > Export Data`` or by exporting a CSV in a segment. Retrieve a single subscription belonging to a
        specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            subscription_id: The prefixed ID of the subscription object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``subscription_premium_tiers`` - Returns an array of tiers
                the subscription is associated with.<br>``referrals`` - Returns an array of subscriptions with limited
                data - ``id``, ``email``, and ``status``. These are the subscriptions that were referred by this
                subscription.<br>``stats`` - Returns statistics about the subscription(s).<br>``custom_fields`` -
                Returns an array of custom field values that have been set on the subscription. <br>``tags`` - Returns
                an array of tags that have been set on the subscription.<br>``newsletter_lists`` - Returns an array of
                newsletter list prefixed IDs the subscription is actively subscribed to.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_by_id(
                publication_id, subscription_id, authorization, expand=expand, request_options=request_options
            ),
        )

    async def index20(
        self,
        publication_id: str,
        authorization: str,
        *,
        expand: SubscriptionsListRequestExpandItemOrStr | None = None,
        status: SubscriptionsListRequestStatusOrStr | None = SubscriptionsListRequestStatus.ALL,
        tier: SubscriptionsListRequestTierOrStr | None = SubscriptionsListRequestTier.ALL,
        premium_tiers: str | None = None,
        premium_tier_ids: str | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        page: int | None = None,
        email: str | None = None,
        order_by: SubscriptionsListRequestOrderByOrStr | None = SubscriptionsListRequestOrderBy.CREATED,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        creation_date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SubscriptionsListResponse:
        """Retrieve all subscriptions belonging to a specific publication.

        **New**: This endpoint now supports cursor-based pagination for better performance and consistency. Use the
        ``cursor`` parameter instead of ``page`` for new integrations. **Deprecation Notice**: Offset-based pagination
        (using ``page`` parameter) is deprecated and limited to 100 pages maximum. Please migrate to cursor-based
        pagination. See our Pagination Guide for details.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``subscription_premium_tiers `` - Returns an array of tiers
                the subscription is associated with.<br>``referrals`` - Returns an array of subscriptions with limited
                data - ``id``, ``email``, and ``status``. These are the subscriptions that were referred by this
                subscription.<br>``stats`` - Returns statistics about the subscription(s).<br>``custom_fields`` -
                Returns an array of custom field values that have been set on the subscription. <br>``newsletter_lists``
                - Returns an array of newsletter list prefixed IDs the subscription is actively subscribed to.
            status: Optionally filter the results by a status
            tier: Optionally filter the results by a their tier
            premium_tiers: Optionally filter the results by one or multiple premium tiers
            premium_tier_ids: Optionally filter the results by one or multiple premium tier ids
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of
                results. When provided, pagination will use cursor-based method which is more efficient and consistent
                than offset-based pagination. See the `Pagination Guide </welcome/pagination>`__ for more details.
            page: **Offset-based pagination (deprecated)**: Page number for offset-based pagination. This method is
                deprecated and limited to 100 pages maximum. Please migrate to cursor-based pagination using the
                ``cursor`` parameter. If not specified, results 1-10 from page 1 will be returned. See the `Pagination
                Guide </welcome/pagination>`__ for migration guidance.
            email: Optional email address to find a subscription.<br>This param must be an exact match and is case
                insensitive.
            order_by: The field that the results are sorted by. Defaults to created<br> ``created`` - The time in which
                the subscription was first created.<br>
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            creation_date: Optional date entry (in the format YYYY/MM/DD) that filters returned subscriptions by their
                creation date.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.index20(
                publication_id,
                authorization,
                expand=expand,
                status=status,
                tier=tier,
                premium_tiers=premium_tiers,
                premium_tier_ids=premium_tier_ids,
                limit=limit,
                cursor=cursor,
                page=page,
                email=email,
                order_by=order_by,
                direction=direction,
                creation_date=creation_date,
                request_options=request_options,
            ),
        )

    async def patch3(
        self,
        publication_id: str,
        subscription_id: str,
        authorization: str,
        *,
        body: PublicationsSubscriptionsRequest1 | PublicationsSubscriptionsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SubscriptionResponse:
        """Update a single subscription.

        Args:
            publication_id: The prefixed ID of the publication object
            subscription_id: The prefixed ID of the subscription object
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
            await self._with_raw_response.patch3(
                publication_id, subscription_id, authorization, body=body, request_options=request_options
            ),
        )

    async def put3(
        self,
        publication_id: str,
        subscription_id: str,
        authorization: str,
        *,
        body: (
            PublicationsSubscriptionsRequestReferenceSubscriptionsApi
            | PublicationsSubscriptionsRequestReferenceSubscriptionsApiDict
            | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SubscriptionResponse:
        """Update a single subscription.

        Args:
            publication_id: The prefixed ID of the publication object
            subscription_id: The prefixed ID of the subscription object
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
            await self._with_raw_response.put3(
                publication_id, subscription_id, authorization, body=body, request_options=request_options
            ),
        )

    async def update_by_email(
        self,
        publication_id: str,
        email: str,
        authorization: str,
        *,
        body: PublicationsSubscriptionsByEmailRequest | PublicationsSubscriptionsByEmailRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SubscriptionResponse:
        """Update a single subscription by email.

        Args:
            publication_id: The prefixed ID of the publication object
            email: The email of the subscription object
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
            await self._with_raw_response.update_by_email(
                publication_id, email, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSubscriptionsWithRawResponse:
        return self._with_raw_response


class SubscriptionsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create11(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: SubscriptionRequest | SubscriptionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionResponse, Create11ErrorBody]:
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
            url_template=self._server.default("/publications/{publicationId}/subscriptions"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SubscriptionRequest | SubscriptionRequestDict | None](body),
            decoder=json_decoder[SubscriptionResponse],
            error_mapper=create11_error_mapper,
            request_options=request_options,
        )

    def delete5(
        self,
        publication_id: str,
        subscription_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionDeleteResponse, Delete5ErrorBody]:
        """This cannot be undone. All data associated with the subscription will also be deleted. We recommend
        unsubscribing when possible instead of deleting. If a premium subscription is deleted they will no longer be
        billed. Deletes a subscription.

        Args:
            publication_id: The prefixed ID of the publication object
            subscription_id: The prefixed ID of the subscription object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/publications/{publicationId}/subscriptions/{subscriptionId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("subscriptionId", subscription_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[SubscriptionDeleteResponse],
            error_mapper=delete5_error_mapper,
            request_options=request_options,
        )

    def get_by_email(
        self,
        publication_id: str,
        email: str,
        authorization: str,
        *,
        expand: SubscriptionsGetRequestExpandItemOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionResponse, GetByEmailErrorBody]:
        """Please note that this endpoint requires the email to be URL encoded. Please reference your language's
        documentation for the correct method of encoding. Retrieve a single subscription belonging to a specific email
        address in a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            email: The ID of the subscriber object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``subscription_premium_tiers `` - Returns an array of tiers
                the subscription is associated with.<br>``referrals`` - Returns an array of subscriptions with limited
                data - ``id``, ``email``, and ``status``. These are the subscriptions that were referred by this
                subscription.<br>``stats`` - Returns statistics about the subscription(s).<br>``custom_fields`` -
                Returns an array of custom field values that have been set on the subscription. <br>``tags`` - Returns
                an array of tags that have been set on the subscription.<br>``newsletter_lists`` - Returns an array of
                newsletter list prefixed IDs the subscription is actively subscribed to.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/subscriptions/by_email/{email}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("email", email)],
            query_params=[param[SubscriptionsGetRequestExpandItemOrStr | None]("expand[]", expand)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[SubscriptionResponse],
            error_mapper=get_by_email_error_mapper,
            request_options=request_options,
        )

    def get_by_id(
        self,
        publication_id: str,
        subscription_id: str,
        authorization: str,
        *,
        expand: SubscriptionsGetRequestExpandItemOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionResponse, GetByIdErrorBody]:
        """In previous versions of the API, another endpoint existed to retrieve a subscription by the subscriber ID.
        This endpoint is now deprecated and will be removed in a future version of the API. Please use this endpoint
        instead. The subscription ID can be found by exporting a list of subscriptions either via the ``Settings >
        Publications > Export Data`` or by exporting a CSV in a segment. Retrieve a single subscription belonging to a
        specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            subscription_id: The prefixed ID of the subscription object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``subscription_premium_tiers`` - Returns an array of tiers
                the subscription is associated with.<br>``referrals`` - Returns an array of subscriptions with limited
                data - ``id``, ``email``, and ``status``. These are the subscriptions that were referred by this
                subscription.<br>``stats`` - Returns statistics about the subscription(s).<br>``custom_fields`` -
                Returns an array of custom field values that have been set on the subscription. <br>``tags`` - Returns
                an array of tags that have been set on the subscription.<br>``newsletter_lists`` - Returns an array of
                newsletter list prefixed IDs the subscription is actively subscribed to.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/subscriptions/{subscriptionId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("subscriptionId", subscription_id)],
            query_params=[param[SubscriptionsGetRequestExpandItemOrStr | None]("expand[]", expand)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[SubscriptionResponse],
            error_mapper=get_by_id_error_mapper,
            request_options=request_options,
        )

    def index20(
        self,
        publication_id: str,
        authorization: str,
        *,
        expand: SubscriptionsListRequestExpandItemOrStr | None = None,
        status: SubscriptionsListRequestStatusOrStr | None = SubscriptionsListRequestStatus.ALL,
        tier: SubscriptionsListRequestTierOrStr | None = SubscriptionsListRequestTier.ALL,
        premium_tiers: str | None = None,
        premium_tier_ids: str | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        page: int | None = None,
        email: str | None = None,
        order_by: SubscriptionsListRequestOrderByOrStr | None = SubscriptionsListRequestOrderBy.CREATED,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        creation_date: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionsListResponse, Index20ErrorBody]:
        """Retrieve all subscriptions belonging to a specific publication.

        **New**: This endpoint now supports cursor-based pagination for better performance and consistency. Use the
        ``cursor`` parameter instead of ``page`` for new integrations. **Deprecation Notice**: Offset-based pagination
        (using ``page`` parameter) is deprecated and limited to 100 pages maximum. Please migrate to cursor-based
        pagination. See our Pagination Guide for details.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``subscription_premium_tiers `` - Returns an array of tiers
                the subscription is associated with.<br>``referrals`` - Returns an array of subscriptions with limited
                data - ``id``, ``email``, and ``status``. These are the subscriptions that were referred by this
                subscription.<br>``stats`` - Returns statistics about the subscription(s).<br>``custom_fields`` -
                Returns an array of custom field values that have been set on the subscription. <br>``newsletter_lists``
                - Returns an array of newsletter list prefixed IDs the subscription is actively subscribed to.
            status: Optionally filter the results by a status
            tier: Optionally filter the results by a their tier
            premium_tiers: Optionally filter the results by one or multiple premium tiers
            premium_tier_ids: Optionally filter the results by one or multiple premium tier ids
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of
                results. When provided, pagination will use cursor-based method which is more efficient and consistent
                than offset-based pagination. See the `Pagination Guide </welcome/pagination>`__ for more details.
            page: **Offset-based pagination (deprecated)**: Page number for offset-based pagination. This method is
                deprecated and limited to 100 pages maximum. Please migrate to cursor-based pagination using the
                ``cursor`` parameter. If not specified, results 1-10 from page 1 will be returned. See the `Pagination
                Guide </welcome/pagination>`__ for migration guidance.
            email: Optional email address to find a subscription.<br>This param must be an exact match and is case
                insensitive.
            order_by: The field that the results are sorted by. Defaults to created<br> ``created`` - The time in which
                the subscription was first created.<br>
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            creation_date: Optional date entry (in the format YYYY/MM/DD) that filters returned subscriptions by their
                creation date.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/subscriptions"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[SubscriptionsListRequestExpandItemOrStr | None]("expand[]", expand),
                param[SubscriptionsListRequestStatusOrStr | None]("status", status),
                param[SubscriptionsListRequestTierOrStr | None]("tier", tier),
                param[str | None]("premium_tiers[]", premium_tiers),
                param[str | None]("premium_tier_ids[]", premium_tier_ids),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[int | None]("page", page),
                param[str | None]("email", email),
                param[SubscriptionsListRequestOrderByOrStr | None]("order_by", order_by),
                param[RequestDirectionOrStr | None]("direction", direction),
                param[str | None]("creation_date", creation_date),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[SubscriptionsListResponse],
            error_mapper=index20_error_mapper,
            request_options=request_options,
        )

    def patch3(
        self,
        publication_id: str,
        subscription_id: str,
        authorization: str,
        *,
        body: PublicationsSubscriptionsRequest1 | PublicationsSubscriptionsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionResponse, Patch3ErrorBody]:
        """Update a single subscription.

        Args:
            publication_id: The prefixed ID of the publication object
            subscription_id: The prefixed ID of the subscription object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/publications/{publicationId}/subscriptions/{subscriptionId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("subscriptionId", subscription_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsSubscriptionsRequest1 | PublicationsSubscriptionsRequest1Dict | None](body),
            decoder=json_decoder[SubscriptionResponse],
            error_mapper=patch3_error_mapper,
            request_options=request_options,
        )

    def put3(
        self,
        publication_id: str,
        subscription_id: str,
        authorization: str,
        *,
        body: (
            PublicationsSubscriptionsRequestReferenceSubscriptionsApi
            | PublicationsSubscriptionsRequestReferenceSubscriptionsApiDict
            | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionResponse, Put3ErrorBody]:
        """Update a single subscription.

        Args:
            publication_id: The prefixed ID of the publication object
            subscription_id: The prefixed ID of the subscription object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/publications/{publicationId}/subscriptions/{subscriptionId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("subscriptionId", subscription_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    PublicationsSubscriptionsRequestReferenceSubscriptionsApi
                    | PublicationsSubscriptionsRequestReferenceSubscriptionsApiDict
                    | None
                )
            ](body),
            decoder=json_decoder[SubscriptionResponse],
            error_mapper=put3_error_mapper,
            request_options=request_options,
        )

    def update_by_email(
        self,
        publication_id: str,
        email: str,
        authorization: str,
        *,
        body: PublicationsSubscriptionsByEmailRequest | PublicationsSubscriptionsByEmailRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionResponse, UpdateByEmailErrorBody]:
        """Update a single subscription by email.

        Args:
            publication_id: The prefixed ID of the publication object
            email: The email of the subscription object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/publications/{publicationId}/subscriptions/by_email/{email}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("email", email)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                PublicationsSubscriptionsByEmailRequest | PublicationsSubscriptionsByEmailRequestDict | None
            ](body),
            decoder=json_decoder[SubscriptionResponse],
            error_mapper=update_by_email_error_mapper,
            request_options=request_options,
        )


class AsyncSubscriptionsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create11(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: SubscriptionRequest | SubscriptionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionResponse, Create11ErrorBody]:
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
            url_template=self._server.default("/publications/{publicationId}/subscriptions"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SubscriptionRequest | SubscriptionRequestDict | None](body),
            decoder=async_json_decoder[SubscriptionResponse],
            error_mapper=create11_error_mapper,
            request_options=request_options,
        )

    async def delete5(
        self,
        publication_id: str,
        subscription_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionDeleteResponse, Delete5ErrorBody]:
        """This cannot be undone. All data associated with the subscription will also be deleted. We recommend
        unsubscribing when possible instead of deleting. If a premium subscription is deleted they will no longer be
        billed. Deletes a subscription.

        Args:
            publication_id: The prefixed ID of the publication object
            subscription_id: The prefixed ID of the subscription object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/publications/{publicationId}/subscriptions/{subscriptionId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("subscriptionId", subscription_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[SubscriptionDeleteResponse],
            error_mapper=delete5_error_mapper,
            request_options=request_options,
        )

    async def get_by_email(
        self,
        publication_id: str,
        email: str,
        authorization: str,
        *,
        expand: SubscriptionsGetRequestExpandItemOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionResponse, GetByEmailErrorBody]:
        """Please note that this endpoint requires the email to be URL encoded. Please reference your language's
        documentation for the correct method of encoding. Retrieve a single subscription belonging to a specific email
        address in a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            email: The ID of the subscriber object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``subscription_premium_tiers `` - Returns an array of tiers
                the subscription is associated with.<br>``referrals`` - Returns an array of subscriptions with limited
                data - ``id``, ``email``, and ``status``. These are the subscriptions that were referred by this
                subscription.<br>``stats`` - Returns statistics about the subscription(s).<br>``custom_fields`` -
                Returns an array of custom field values that have been set on the subscription. <br>``tags`` - Returns
                an array of tags that have been set on the subscription.<br>``newsletter_lists`` - Returns an array of
                newsletter list prefixed IDs the subscription is actively subscribed to.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/subscriptions/by_email/{email}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("email", email)],
            query_params=[param[SubscriptionsGetRequestExpandItemOrStr | None]("expand[]", expand)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[SubscriptionResponse],
            error_mapper=get_by_email_error_mapper,
            request_options=request_options,
        )

    async def get_by_id(
        self,
        publication_id: str,
        subscription_id: str,
        authorization: str,
        *,
        expand: SubscriptionsGetRequestExpandItemOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionResponse, GetByIdErrorBody]:
        """In previous versions of the API, another endpoint existed to retrieve a subscription by the subscriber ID.
        This endpoint is now deprecated and will be removed in a future version of the API. Please use this endpoint
        instead. The subscription ID can be found by exporting a list of subscriptions either via the ``Settings >
        Publications > Export Data`` or by exporting a CSV in a segment. Retrieve a single subscription belonging to a
        specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            subscription_id: The prefixed ID of the subscription object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``subscription_premium_tiers`` - Returns an array of tiers
                the subscription is associated with.<br>``referrals`` - Returns an array of subscriptions with limited
                data - ``id``, ``email``, and ``status``. These are the subscriptions that were referred by this
                subscription.<br>``stats`` - Returns statistics about the subscription(s).<br>``custom_fields`` -
                Returns an array of custom field values that have been set on the subscription. <br>``tags`` - Returns
                an array of tags that have been set on the subscription.<br>``newsletter_lists`` - Returns an array of
                newsletter list prefixed IDs the subscription is actively subscribed to.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/subscriptions/{subscriptionId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("subscriptionId", subscription_id)],
            query_params=[param[SubscriptionsGetRequestExpandItemOrStr | None]("expand[]", expand)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[SubscriptionResponse],
            error_mapper=get_by_id_error_mapper,
            request_options=request_options,
        )

    async def index20(
        self,
        publication_id: str,
        authorization: str,
        *,
        expand: SubscriptionsListRequestExpandItemOrStr | None = None,
        status: SubscriptionsListRequestStatusOrStr | None = SubscriptionsListRequestStatus.ALL,
        tier: SubscriptionsListRequestTierOrStr | None = SubscriptionsListRequestTier.ALL,
        premium_tiers: str | None = None,
        premium_tier_ids: str | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        page: int | None = None,
        email: str | None = None,
        order_by: SubscriptionsListRequestOrderByOrStr | None = SubscriptionsListRequestOrderBy.CREATED,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        creation_date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionsListResponse, Index20ErrorBody]:
        """Retrieve all subscriptions belonging to a specific publication.

        **New**: This endpoint now supports cursor-based pagination for better performance and consistency. Use the
        ``cursor`` parameter instead of ``page`` for new integrations. **Deprecation Notice**: Offset-based pagination
        (using ``page`` parameter) is deprecated and limited to 100 pages maximum. Please migrate to cursor-based
        pagination. See our Pagination Guide for details.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``subscription_premium_tiers `` - Returns an array of tiers
                the subscription is associated with.<br>``referrals`` - Returns an array of subscriptions with limited
                data - ``id``, ``email``, and ``status``. These are the subscriptions that were referred by this
                subscription.<br>``stats`` - Returns statistics about the subscription(s).<br>``custom_fields`` -
                Returns an array of custom field values that have been set on the subscription. <br>``newsletter_lists``
                - Returns an array of newsletter list prefixed IDs the subscription is actively subscribed to.
            status: Optionally filter the results by a status
            tier: Optionally filter the results by a their tier
            premium_tiers: Optionally filter the results by one or multiple premium tiers
            premium_tier_ids: Optionally filter the results by one or multiple premium tier ids
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of
                results. When provided, pagination will use cursor-based method which is more efficient and consistent
                than offset-based pagination. See the `Pagination Guide </welcome/pagination>`__ for more details.
            page: **Offset-based pagination (deprecated)**: Page number for offset-based pagination. This method is
                deprecated and limited to 100 pages maximum. Please migrate to cursor-based pagination using the
                ``cursor`` parameter. If not specified, results 1-10 from page 1 will be returned. See the `Pagination
                Guide </welcome/pagination>`__ for migration guidance.
            email: Optional email address to find a subscription.<br>This param must be an exact match and is case
                insensitive.
            order_by: The field that the results are sorted by. Defaults to created<br> ``created`` - The time in which
                the subscription was first created.<br>
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            creation_date: Optional date entry (in the format YYYY/MM/DD) that filters returned subscriptions by their
                creation date.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/subscriptions"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[SubscriptionsListRequestExpandItemOrStr | None]("expand[]", expand),
                param[SubscriptionsListRequestStatusOrStr | None]("status", status),
                param[SubscriptionsListRequestTierOrStr | None]("tier", tier),
                param[str | None]("premium_tiers[]", premium_tiers),
                param[str | None]("premium_tier_ids[]", premium_tier_ids),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[int | None]("page", page),
                param[str | None]("email", email),
                param[SubscriptionsListRequestOrderByOrStr | None]("order_by", order_by),
                param[RequestDirectionOrStr | None]("direction", direction),
                param[str | None]("creation_date", creation_date),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[SubscriptionsListResponse],
            error_mapper=index20_error_mapper,
            request_options=request_options,
        )

    async def patch3(
        self,
        publication_id: str,
        subscription_id: str,
        authorization: str,
        *,
        body: PublicationsSubscriptionsRequest1 | PublicationsSubscriptionsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionResponse, Patch3ErrorBody]:
        """Update a single subscription.

        Args:
            publication_id: The prefixed ID of the publication object
            subscription_id: The prefixed ID of the subscription object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/publications/{publicationId}/subscriptions/{subscriptionId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("subscriptionId", subscription_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsSubscriptionsRequest1 | PublicationsSubscriptionsRequest1Dict | None](body),
            decoder=async_json_decoder[SubscriptionResponse],
            error_mapper=patch3_error_mapper,
            request_options=request_options,
        )

    async def put3(
        self,
        publication_id: str,
        subscription_id: str,
        authorization: str,
        *,
        body: (
            PublicationsSubscriptionsRequestReferenceSubscriptionsApi
            | PublicationsSubscriptionsRequestReferenceSubscriptionsApiDict
            | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionResponse, Put3ErrorBody]:
        """Update a single subscription.

        Args:
            publication_id: The prefixed ID of the publication object
            subscription_id: The prefixed ID of the subscription object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/publications/{publicationId}/subscriptions/{subscriptionId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("subscriptionId", subscription_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    PublicationsSubscriptionsRequestReferenceSubscriptionsApi
                    | PublicationsSubscriptionsRequestReferenceSubscriptionsApiDict
                    | None
                )
            ](body),
            decoder=async_json_decoder[SubscriptionResponse],
            error_mapper=put3_error_mapper,
            request_options=request_options,
        )

    async def update_by_email(
        self,
        publication_id: str,
        email: str,
        authorization: str,
        *,
        body: PublicationsSubscriptionsByEmailRequest | PublicationsSubscriptionsByEmailRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SubscriptionResponse, UpdateByEmailErrorBody]:
        """Update a single subscription by email.

        Args:
            publication_id: The prefixed ID of the publication object
            email: The email of the subscription object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/publications/{publicationId}/subscriptions/by_email/{email}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("email", email)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                PublicationsSubscriptionsByEmailRequest | PublicationsSubscriptionsByEmailRequestDict | None
            ](body),
            decoder=async_json_decoder[SubscriptionResponse],
            error_mapper=update_by_email_error_mapper,
            request_options=request_options,
        )
