from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.delete_api_v1_schedules_by_id_error import (
    DeleteApiV1SchedulesByIdErrorBody,
    delete_api_v1_schedules_by_id_error_mapper,
)
from ..errors.patch_api_v1_schedules_by_id_error import (
    PatchApiV1SchedulesByIdErrorBody,
    patch_api_v1_schedules_by_id_error_mapper,
)
from ..errors.post_api_v1_schedules_error import PostApiV1SchedulesErrorBody, post_api_v1_schedules_error_mapper
from ..models.api_v1_schedules_request import ApiV1SchedulesRequest, ApiV1SchedulesRequestDict
from ..models.api_v1_schedules_request1 import ApiV1SchedulesRequest1, ApiV1SchedulesRequest1Dict
from ..models.api_v1_schedules_response import ApiV1SchedulesResponse
from ..models.api_v1_schedules_response1 import ApiV1SchedulesResponse1
from ..models.enums.due import DueOrStr
from ..server.server import Server


class Schedules:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SchedulesWithRawResponse(client, server, auth)

    def delete_api_v1_schedules_by_id(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """The report and its versions are untouched. Use ``PATCH`` with ``{"enabled": false}`` to pause one instead,
        which keeps the record that it existed.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Removed

        Raises:
            ApiError: ``not_permitted`` — an agent key cannot. ``not_found``. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_api_v1_schedules_by_id(id_, request_options=request_options))

    def get_api_v1_schedules(
        self, *, due: DueOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1SchedulesResponse:
        """An agent key sees only its own schedules. ``due=1`` narrows to the ones waiting on a publish: a schedule is
        due once it has fired and the report has had no new version since, and publishing clears it — there is nothing
        to acknowledge.

        Args:
            due: Return only schedules waiting on a publish
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Schedules visible to this key

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_schedules(due=due, request_options=request_options))

    def patch_api_v1_schedules_by_id(
        self,
        id_: str,
        *,
        body: ApiV1SchedulesRequest1 | ApiV1SchedulesRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SchedulesResponse1:
        """Changing the recurrence re-times the next run, so a weekly publish moved from Friday to Monday does not fire
        once more on the Friday. Turning one back on does the same, because a schedule that has been off for a month
        carries a next run a month in the past.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated

        Raises:
            ApiError: ``invalid_recurrence`` or ``nothing_to_do``. ``not_permitted`` — an agent key cannot.
                ``not_found``. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.patch_api_v1_schedules_by_id(id_, body=body, request_options=request_options)
        )

    def post_api_v1_schedules(
        self,
        *,
        body: ApiV1SchedulesRequest | ApiV1SchedulesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SchedulesResponse1:
        """``recurrence`` is a five-field cron expression evaluated in UTC, and it has to have a next occurrence — ``0 0
        30 2 *`` is five well-formed fields and a date that never arrives, and is refused rather than stored.

        An **agent key is refused**: a schedule is an instruction *to* an agent, so setting one is a person's decision.
        The schedule says when the agent is asked for a new version, not who hears about one — publishing emails the
        report's audience either way. Nothing publishes by itself: the agent polls ``GET /schedules?due=1`` and does the
        work.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: ``invalid_recurrence`` — no next occurrence. ``not_permitted`` — an agent key cannot set its own
                schedule. ``not_found`` — no such report or agent. ``limit_reached`` — the plan's report-schedule limit.
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_schedules(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> SchedulesWithRawResponse:
        return self._with_raw_response


class AsyncSchedules:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSchedulesWithRawResponse(client, server, auth)

    async def delete_api_v1_schedules_by_id(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """The report and its versions are untouched. Use ``PATCH`` with ``{"enabled": false}`` to pause one instead,
        which keeps the record that it existed.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Removed

        Raises:
            ApiError: ``not_permitted`` — an agent key cannot. ``not_found``. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_api_v1_schedules_by_id(id_, request_options=request_options))

    async def get_api_v1_schedules(
        self, *, due: DueOrStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1SchedulesResponse:
        """An agent key sees only its own schedules. ``due=1`` narrows to the ones waiting on a publish: a schedule is
        due once it has fired and the report has had no new version since, and publishing clears it — there is nothing
        to acknowledge.

        Args:
            due: Return only schedules waiting on a publish
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Schedules visible to this key

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_api_v1_schedules(due=due, request_options=request_options))

    async def patch_api_v1_schedules_by_id(
        self,
        id_: str,
        *,
        body: ApiV1SchedulesRequest1 | ApiV1SchedulesRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SchedulesResponse1:
        """Changing the recurrence re-times the next run, so a weekly publish moved from Friday to Monday does not fire
        once more on the Friday. Turning one back on does the same, because a schedule that has been off for a month
        carries a next run a month in the past.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated

        Raises:
            ApiError: ``invalid_recurrence`` or ``nothing_to_do``. ``not_permitted`` — an agent key cannot.
                ``not_found``. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.patch_api_v1_schedules_by_id(id_, body=body, request_options=request_options)
        )

    async def post_api_v1_schedules(
        self,
        *,
        body: ApiV1SchedulesRequest | ApiV1SchedulesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SchedulesResponse1:
        """``recurrence`` is a five-field cron expression evaluated in UTC, and it has to have a next occurrence — ``0 0
        30 2 *`` is five well-formed fields and a date that never arrives, and is refused rather than stored.

        An **agent key is refused**: a schedule is an instruction *to* an agent, so setting one is a person's decision.
        The schedule says when the agent is asked for a new version, not who hears about one — publishing emails the
        report's audience either way. Nothing publishes by itself: the agent polls ``GET /schedules?due=1`` and does the
        work.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: ``invalid_recurrence`` — no next occurrence. ``not_permitted`` — an agent key cannot set its own
                schedule. ``not_found`` — no such report or agent. ``limit_reached`` — the plan's report-schedule limit.
                ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_schedules(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSchedulesWithRawResponse:
        return self._with_raw_response


class SchedulesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_api_v1_schedules_by_id(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteApiV1SchedulesByIdErrorBody]:
        """The report and its versions are untouched. Use ``PATCH`` with ``{"enabled": false}`` to pause one instead,
        which keeps the record that it existed.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/schedules/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=delete_api_v1_schedules_by_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_schedules(
        self, *, due: DueOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1SchedulesResponse, RawError]:
        """An agent key sees only its own schedules. ``due=1`` narrows to the ones waiting on a publish: a schedule is
        due once it has fired and the report has had no new version since, and publishing clears it — there is nothing
        to acknowledge.

        Args:
            due: Return only schedules waiting on a publish
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/schedules"),
            query_params=[param[DueOrStr | None]("due", due)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1SchedulesResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def patch_api_v1_schedules_by_id(
        self,
        id_: str,
        *,
        body: ApiV1SchedulesRequest1 | ApiV1SchedulesRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SchedulesResponse1, PatchApiV1SchedulesByIdErrorBody]:
        """Changing the recurrence re-times the next run, so a weekly publish moved from Friday to Monday does not fire
        once more on the Friday. Turning one back on does the same, because a schedule that has been off for a month
        carries a next run a month in the past.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/schedules/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SchedulesRequest1 | ApiV1SchedulesRequest1Dict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1SchedulesResponse1],
            error_mapper=patch_api_v1_schedules_by_id_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_schedules(
        self,
        *,
        body: ApiV1SchedulesRequest | ApiV1SchedulesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SchedulesResponse1, PostApiV1SchedulesErrorBody]:
        """``recurrence`` is a five-field cron expression evaluated in UTC, and it has to have a next occurrence — ``0 0
        30 2 *`` is five well-formed fields and a date that never arrives, and is refused rather than stored.

        An **agent key is refused**: a schedule is an instruction *to* an agent, so setting one is a person's decision.
        The schedule says when the agent is asked for a new version, not who hears about one — publishing emails the
        report's audience either way. Nothing publishes by itself: the agent polls ``GET /schedules?due=1`` and does the
        work.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/schedules"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SchedulesRequest | ApiV1SchedulesRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1SchedulesResponse1],
            error_mapper=post_api_v1_schedules_error_mapper,
            request_options=request_options,
        )


class AsyncSchedulesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_api_v1_schedules_by_id(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteApiV1SchedulesByIdErrorBody]:
        """The report and its versions are untouched. Use ``PATCH`` with ``{"enabled": false}`` to pause one instead,
        which keeps the record that it existed.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/schedules/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=delete_api_v1_schedules_by_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_schedules(
        self, *, due: DueOrStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1SchedulesResponse, RawError]:
        """An agent key sees only its own schedules. ``due=1`` narrows to the ones waiting on a publish: a schedule is
        due once it has fired and the report has had no new version since, and publishing clears it — there is nothing
        to acknowledge.

        Args:
            due: Return only schedules waiting on a publish
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/schedules"),
            query_params=[param[DueOrStr | None]("due", due)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1SchedulesResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def patch_api_v1_schedules_by_id(
        self,
        id_: str,
        *,
        body: ApiV1SchedulesRequest1 | ApiV1SchedulesRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SchedulesResponse1, PatchApiV1SchedulesByIdErrorBody]:
        """Changing the recurrence re-times the next run, so a weekly publish moved from Friday to Monday does not fire
        once more on the Friday. Turning one back on does the same, because a schedule that has been off for a month
        carries a next run a month in the past.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/schedules/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SchedulesRequest1 | ApiV1SchedulesRequest1Dict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1SchedulesResponse1],
            error_mapper=patch_api_v1_schedules_by_id_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_schedules(
        self,
        *,
        body: ApiV1SchedulesRequest | ApiV1SchedulesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SchedulesResponse1, PostApiV1SchedulesErrorBody]:
        """``recurrence`` is a five-field cron expression evaluated in UTC, and it has to have a next occurrence — ``0 0
        30 2 *`` is five well-formed fields and a date that never arrives, and is refused rather than stored.

        An **agent key is refused**: a schedule is an instruction *to* an agent, so setting one is a person's decision.
        The schedule says when the agent is asked for a new version, not who hears about one — publishing emails the
        report's audience either way. Nothing publishes by itself: the agent polls ``GET /schedules?due=1`` and does the
        work.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/schedules"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SchedulesRequest | ApiV1SchedulesRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1SchedulesResponse1],
            error_mapper=post_api_v1_schedules_error_mapper,
            request_options=request_options,
        )
