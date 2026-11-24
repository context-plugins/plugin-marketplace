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
from ..errors.create9_error import Create9ErrorBody, create9_error_mapper
from ..errors.delete4_error import Delete4ErrorBody, delete4_error_mapper
from ..errors.expand_results_error import ExpandResultsErrorBody, expand_results_error_mapper
from ..errors.index19_error import Index19ErrorBody, index19_error_mapper
from ..errors.list_members_error import ListMembersErrorBody, list_members_error_mapper
from ..errors.recalculate_error import RecalculateErrorBody, recalculate_error_mapper
from ..errors.show15_error import Show15ErrorBody, show15_error_mapper
from ..models.enums.request_direction import RequestDirection, RequestDirectionOrStr
from ..models.enums.segment_members_expand_items import SegmentMembersExpandItemsOrStr
from ..models.enums.segment_order_by import SegmentOrderBy, SegmentOrderByOrStr
from ..models.enums.segment_request_status import SegmentRequestStatus, SegmentRequestStatusOrStr
from ..models.enums.segment_type import SegmentType, SegmentTypeOrStr
from ..models.enums.segments_expand_items import SegmentsExpandItemsOrStr
from ..models.publications_segments_request import PublicationsSegmentsRequest, PublicationsSegmentsRequestDict
from ..models.segment_delete_response import SegmentDeleteResponse
from ..models.segment_members_response import SegmentMembersResponse
from ..models.segment_recalculate_response import SegmentRecalculateResponse
from ..models.segment_show_response import SegmentShowResponse
from ..models.segments_get_response import SegmentsGetResponse
from ..models.segments_list_response import SegmentsListResponse
from ..server.server import Server


