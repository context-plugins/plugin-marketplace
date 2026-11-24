from __future__ import annotations

from typing import Any
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
from ..errors.add_notification_channel_error import (
    AddNotificationChannelErrorBody,
    add_notification_channel_error_mapper,
)
from ..errors.list_notification_channels_error import (
    ListNotificationChannelsErrorBody,
    list_notification_channels_error_mapper,
)
from ..errors.remove_notification_channel_error import (
    RemoveNotificationChannelErrorBody,
    remove_notification_channel_error_mapper,
)
from ..models.add_notification_channel_response import AddNotificationChannelResponse
from ..models.channels_request import ChannelsRequest, ChannelsRequestDict
from ..models.channels_request1 import ChannelsRequest1, ChannelsRequest1Dict
from ..models.list_notification_channels_response import ListNotificationChannelsResponse
from ..server.server import Server


class Channels:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ChannelsWithRawResponse(client, server, auth)

    def add_notification_channel(
        self,
        *,
        body: ChannelsRequest | ChannelsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AddNotificationChannelResponse:
        """Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important
        DevOps Guru events, such as when an insight is generated. If you use an Amazon SNS topic in another account, you
        must attach a policy to it that grants DevOps Guru permission to send it notifications. DevOps Guru adds the
        required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports
        standard SNS topics. For more information, see Permissions for Amazon SNS topics. If you use an Amazon SNS topic
        that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add
        permissions to the CMK. For more information, see Permissions for Amazon Web Services KMS–encrypted Amazon SNS
        topics.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException InternalServerException ResourceNotFoundException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | AccessDeniedException | ResourceNotFoundException | ConflictException
                | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.add_notification_channel(body=body, request_options=request_options))

    def list_notification_channels(
        self,
        *,
        body: ChannelsRequest1 | ChannelsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListNotificationChannelsResponse:
        """Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to
        notify you when DevOps Guru generates an insight that contains information about how to improve your operations.
        The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(self._with_raw_response.list_notification_channels(body=body, request_options=request_options))

    def remove_notification_channel(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Removes a notification channel from DevOps Guru. A notification channel is used to notify you when DevOps
        Guru generates an insight that contains information about how to improve your operations.

        Args:
            id_: The ID of the notification channel to be removed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException InternalServerException ResourceNotFoundException
                ThrottlingException ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ConflictException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(self._with_raw_response.remove_notification_channel(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> ChannelsWithRawResponse:
        return self._with_raw_response


class AsyncChannels:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncChannelsWithRawResponse(client, server, auth)

    async def add_notification_channel(
        self,
        *,
        body: ChannelsRequest | ChannelsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AddNotificationChannelResponse:
        """Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important
        DevOps Guru events, such as when an insight is generated. If you use an Amazon SNS topic in another account, you
        must attach a policy to it that grants DevOps Guru permission to send it notifications. DevOps Guru adds the
        required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports
        standard SNS topics. For more information, see Permissions for Amazon SNS topics. If you use an Amazon SNS topic
        that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add
        permissions to the CMK. For more information, see Permissions for Amazon Web Services KMS–encrypted Amazon SNS
        topics.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException InternalServerException ResourceNotFoundException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | AccessDeniedException | ResourceNotFoundException | ConflictException
                | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.add_notification_channel(body=body, request_options=request_options)
        )

    async def list_notification_channels(
        self,
        *,
        body: ChannelsRequest1 | ChannelsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListNotificationChannelsResponse:
        """Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to
        notify you when DevOps Guru generates an insight that contains information about how to improve your operations.
        The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_notification_channels(body=body, request_options=request_options)
        )

    async def remove_notification_channel(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Removes a notification channel from DevOps Guru. A notification channel is used to notify you when DevOps
        Guru generates an insight that contains information about how to improve your operations.

        Args:
            id_: The ID of the notification channel to be removed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException InternalServerException ResourceNotFoundException
                ThrottlingException ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ConflictException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(await self._with_raw_response.remove_notification_channel(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncChannelsWithRawResponse:
        return self._with_raw_response


class ChannelsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def add_notification_channel(
        self,
        *,
        body: ChannelsRequest | ChannelsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AddNotificationChannelResponse, AddNotificationChannelErrorBody]:
        """Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important
        DevOps Guru events, such as when an insight is generated. If you use an Amazon SNS topic in another account, you
        must attach a policy to it that grants DevOps Guru permission to send it notifications. DevOps Guru adds the
        required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports
        standard SNS topics. For more information, see Permissions for Amazon SNS topics. If you use an Amazon SNS topic
        that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add
        permissions to the CMK. For more information, see Permissions for Amazon Web Services KMS–encrypted Amazon SNS
        topics.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/channels"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ChannelsRequest | ChannelsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[AddNotificationChannelResponse],
            error_mapper=add_notification_channel_error_mapper,
            request_options=request_options,
        )

    def list_notification_channels(
        self,
        *,
        body: ChannelsRequest1 | ChannelsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListNotificationChannelsResponse, ListNotificationChannelsErrorBody]:
        """Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to
        notify you when DevOps Guru generates an insight that contains information about how to improve your operations.
        The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/channels"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ChannelsRequest1 | ChannelsRequest1Dict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListNotificationChannelsResponse],
            error_mapper=list_notification_channels_error_mapper,
            request_options=request_options,
        )

    def remove_notification_channel(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RemoveNotificationChannelErrorBody]:
        """Removes a notification channel from DevOps Guru. A notification channel is used to notify you when DevOps
        Guru generates an insight that contains information about how to improve your operations.

        Args:
            id_: The ID of the notification channel to be removed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/channels/{Id}"),
            path_params=[param[str]("Id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=remove_notification_channel_error_mapper,
            request_options=request_options,
        )


class AsyncChannelsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def add_notification_channel(
        self,
        *,
        body: ChannelsRequest | ChannelsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AddNotificationChannelResponse, AddNotificationChannelErrorBody]:
        """Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important
        DevOps Guru events, such as when an insight is generated. If you use an Amazon SNS topic in another account, you
        must attach a policy to it that grants DevOps Guru permission to send it notifications. DevOps Guru adds the
        required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports
        standard SNS topics. For more information, see Permissions for Amazon SNS topics. If you use an Amazon SNS topic
        that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add
        permissions to the CMK. For more information, see Permissions for Amazon Web Services KMS–encrypted Amazon SNS
        topics.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/channels"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ChannelsRequest | ChannelsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[AddNotificationChannelResponse],
            error_mapper=add_notification_channel_error_mapper,
            request_options=request_options,
        )

    async def list_notification_channels(
        self,
        *,
        body: ChannelsRequest1 | ChannelsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListNotificationChannelsResponse, ListNotificationChannelsErrorBody]:
        """Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to
        notify you when DevOps Guru generates an insight that contains information about how to improve your operations.
        The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/channels"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ChannelsRequest1 | ChannelsRequest1Dict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListNotificationChannelsResponse],
            error_mapper=list_notification_channels_error_mapper,
            request_options=request_options,
        )

    async def remove_notification_channel(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RemoveNotificationChannelErrorBody]:
        """Removes a notification channel from DevOps Guru. A notification channel is used to notify you when DevOps
        Guru generates an insight that contains information about how to improve your operations.

        Args:
            id_: The ID of the notification channel to be removed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/channels/{Id}"),
            path_params=[param[str]("Id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=remove_notification_channel_error_mapper,
            request_options=request_options,
        )
