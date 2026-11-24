from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.team_create_team_error import TeamCreateTeamErrorBody, team_create_team_error_mapper
from ..errors.team_delete_team_error import TeamDeleteTeamErrorBody, team_delete_team_error_mapper
from ..errors.team_get_list_error import TeamGetListErrorBody, team_get_list_error_mapper
from ..errors.team_get_team_error import TeamGetTeamErrorBody, team_get_team_error_mapper
from ..errors.team_update_team_error import TeamUpdateTeamErrorBody, team_update_team_error_mapper
from ..models.api_v1_team_request import ApiV1TeamRequest, ApiV1TeamRequestDict
from ..models.api_v1_team_request1 import ApiV1TeamRequest1, ApiV1TeamRequest1Dict
from ..models.api_v1_team_response import ApiV1TeamResponse
from ..models.api_v1_team_response1 import ApiV1TeamResponse1
from ..models.api_v1_team_response3 import ApiV1TeamResponse3
from ..server.server import Server


class TeamApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TeamApiWithRawResponse(client, server, auth)

    def team_create_team(
        self,
        *,
        body: ApiV1TeamRequest1 | ApiV1TeamRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1TeamResponse1:
        """Create a new team in your organization. Create one team per brand, client, or workspace you want to keep
        separate, then connect social accounts to it.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Team400Error1 | ApiV1Team401Error1 |
                ApiV1Team403Error1 | ApiV1Team404Error21 | ApiV1Team429Error1 | ApiV1Team500Error1 | ApiV1Team502Error1
                | ApiV1Team503Error1 | ApiV1Team504Error1 | RawError``."""
        return unwrap(self._with_raw_response.team_create_team(body=body, request_options=request_options))

    def team_delete_team(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1TeamResponse1:
        """Permanently delete a team along with its connected social accounts, posts, and uploads. This cannot be
        undone.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Team400Error1 | ApiV1Team401Error1 |
                ApiV1Team403Error1 | ApiV1Team404Error21 | ApiV1Team429Error1 | ApiV1Team500Error1 | ApiV1Team502Error1
                | ApiV1Team503Error1 | ApiV1Team504Error1 | RawError``."""
        return unwrap(self._with_raw_response.team_delete_team(id_, request_options=request_options))

    def team_get_list(
        self,
        *,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        search: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1TeamResponse3:
        """List the teams in your organization with pagination. Use this to discover team IDs, which are required by
        most publishing and analytics endpoints.

        Args:
            offset: Value sent with the request.
            limit: Value sent with the request.
            search: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Team400Error1 | ApiV1Team401Error1 |
                ApiV1Team403Error1 | ApiV1Team404Error21 | ApiV1Team429Error1 | ApiV1Team500Error1 | ApiV1Team502Error1
                | ApiV1Team503Error1 | ApiV1Team504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.team_get_list(
                offset=offset, limit=limit, search=search, request_options=request_options
            ),
        )

    def team_get_team(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1TeamResponse:
        """Retrieve a single team with its connected social accounts and settings. Teams are the container that social
        accounts, posts, and uploads belong to.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Team400Error1 | ApiV1Team401Error1 |
                ApiV1Team403Error1 | ApiV1Team404Error1 | ApiV1Team429Error1 | ApiV1Team500Error1 | ApiV1Team502Error1 |
                ApiV1Team503Error1 | ApiV1Team504Error1 | RawError``."""
        return unwrap(self._with_raw_response.team_get_team(id_, request_options=request_options))

    def team_update_team(
        self,
        id_: str,
        *,
        body: ApiV1TeamRequest | ApiV1TeamRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1TeamResponse1:
        """Update a team's name, avatar, time zone, or other settings. Only the fields you send are changed.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Team400Error1 | ApiV1Team401Error1 |
                ApiV1Team403Error1 | ApiV1Team404Error21 | ApiV1Team429Error1 | ApiV1Team500Error1 | ApiV1Team502Error1
                | ApiV1Team503Error1 | ApiV1Team504Error1 | RawError``."""
        return unwrap(self._with_raw_response.team_update_team(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> TeamApiWithRawResponse:
        return self._with_raw_response


class AsyncTeamApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTeamApiWithRawResponse(client, server, auth)

    async def team_create_team(
        self,
        *,
        body: ApiV1TeamRequest1 | ApiV1TeamRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1TeamResponse1:
        """Create a new team in your organization. Create one team per brand, client, or workspace you want to keep
        separate, then connect social accounts to it.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Team400Error1 | ApiV1Team401Error1 |
                ApiV1Team403Error1 | ApiV1Team404Error21 | ApiV1Team429Error1 | ApiV1Team500Error1 | ApiV1Team502Error1
                | ApiV1Team503Error1 | ApiV1Team504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.team_create_team(body=body, request_options=request_options))

    async def team_delete_team(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1TeamResponse1:
        """Permanently delete a team along with its connected social accounts, posts, and uploads. This cannot be
        undone.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Team400Error1 | ApiV1Team401Error1 |
                ApiV1Team403Error1 | ApiV1Team404Error21 | ApiV1Team429Error1 | ApiV1Team500Error1 | ApiV1Team502Error1
                | ApiV1Team503Error1 | ApiV1Team504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.team_delete_team(id_, request_options=request_options))

    async def team_get_list(
        self,
        *,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        search: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1TeamResponse3:
        """List the teams in your organization with pagination. Use this to discover team IDs, which are required by
        most publishing and analytics endpoints.

        Args:
            offset: Value sent with the request.
            limit: Value sent with the request.
            search: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Team400Error1 | ApiV1Team401Error1 |
                ApiV1Team403Error1 | ApiV1Team404Error21 | ApiV1Team429Error1 | ApiV1Team500Error1 | ApiV1Team502Error1
                | ApiV1Team503Error1 | ApiV1Team504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.team_get_list(
                offset=offset, limit=limit, search=search, request_options=request_options
            ),
        )

    async def team_get_team(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1TeamResponse:
        """Retrieve a single team with its connected social accounts and settings. Teams are the container that social
        accounts, posts, and uploads belong to.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Team400Error1 | ApiV1Team401Error1 |
                ApiV1Team403Error1 | ApiV1Team404Error1 | ApiV1Team429Error1 | ApiV1Team500Error1 | ApiV1Team502Error1 |
                ApiV1Team503Error1 | ApiV1Team504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.team_get_team(id_, request_options=request_options))

    async def team_update_team(
        self,
        id_: str,
        *,
        body: ApiV1TeamRequest | ApiV1TeamRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1TeamResponse1:
        """Update a team's name, avatar, time zone, or other settings. Only the fields you send are changed.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Team400Error1 | ApiV1Team401Error1 |
                ApiV1Team403Error1 | ApiV1Team404Error21 | ApiV1Team429Error1 | ApiV1Team500Error1 | ApiV1Team502Error1
                | ApiV1Team503Error1 | ApiV1Team504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.team_update_team(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncTeamApiWithRawResponse:
        return self._with_raw_response


class TeamApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def team_create_team(
        self,
        *,
        body: ApiV1TeamRequest1 | ApiV1TeamRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1TeamResponse1, TeamCreateTeamErrorBody]:
        """Create a new team in your organization. Create one team per brand, client, or workspace you want to keep
        separate, then connect social accounts to it.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/team/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TeamRequest1 | ApiV1TeamRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1TeamResponse1],
            error_mapper=team_create_team_error_mapper,
            request_options=request_options,
        )

    def team_delete_team(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1TeamResponse1, TeamDeleteTeamErrorBody]:
        """Permanently delete a team along with its connected social accounts, posts, and uploads. This cannot be
        undone.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/team/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1TeamResponse1],
            error_mapper=team_delete_team_error_mapper,
            request_options=request_options,
        )

    def team_get_list(
        self,
        *,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        search: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1TeamResponse3, TeamGetListErrorBody]:
        """List the teams in your organization with pagination. Use this to discover team IDs, which are required by
        most publishing and analytics endpoints.

        Args:
            offset: Value sent with the request.
            limit: Value sent with the request.
            search: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/team/"),
            query_params=[
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
                param[str | None]("search", search),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1TeamResponse3],
            error_mapper=team_get_list_error_mapper,
            request_options=request_options,
        )

    def team_get_team(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1TeamResponse, TeamGetTeamErrorBody]:
        """Retrieve a single team with its connected social accounts and settings. Teams are the container that social
        accounts, posts, and uploads belong to.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/team/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1TeamResponse],
            error_mapper=team_get_team_error_mapper,
            request_options=request_options,
        )

    def team_update_team(
        self,
        id_: str,
        *,
        body: ApiV1TeamRequest | ApiV1TeamRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1TeamResponse1, TeamUpdateTeamErrorBody]:
        """Update a team's name, avatar, time zone, or other settings. Only the fields you send are changed.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/team/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TeamRequest | ApiV1TeamRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1TeamResponse1],
            error_mapper=team_update_team_error_mapper,
            request_options=request_options,
        )


class AsyncTeamApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def team_create_team(
        self,
        *,
        body: ApiV1TeamRequest1 | ApiV1TeamRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1TeamResponse1, TeamCreateTeamErrorBody]:
        """Create a new team in your organization. Create one team per brand, client, or workspace you want to keep
        separate, then connect social accounts to it.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/team/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TeamRequest1 | ApiV1TeamRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1TeamResponse1],
            error_mapper=team_create_team_error_mapper,
            request_options=request_options,
        )

    async def team_delete_team(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1TeamResponse1, TeamDeleteTeamErrorBody]:
        """Permanently delete a team along with its connected social accounts, posts, and uploads. This cannot be
        undone.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/team/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1TeamResponse1],
            error_mapper=team_delete_team_error_mapper,
            request_options=request_options,
        )

    async def team_get_list(
        self,
        *,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        search: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1TeamResponse3, TeamGetListErrorBody]:
        """List the teams in your organization with pagination. Use this to discover team IDs, which are required by
        most publishing and analytics endpoints.

        Args:
            offset: Value sent with the request.
            limit: Value sent with the request.
            search: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/team/"),
            query_params=[
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
                param[str | None]("search", search),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1TeamResponse3],
            error_mapper=team_get_list_error_mapper,
            request_options=request_options,
        )

    async def team_get_team(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1TeamResponse, TeamGetTeamErrorBody]:
        """Retrieve a single team with its connected social accounts and settings. Teams are the container that social
        accounts, posts, and uploads belong to.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/team/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1TeamResponse],
            error_mapper=team_get_team_error_mapper,
            request_options=request_options,
        )

    async def team_update_team(
        self,
        id_: str,
        *,
        body: ApiV1TeamRequest | ApiV1TeamRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1TeamResponse1, TeamUpdateTeamErrorBody]:
        """Update a team's name, avatar, time zone, or other settings. Only the fields you send are changed.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/team/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TeamRequest | ApiV1TeamRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1TeamResponse1],
            error_mapper=team_update_team_error_mapper,
            request_options=request_options,
        )
