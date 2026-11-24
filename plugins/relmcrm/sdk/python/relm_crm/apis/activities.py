from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.activity import Activity
from ..models.activity_input import ActivityInput, ActivityInputDict
from ..models.activity_list import ActivityList
from ..models.deleted import Deleted
from ..server.server import Server


class Activities:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ActivitiesWithRawResponse(client, server, auth)

    def create_activity(
        self,
        body: ActivityInput | ActivityInputDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Activity:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            idempotency_key: Safely retry a create: same key + same body replays the original result.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.create_activity(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    def delete_activity(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Deleted:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_activity(id_, request_options=request_options))

    def get_activity(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Activity:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Activity

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_activity(id_, request_options=request_options))

    def list_activities(
        self,
        *,
        limit: int | None = 25,
        cursor: str | None = None,
        include_deleted: bool | None = None,
        contact_id: str | None = None,
        deal_id: str | None = None,
        type_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ActivityList:
        """Send a ``GET`` request.

        Args:
            limit: Page size (default 25, max 100).
            cursor: Opaque keyset cursor from a prior next_cursor.
            include_deleted: Include soft-deleted rows.
            contact_id: Value sent with the request.
            deal_id: Value sent with the request.
            type_: A registered activity.type value (validated).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Activity list

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_activities(
                limit=limit,
                cursor=cursor,
                include_deleted=include_deleted,
                contact_id=contact_id,
                deal_id=deal_id,
                type_=type_,
                request_options=request_options,
            ),
        )

    def restore_activity(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Activity:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restored

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.restore_activity(id_, request_options=request_options))

    def update_activity(
        self,
        id_: str,
        body: ActivityInput | ActivityInputDict,
        *,
        if_match: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Activity:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            if_match: The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_activity(id_, body, if_match=if_match, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ActivitiesWithRawResponse:
        return self._with_raw_response


class AsyncActivities:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncActivitiesWithRawResponse(client, server, auth)

    async def create_activity(
        self,
        body: ActivityInput | ActivityInputDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Activity:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            idempotency_key: Safely retry a create: same key + same body replays the original result.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_activity(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    async def delete_activity(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Deleted:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_activity(id_, request_options=request_options))

    async def get_activity(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Activity:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Activity

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_activity(id_, request_options=request_options))

    async def list_activities(
        self,
        *,
        limit: int | None = 25,
        cursor: str | None = None,
        include_deleted: bool | None = None,
        contact_id: str | None = None,
        deal_id: str | None = None,
        type_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ActivityList:
        """Send a ``GET`` request.

        Args:
            limit: Page size (default 25, max 100).
            cursor: Opaque keyset cursor from a prior next_cursor.
            include_deleted: Include soft-deleted rows.
            contact_id: Value sent with the request.
            deal_id: Value sent with the request.
            type_: A registered activity.type value (validated).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Activity list

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_activities(
                limit=limit,
                cursor=cursor,
                include_deleted=include_deleted,
                contact_id=contact_id,
                deal_id=deal_id,
                type_=type_,
                request_options=request_options,
            ),
        )

    async def restore_activity(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Activity:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restored

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.restore_activity(id_, request_options=request_options))

    async def update_activity(
        self,
        id_: str,
        body: ActivityInput | ActivityInputDict,
        *,
        if_match: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Activity:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            if_match: The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_activity(id_, body, if_match=if_match, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncActivitiesWithRawResponse:
        return self._with_raw_response


class ActivitiesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_activity(
        self,
        body: ActivityInput | ActivityInputDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Activity, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            idempotency_key: Safely retry a create: same key + same body replays the original result.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/activities"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[ActivityInput | ActivityInputDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Activity],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_activity(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Deleted, RawError]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/activities/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Deleted],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_activity(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Activity, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/activities/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Activity],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_activities(
        self,
        *,
        limit: int | None = 25,
        cursor: str | None = None,
        include_deleted: bool | None = None,
        contact_id: str | None = None,
        deal_id: str | None = None,
        type_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ActivityList, RawError]:
        """Send a ``GET`` request.

        Args:
            limit: Page size (default 25, max 100).
            cursor: Opaque keyset cursor from a prior next_cursor.
            include_deleted: Include soft-deleted rows.
            contact_id: Value sent with the request.
            deal_id: Value sent with the request.
            type_: A registered activity.type value (validated).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/activities"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[bool | None]("include_deleted", include_deleted),
                param[str | None]("contact_id", contact_id),
                param[str | None]("deal_id", deal_id),
                param[str | None]("type", type_),
            ],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[ActivityList],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def restore_activity(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Activity, RawError]:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/activities/{id}/restore"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Activity],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_activity(
        self,
        id_: str,
        body: ActivityInput | ActivityInputDict,
        *,
        if_match: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Activity, RawError]:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            if_match: The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/activities/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ActivityInput | ActivityInputDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Activity],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncActivitiesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_activity(
        self,
        body: ActivityInput | ActivityInputDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Activity, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            idempotency_key: Safely retry a create: same key + same body replays the original result.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/activities"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[ActivityInput | ActivityInputDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Activity],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_activity(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Deleted, RawError]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/activities/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Deleted],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_activity(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Activity, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/activities/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Activity],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_activities(
        self,
        *,
        limit: int | None = 25,
        cursor: str | None = None,
        include_deleted: bool | None = None,
        contact_id: str | None = None,
        deal_id: str | None = None,
        type_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ActivityList, RawError]:
        """Send a ``GET`` request.

        Args:
            limit: Page size (default 25, max 100).
            cursor: Opaque keyset cursor from a prior next_cursor.
            include_deleted: Include soft-deleted rows.
            contact_id: Value sent with the request.
            deal_id: Value sent with the request.
            type_: A registered activity.type value (validated).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/activities"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[bool | None]("include_deleted", include_deleted),
                param[str | None]("contact_id", contact_id),
                param[str | None]("deal_id", deal_id),
                param[str | None]("type", type_),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[ActivityList],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def restore_activity(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Activity, RawError]:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/activities/{id}/restore"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Activity],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_activity(
        self,
        id_: str,
        body: ActivityInput | ActivityInputDict,
        *,
        if_match: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Activity, RawError]:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            if_match: The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/activities/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ActivityInput | ActivityInputDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Activity],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
