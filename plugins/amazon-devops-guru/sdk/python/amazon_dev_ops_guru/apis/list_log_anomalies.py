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
from ..errors.list_anomalous_log_groups_error import (
    ListAnomalousLogGroupsErrorBody,
    list_anomalous_log_groups_error_mapper,
)
from ..models.list_anomalous_log_groups_response import ListAnomalousLogGroupsResponse
from ..models.list_log_anomalies_request import ListLogAnomaliesRequest, ListLogAnomaliesRequestDict
from ..server.server import Server


class ListLogAnomalies:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ListLogAnomaliesWithRawResponse(client, server, auth)

    def list_anomalous_log_groups(
        self,
        *,
        body: ListLogAnomaliesRequest | ListLogAnomaliesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListAnomalousLogGroupsResponse:
        """Returns the list of log groups that contain log anomalies.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException ThrottlingException
                ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.list_anomalous_log_groups(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> ListLogAnomaliesWithRawResponse:
        return self._with_raw_response


class AsyncListLogAnomalies:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncListLogAnomaliesWithRawResponse(client, server, auth)

    async def list_anomalous_log_groups(
        self,
        *,
        body: ListLogAnomaliesRequest | ListLogAnomaliesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListAnomalousLogGroupsResponse:
        """Returns the list of log groups that contain log anomalies.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException ThrottlingException
                ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_anomalous_log_groups(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncListLogAnomaliesWithRawResponse:
        return self._with_raw_response


class ListLogAnomaliesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_anomalous_log_groups(
        self,
        *,
        body: ListLogAnomaliesRequest | ListLogAnomaliesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListAnomalousLogGroupsResponse, ListAnomalousLogGroupsErrorBody]:
        """Returns the list of log groups that contain log anomalies.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/list-log-anomalies"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListLogAnomaliesRequest | ListLogAnomaliesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListAnomalousLogGroupsResponse],
            error_mapper=list_anomalous_log_groups_error_mapper,
            request_options=request_options,
        )


class AsyncListLogAnomaliesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_anomalous_log_groups(
        self,
        *,
        body: ListLogAnomaliesRequest | ListLogAnomaliesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListAnomalousLogGroupsResponse, ListAnomalousLogGroupsErrorBody]:
        """Returns the list of log groups that contain log anomalies.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/list-log-anomalies"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListLogAnomaliesRequest | ListLogAnomaliesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListAnomalousLogGroupsResponse],
            error_mapper=list_anomalous_log_groups_error_mapper,
            request_options=request_options,
        )
