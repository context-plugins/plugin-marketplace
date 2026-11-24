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
    param,
    unwrap,
)
from ..errors.add_permission_error import AddPermissionErrorBody, add_permission_error_mapper
from ..errors.remove_permission_error import RemovePermissionErrorBody, remove_permission_error_mapper
from ..models.enums.x_amz_target1_amazon_simple_queue_service_permissions_api import (
    XAmzTarget1AmazonSimpleQueueServicePermissionsApiOrStr,
)
from ..models.enums.x_amz_target_amazon_simple_queue_service_permissions_api import (
    XAmzTargetAmazonSimpleQueueServicePermissionsApiOrStr,
)
from ..server.server import Server


class Permissions:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PermissionsWithRawResponse(client, server, auth)

    def add_permission(
        self,
        x_amz_target: XAmzTargetAmazonSimpleQueueServicePermissionsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Adds a permission to a queue for a specific principal. This allows sharing access to the queue. When you
        create a queue, you have full control access rights for the queue. Only you, the owner of the queue, can grant
        or deny permissions to the queue. For more information about these permissions, see Allow Developers to Write
        Messages to a Shared Queue in the Amazon SQS Developer Guide. AddPermission generates a policy for you. You can
        use SetQueueAttributes to upload your policy. For more information, see Using Custom Policies with the Amazon
        SQS Access Policy Language in the Amazon SQS Developer Guide. An Amazon SQS policy can have a maximum of seven
        actions per statement. To remove the ability to change queue permissions, you must deny permission to the
        AddPermission, RemovePermission, and SetQueueAttributes actions in your IAM policy. Amazon SQS AddPermission
        does not support adding a non-account principal. Cross-account permissions don't apply to this action. For more
        information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; OverLimit; RequestThrottled QueueDoesNotExist;
                UnsupportedOperation ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.add_permission(x_amz_target, request_options=request_options))

    def remove_permission(
        self,
        x_amz_target: XAmzTarget1AmazonSimpleQueueServicePermissionsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Revokes any permissions in the queue policy that matches the specified Label parameter. Only the owner of a
        queue can remove permissions from it. Cross-account permissions don't apply to this action. For more
        information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide. To
        remove the ability to change queue permissions, you must deny permission to the AddPermission, RemovePermission,
        and SetQueueAttributes actions in your IAM policy.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; RequestThrottled QueueDoesNotExist; UnsupportedOperation ``error``
                is ``RawError``."""
        return unwrap(self._with_raw_response.remove_permission(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> PermissionsWithRawResponse:
        return self._with_raw_response


class AsyncPermissions:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPermissionsWithRawResponse(client, server, auth)

    async def add_permission(
        self,
        x_amz_target: XAmzTargetAmazonSimpleQueueServicePermissionsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Adds a permission to a queue for a specific principal. This allows sharing access to the queue. When you
        create a queue, you have full control access rights for the queue. Only you, the owner of the queue, can grant
        or deny permissions to the queue. For more information about these permissions, see Allow Developers to Write
        Messages to a Shared Queue in the Amazon SQS Developer Guide. AddPermission generates a policy for you. You can
        use SetQueueAttributes to upload your policy. For more information, see Using Custom Policies with the Amazon
        SQS Access Policy Language in the Amazon SQS Developer Guide. An Amazon SQS policy can have a maximum of seven
        actions per statement. To remove the ability to change queue permissions, you must deny permission to the
        AddPermission, RemovePermission, and SetQueueAttributes actions in your IAM policy. Amazon SQS AddPermission
        does not support adding a non-account principal. Cross-account permissions don't apply to this action. For more
        information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; OverLimit; RequestThrottled QueueDoesNotExist;
                UnsupportedOperation ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.add_permission(x_amz_target, request_options=request_options))

    async def remove_permission(
        self,
        x_amz_target: XAmzTarget1AmazonSimpleQueueServicePermissionsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Revokes any permissions in the queue policy that matches the specified Label parameter. Only the owner of a
        queue can remove permissions from it. Cross-account permissions don't apply to this action. For more
        information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide. To
        remove the ability to change queue permissions, you must deny permission to the AddPermission, RemovePermission,
        and SetQueueAttributes actions in your IAM policy.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; RequestThrottled QueueDoesNotExist; UnsupportedOperation ``error``
                is ``RawError``."""
        return unwrap(await self._with_raw_response.remove_permission(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPermissionsWithRawResponse:
        return self._with_raw_response


class PermissionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def add_permission(
        self,
        x_amz_target: XAmzTargetAmazonSimpleQueueServicePermissionsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AddPermissionErrorBody]:
        """Adds a permission to a queue for a specific principal. This allows sharing access to the queue. When you
        create a queue, you have full control access rights for the queue. Only you, the owner of the queue, can grant
        or deny permissions to the queue. For more information about these permissions, see Allow Developers to Write
        Messages to a Shared Queue in the Amazon SQS Developer Guide. AddPermission generates a policy for you. You can
        use SetQueueAttributes to upload your policy. For more information, see Using Custom Policies with the Amazon
        SQS Access Policy Language in the Amazon SQS Developer Guide. An Amazon SQS policy can have a maximum of seven
        actions per statement. To remove the ability to change queue permissions, you must deny permission to the
        AddPermission, RemovePermission, and SetQueueAttributes actions in your IAM policy. Amazon SQS AddPermission
        does not support adding a non-account principal. Cross-account permissions don't apply to this action. For more
        information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AddPermission"),
            headers=[
                param[XAmzTargetAmazonSimpleQueueServicePermissionsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=add_permission_error_mapper,
            request_options=request_options,
        )

    def remove_permission(
        self,
        x_amz_target: XAmzTarget1AmazonSimpleQueueServicePermissionsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RemovePermissionErrorBody]:
        """Revokes any permissions in the queue policy that matches the specified Label parameter. Only the owner of a
        queue can remove permissions from it. Cross-account permissions don't apply to this action. For more
        information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide. To
        remove the ability to change queue permissions, you must deny permission to the AddPermission, RemovePermission,
        and SetQueueAttributes actions in your IAM policy.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RemovePermission"),
            headers=[
                param[XAmzTarget1AmazonSimpleQueueServicePermissionsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=remove_permission_error_mapper,
            request_options=request_options,
        )


class AsyncPermissionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def add_permission(
        self,
        x_amz_target: XAmzTargetAmazonSimpleQueueServicePermissionsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AddPermissionErrorBody]:
        """Adds a permission to a queue for a specific principal. This allows sharing access to the queue. When you
        create a queue, you have full control access rights for the queue. Only you, the owner of the queue, can grant
        or deny permissions to the queue. For more information about these permissions, see Allow Developers to Write
        Messages to a Shared Queue in the Amazon SQS Developer Guide. AddPermission generates a policy for you. You can
        use SetQueueAttributes to upload your policy. For more information, see Using Custom Policies with the Amazon
        SQS Access Policy Language in the Amazon SQS Developer Guide. An Amazon SQS policy can have a maximum of seven
        actions per statement. To remove the ability to change queue permissions, you must deny permission to the
        AddPermission, RemovePermission, and SetQueueAttributes actions in your IAM policy. Amazon SQS AddPermission
        does not support adding a non-account principal. Cross-account permissions don't apply to this action. For more
        information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AddPermission"),
            headers=[
                param[XAmzTargetAmazonSimpleQueueServicePermissionsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=add_permission_error_mapper,
            request_options=request_options,
        )

    async def remove_permission(
        self,
        x_amz_target: XAmzTarget1AmazonSimpleQueueServicePermissionsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RemovePermissionErrorBody]:
        """Revokes any permissions in the queue policy that matches the specified Label parameter. Only the owner of a
        queue can remove permissions from it. Cross-account permissions don't apply to this action. For more
        information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide. To
        remove the ability to change queue permissions, you must deny permission to the AddPermission, RemovePermission,
        and SetQueueAttributes actions in your IAM policy.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RemovePermission"),
            headers=[
                param[XAmzTarget1AmazonSimpleQueueServicePermissionsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=remove_permission_error_mapper,
            request_options=request_options,
        )
