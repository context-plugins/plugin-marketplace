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
    json_decoder,
    param,
    unwrap,
)
from ..errors.join_oauth_app_team_v2_oauth_join_post_error import (
    JoinOauthAppTeamV2OauthJoinPostErrorBody,
    join_oauth_app_team_v2_oauth_join_post_error_mapper,
)
from ..models.o_auth_join_response import OAuthJoinResponse
from ..server.server import Server


class OAuth:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = OAuthWithRawResponse(client, server)

    def join_oauth_app_team_v2_oauth_join_post(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> OAuthJoinResponse:
        """Make the OAuth access token's user a member of its application's team.

        Idempotent. A user who is already a member keeps their role; a new user joins as an external member, whom a team
        admin can promote. A user who was removed from the team is refused until a team admin invites them again. Every
        other endpoint answers ``principal_not_found`` for the token until its user has joined.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists An upstream provider is unavailable Rate limit
                exceeded; wait at least Retry-After seconds The server is at capacity; retry after Retry-After seconds
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.join_oauth_app_team_v2_oauth_join_post(request_options=request_options))

    @property
    def with_raw_response(self) -> OAuthWithRawResponse:
        return self._with_raw_response


class AsyncOAuth:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncOAuthWithRawResponse(client, server)

    async def join_oauth_app_team_v2_oauth_join_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> OAuthJoinResponse:
        """Make the OAuth access token's user a member of its application's team.

        Idempotent. A user who is already a member keeps their role; a new user joins as an external member, whom a team
        admin can promote. A user who was removed from the team is refused until a team admin invites them again. Every
        other endpoint answers ``principal_not_found`` for the token until its user has joined.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists An upstream provider is unavailable Rate limit
                exceeded; wait at least Retry-After seconds The server is at capacity; retry after Retry-After seconds
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.join_oauth_app_team_v2_oauth_join_post(request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncOAuthWithRawResponse:
        return self._with_raw_response


class OAuthWithRawResponse(BaseRawResponse[RawClient, Server]):
    def join_oauth_app_team_v2_oauth_join_post(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[OAuthJoinResponse, JoinOauthAppTeamV2OauthJoinPostErrorBody]:
        """Make the OAuth access token's user a member of its application's team.

        Idempotent. A user who is already a member keeps their role; a new user joins as an external member, whom a team
        admin can promote. A user who was removed from the team is refused until a team admin invites them again. Every
        other endpoint answers ``principal_not_found`` for the token until its user has joined.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/oauth/join"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[OAuthJoinResponse],
            error_mapper=join_oauth_app_team_v2_oauth_join_post_error_mapper,
            request_options=request_options,
        )


class AsyncOAuthWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def join_oauth_app_team_v2_oauth_join_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[OAuthJoinResponse, JoinOauthAppTeamV2OauthJoinPostErrorBody]:
        """Make the OAuth access token's user a member of its application's team.

        Idempotent. A user who is already a member keeps their role; a new user joins as an external member, whom a team
        admin can promote. A user who was removed from the team is refused until a team admin invites them again. Every
        other endpoint answers ``principal_not_found`` for the token until its user has joined.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/oauth/join"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[OAuthJoinResponse],
            error_mapper=join_oauth_app_team_v2_oauth_join_post_error_mapper,
            request_options=request_options,
        )
