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
    async_empty_response,
    empty_response,
    json_body,
    param,
    unwrap,
)
from ..errors.create_activities_error import CreateActivitiesErrorBody, create_activities_error_mapper
from ..models.activities_create_request import ActivitiesCreateRequest, ActivitiesCreateRequestDict
from ..server.server import Server


class Activities:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ActivitiesWithRawResponse(client, server, auth)

    def create_activities(
        self,
        body: ActivitiesCreateRequest | ActivitiesCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Sends up to 100 custom activity events in a single payload (max 2 MB). Each activity references a custom
        activity definition and may create or update the associated person via merge_by or person_id.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Activities accepted.

        Raises:
            ApiError: Missing or invalid API key. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_activities(body, request_options=request_options))

    @property
    def with_raw_response(self) -> ActivitiesWithRawResponse:
        return self._with_raw_response


class AsyncActivities:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncActivitiesWithRawResponse(client, server, auth)

    async def create_activities(
        self,
        body: ActivitiesCreateRequest | ActivitiesCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Sends up to 100 custom activity events in a single payload (max 2 MB). Each activity references a custom
        activity definition and may create or update the associated person via merge_by or person_id.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Activities accepted.

        Raises:
            ApiError: Missing or invalid API key. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_activities(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncActivitiesWithRawResponse:
        return self._with_raw_response


class ActivitiesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_activities(
        self,
        body: ActivitiesCreateRequest | ActivitiesCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateActivitiesErrorBody]:
        """Sends up to 100 custom activity events in a single payload (max 2 MB). Each activity references a custom
        activity definition and may create or update the associated person via merge_by or person_id.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/activities/create"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ActivitiesCreateRequest | ActivitiesCreateRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=empty_response,
            error_mapper=create_activities_error_mapper,
            request_options=request_options,
        )


class AsyncActivitiesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_activities(
        self,
        body: ActivitiesCreateRequest | ActivitiesCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateActivitiesErrorBody]:
        """Sends up to 100 custom activity events in a single payload (max 2 MB). Each activity references a custom
        activity definition and may create or update the associated person via merge_by or person_id.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/activities/create"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ActivitiesCreateRequest | ActivitiesCreateRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_empty_response,
            error_mapper=create_activities_error_mapper,
            request_options=request_options,
        )
