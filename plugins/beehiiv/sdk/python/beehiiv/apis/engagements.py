from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    Date,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.index12_error import Index12ErrorBody, index12_error_mapper
from ..models.enums.publication_engagement_email_type import PublicationEngagementEmailTypeOrStr
from ..models.enums.publication_engagement_granularity import PublicationEngagementGranularityOrStr
from ..models.enums.request_direction import RequestDirection, RequestDirectionOrStr
from ..models.publication_engagements_response import PublicationEngagementsResponse
from ..server.server import Server


class Engagements:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = EngagementsWithRawResponse(client, server)

    def index12(
        self,
        publication_id: str,
        authorization: str,
        *,
        start_date: Date | None = None,
        number_of_days: int | None = None,
        granularity: PublicationEngagementGranularityOrStr | None = None,
        email_type: PublicationEngagementEmailTypeOrStr | None = None,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicationEngagementsResponse:
        """Retrieve email engagement metrics for a specific publication over a defined date range and granularity.

        By default, the endpoint returns metrics for the past day, aggregated daily. The max number of days allowed is
        31. All dates and times are in UTC.

        Args:
            publication_id: Value sent with the request.
            authorization: Bearer authentication
            start_date: The starting date for the engagement metrics in ``YYYY-MM-DD`` format. Defaults to 1 day ago if
                not provided.
            number_of_days: The number of days to return engagement metrics for, starting from ``start_date``. Must be
                between 1 and 31. Defaults to ``1`` if not provided.
            granularity: The granularity at which to report the engagement metrics. Defaults to ``day`` if not provided.
            email_type: Filter engagement metrics by email type. If omitted, all email engagement is included.<br>
                ``post``: Only post emails.<br> ``message``: Only automated and system-generated emails.
            direction: The direction that the results are sorted in. Defaults to ``asc``.<br> ``asc``: Oldest to
                newest<br> ``desc``: Newest to oldest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.index12(
                publication_id,
                authorization,
                start_date=start_date,
                number_of_days=number_of_days,
                granularity=granularity,
                email_type=email_type,
                direction=direction,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> EngagementsWithRawResponse:
        return self._with_raw_response


class AsyncEngagements:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncEngagementsWithRawResponse(client, server)

    async def index12(
        self,
        publication_id: str,
        authorization: str,
        *,
        start_date: Date | None = None,
        number_of_days: int | None = None,
        granularity: PublicationEngagementGranularityOrStr | None = None,
        email_type: PublicationEngagementEmailTypeOrStr | None = None,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicationEngagementsResponse:
        """Retrieve email engagement metrics for a specific publication over a defined date range and granularity.

        By default, the endpoint returns metrics for the past day, aggregated daily. The max number of days allowed is
        31. All dates and times are in UTC.

        Args:
            publication_id: Value sent with the request.
            authorization: Bearer authentication
            start_date: The starting date for the engagement metrics in ``YYYY-MM-DD`` format. Defaults to 1 day ago if
                not provided.
            number_of_days: The number of days to return engagement metrics for, starting from ``start_date``. Must be
                between 1 and 31. Defaults to ``1`` if not provided.
            granularity: The granularity at which to report the engagement metrics. Defaults to ``day`` if not provided.
            email_type: Filter engagement metrics by email type. If omitted, all email engagement is included.<br>
                ``post``: Only post emails.<br> ``message``: Only automated and system-generated emails.
            direction: The direction that the results are sorted in. Defaults to ``asc``.<br> ``asc``: Oldest to
                newest<br> ``desc``: Newest to oldest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.index12(
                publication_id,
                authorization,
                start_date=start_date,
                number_of_days=number_of_days,
                granularity=granularity,
                email_type=email_type,
                direction=direction,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEngagementsWithRawResponse:
        return self._with_raw_response


class EngagementsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def index12(
        self,
        publication_id: str,
        authorization: str,
        *,
        start_date: Date | None = None,
        number_of_days: int | None = None,
        granularity: PublicationEngagementGranularityOrStr | None = None,
        email_type: PublicationEngagementEmailTypeOrStr | None = None,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicationEngagementsResponse, Index12ErrorBody]:
        """Retrieve email engagement metrics for a specific publication over a defined date range and granularity.

        By default, the endpoint returns metrics for the past day, aggregated daily. The max number of days allowed is
        31. All dates and times are in UTC.

        Args:
            publication_id: Value sent with the request.
            authorization: Bearer authentication
            start_date: The starting date for the engagement metrics in ``YYYY-MM-DD`` format. Defaults to 1 day ago if
                not provided.
            number_of_days: The number of days to return engagement metrics for, starting from ``start_date``. Must be
                between 1 and 31. Defaults to ``1`` if not provided.
            granularity: The granularity at which to report the engagement metrics. Defaults to ``day`` if not provided.
            email_type: Filter engagement metrics by email type. If omitted, all email engagement is included.<br>
                ``post``: Only post emails.<br> ``message``: Only automated and system-generated emails.
            direction: The direction that the results are sorted in. Defaults to ``asc``.<br> ``asc``: Oldest to
                newest<br> ``desc``: Newest to oldest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/engagements"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[Date | None]("start_date", start_date),
                param[int | None]("number_of_days", number_of_days),
                param[PublicationEngagementGranularityOrStr | None]("granularity", granularity),
                param[PublicationEngagementEmailTypeOrStr | None]("email_type", email_type),
                param[RequestDirectionOrStr | None]("direction", direction),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[PublicationEngagementsResponse],
            error_mapper=index12_error_mapper,
            request_options=request_options,
        )


class AsyncEngagementsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def index12(
        self,
        publication_id: str,
        authorization: str,
        *,
        start_date: Date | None = None,
        number_of_days: int | None = None,
        granularity: PublicationEngagementGranularityOrStr | None = None,
        email_type: PublicationEngagementEmailTypeOrStr | None = None,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicationEngagementsResponse, Index12ErrorBody]:
        """Retrieve email engagement metrics for a specific publication over a defined date range and granularity.

        By default, the endpoint returns metrics for the past day, aggregated daily. The max number of days allowed is
        31. All dates and times are in UTC.

        Args:
            publication_id: Value sent with the request.
            authorization: Bearer authentication
            start_date: The starting date for the engagement metrics in ``YYYY-MM-DD`` format. Defaults to 1 day ago if
                not provided.
            number_of_days: The number of days to return engagement metrics for, starting from ``start_date``. Must be
                between 1 and 31. Defaults to ``1`` if not provided.
            granularity: The granularity at which to report the engagement metrics. Defaults to ``day`` if not provided.
            email_type: Filter engagement metrics by email type. If omitted, all email engagement is included.<br>
                ``post``: Only post emails.<br> ``message``: Only automated and system-generated emails.
            direction: The direction that the results are sorted in. Defaults to ``asc``.<br> ``asc``: Oldest to
                newest<br> ``desc``: Newest to oldest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/engagements"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[Date | None]("start_date", start_date),
                param[int | None]("number_of_days", number_of_days),
                param[PublicationEngagementGranularityOrStr | None]("granularity", granularity),
                param[PublicationEngagementEmailTypeOrStr | None]("email_type", email_type),
                param[RequestDirectionOrStr | None]("direction", direction),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[PublicationEngagementsResponse],
            error_mapper=index12_error_mapper,
            request_options=request_options,
        )
