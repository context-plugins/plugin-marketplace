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
from ..errors.index6_error import Index6ErrorBody, index6_error_mapper
from ..errors.list_emails_error import ListEmailsErrorBody, list_emails_error_mapper
from ..errors.show3_error import Show3ErrorBody, show3_error_mapper
from ..models.automation_emails_list_response import AutomationEmailsListResponse
from ..models.automations_get_response import AutomationsGetResponse
from ..models.automations_list_response import AutomationsListResponse
from ..models.enums.automations_get_request_expand_item import AutomationsGetRequestExpandItemOrStr
from ..models.enums.automations_list_request_expand_item import AutomationsListRequestExpandItemOrStr
from ..server.server import Server


class Automations:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = AutomationsWithRawResponse(client, server)

    def index6(
        self,
        publication_id: str,
        authorization: str,
        *,
        expand: AutomationsListRequestExpandItemOrStr | None = None,
        limit: int | None = None,
        page: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AutomationsListResponse:
        """Retrieve automations for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.
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
            self._with_raw_response.index6(
                publication_id, authorization, expand=expand, limit=limit, page=page, request_options=request_options
            ),
        )

    def list_emails(
        self,
        publication_id: str,
        automation_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        page: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AutomationEmailsListResponse:
        """Retrieve all emails belonging to a specific automation, including engagement statistics for each email.

        Args:
            publication_id: The prefixed ID of the publication object
            automation_id: The prefixed ID of the automation object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of
                results. Obtain it from the ``next_cursor`` field of a previous response.
            page: **Deprecated**: Use ``cursor`` instead. Pagination returns the results in pages. Limited to 100 pages
                maximum.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_emails(
                publication_id,
                automation_id,
                authorization,
                limit=limit,
                cursor=cursor,
                page=page,
                request_options=request_options,
            ),
        )

    def show3(
        self,
        publication_id: str,
        automation_id: str,
        authorization: str,
        *,
        expand: AutomationsGetRequestExpandItemOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AutomationsGetResponse:
        """Retrieve a single automation for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            automation_id: The prefixed ID of the automation object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.show3(
                publication_id, automation_id, authorization, expand=expand, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AutomationsWithRawResponse:
        return self._with_raw_response


class AsyncAutomations:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncAutomationsWithRawResponse(client, server)

    async def index6(
        self,
        publication_id: str,
        authorization: str,
        *,
        expand: AutomationsListRequestExpandItemOrStr | None = None,
        limit: int | None = None,
        page: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AutomationsListResponse:
        """Retrieve automations for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.
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
            await self._with_raw_response.index6(
                publication_id, authorization, expand=expand, limit=limit, page=page, request_options=request_options
            ),
        )

    async def list_emails(
        self,
        publication_id: str,
        automation_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        page: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AutomationEmailsListResponse:
        """Retrieve all emails belonging to a specific automation, including engagement statistics for each email.

        Args:
            publication_id: The prefixed ID of the publication object
            automation_id: The prefixed ID of the automation object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of
                results. Obtain it from the ``next_cursor`` field of a previous response.
            page: **Deprecated**: Use ``cursor`` instead. Pagination returns the results in pages. Limited to 100 pages
                maximum.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_emails(
                publication_id,
                automation_id,
                authorization,
                limit=limit,
                cursor=cursor,
                page=page,
                request_options=request_options,
            ),
        )

    async def show3(
        self,
        publication_id: str,
        automation_id: str,
        authorization: str,
        *,
        expand: AutomationsGetRequestExpandItemOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AutomationsGetResponse:
        """Retrieve a single automation for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            automation_id: The prefixed ID of the automation object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.show3(
                publication_id, automation_id, authorization, expand=expand, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAutomationsWithRawResponse:
        return self._with_raw_response


class AutomationsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def index6(
        self,
        publication_id: str,
        authorization: str,
        *,
        expand: AutomationsListRequestExpandItemOrStr | None = None,
        limit: int | None = None,
        page: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AutomationsListResponse, Index6ErrorBody]:
        """Retrieve automations for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.
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
            url_template=self._server.default("/publications/{publicationId}/automations"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[AutomationsListRequestExpandItemOrStr | None]("expand[]", expand),
                param[int | None]("limit", limit),
                param[int | None]("page", page),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[AutomationsListResponse],
            error_mapper=index6_error_mapper,
            request_options=request_options,
        )

    def list_emails(
        self,
        publication_id: str,
        automation_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        page: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AutomationEmailsListResponse, ListEmailsErrorBody]:
        """Retrieve all emails belonging to a specific automation, including engagement statistics for each email.

        Args:
            publication_id: The prefixed ID of the publication object
            automation_id: The prefixed ID of the automation object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of
                results. Obtain it from the ``next_cursor`` field of a previous response.
            page: **Deprecated**: Use ``cursor`` instead. Pagination returns the results in pages. Limited to 100 pages
                maximum.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/automations/{automationId}/emails"),
            path_params=[param[str]("publicationId", publication_id), param[str]("automationId", automation_id)],
            query_params=[
                param[int | None]("limit", limit), param[str | None]("cursor", cursor), param[int | None]("page", page)
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[AutomationEmailsListResponse],
            error_mapper=list_emails_error_mapper,
            request_options=request_options,
        )

    def show3(
        self,
        publication_id: str,
        automation_id: str,
        authorization: str,
        *,
        expand: AutomationsGetRequestExpandItemOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AutomationsGetResponse, Show3ErrorBody]:
        """Retrieve a single automation for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            automation_id: The prefixed ID of the automation object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/automations/{automationId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("automationId", automation_id)],
            query_params=[param[AutomationsGetRequestExpandItemOrStr | None]("expand[]", expand)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[AutomationsGetResponse],
            error_mapper=show3_error_mapper,
            request_options=request_options,
        )


class AsyncAutomationsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def index6(
        self,
        publication_id: str,
        authorization: str,
        *,
        expand: AutomationsListRequestExpandItemOrStr | None = None,
        limit: int | None = None,
        page: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AutomationsListResponse, Index6ErrorBody]:
        """Retrieve automations for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.
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
            url_template=self._server.default("/publications/{publicationId}/automations"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[AutomationsListRequestExpandItemOrStr | None]("expand[]", expand),
                param[int | None]("limit", limit),
                param[int | None]("page", page),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[AutomationsListResponse],
            error_mapper=index6_error_mapper,
            request_options=request_options,
        )

    async def list_emails(
        self,
        publication_id: str,
        automation_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        page: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AutomationEmailsListResponse, ListEmailsErrorBody]:
        """Retrieve all emails belonging to a specific automation, including engagement statistics for each email.

        Args:
            publication_id: The prefixed ID of the publication object
            automation_id: The prefixed ID of the automation object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of
                results. Obtain it from the ``next_cursor`` field of a previous response.
            page: **Deprecated**: Use ``cursor`` instead. Pagination returns the results in pages. Limited to 100 pages
                maximum.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/automations/{automationId}/emails"),
            path_params=[param[str]("publicationId", publication_id), param[str]("automationId", automation_id)],
            query_params=[
                param[int | None]("limit", limit), param[str | None]("cursor", cursor), param[int | None]("page", page)
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[AutomationEmailsListResponse],
            error_mapper=list_emails_error_mapper,
            request_options=request_options,
        )

    async def show3(
        self,
        publication_id: str,
        automation_id: str,
        authorization: str,
        *,
        expand: AutomationsGetRequestExpandItemOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AutomationsGetResponse, Show3ErrorBody]:
        """Retrieve a single automation for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            automation_id: The prefixed ID of the automation object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/automations/{automationId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("automationId", automation_id)],
            query_params=[param[AutomationsGetRequestExpandItemOrStr | None]("expand[]", expand)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[AutomationsGetResponse],
            error_mapper=show3_error_mapper,
            request_options=request_options,
        )