class Segments:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = SegmentsWithRawResponse(client, server)

    def create9(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsSegmentsRequest | PublicationsSegmentsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SegmentShowResponse:
        """Create a new segment.

        **Manual segments** — Use ``subscriptions`` or ``emails`` input to create a segment from an explicit list of
        subscription IDs or email addresses. The segment is processed synchronously and returns with ``status:
        completed``. Net new email addresses will be ignored; create subscriptions using the ``Create Subscription``
        endpoint.

        **Dynamic segments** — Use ``custom_fields`` input to create a segment that filters subscribers by custom field
        values. The segment is processed asynchronously and returns with ``status: pending``. Results will be available
        in the ``List Segment Subscribers`` endpoint after processing is complete.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create9(publication_id, authorization, body=body, request_options=request_options)
        )

    def delete4(
        self,
        publication_id: str,
        segment_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SegmentDeleteResponse:
        """Delete a segment. Deleting the segment does not effect the subscriptions in the segment.

        Args:
            publication_id: The prefixed ID of the publication object
            segment_id: The prefixed ID of the segment object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Unauthorized. The API key or OAuth access token is missing, invalid, or expired. Resource Not
                Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete4(publication_id, segment_id, authorization, request_options=request_options)
        )

    def expand_results(
        self,
        publication_id: str,
        segment_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SegmentsGetResponse:
        """List subscriber IDs for a segment. Returns a lightweight array of subscription IDs only, without additional
        subscriber details. **Use this endpoint when you only need subscriber IDs** (e.g., for counting, ID-based
        lookups, or integrations with external systems). If you need full subscriber details (email, status, custom
        fields, etc.), use ``/segments/{segmentId}/members`` instead.

        Args:
            publication_id: The prefixed ID of the publication object
            segment_id: The prefixed ID of the segment object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.expand_results(
                publication_id, segment_id, authorization, limit=limit, page=page, request_options=request_options
            ),
        )

    def index19(
        self,
        publication_id: str,
        authorization: str,
        *,
        type_: SegmentTypeOrStr | None = SegmentType.ALL,
        status: SegmentRequestStatusOrStr | None = SegmentRequestStatus.ALL,
        limit: int | None = None,
        page: int | None = None,
        order_by: SegmentOrderByOrStr | None = SegmentOrderBy.CREATED,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        expand: list[SegmentsExpandItemsOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SegmentsListResponse:
        """Retrieve information about all segments belonging to a specific publication

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            type_: Optionally filter the results by the segment's type.
            status: Optionally filter the results by the segment's status.
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            order_by: The field that the results are sorted by. Defaults to created<br> ``created`` - The time in which
                the segment was first created.<br> ``last_calculated`` - The time that the segment last completed
                calculation. Measured in seconds since the Unix epoch.
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            expand: Optionally expand the response to include additional data. <br> ``stats`` - Requests the most
                recently calculated statistics for a segment. <br> Segment stats are recalculated once daily around 7
                a.m. UTC for dynamic segments, but can be manually recalculated at any time in the dashboard. Manual and
                static segments only calculate once upon upload or creation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.index19(
                publication_id,
                authorization,
                type_=type_,
                status=status,
                limit=limit,
                page=page,
                order_by=order_by,
                direction=direction,
                expand=expand,
                request_options=request_options,
            ),
        )

    def list_members(
        self,
        publication_id: str,
        segment_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        expand: list[SegmentMembersExpandItemsOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SegmentMembersResponse:
        """List all members in a segment with full subscription data. Each member is returned as a subscription object
        containing complete subscriber information and their subscription details. Supports optional expansions for
        stats, custom fields, tags, referrals, and premium tiers. **Use this endpoint when you need detailed subscriber
        information.** If you only need subscriber IDs, use ``/segments/{segmentId}/results`` for a lighter-weight
        response.

        Args:
            publication_id: The prefixed ID of the publication object
            segment_id: The prefixed ID of the segment object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            expand: Optionally expand the response to include additional data. <br> ``stats`` - Returns statistics about
                the subscription(s). <br> ``custom_fields`` - Returns custom field values set on the subscription. <br>
                ``referrals`` - Returns referrals made by the subscription. <br> ``tags`` - Returns tags associated with
                the subscription. <br> ``subscription_premium_tiers`` - Returns premium tier(s) the subscription is
                subscribed to.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_members(
                publication_id,
                segment_id,
                authorization,
                limit=limit,
                page=page,
                expand=expand,
                request_options=request_options,
            ),
        )

    def recalculate(
        self,
        publication_id: str,
        segment_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SegmentRecalculateResponse:
        """Recalculates a specific segment belonging to a publication

        Args:
            publication_id: The prefixed ID of the publication object
            segment_id: The prefixed ID of the segment object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Unauthorized. The API key or OAuth access token is missing, invalid, or expired. Resource Not
                Found Unprocessable Entity Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.recalculate(
                publication_id, segment_id, authorization, request_options=request_options
            ),
        )

    def show15(
        self,
        publication_id: str,
        segment_id: str,
        authorization: str,
        *,
        expand: list[SegmentsExpandItemsOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SegmentShowResponse:
        """Retrieve information about a specific segment belonging to a publication

        Args:
            publication_id: The prefixed ID of the publication object
            segment_id: The prefixed ID of the segment object
            authorization: Bearer authentication
            expand: Optionally expand the response to include additional data. <br> ``stats`` - Requests the most
                recently calculated statistics for a segment. <br> Segment stats are recalculated once daily around 7
                a.m. UTC for dynamic segments, but can be manually recalculated at any time in the dashboard. Manual and
                static segments only calculate once upon upload or creation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Unauthorized. The API key or OAuth access token is missing, invalid, or expired. Resource Not
                Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.show15(
                publication_id, segment_id, authorization, expand=expand, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> SegmentsWithRawResponse:
        return self._with_raw_response


class AsyncSegments:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncSegmentsWithRawResponse(client, server)

    async def create9(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsSegmentsRequest | PublicationsSegmentsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SegmentShowResponse:
        """Create a new segment.

        **Manual segments** — Use ``subscriptions`` or ``emails`` input to create a segment from an explicit list of
        subscription IDs or email addresses. The segment is processed synchronously and returns with ``status:
        completed``. Net new email addresses will be ignored; create subscriptions using the ``Create Subscription``
        endpoint.

        **Dynamic segments** — Use ``custom_fields`` input to create a segment that filters subscribers by custom field
        values. The segment is processed asynchronously and returns with ``status: pending``. Results will be available
        in the ``List Segment Subscribers`` endpoint after processing is complete.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create9(
                publication_id, authorization, body=body, request_options=request_options
            ),
        )

    async def delete4(
        self,
        publication_id: str,
        segment_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SegmentDeleteResponse:
        """Delete a segment. Deleting the segment does not effect the subscriptions in the segment.

        Args:
            publication_id: The prefixed ID of the publication object
            segment_id: The prefixed ID of the segment object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Unauthorized. The API key or OAuth access token is missing, invalid, or expired. Resource Not
                Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete4(
                publication_id, segment_id, authorization, request_options=request_options
            ),
        )

    async def expand_results(
        self,
        publication_id: str,
        segment_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SegmentsGetResponse:
        """List subscriber IDs for a segment. Returns a lightweight array of subscription IDs only, without additional
        subscriber details. **Use this endpoint when you only need subscriber IDs** (e.g., for counting, ID-based
        lookups, or integrations with external systems). If you need full subscriber details (email, status, custom
        fields, etc.), use ``/segments/{segmentId}/members`` instead.

        Args:
            publication_id: The prefixed ID of the publication object
            segment_id: The prefixed ID of the segment object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.expand_results(
                publication_id, segment_id, authorization, limit=limit, page=page, request_options=request_options
            ),
        )

    async def index19(
        self,
        publication_id: str,
        authorization: str,
        *,
        type_: SegmentTypeOrStr | None = SegmentType.ALL,
        status: SegmentRequestStatusOrStr | None = SegmentRequestStatus.ALL,
        limit: int | None = None,
        page: int | None = None,
        order_by: SegmentOrderByOrStr | None = SegmentOrderBy.CREATED,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        expand: list[SegmentsExpandItemsOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SegmentsListResponse:
        """Retrieve information about all segments belonging to a specific publication

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            type_: Optionally filter the results by the segment's type.
            status: Optionally filter the results by the segment's status.
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            order_by: The field that the results are sorted by. Defaults to created<br> ``created`` - The time in which
                the segment was first created.<br> ``last_calculated`` - The time that the segment last completed
                calculation. Measured in seconds since the Unix epoch.
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            expand: Optionally expand the response to include additional data. <br> ``stats`` - Requests the most
                recently calculated statistics for a segment. <br> Segment stats are recalculated once daily around 7
                a.m. UTC for dynamic segments, but can be manually recalculated at any time in the dashboard. Manual and
                static segments only calculate once upon upload or creation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.index19(
                publication_id,
                authorization,
                type_=type_,
                status=status,
                limit=limit,
                page=page,
                order_by=order_by,
                direction=direction,
                expand=expand,
                request_options=request_options,
            ),
        )

    async def list_members(
        self,
        publication_id: str,
        segment_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        expand: list[SegmentMembersExpandItemsOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SegmentMembersResponse:
        """List all members in a segment with full subscription data. Each member is returned as a subscription object
        containing complete subscriber information and their subscription details. Supports optional expansions for
        stats, custom fields, tags, referrals, and premium tiers. **Use this endpoint when you need detailed subscriber
        information.** If you only need subscriber IDs, use ``/segments/{segmentId}/results`` for a lighter-weight
        response.

        Args:
            publication_id: The prefixed ID of the publication object
            segment_id: The prefixed ID of the segment object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            expand: Optionally expand the response to include additional data. <br> ``stats`` - Returns statistics about
                the subscription(s). <br> ``custom_fields`` - Returns custom field values set on the subscription. <br>
                ``referrals`` - Returns referrals made by the subscription. <br> ``tags`` - Returns tags associated with
                the subscription. <br> ``subscription_premium_tiers`` - Returns premium tier(s) the subscription is
                subscribed to.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_members(
                publication_id,
                segment_id,
                authorization,
                limit=limit,
                page=page,
                expand=expand,
                request_options=request_options,
            ),
        )

    async def recalculate(
        self,
        publication_id: str,
        segment_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SegmentRecalculateResponse:
        """Recalculates a specific segment belonging to a publication

        Args:
            publication_id: The prefixed ID of the publication object
            segment_id: The prefixed ID of the segment object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Unauthorized. The API key or OAuth access token is missing, invalid, or expired. Resource Not
                Found Unprocessable Entity Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.recalculate(
                publication_id, segment_id, authorization, request_options=request_options
            ),
        )

    async def show15(
        self,
        publication_id: str,
        segment_id: str,
        authorization: str,
        *,
        expand: list[SegmentsExpandItemsOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SegmentShowResponse:
        """Retrieve information about a specific segment belonging to a publication

        Args:
            publication_id: The prefixed ID of the publication object
            segment_id: The prefixed ID of the segment object
            authorization: Bearer authentication
            expand: Optionally expand the response to include additional data. <br> ``stats`` - Requests the most
                recently calculated statistics for a segment. <br> Segment stats are recalculated once daily around 7
                a.m. UTC for dynamic segments, but can be manually recalculated at any time in the dashboard. Manual and
                static segments only calculate once upon upload or creation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Unauthorized. The API key or OAuth access token is missing, invalid, or expired. Resource Not
                Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.show15(
                publication_id, segment_id, authorization, expand=expand, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSegmentsWithRawResponse:
        return self._with_raw_response


class SegmentsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create9(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsSegmentsRequest | PublicationsSegmentsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SegmentShowResponse, Create9ErrorBody]:
        """Create a new segment.

        **Manual segments** — Use ``subscriptions`` or ``emails`` input to create a segment from an explicit list of
        subscription IDs or email addresses. The segment is processed synchronously and returns with ``status:
        completed``. Net new email addresses will be ignored; create subscriptions using the ``Create Subscription``
        endpoint.

        **Dynamic segments** — Use ``custom_fields`` input to create a segment that filters subscribers by custom field
        values. The segment is processed asynchronously and returns with ``status: pending``. Results will be available
        in the ``List Segment Subscribers`` endpoint after processing is complete.

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
            url_template=self._server.default("/publications/{publicationId}/segments"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsSegmentsRequest | PublicationsSegmentsRequestDict | None](body),
            decoder=json_decoder[SegmentShowResponse],
            error_mapper=create9_error_mapper,
            request_options=request_options,
        )

    def delete4(
        self,
        publication_id: str,
        segment_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SegmentDeleteResponse, Delete4ErrorBody]:
        """Delete a segment. Deleting the segment does not effect the subscriptions in the segment.

        Args:
            publication_id: The prefixed ID of the publication object
            segment_id: The prefixed ID of the segment object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/publications/{publicationId}/segments/{segmentId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("segmentId", segment_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[SegmentDeleteResponse],
            error_mapper=delete4_error_mapper,
            request_options=request_options,
        )

    def expand_results(
        self,
        publication_id: str,
        segment_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SegmentsGetResponse, ExpandResultsErrorBody]:
        """List subscriber IDs for a segment. Returns a lightweight array of subscription IDs only, without additional
        subscriber details. **Use this endpoint when you only need subscriber IDs** (e.g., for counting, ID-based
        lookups, or integrations with external systems). If you need full subscriber details (email, status, custom
        fields, etc.), use ``/segments/{segmentId}/members`` instead.

        Args:
            publication_id: The prefixed ID of the publication object
            segment_id: The prefixed ID of the segment object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/segments/{segmentId}/results"),
            path_params=[param[str]("publicationId", publication_id), param[str]("segmentId", segment_id)],
            query_params=[param[int | None]("limit", limit), param[int | None]("page", page)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[SegmentsGetResponse],
            error_mapper=expand_results_error_mapper,
            request_options=request_options,
        )

    def index19(
        self,
        publication_id: str,
        authorization: str,
        *,
        type_: SegmentTypeOrStr | None = SegmentType.ALL,
        status: SegmentRequestStatusOrStr | None = SegmentRequestStatus.ALL,
        limit: int | None = None,
        page: int | None = None,
        order_by: SegmentOrderByOrStr | None = SegmentOrderBy.CREATED,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        expand: list[SegmentsExpandItemsOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SegmentsListResponse, Index19ErrorBody]:
        """Retrieve information about all segments belonging to a specific publication

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            type_: Optionally filter the results by the segment's type.
            status: Optionally filter the results by the segment's status.
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            order_by: The field that the results are sorted by. Defaults to created<br> ``created`` - The time in which
                the segment was first created.<br> ``last_calculated`` - The time that the segment last completed
                calculation. Measured in seconds since the Unix epoch.
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            expand: Optionally expand the response to include additional data. <br> ``stats`` - Requests the most
                recently calculated statistics for a segment. <br> Segment stats are recalculated once daily around 7
                a.m. UTC for dynamic segments, but can be manually recalculated at any time in the dashboard. Manual and
                static segments only calculate once upon upload or creation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/segments"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[SegmentTypeOrStr | None]("type", type_),
                param[SegmentRequestStatusOrStr | None]("status", status),
                param[int | None]("limit", limit),
                param[int | None]("page", page),
                param[SegmentOrderByOrStr | None]("order_by", order_by),
                param[RequestDirectionOrStr | None]("direction", direction),
                param[list[SegmentsExpandItemsOrStr] | None]("expand[]", expand),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[SegmentsListResponse],
            error_mapper=index19_error_mapper,
            request_options=request_options,
        )

    def list_members(
        self,
        publication_id: str,
        segment_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        expand: list[SegmentMembersExpandItemsOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SegmentMembersResponse, ListMembersErrorBody]:
        """List all members in a segment with full subscription data. Each member is returned as a subscription object
        containing complete subscriber information and their subscription details. Supports optional expansions for
        stats, custom fields, tags, referrals, and premium tiers. **Use this endpoint when you need detailed subscriber
        information.** If you only need subscriber IDs, use ``/segments/{segmentId}/results`` for a lighter-weight
        response.

        Args:
            publication_id: The prefixed ID of the publication object
            segment_id: The prefixed ID of the segment object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            expand: Optionally expand the response to include additional data. <br> ``stats`` - Returns statistics about
                the subscription(s). <br> ``custom_fields`` - Returns custom field values set on the subscription. <br>
                ``referrals`` - Returns referrals made by the subscription. <br> ``tags`` - Returns tags associated with
                the subscription. <br> ``subscription_premium_tiers`` - Returns premium tier(s) the subscription is
                subscribed to.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/segments/{segmentId}/members"),
            path_params=[param[str]("publicationId", publication_id), param[str]("segmentId", segment_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("page", page),
                param[list[SegmentMembersExpandItemsOrStr] | None]("expand[]", expand),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[SegmentMembersResponse],
            error_mapper=list_members_error_mapper,
            request_options=request_options,
        )

    def recalculate(
        self,
        publication_id: str,
        segment_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SegmentRecalculateResponse, RecalculateErrorBody]:
        """Recalculates a specific segment belonging to a publication

        Args:
            publication_id: The prefixed ID of the publication object
            segment_id: The prefixed ID of the segment object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/publications/{publicationId}/segments/{segmentId}/recalculate"),
            path_params=[param[str]("publicationId", publication_id), param[str]("segmentId", segment_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[SegmentRecalculateResponse],
            error_mapper=recalculate_error_mapper,
            request_options=request_options,
        )

    def show15(
        self,
        publication_id: str,
        segment_id: str,
        authorization: str,
        *,
        expand: list[SegmentsExpandItemsOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SegmentShowResponse, Show15ErrorBody]:
        """Retrieve information about a specific segment belonging to a publication

        Args:
            publication_id: The prefixed ID of the publication object
            segment_id: The prefixed ID of the segment object
            authorization: Bearer authentication
            expand: Optionally expand the response to include additional data. <br> ``stats`` - Requests the most
                recently calculated statistics for a segment. <br> Segment stats are recalculated once daily around 7
                a.m. UTC for dynamic segments, but can be manually recalculated at any time in the dashboard. Manual and
                static segments only calculate once upon upload or creation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/segments/{segmentId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("segmentId", segment_id)],
            query_params=[param[list[SegmentsExpandItemsOrStr] | None]("expand[]", expand)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[SegmentShowResponse],
            error_mapper=show15_error_mapper,
            request_options=request_options,
        )


class AsyncSegmentsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create9(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsSegmentsRequest | PublicationsSegmentsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SegmentShowResponse, Create9ErrorBody]:
        """Create a new segment.

        **Manual segments** — Use ``subscriptions`` or ``emails`` input to create a segment from an explicit list of
        subscription IDs or email addresses. The segment is processed synchronously and returns with ``status:
        completed``. Net new email addresses will be ignored; create subscriptions using the ``Create Subscription``
        endpoint.

        **Dynamic segments** — Use ``custom_fields`` input to create a segment that filters subscribers by custom field
        values. The segment is processed asynchronously and returns with ``status: pending``. Results will be available
        in the ``List Segment Subscribers`` endpoint after processing is complete.

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
            url_template=self._server.default("/publications/{publicationId}/segments"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsSegmentsRequest | PublicationsSegmentsRequestDict | None](body),
            decoder=async_json_decoder[SegmentShowResponse],
            error_mapper=create9_error_mapper,
            request_options=request_options,
        )

    async def delete4(
        self,
        publication_id: str,
        segment_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SegmentDeleteResponse, Delete4ErrorBody]:
        """Delete a segment. Deleting the segment does not effect the subscriptions in the segment.

        Args:
            publication_id: The prefixed ID of the publication object
            segment_id: The prefixed ID of the segment object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/publications/{publicationId}/segments/{segmentId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("segmentId", segment_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[SegmentDeleteResponse],
            error_mapper=delete4_error_mapper,
            request_options=request_options,
        )

    async def expand_results(
        self,
        publication_id: str,
        segment_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SegmentsGetResponse, ExpandResultsErrorBody]:
        """List subscriber IDs for a segment. Returns a lightweight array of subscription IDs only, without additional
        subscriber details. **Use this endpoint when you only need subscriber IDs** (e.g., for counting, ID-based
        lookups, or integrations with external systems). If you need full subscriber details (email, status, custom
        fields, etc.), use ``/segments/{segmentId}/members`` instead.

        Args:
            publication_id: The prefixed ID of the publication object
            segment_id: The prefixed ID of the segment object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/segments/{segmentId}/results"),
            path_params=[param[str]("publicationId", publication_id), param[str]("segmentId", segment_id)],
            query_params=[param[int | None]("limit", limit), param[int | None]("page", page)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[SegmentsGetResponse],
            error_mapper=expand_results_error_mapper,
            request_options=request_options,
        )

    async def index19(
        self,
        publication_id: str,
        authorization: str,
        *,
        type_: SegmentTypeOrStr | None = SegmentType.ALL,
        status: SegmentRequestStatusOrStr | None = SegmentRequestStatus.ALL,
        limit: int | None = None,
        page: int | None = None,
        order_by: SegmentOrderByOrStr | None = SegmentOrderBy.CREATED,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        expand: list[SegmentsExpandItemsOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SegmentsListResponse, Index19ErrorBody]:
        """Retrieve information about all segments belonging to a specific publication

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            type_: Optionally filter the results by the segment's type.
            status: Optionally filter the results by the segment's status.
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            order_by: The field that the results are sorted by. Defaults to created<br> ``created`` - The time in which
                the segment was first created.<br> ``last_calculated`` - The time that the segment last completed
                calculation. Measured in seconds since the Unix epoch.
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            expand: Optionally expand the response to include additional data. <br> ``stats`` - Requests the most
                recently calculated statistics for a segment. <br> Segment stats are recalculated once daily around 7
                a.m. UTC for dynamic segments, but can be manually recalculated at any time in the dashboard. Manual and
                static segments only calculate once upon upload or creation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/segments"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[SegmentTypeOrStr | None]("type", type_),
                param[SegmentRequestStatusOrStr | None]("status", status),
                param[int | None]("limit", limit),
                param[int | None]("page", page),
                param[SegmentOrderByOrStr | None]("order_by", order_by),
                param[RequestDirectionOrStr | None]("direction", direction),
                param[list[SegmentsExpandItemsOrStr] | None]("expand[]", expand),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[SegmentsListResponse],
            error_mapper=index19_error_mapper,
            request_options=request_options,
        )

    async def list_members(
        self,
        publication_id: str,
        segment_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        expand: list[SegmentMembersExpandItemsOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SegmentMembersResponse, ListMembersErrorBody]:
        """List all members in a segment with full subscription data. Each member is returned as a subscription object
        containing complete subscriber information and their subscription details. Supports optional expansions for
        stats, custom fields, tags, referrals, and premium tiers. **Use this endpoint when you need detailed subscriber
        information.** If you only need subscriber IDs, use ``/segments/{segmentId}/results`` for a lighter-weight
        response.

        Args:
            publication_id: The prefixed ID of the publication object
            segment_id: The prefixed ID of the segment object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            expand: Optionally expand the response to include additional data. <br> ``stats`` - Returns statistics about
                the subscription(s). <br> ``custom_fields`` - Returns custom field values set on the subscription. <br>
                ``referrals`` - Returns referrals made by the subscription. <br> ``tags`` - Returns tags associated with
                the subscription. <br> ``subscription_premium_tiers`` - Returns premium tier(s) the subscription is
                subscribed to.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/segments/{segmentId}/members"),
            path_params=[param[str]("publicationId", publication_id), param[str]("segmentId", segment_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("page", page),
                param[list[SegmentMembersExpandItemsOrStr] | None]("expand[]", expand),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[SegmentMembersResponse],
            error_mapper=list_members_error_mapper,
            request_options=request_options,
        )

    async def recalculate(
        self,
        publication_id: str,
        segment_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SegmentRecalculateResponse, RecalculateErrorBody]:
        """Recalculates a specific segment belonging to a publication

        Args:
            publication_id: The prefixed ID of the publication object
            segment_id: The prefixed ID of the segment object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/publications/{publicationId}/segments/{segmentId}/recalculate"),
            path_params=[param[str]("publicationId", publication_id), param[str]("segmentId", segment_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[SegmentRecalculateResponse],
            error_mapper=recalculate_error_mapper,
            request_options=request_options,
        )

    async def show15(
        self,
        publication_id: str,
        segment_id: str,
        authorization: str,
        *,
        expand: list[SegmentsExpandItemsOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SegmentShowResponse, Show15ErrorBody]:
        """Retrieve information about a specific segment belonging to a publication

        Args:
            publication_id: The prefixed ID of the publication object
            segment_id: The prefixed ID of the segment object
            authorization: Bearer authentication
            expand: Optionally expand the response to include additional data. <br> ``stats`` - Requests the most
                recently calculated statistics for a segment. <br> Segment stats are recalculated once daily around 7
                a.m. UTC for dynamic segments, but can be manually recalculated at any time in the dashboard. Manual and
                static segments only calculate once upon upload or creation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/segments/{segmentId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("segmentId", segment_id)],
            query_params=[param[list[SegmentsExpandItemsOrStr] | None]("expand[]", expand)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[SegmentShowResponse],
            error_mapper=show15_error_mapper,
            request_options=request_options,
        )
