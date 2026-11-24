from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.index15_error import Index15ErrorBody, index15_error_mapper
from ..errors.list_responses_error import ListResponsesErrorBody, list_responses_error_mapper
from ..errors.show11_error import Show11ErrorBody, show11_error_mapper
from ..models.enums.poll_order_by import PollOrderBy, PollOrderByOrStr
from ..models.enums.poll_responses_expand_items import PollResponsesExpandItemsOrStr
from ..models.enums.poll_responses_order_by import PollResponsesOrderBy, PollResponsesOrderByOrStr
from ..models.enums.polls_expand_items import PollsExpandItemsOrStr
from ..models.enums.request_direction import RequestDirection, RequestDirectionOrStr
from ..models.poll_responses_list_response import PollResponsesListResponse
from ..models.poll_show_response import PollShowResponse
from ..models.polls_list_response import PollsListResponse
from ..server.server import Server


class Polls:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = PollsWithRawResponse(client, server)

    def index15(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        page: int | None = None,
        order_by: PollOrderByOrStr | None = PollOrderBy.CREATED,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        expand: list[PollsExpandItemsOrStr] | None = None,
        post_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PollsListResponse:
        """Retrieve all polls belonging to a specific publication. Poll choices are always included. Use
        ``expand[]=stats`` to include aggregate vote counts per choice.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of
                results. When provided, pagination will use cursor-based method which is more efficient and consistent
                than offset-based pagination.
            page: **Offset-based pagination (deprecated)**: Page number for offset-based pagination. Please migrate to
                cursor-based pagination using the ``cursor`` parameter. If not specified, results 1-10 from page 1 will
                be returned.
            order_by: The field that the results are sorted by. Defaults to created.<br> ``created`` - The time the poll
                was created.<br> ``name`` - The name of the poll.
            direction: The direction that the results are sorted in. Defaults to asc.<br> ``asc`` - Ascending, sorts
                from smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            expand: Optionally expand the response to include additional data.<br> ``stats`` - Returns aggregate vote
                counts per choice and total completions.<br> ``poll_responses`` - Returns up to 10 most recent
                subscriber responses. Use /polls/{pollId}/responses for paginated access to all responses.<br>
                ``trivia_answer`` - Returns the correct answer for trivia-type polls.
            post_id: Filter to only return polls that were embedded in the specified post. Accepts a prefixed post ID
                (e.g. ``post_abc123``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.index15(
                publication_id,
                authorization,
                limit=limit,
                cursor=cursor,
                page=page,
                order_by=order_by,
                direction=direction,
                expand=expand,
                post_id=post_id,
                request_options=request_options,
            ),
        )

    def list_responses(
        self,
        publication_id: str,
        poll_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        page: int | None = None,
        order_by: PollResponsesOrderByOrStr | None = PollResponsesOrderBy.CREATED,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        expand: list[PollResponsesExpandItemsOrStr] | None = None,
        post_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PollResponsesListResponse:
        """Retrieve all individual subscriber responses for a specific poll with cursor-based pagination. Use this
        endpoint for large datasets instead of the ``expand[]=poll_responses`` parameter on the poll show endpoint.

        Args:
            publication_id: The prefixed ID of the publication object
            poll_id: The prefixed ID of the poll object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of
                results.
            page: **Offset-based pagination (deprecated)**: Page number for offset-based pagination.
            order_by: The field that the results are sorted by. Defaults to created.
            direction: The direction that the results are sorted in. Defaults to asc.<br> ``asc`` - Ascending, sorts
                from smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            expand: Optionally expand the response to include additional data.<br> ``post`` - Returns the post title and
                publication date for the post where each response was collected.
            post_id: Filter to only return responses collected via the specified post. Accepts a prefixed post ID (e.g.
                ``post_abc123``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Unauthorized. The API key or OAuth access token is missing, invalid, or expired. Resource Not
                Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_responses(
                publication_id,
                poll_id,
                authorization,
                limit=limit,
                cursor=cursor,
                page=page,
                order_by=order_by,
                direction=direction,
                expand=expand,
                post_id=post_id,
                request_options=request_options,
            ),
        )

    def show11(
        self,
        publication_id: str,
        poll_id: str,
        authorization: str,
        *,
        expand: list[PollsExpandItemsOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PollShowResponse:
        """Retrieve detailed information about a specific poll belonging to a publication. Use ``expand[]=stats`` for
        aggregate vote counts, or ``expand[]=poll_responses`` for individual subscriber responses.

        Args:
            publication_id: The prefixed ID of the publication object
            poll_id: The prefixed ID of the poll object
            authorization: Bearer authentication
            expand: Optionally expand the response to include additional data.<br> ``stats`` - Returns aggregate vote
                counts per choice and total completions.<br> ``poll_responses`` - Returns up to 10 most recent
                subscriber responses. Use /polls/{pollId}/responses for paginated access to all responses.<br>
                ``trivia_answer`` - Returns the correct answer for trivia-type polls.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Unauthorized. The API key or OAuth access token is missing, invalid, or expired. Resource Not
                Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.show11(
                publication_id, poll_id, authorization, expand=expand, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> PollsWithRawResponse:
        return self._with_raw_response


class AsyncPolls:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncPollsWithRawResponse(client, server)

    async def index15(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        page: int | None = None,
        order_by: PollOrderByOrStr | None = PollOrderBy.CREATED,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        expand: list[PollsExpandItemsOrStr] | None = None,
        post_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PollsListResponse:
        """Retrieve all polls belonging to a specific publication. Poll choices are always included. Use
        ``expand[]=stats`` to include aggregate vote counts per choice.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of
                results. When provided, pagination will use cursor-based method which is more efficient and consistent
                than offset-based pagination.
            page: **Offset-based pagination (deprecated)**: Page number for offset-based pagination. Please migrate to
                cursor-based pagination using the ``cursor`` parameter. If not specified, results 1-10 from page 1 will
                be returned.
            order_by: The field that the results are sorted by. Defaults to created.<br> ``created`` - The time the poll
                was created.<br> ``name`` - The name of the poll.
            direction: The direction that the results are sorted in. Defaults to asc.<br> ``asc`` - Ascending, sorts
                from smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            expand: Optionally expand the response to include additional data.<br> ``stats`` - Returns aggregate vote
                counts per choice and total completions.<br> ``poll_responses`` - Returns up to 10 most recent
                subscriber responses. Use /polls/{pollId}/responses for paginated access to all responses.<br>
                ``trivia_answer`` - Returns the correct answer for trivia-type polls.
            post_id: Filter to only return polls that were embedded in the specified post. Accepts a prefixed post ID
                (e.g. ``post_abc123``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.index15(
                publication_id,
                authorization,
                limit=limit,
                cursor=cursor,
                page=page,
                order_by=order_by,
                direction=direction,
                expand=expand,
                post_id=post_id,
                request_options=request_options,
            ),
        )

    async def list_responses(
        self,
        publication_id: str,
        poll_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        page: int | None = None,
        order_by: PollResponsesOrderByOrStr | None = PollResponsesOrderBy.CREATED,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        expand: list[PollResponsesExpandItemsOrStr] | None = None,
        post_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PollResponsesListResponse:
        """Retrieve all individual subscriber responses for a specific poll with cursor-based pagination. Use this
        endpoint for large datasets instead of the ``expand[]=poll_responses`` parameter on the poll show endpoint.

        Args:
            publication_id: The prefixed ID of the publication object
            poll_id: The prefixed ID of the poll object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of
                results.
            page: **Offset-based pagination (deprecated)**: Page number for offset-based pagination.
            order_by: The field that the results are sorted by. Defaults to created.
            direction: The direction that the results are sorted in. Defaults to asc.<br> ``asc`` - Ascending, sorts
                from smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            expand: Optionally expand the response to include additional data.<br> ``post`` - Returns the post title and
                publication date for the post where each response was collected.
            post_id: Filter to only return responses collected via the specified post. Accepts a prefixed post ID (e.g.
                ``post_abc123``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Unauthorized. The API key or OAuth access token is missing, invalid, or expired. Resource Not
                Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_responses(
                publication_id,
                poll_id,
                authorization,
                limit=limit,
                cursor=cursor,
                page=page,
                order_by=order_by,
                direction=direction,
                expand=expand,
                post_id=post_id,
                request_options=request_options,
            ),
        )

    async def show11(
        self,
        publication_id: str,
        poll_id: str,
        authorization: str,
        *,
        expand: list[PollsExpandItemsOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PollShowResponse:
        """Retrieve detailed information about a specific poll belonging to a publication. Use ``expand[]=stats`` for
        aggregate vote counts, or ``expand[]=poll_responses`` for individual subscriber responses.

        Args:
            publication_id: The prefixed ID of the publication object
            poll_id: The prefixed ID of the poll object
            authorization: Bearer authentication
            expand: Optionally expand the response to include additional data.<br> ``stats`` - Returns aggregate vote
                counts per choice and total completions.<br> ``poll_responses`` - Returns up to 10 most recent
                subscriber responses. Use /polls/{pollId}/responses for paginated access to all responses.<br>
                ``trivia_answer`` - Returns the correct answer for trivia-type polls.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Unauthorized. The API key or OAuth access token is missing, invalid, or expired. Resource Not
                Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.show11(
                publication_id, poll_id, authorization, expand=expand, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPollsWithRawResponse:
        return self._with_raw_response


class PollsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def index15(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        page: int | None = None,
        order_by: PollOrderByOrStr | None = PollOrderBy.CREATED,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        expand: list[PollsExpandItemsOrStr] | None = None,
        post_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PollsListResponse, Index15ErrorBody]:
        """Retrieve all polls belonging to a specific publication. Poll choices are always included. Use
        ``expand[]=stats`` to include aggregate vote counts per choice.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of
                results. When provided, pagination will use cursor-based method which is more efficient and consistent
                than offset-based pagination.
            page: **Offset-based pagination (deprecated)**: Page number for offset-based pagination. Please migrate to
                cursor-based pagination using the ``cursor`` parameter. If not specified, results 1-10 from page 1 will
                be returned.
            order_by: The field that the results are sorted by. Defaults to created.<br> ``created`` - The time the poll
                was created.<br> ``name`` - The name of the poll.
            direction: The direction that the results are sorted in. Defaults to asc.<br> ``asc`` - Ascending, sorts
                from smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            expand: Optionally expand the response to include additional data.<br> ``stats`` - Returns aggregate vote
                counts per choice and total completions.<br> ``poll_responses`` - Returns up to 10 most recent
                subscriber responses. Use /polls/{pollId}/responses for paginated access to all responses.<br>
                ``trivia_answer`` - Returns the correct answer for trivia-type polls.
            post_id: Filter to only return polls that were embedded in the specified post. Accepts a prefixed post ID
                (e.g. ``post_abc123``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/polls"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[int | None]("page", page),
                param[PollOrderByOrStr | None]("order_by", order_by),
                param[RequestDirectionOrStr | None]("direction", direction),
                param[list[PollsExpandItemsOrStr] | None]("expand[]", expand),
                param[str | None]("post_id", post_id),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[PollsListResponse],
            error_mapper=index15_error_mapper,
            request_options=request_options,
        )

    def list_responses(
        self,
        publication_id: str,
        poll_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        page: int | None = None,
        order_by: PollResponsesOrderByOrStr | None = PollResponsesOrderBy.CREATED,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        expand: list[PollResponsesExpandItemsOrStr] | None = None,
        post_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PollResponsesListResponse, ListResponsesErrorBody]:
        """Retrieve all individual subscriber responses for a specific poll with cursor-based pagination. Use this
        endpoint for large datasets instead of the ``expand[]=poll_responses`` parameter on the poll show endpoint.

        Args:
            publication_id: The prefixed ID of the publication object
            poll_id: The prefixed ID of the poll object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of
                results.
            page: **Offset-based pagination (deprecated)**: Page number for offset-based pagination.
            order_by: The field that the results are sorted by. Defaults to created.
            direction: The direction that the results are sorted in. Defaults to asc.<br> ``asc`` - Ascending, sorts
                from smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            expand: Optionally expand the response to include additional data.<br> ``post`` - Returns the post title and
                publication date for the post where each response was collected.
            post_id: Filter to only return responses collected via the specified post. Accepts a prefixed post ID (e.g.
                ``post_abc123``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/polls/{pollId}/responses"),
            path_params=[param[str]("publicationId", publication_id), param[str]("pollId", poll_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[int | None]("page", page),
                param[PollResponsesOrderByOrStr | None]("order_by", order_by),
                param[RequestDirectionOrStr | None]("direction", direction),
                param[list[PollResponsesExpandItemsOrStr] | None]("expand[]", expand),
                param[str | None]("post_id", post_id),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[PollResponsesListResponse],
            error_mapper=list_responses_error_mapper,
            request_options=request_options,
        )

    def show11(
        self,
        publication_id: str,
        poll_id: str,
        authorization: str,
        *,
        expand: list[PollsExpandItemsOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PollShowResponse, Show11ErrorBody]:
        """Retrieve detailed information about a specific poll belonging to a publication. Use ``expand[]=stats`` for
        aggregate vote counts, or ``expand[]=poll_responses`` for individual subscriber responses.

        Args:
            publication_id: The prefixed ID of the publication object
            poll_id: The prefixed ID of the poll object
            authorization: Bearer authentication
            expand: Optionally expand the response to include additional data.<br> ``stats`` - Returns aggregate vote
                counts per choice and total completions.<br> ``poll_responses`` - Returns up to 10 most recent
                subscriber responses. Use /polls/{pollId}/responses for paginated access to all responses.<br>
                ``trivia_answer`` - Returns the correct answer for trivia-type polls.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/polls/{pollId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("pollId", poll_id)],
            query_params=[param[list[PollsExpandItemsOrStr] | None]("expand[]", expand)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[PollShowResponse],
            error_mapper=show11_error_mapper,
            request_options=request_options,
        )


class AsyncPollsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def index15(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        page: int | None = None,
        order_by: PollOrderByOrStr | None = PollOrderBy.CREATED,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        expand: list[PollsExpandItemsOrStr] | None = None,
        post_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PollsListResponse, Index15ErrorBody]:
        """Retrieve all polls belonging to a specific publication. Poll choices are always included. Use
        ``expand[]=stats`` to include aggregate vote counts per choice.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of
                results. When provided, pagination will use cursor-based method which is more efficient and consistent
                than offset-based pagination.
            page: **Offset-based pagination (deprecated)**: Page number for offset-based pagination. Please migrate to
                cursor-based pagination using the ``cursor`` parameter. If not specified, results 1-10 from page 1 will
                be returned.
            order_by: The field that the results are sorted by. Defaults to created.<br> ``created`` - The time the poll
                was created.<br> ``name`` - The name of the poll.
            direction: The direction that the results are sorted in. Defaults to asc.<br> ``asc`` - Ascending, sorts
                from smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            expand: Optionally expand the response to include additional data.<br> ``stats`` - Returns aggregate vote
                counts per choice and total completions.<br> ``poll_responses`` - Returns up to 10 most recent
                subscriber responses. Use /polls/{pollId}/responses for paginated access to all responses.<br>
                ``trivia_answer`` - Returns the correct answer for trivia-type polls.
            post_id: Filter to only return polls that were embedded in the specified post. Accepts a prefixed post ID
                (e.g. ``post_abc123``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/polls"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[int | None]("page", page),
                param[PollOrderByOrStr | None]("order_by", order_by),
                param[RequestDirectionOrStr | None]("direction", direction),
                param[list[PollsExpandItemsOrStr] | None]("expand[]", expand),
                param[str | None]("post_id", post_id),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[PollsListResponse],
            error_mapper=index15_error_mapper,
            request_options=request_options,
        )

    async def list_responses(
        self,
        publication_id: str,
        poll_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        page: int | None = None,
        order_by: PollResponsesOrderByOrStr | None = PollResponsesOrderBy.CREATED,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        expand: list[PollResponsesExpandItemsOrStr] | None = None,
        post_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PollResponsesListResponse, ListResponsesErrorBody]:
        """Retrieve all individual subscriber responses for a specific poll with cursor-based pagination. Use this
        endpoint for large datasets instead of the ``expand[]=poll_responses`` parameter on the poll show endpoint.

        Args:
            publication_id: The prefixed ID of the publication object
            poll_id: The prefixed ID of the poll object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of
                results.
            page: **Offset-based pagination (deprecated)**: Page number for offset-based pagination.
            order_by: The field that the results are sorted by. Defaults to created.
            direction: The direction that the results are sorted in. Defaults to asc.<br> ``asc`` - Ascending, sorts
                from smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            expand: Optionally expand the response to include additional data.<br> ``post`` - Returns the post title and
                publication date for the post where each response was collected.
            post_id: Filter to only return responses collected via the specified post. Accepts a prefixed post ID (e.g.
                ``post_abc123``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/polls/{pollId}/responses"),
            path_params=[param[str]("publicationId", publication_id), param[str]("pollId", poll_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[int | None]("page", page),
                param[PollResponsesOrderByOrStr | None]("order_by", order_by),
                param[RequestDirectionOrStr | None]("direction", direction),
                param[list[PollResponsesExpandItemsOrStr] | None]("expand[]", expand),
                param[str | None]("post_id", post_id),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[PollResponsesListResponse],
            error_mapper=list_responses_error_mapper,
            request_options=request_options,
        )

    async def show11(
        self,
        publication_id: str,
        poll_id: str,
        authorization: str,
        *,
        expand: list[PollsExpandItemsOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PollShowResponse, Show11ErrorBody]:
        """Retrieve detailed information about a specific poll belonging to a publication. Use ``expand[]=stats`` for
        aggregate vote counts, or ``expand[]=poll_responses`` for individual subscriber responses.

        Args:
            publication_id: The prefixed ID of the publication object
            poll_id: The prefixed ID of the poll object
            authorization: Bearer authentication
            expand: Optionally expand the response to include additional data.<br> ``stats`` - Returns aggregate vote
                counts per choice and total completions.<br> ``poll_responses`` - Returns up to 10 most recent
                subscriber responses. Use /polls/{pollId}/responses for paginated access to all responses.<br>
                ``trivia_answer`` - Returns the correct answer for trivia-type polls.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/polls/{pollId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("pollId", poll_id)],
            query_params=[param[list[PollsExpandItemsOrStr] | None]("expand[]", expand)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[PollShowResponse],
            error_mapper=show11_error_mapper,
            request_options=request_options,
        )
