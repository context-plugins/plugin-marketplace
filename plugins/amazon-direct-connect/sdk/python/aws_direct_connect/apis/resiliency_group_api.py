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
from ..errors.create_resiliency_group_error import CreateResiliencyGroupErrorBody, create_resiliency_group_error_mapper
from ..errors.delete_resiliency_group_error import DeleteResiliencyGroupErrorBody, delete_resiliency_group_error_mapper
from ..errors.get_resiliency_group_error import GetResiliencyGroupErrorBody, get_resiliency_group_error_mapper
from ..errors.list_resiliency_groups_error import ListResiliencyGroupsErrorBody, list_resiliency_groups_error_mapper
from ..errors.update_resiliency_group_error import UpdateResiliencyGroupErrorBody, update_resiliency_group_error_mapper
from ..models.enums.x_amz_target1_aws_direct_connect_resiliency_group_api import (
    XAmzTarget1AwsDirectConnectResiliencyGroupApiOrStr,
)
from ..models.enums.x_amz_target2_aws_direct_connect_resiliency_group_api import (
    XAmzTarget2AwsDirectConnectResiliencyGroupApiOrStr,
)
from ..models.enums.x_amz_target3_aws_direct_connect_resiliency_group_api import (
    XAmzTarget3AwsDirectConnectResiliencyGroupApiOrStr,
)
from ..models.enums.x_amz_target4_aws_direct_connect_resiliency_group_api import (
    XAmzTarget4AwsDirectConnectResiliencyGroupApiOrStr,
)
from ..models.enums.x_amz_target_aws_direct_connect_resiliency_group_api import (
    XAmzTargetAwsDirectConnectResiliencyGroupApiOrStr,
)
from ..server.server import Server


class ResiliencyGroupApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ResiliencyGroupApiWithRawResponse(client, server, auth)

    def create_resiliency_group(
        self,
        x_amz_target: XAmzTargetAwsDirectConnectResiliencyGroupApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a resiliency group. A resiliency group lets you group Direct Connect connections together and manage
        them as a single unit to meet a target resiliency model.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException; DuplicateTagKeysException; LimitExceededException;
                TooManyTagsException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_resiliency_group(x_amz_target, request_options=request_options))

    def delete_resiliency_group(
        self,
        x_amz_target: XAmzTarget1AwsDirectConnectResiliencyGroupApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes the specified resiliency group. Deletion is asynchronous: the resiliency group transitions through
        the deleting state before it reaches the deleted state. The response returns the resiliency group so you can
        observe its current state without a subsequent GetResiliencyGroup call.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_resiliency_group(x_amz_target, request_options=request_options))

    def get_resiliency_group(
        self,
        x_amz_target: XAmzTarget2AwsDirectConnectResiliencyGroupApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Gets information about the specified resiliency group.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_resiliency_group(x_amz_target, request_options=request_options))

    def list_resiliency_groups(
        self,
        x_amz_target: XAmzTarget3AwsDirectConnectResiliencyGroupApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Lists the resiliency groups owned by your Amazon Web Services account in the current Amazon Web Services
        Region.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_resiliency_groups(x_amz_target, request_options=request_options))

    def update_resiliency_group(
        self,
        x_amz_target: XAmzTarget4AwsDirectConnectResiliencyGroupApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Updates the name of the specified resiliency group.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_resiliency_group(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> ResiliencyGroupApiWithRawResponse:
        return self._with_raw_response


class AsyncResiliencyGroupApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncResiliencyGroupApiWithRawResponse(client, server, auth)

    async def create_resiliency_group(
        self,
        x_amz_target: XAmzTargetAwsDirectConnectResiliencyGroupApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a resiliency group. A resiliency group lets you group Direct Connect connections together and manage
        them as a single unit to meet a target resiliency model.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException; DuplicateTagKeysException; LimitExceededException;
                TooManyTagsException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_resiliency_group(x_amz_target, request_options=request_options)
        )

    async def delete_resiliency_group(
        self,
        x_amz_target: XAmzTarget1AwsDirectConnectResiliencyGroupApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes the specified resiliency group. Deletion is asynchronous: the resiliency group transitions through
        the deleting state before it reaches the deleted state. The response returns the resiliency group so you can
        observe its current state without a subsequent GetResiliencyGroup call.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_resiliency_group(x_amz_target, request_options=request_options)
        )

    async def get_resiliency_group(
        self,
        x_amz_target: XAmzTarget2AwsDirectConnectResiliencyGroupApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Gets information about the specified resiliency group.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_resiliency_group(x_amz_target, request_options=request_options))

    async def list_resiliency_groups(
        self,
        x_amz_target: XAmzTarget3AwsDirectConnectResiliencyGroupApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Lists the resiliency groups owned by your Amazon Web Services account in the current Amazon Web Services
        Region.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_resiliency_groups(x_amz_target, request_options=request_options)
        )

    async def update_resiliency_group(
        self,
        x_amz_target: XAmzTarget4AwsDirectConnectResiliencyGroupApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Updates the name of the specified resiliency group.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_resiliency_group(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncResiliencyGroupApiWithRawResponse:
        return self._with_raw_response


class ResiliencyGroupApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_resiliency_group(
        self,
        x_amz_target: XAmzTargetAwsDirectConnectResiliencyGroupApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateResiliencyGroupErrorBody]:
        """Creates a resiliency group. A resiliency group lets you group Direct Connect connections together and manage
        them as a single unit to meet a target resiliency model.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateResiliencyGroup"),
            headers=[
                param[XAmzTargetAwsDirectConnectResiliencyGroupApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_resiliency_group_error_mapper,
            request_options=request_options,
        )

    def delete_resiliency_group(
        self,
        x_amz_target: XAmzTarget1AwsDirectConnectResiliencyGroupApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteResiliencyGroupErrorBody]:
        """Deletes the specified resiliency group. Deletion is asynchronous: the resiliency group transitions through
        the deleting state before it reaches the deleted state. The response returns the resiliency group so you can
        observe its current state without a subsequent GetResiliencyGroup call.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteResiliencyGroup"),
            headers=[
                param[XAmzTarget1AwsDirectConnectResiliencyGroupApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_resiliency_group_error_mapper,
            request_options=request_options,
        )

    def get_resiliency_group(
        self,
        x_amz_target: XAmzTarget2AwsDirectConnectResiliencyGroupApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetResiliencyGroupErrorBody]:
        """Gets information about the specified resiliency group.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetResiliencyGroup"),
            headers=[
                param[XAmzTarget2AwsDirectConnectResiliencyGroupApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_resiliency_group_error_mapper,
            request_options=request_options,
        )

    def list_resiliency_groups(
        self,
        x_amz_target: XAmzTarget3AwsDirectConnectResiliencyGroupApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListResiliencyGroupsErrorBody]:
        """Lists the resiliency groups owned by your Amazon Web Services account in the current Amazon Web Services
        Region.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListResiliencyGroups"),
            headers=[
                param[XAmzTarget3AwsDirectConnectResiliencyGroupApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_resiliency_groups_error_mapper,
            request_options=request_options,
        )

    def update_resiliency_group(
        self,
        x_amz_target: XAmzTarget4AwsDirectConnectResiliencyGroupApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateResiliencyGroupErrorBody]:
        """Updates the name of the specified resiliency group.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateResiliencyGroup"),
            headers=[
                param[XAmzTarget4AwsDirectConnectResiliencyGroupApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_resiliency_group_error_mapper,
            request_options=request_options,
        )


class AsyncResiliencyGroupApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_resiliency_group(
        self,
        x_amz_target: XAmzTargetAwsDirectConnectResiliencyGroupApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateResiliencyGroupErrorBody]:
        """Creates a resiliency group. A resiliency group lets you group Direct Connect connections together and manage
        them as a single unit to meet a target resiliency model.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateResiliencyGroup"),
            headers=[
                param[XAmzTargetAwsDirectConnectResiliencyGroupApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_resiliency_group_error_mapper,
            request_options=request_options,
        )

    async def delete_resiliency_group(
        self,
        x_amz_target: XAmzTarget1AwsDirectConnectResiliencyGroupApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteResiliencyGroupErrorBody]:
        """Deletes the specified resiliency group. Deletion is asynchronous: the resiliency group transitions through
        the deleting state before it reaches the deleted state. The response returns the resiliency group so you can
        observe its current state without a subsequent GetResiliencyGroup call.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteResiliencyGroup"),
            headers=[
                param[XAmzTarget1AwsDirectConnectResiliencyGroupApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_resiliency_group_error_mapper,
            request_options=request_options,
        )

    async def get_resiliency_group(
        self,
        x_amz_target: XAmzTarget2AwsDirectConnectResiliencyGroupApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetResiliencyGroupErrorBody]:
        """Gets information about the specified resiliency group.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetResiliencyGroup"),
            headers=[
                param[XAmzTarget2AwsDirectConnectResiliencyGroupApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_resiliency_group_error_mapper,
            request_options=request_options,
        )

    async def list_resiliency_groups(
        self,
        x_amz_target: XAmzTarget3AwsDirectConnectResiliencyGroupApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListResiliencyGroupsErrorBody]:
        """Lists the resiliency groups owned by your Amazon Web Services account in the current Amazon Web Services
        Region.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListResiliencyGroups"),
            headers=[
                param[XAmzTarget3AwsDirectConnectResiliencyGroupApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_resiliency_groups_error_mapper,
            request_options=request_options,
        )

    async def update_resiliency_group(
        self,
        x_amz_target: XAmzTarget4AwsDirectConnectResiliencyGroupApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateResiliencyGroupErrorBody]:
        """Updates the name of the specified resiliency group.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateResiliencyGroup"),
            headers=[
                param[XAmzTarget4AwsDirectConnectResiliencyGroupApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_resiliency_group_error_mapper,
            request_options=request_options,
        )
