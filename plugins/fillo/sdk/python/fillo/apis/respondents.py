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
from ..errors.find_respondents_error import FindRespondentsErrorBody, find_respondents_error_mapper
from ..errors.forget_respondent_error import ForgetRespondentErrorBody, forget_respondent_error_mapper
from ..errors.list_respondent_responses_error import (
    ListRespondentResponsesErrorBody,
    list_respondent_responses_error_mapper,
)
from ..models.api_v1_manage_respondents_request import ApiV1ManageRespondentsRequest, ApiV1ManageRespondentsRequestDict
from ..models.api_v1_manage_respondents_response import ApiV1ManageRespondentsResponse
from ..models.api_v1_manage_respondents_response1 import ApiV1ManageRespondentsResponse1
from ..models.response_page import ResponsePage
from ..server.server import Server


class Respondents:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RespondentsWithRawResponse(client, server, auth)

    def find_respondents(
        self,
        *,
        external_id: str | None = None,
        email: str | None = None,
        cursor: str | None = None,
        limit: int | None = 50,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ManageRespondentsResponse:
        """Find living respondent profiles by externalId (exact, project-unique) or email. At least one is required.
        Scope: respondents:read.

        Args:
            external_id: The host app's stable user id.
            email: The respondent's email.
            cursor: The id from a previous page's nextCursor. Omit for the first page.
            limit: Page size, 1–100. Default 50.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of respondents.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. Per-key
                (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After
                header. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.find_respondents(
                external_id=external_id, email=email, cursor=cursor, limit=limit, request_options=request_options
            ),
        )

    def forget_respondent(
        self,
        id_: str,
        body: ApiV1ManageRespondentsRequest | ApiV1ManageRespondentsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ManageRespondentsResponse1:
        """Erase a person inside the key's project (GDPR erasure), optionally with every response they submitted. The
        path accepts the profile id or the external id; a person named only by submit-time snapshots still resolves.
        Destructive (Tier C): ``confirm`` must equal the respondent's EXTERNAL id. Scope: respondents:delete — a
        danger-tier scope that is never part of a preset and must be named explicitly at mint.

        Args:
            id_: A respondent profile id or external id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The person was forgotten.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.forget_respondent(id_, body, request_options=request_options))

    def list_respondent_responses(
        self,
        id_: str,
        *,
        cursor: str | None = None,
        limit: int | None = 50,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ResponsePage:
        """One person's response history across every form and version, newest first. Scopes: respondents:read AND
        responses:read.

        Args:
            id_: The Fillo respondent id.
            cursor: The id from a previous page's nextCursor. Omit for the first page.
            limit: Page size, 1–100. Default 50.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of responses.

        Raises:
            ApiError: Missing, malformed, unknown, revoked, or expired key. The key is valid but lacks the required
                scope. No such resource in this project (returned instead of 403 for ids in other projects). Per-key
                (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After
                header. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_respondent_responses(
                id_, cursor=cursor, limit=limit, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> RespondentsWithRawResponse:
        return self._with_raw_response


class AsyncRespondents:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRespondentsWithRawResponse(client, server, auth)

    async def find_respondents(
        self,
        *,
        external_id: str | None = None,
        email: str | None = None,
        cursor: str | None = None,
        limit: int | None = 50,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ManageRespondentsResponse:
        """Find living respondent profiles by externalId (exact, project-unique) or email. At least one is required.
        Scope: respondents:read.

        Args:
            external_id: The host app's stable user id.
            email: The respondent's email.
            cursor: The id from a previous page's nextCursor. Omit for the first page.
            limit: Page size, 1–100. Default 50.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of respondents.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. Per-key
                (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After
                header. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.find_respondents(
                external_id=external_id, email=email, cursor=cursor, limit=limit, request_options=request_options
            ),
        )

    async def forget_respondent(
        self,
        id_: str,
        body: ApiV1ManageRespondentsRequest | ApiV1ManageRespondentsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ManageRespondentsResponse1:
        """Erase a person inside the key's project (GDPR erasure), optionally with every response they submitted. The
        path accepts the profile id or the external id; a person named only by submit-time snapshots still resolves.
        Destructive (Tier C): ``confirm`` must equal the respondent's EXTERNAL id. Scope: respondents:delete — a
        danger-tier scope that is never part of a preset and must be named explicitly at mint.

        Args:
            id_: A respondent profile id or external id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The person was forgotten.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.forget_respondent(id_, body, request_options=request_options))

    async def list_respondent_responses(
        self,
        id_: str,
        *,
        cursor: str | None = None,
        limit: int | None = 50,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ResponsePage:
        """One person's response history across every form and version, newest first. Scopes: respondents:read AND
        responses:read.

        Args:
            id_: The Fillo respondent id.
            cursor: The id from a previous page's nextCursor. Omit for the first page.
            limit: Page size, 1–100. Default 50.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of responses.

        Raises:
            ApiError: Missing, malformed, unknown, revoked, or expired key. The key is valid but lacks the required
                scope. No such resource in this project (returned instead of 403 for ids in other projects). Per-key
                (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After
                header. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_respondent_responses(
                id_, cursor=cursor, limit=limit, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncRespondentsWithRawResponse:
        return self._with_raw_response


class RespondentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def find_respondents(
        self,
        *,
        external_id: str | None = None,
        email: str | None = None,
        cursor: str | None = None,
        limit: int | None = 50,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageRespondentsResponse, FindRespondentsErrorBody]:
        """Find living respondent profiles by externalId (exact, project-unique) or email. At least one is required.
        Scope: respondents:read.

        Args:
            external_id: The host app's stable user id.
            email: The respondent's email.
            cursor: The id from a previous page's nextCursor. Omit for the first page.
            limit: Page size, 1–100. Default 50.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/respondents"),
            query_params=[
                param[str | None]("externalId", external_id),
                param[str | None]("email", email),
                param[str | None]("cursor", cursor),
                param[int | None]("limit", limit),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageRespondentsResponse],
            error_mapper=find_respondents_error_mapper,
            request_options=request_options,
        )

    def forget_respondent(
        self,
        id_: str,
        body: ApiV1ManageRespondentsRequest | ApiV1ManageRespondentsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageRespondentsResponse1, ForgetRespondentErrorBody]:
        """Erase a person inside the key's project (GDPR erasure), optionally with every response they submitted. The
        path accepts the profile id or the external id; a person named only by submit-time snapshots still resolves.
        Destructive (Tier C): ``confirm`` must equal the respondent's EXTERNAL id. Scope: respondents:delete — a
        danger-tier scope that is never part of a preset and must be named explicitly at mint.

        Args:
            id_: A respondent profile id or external id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/respondents/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageRespondentsRequest | ApiV1ManageRespondentsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageRespondentsResponse1],
            error_mapper=forget_respondent_error_mapper,
            request_options=request_options,
        )

    def list_respondent_responses(
        self,
        id_: str,
        *,
        cursor: str | None = None,
        limit: int | None = 50,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ResponsePage, ListRespondentResponsesErrorBody]:
        """One person's response history across every form and version, newest first. Scopes: respondents:read AND
        responses:read.

        Args:
            id_: The Fillo respondent id.
            cursor: The id from a previous page's nextCursor. Omit for the first page.
            limit: Page size, 1–100. Default 50.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/respondents/{id}/responses"),
            path_params=[param[str]("id", id_)],
            query_params=[param[str | None]("cursor", cursor), param[int | None]("limit", limit)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ResponsePage],
            error_mapper=list_respondent_responses_error_mapper,
            request_options=request_options,
        )


class AsyncRespondentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def find_respondents(
        self,
        *,
        external_id: str | None = None,
        email: str | None = None,
        cursor: str | None = None,
        limit: int | None = 50,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageRespondentsResponse, FindRespondentsErrorBody]:
        """Find living respondent profiles by externalId (exact, project-unique) or email. At least one is required.
        Scope: respondents:read.

        Args:
            external_id: The host app's stable user id.
            email: The respondent's email.
            cursor: The id from a previous page's nextCursor. Omit for the first page.
            limit: Page size, 1–100. Default 50.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/respondents"),
            query_params=[
                param[str | None]("externalId", external_id),
                param[str | None]("email", email),
                param[str | None]("cursor", cursor),
                param[int | None]("limit", limit),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageRespondentsResponse],
            error_mapper=find_respondents_error_mapper,
            request_options=request_options,
        )

    async def forget_respondent(
        self,
        id_: str,
        body: ApiV1ManageRespondentsRequest | ApiV1ManageRespondentsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageRespondentsResponse1, ForgetRespondentErrorBody]:
        """Erase a person inside the key's project (GDPR erasure), optionally with every response they submitted. The
        path accepts the profile id or the external id; a person named only by submit-time snapshots still resolves.
        Destructive (Tier C): ``confirm`` must equal the respondent's EXTERNAL id. Scope: respondents:delete — a
        danger-tier scope that is never part of a preset and must be named explicitly at mint.

        Args:
            id_: A respondent profile id or external id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/respondents/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageRespondentsRequest | ApiV1ManageRespondentsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageRespondentsResponse1],
            error_mapper=forget_respondent_error_mapper,
            request_options=request_options,
        )

    async def list_respondent_responses(
        self,
        id_: str,
        *,
        cursor: str | None = None,
        limit: int | None = 50,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ResponsePage, ListRespondentResponsesErrorBody]:
        """One person's response history across every form and version, newest first. Scopes: respondents:read AND
        responses:read.

        Args:
            id_: The Fillo respondent id.
            cursor: The id from a previous page's nextCursor. Omit for the first page.
            limit: Page size, 1–100. Default 50.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/respondents/{id}/responses"),
            path_params=[param[str]("id", id_)],
            query_params=[param[str | None]("cursor", cursor), param[int | None]("limit", limit)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ResponsePage],
            error_mapper=list_respondent_responses_error_mapper,
            request_options=request_options,
        )
