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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.action_item_response import ActionItemResponse
from ..models.action_items_list_response import ActionItemsListResponse
from ..models.get_action_items_request import GetActionItemsRequest, GetActionItemsRequestDict
from ..models.mark_action_item_complete_request import MarkActionItemCompleteRequest, MarkActionItemCompleteRequestDict
from ..server.server import Server


class ActionItems:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ActionItemsWithRawResponse(client, server, auth)

    def apps_developer_api_api_archive_action_item(
        self, action_item_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ActionItemResponse:
        """Archive an action item by marking it as won't do.

        Args:
            action_item_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.apps_developer_api_api_archive_action_item(
                action_item_id, request_options=request_options
            ),
        )

    def apps_developer_api_api_get_action_item_by_id(
        self, action_item_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ActionItemResponse:
        """Retrieve an action item by its ID.

        Args:
            action_item_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.apps_developer_api_api_get_action_item_by_id(
                action_item_id, request_options=request_options
            ),
        )

    def apps_developer_api_api_get_action_items(
        self,
        body: GetActionItemsRequest | GetActionItemsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ActionItemsListResponse:
        """List action items with optional filters and pagination. Privileged access allows you to get action items for
        the account. Non-privileged access allows you to get action items for the authenticated user only.

        The ``scope`` filter controls which action items are returned:
        - (no scope - default): All action items the user has access to
        - assigned_to_me: Only action items assigned to the authenticated user
        - assigned_to_others: Only action items the user can edit, assigned to teammates

        The ``created_at_start``, ``created_at_end``, ``updated_at_start`` and ``updated_at_end`` filters take a
        YYYY-MM-DD date or an ISO datetime and are inclusive. A value without a time means midnight UTC, so pass a time
        on an end bound (``2024-01-05T23:59:59``) to cover the whole day. To page through a window of changes, combine
        ``updated_at_start`` with ``order_by: updated_at_asc``.

        Whether ``updated_at`` moves depends on where the change was made. Edits in the note itself, including its text,
        completion, assignees and due date, all bump ``updated_at``. An assignee or due date changed outside the note,
        such as from the action items list, is written to a separate record and leaves ``updated_at`` unchanged, so the
        ``updated_at`` filters do not pick that item up.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.apps_developer_api_api_get_action_items(body, request_options=request_options)
        )

    def apps_developer_api_api_mark_action_item_complete(
        self,
        action_item_id: str,
        body: MarkActionItemCompleteRequest | MarkActionItemCompleteRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ActionItemResponse:
        """Mark an action item as complete or incomplete.

        Args:
            action_item_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.apps_developer_api_api_mark_action_item_complete(
                action_item_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ActionItemsWithRawResponse:
        return self._with_raw_response


class AsyncActionItems:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncActionItemsWithRawResponse(client, server, auth)

    async def apps_developer_api_api_archive_action_item(
        self, action_item_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ActionItemResponse:
        """Archive an action item by marking it as won't do.

        Args:
            action_item_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.apps_developer_api_api_archive_action_item(
                action_item_id, request_options=request_options
            ),
        )

    async def apps_developer_api_api_get_action_item_by_id(
        self, action_item_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ActionItemResponse:
        """Retrieve an action item by its ID.

        Args:
            action_item_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.apps_developer_api_api_get_action_item_by_id(
                action_item_id, request_options=request_options
            ),
        )

    async def apps_developer_api_api_get_action_items(
        self,
        body: GetActionItemsRequest | GetActionItemsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ActionItemsListResponse:
        """List action items with optional filters and pagination. Privileged access allows you to get action items for
        the account. Non-privileged access allows you to get action items for the authenticated user only.

        The ``scope`` filter controls which action items are returned:
        - (no scope - default): All action items the user has access to
        - assigned_to_me: Only action items assigned to the authenticated user
        - assigned_to_others: Only action items the user can edit, assigned to teammates

        The ``created_at_start``, ``created_at_end``, ``updated_at_start`` and ``updated_at_end`` filters take a
        YYYY-MM-DD date or an ISO datetime and are inclusive. A value without a time means midnight UTC, so pass a time
        on an end bound (``2024-01-05T23:59:59``) to cover the whole day. To page through a window of changes, combine
        ``updated_at_start`` with ``order_by: updated_at_asc``.

        Whether ``updated_at`` moves depends on where the change was made. Edits in the note itself, including its text,
        completion, assignees and due date, all bump ``updated_at``. An assignee or due date changed outside the note,
        such as from the action items list, is written to a separate record and leaves ``updated_at`` unchanged, so the
        ``updated_at`` filters do not pick that item up.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.apps_developer_api_api_get_action_items(body, request_options=request_options)
        )

    async def apps_developer_api_api_mark_action_item_complete(
        self,
        action_item_id: str,
        body: MarkActionItemCompleteRequest | MarkActionItemCompleteRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ActionItemResponse:
        """Mark an action item as complete or incomplete.

        Args:
            action_item_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.apps_developer_api_api_mark_action_item_complete(
                action_item_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncActionItemsWithRawResponse:
        return self._with_raw_response


class ActionItemsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def apps_developer_api_api_archive_action_item(
        self, action_item_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ActionItemResponse, RawError]:
        """Archive an action item by marking it as won't do.

        Args:
            action_item_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/action_item/{action_item_id}/archive"),
            path_params=[param[str]("action_item_id", action_item_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=json_decoder[ActionItemResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def apps_developer_api_api_get_action_item_by_id(
        self, action_item_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ActionItemResponse, RawError]:
        """Retrieve an action item by its ID.

        Args:
            action_item_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/action_item/{action_item_id}"),
            path_params=[param[str]("action_item_id", action_item_id)],
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=json_decoder[ActionItemResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def apps_developer_api_api_get_action_items(
        self,
        body: GetActionItemsRequest | GetActionItemsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ActionItemsListResponse, RawError]:
        """List action items with optional filters and pagination. Privileged access allows you to get action items for
        the account. Non-privileged access allows you to get action items for the authenticated user only.

        The ``scope`` filter controls which action items are returned:
        - (no scope - default): All action items the user has access to
        - assigned_to_me: Only action items assigned to the authenticated user
        - assigned_to_others: Only action items the user can edit, assigned to teammates

        The ``created_at_start``, ``created_at_end``, ``updated_at_start`` and ``updated_at_end`` filters take a
        YYYY-MM-DD date or an ISO datetime and are inclusive. A value without a time means midnight UTC, so pass a time
        on an end bound (``2024-01-05T23:59:59``) to cover the whole day. To page through a window of changes, combine
        ``updated_at_start`` with ``order_by: updated_at_asc``.

        Whether ``updated_at`` moves depends on where the change was made. Edits in the note itself, including its text,
        completion, assignees and due date, all bump ``updated_at``. An assignee or due date changed outside the note,
        such as from the action items list, is written to a separate record and leaves ``updated_at`` unchanged, so the
        ``updated_at`` filters do not pick that item up.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/action_items"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GetActionItemsRequest | GetActionItemsRequestDict](body),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=json_decoder[ActionItemsListResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def apps_developer_api_api_mark_action_item_complete(
        self,
        action_item_id: str,
        body: MarkActionItemCompleteRequest | MarkActionItemCompleteRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ActionItemResponse, RawError]:
        """Mark an action item as complete or incomplete.

        Args:
            action_item_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/action_item/{action_item_id}/complete"),
            path_params=[param[str]("action_item_id", action_item_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MarkActionItemCompleteRequest | MarkActionItemCompleteRequestDict](body),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=json_decoder[ActionItemResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncActionItemsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def apps_developer_api_api_archive_action_item(
        self, action_item_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ActionItemResponse, RawError]:
        """Archive an action item by marking it as won't do.

        Args:
            action_item_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/action_item/{action_item_id}/archive"),
            path_params=[param[str]("action_item_id", action_item_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=async_json_decoder[ActionItemResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def apps_developer_api_api_get_action_item_by_id(
        self, action_item_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ActionItemResponse, RawError]:
        """Retrieve an action item by its ID.

        Args:
            action_item_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/action_item/{action_item_id}"),
            path_params=[param[str]("action_item_id", action_item_id)],
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=async_json_decoder[ActionItemResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def apps_developer_api_api_get_action_items(
        self,
        body: GetActionItemsRequest | GetActionItemsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ActionItemsListResponse, RawError]:
        """List action items with optional filters and pagination. Privileged access allows you to get action items for
        the account. Non-privileged access allows you to get action items for the authenticated user only.

        The ``scope`` filter controls which action items are returned:
        - (no scope - default): All action items the user has access to
        - assigned_to_me: Only action items assigned to the authenticated user
        - assigned_to_others: Only action items the user can edit, assigned to teammates

        The ``created_at_start``, ``created_at_end``, ``updated_at_start`` and ``updated_at_end`` filters take a
        YYYY-MM-DD date or an ISO datetime and are inclusive. A value without a time means midnight UTC, so pass a time
        on an end bound (``2024-01-05T23:59:59``) to cover the whole day. To page through a window of changes, combine
        ``updated_at_start`` with ``order_by: updated_at_asc``.

        Whether ``updated_at`` moves depends on where the change was made. Edits in the note itself, including its text,
        completion, assignees and due date, all bump ``updated_at``. An assignee or due date changed outside the note,
        such as from the action items list, is written to a separate record and leaves ``updated_at`` unchanged, so the
        ``updated_at`` filters do not pick that item up.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/action_items"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GetActionItemsRequest | GetActionItemsRequestDict](body),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=async_json_decoder[ActionItemsListResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def apps_developer_api_api_mark_action_item_complete(
        self,
        action_item_id: str,
        body: MarkActionItemCompleteRequest | MarkActionItemCompleteRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ActionItemResponse, RawError]:
        """Mark an action item as complete or incomplete.

        Args:
            action_item_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/action_item/{action_item_id}/complete"),
            path_params=[param[str]("action_item_id", action_item_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MarkActionItemCompleteRequest | MarkActionItemCompleteRequestDict](body),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=async_json_decoder[ActionItemResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
