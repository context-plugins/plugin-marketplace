from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_known_issue_error import GetKnownIssueErrorBody, get_known_issue_error_mapper
from ..errors.list_known_issues_error import ListKnownIssuesErrorBody, list_known_issues_error_mapper
from ..models.core_v1_cloudincidents_response import CoreV1CloudincidentsResponse
from ..models.core_v1_cloudincidents_response1 import CoreV1CloudincidentsResponse1
from ..server.server import Server


class CloudIncidents:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CloudIncidentsWithRawResponse(client, server, auth)

    def get_known_issue(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CoreV1CloudincidentsResponse1:
        """Returns the specified cloud incident.

        Args:
            id_: The unique id of a cloud incident.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Cloud incident returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_known_issue(id_, request_options=request_options))

    def list_known_issues(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        min_creation_time: str | None = None,
        max_creation_time: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CoreV1CloudincidentsResponse:
        """Returns a list of all the active and historical cloud incidents for Google Cloud and Amazon Web Services.
        Incidents are returned in reverse chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Leverage the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. The syntax is ``key:[<value>]``. Multiple filters can be
                connected using a pipe |. See `Filters <https://developer.doit.com/docs/filters>`__.
            min_creation_time: Min value for the cloud incident creation time, in milliseconds since the POSIX epoch. If
                set, only cloud incidents created after or at this timestamp are returned.
            max_creation_time: Max value for the cloud incident creation time, in milliseconds since the POSIX epoch. If
                set, only cloud incidents created before or at this timestamp are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_known_issues(
                max_results=max_results,
                page_token=page_token,
                filter_=filter_,
                min_creation_time=min_creation_time,
                max_creation_time=max_creation_time,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> CloudIncidentsWithRawResponse:
        return self._with_raw_response


class AsyncCloudIncidents:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCloudIncidentsWithRawResponse(client, server, auth)

    async def get_known_issue(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CoreV1CloudincidentsResponse1:
        """Returns the specified cloud incident.

        Args:
            id_: The unique id of a cloud incident.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Cloud incident returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_known_issue(id_, request_options=request_options))

    async def list_known_issues(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        min_creation_time: str | None = None,
        max_creation_time: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CoreV1CloudincidentsResponse:
        """Returns a list of all the active and historical cloud incidents for Google Cloud and Amazon Web Services.
        Incidents are returned in reverse chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Leverage the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. The syntax is ``key:[<value>]``. Multiple filters can be
                connected using a pipe |. See `Filters <https://developer.doit.com/docs/filters>`__.
            min_creation_time: Min value for the cloud incident creation time, in milliseconds since the POSIX epoch. If
                set, only cloud incidents created after or at this timestamp are returned.
            max_creation_time: Max value for the cloud incident creation time, in milliseconds since the POSIX epoch. If
                set, only cloud incidents created before or at this timestamp are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_known_issues(
                max_results=max_results,
                page_token=page_token,
                filter_=filter_,
                min_creation_time=min_creation_time,
                max_creation_time=max_creation_time,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCloudIncidentsWithRawResponse:
        return self._with_raw_response


class CloudIncidentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_known_issue(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CoreV1CloudincidentsResponse1, GetKnownIssueErrorBody]:
        """Returns the specified cloud incident.

        Args:
            id_: The unique id of a cloud incident.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/core/v1/cloudincidents/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CoreV1CloudincidentsResponse1],
            error_mapper=get_known_issue_error_mapper,
            request_options=request_options,
        )

    def list_known_issues(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        min_creation_time: str | None = None,
        max_creation_time: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CoreV1CloudincidentsResponse, ListKnownIssuesErrorBody]:
        """Returns a list of all the active and historical cloud incidents for Google Cloud and Amazon Web Services.
        Incidents are returned in reverse chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Leverage the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. The syntax is ``key:[<value>]``. Multiple filters can be
                connected using a pipe |. See `Filters <https://developer.doit.com/docs/filters>`__.
            min_creation_time: Min value for the cloud incident creation time, in milliseconds since the POSIX epoch. If
                set, only cloud incidents created after or at this timestamp are returned.
            max_creation_time: Max value for the cloud incident creation time, in milliseconds since the POSIX epoch. If
                set, only cloud incidents created before or at this timestamp are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/core/v1/cloudincidents"),
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[str | None]("filter", filter_),
                param[str | None]("minCreationTime", min_creation_time),
                param[str | None]("maxCreationTime", max_creation_time),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CoreV1CloudincidentsResponse],
            error_mapper=list_known_issues_error_mapper,
            request_options=request_options,
        )


class AsyncCloudIncidentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_known_issue(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CoreV1CloudincidentsResponse1, GetKnownIssueErrorBody]:
        """Returns the specified cloud incident.

        Args:
            id_: The unique id of a cloud incident.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/core/v1/cloudincidents/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CoreV1CloudincidentsResponse1],
            error_mapper=get_known_issue_error_mapper,
            request_options=request_options,
        )

    async def list_known_issues(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        min_creation_time: str | None = None,
        max_creation_time: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CoreV1CloudincidentsResponse, ListKnownIssuesErrorBody]:
        """Returns a list of all the active and historical cloud incidents for Google Cloud and Amazon Web Services.
        Incidents are returned in reverse chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Leverage the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. The syntax is ``key:[<value>]``. Multiple filters can be
                connected using a pipe |. See `Filters <https://developer.doit.com/docs/filters>`__.
            min_creation_time: Min value for the cloud incident creation time, in milliseconds since the POSIX epoch. If
                set, only cloud incidents created after or at this timestamp are returned.
            max_creation_time: Max value for the cloud incident creation time, in milliseconds since the POSIX epoch. If
                set, only cloud incidents created before or at this timestamp are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/core/v1/cloudincidents"),
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[str | None]("filter", filter_),
                param[str | None]("minCreationTime", min_creation_time),
                param[str | None]("maxCreationTime", max_creation_time),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CoreV1CloudincidentsResponse],
            error_mapper=list_known_issues_error_mapper,
            request_options=request_options,
        )
