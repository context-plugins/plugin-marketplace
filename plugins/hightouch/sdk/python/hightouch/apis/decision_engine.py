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
from ..errors.clone_message_error import CloneMessageErrorBody, clone_message_error_mapper
from ..errors.create_message_error import CreateMessageErrorBody, create_message_error_mapper
from ..errors.delete_message_error import DeleteMessageErrorBody, delete_message_error_mapper
from ..errors.get_flow_error import GetFlowErrorBody, get_flow_error_mapper
from ..errors.get_message_error import GetMessageErrorBody, get_message_error_mapper
from ..errors.list_flows_error import ListFlowsErrorBody, list_flows_error_mapper
from ..errors.list_messages_error import ListMessagesErrorBody, list_messages_error_mapper
from ..errors.run_flow_error import RunFlowErrorBody, run_flow_error_mapper
from ..errors.update_message_error import UpdateMessageErrorBody, update_message_error_mapper
from ..models.decision_engine_message_clone import DecisionEngineMessageClone, DecisionEngineMessageCloneDict
from ..models.decision_engine_message_create import DecisionEngineMessageCreate, DecisionEngineMessageCreateDict
from ..models.decision_engine_message_update import DecisionEngineMessageUpdate, DecisionEngineMessageUpdateDict
from ..models.enums.order_by import OrderBy, OrderByOrStr
from ..models.unions.decision_engine_flow_messages_clone_response import DecisionEngineFlowMessagesCloneResponse
from ..models.unions.decision_engine_flow_messages_response1 import DecisionEngineFlowMessagesResponse1
from ..models.unions.decision_engine_flow_messages_response11 import DecisionEngineFlowMessagesResponse11
from ..models.unions.decision_engine_flow_messages_response13 import DecisionEngineFlowMessagesResponse13
from ..models.unions.decision_engine_flow_response import DecisionEngineFlowResponse
from ..models.unions.decision_engine_flow_run_response import DecisionEngineFlowRunResponse
from ..models.unions.decision_engine_flows_response1 import DecisionEngineFlowsResponse1
from ..server.server import Server


class DecisionEngine:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DecisionEngineWithRawResponse(client, server, auth)

    def clone_message(
        self,
        flow_id: str,
        message_id: str,
        *,
        body: DecisionEngineMessageClone | DecisionEngineMessageCloneDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DecisionEngineFlowMessagesCloneResponse:
        """Clone a message within a flow. The copy keeps the source message's config, tags, guardrails, and variables,
        and is created disabled.

        Args:
            flow_id: The UUID of the flow
            message_id: The UUID of the message to clone
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found Validation Failed Something went wrong ``error`` is
                ``DecisionEngineErrorResponse | ValidateErrorJson | DecisionEngineFlowMessagesCloneResponse1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.clone_message(flow_id, message_id, body=body, request_options=request_options)
        )

    def create_message(
        self,
        flow_id: str,
        body: DecisionEngineMessageCreate | DecisionEngineMessageCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DecisionEngineFlowMessagesResponse11:
        """Create a message in a flow

        Args:
            flow_id: The UUID of the flow
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found Validation Failed Something went wrong ``error`` is
                ``ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(self._with_raw_response.create_message(flow_id, body, request_options=request_options))

    def delete_message(
        self, flow_id: str, message_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DecisionEngineFlowMessagesResponse13:
        """Delete a message. The message is soft-deleted and disabled in the flow, so it is no longer returned by the
        API and is ineligible for future sends.

        Args:
            flow_id: The UUID of the flow
            message_id: The UUID of the message
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found Something went wrong ``error`` is ``DecisionEngineErrorResponse |
                DecisionEngineFlowMessagesResponse14 | RawError``."""
        return unwrap(self._with_raw_response.delete_message(flow_id, message_id, request_options=request_options))

    def get_flow(
        self, flow_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DecisionEngineFlowResponse:
        """Retrieve a decision engine flow by ID

        Args:
            flow_id: The UUID of the flow
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_flow(flow_id, request_options=request_options))

    def get_message(
        self, flow_id: str, message_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DecisionEngineFlowMessagesResponse11:
        """Get a single message by flow and message ID

        Args:
            flow_id: The UUID of the flow
            message_id: The UUID of the message
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_message(flow_id, message_id, request_options=request_options))

    def list_flows(
        self,
        *,
        name: str | None = None,
        limit: float | None = 100.0,
        offset: float | None = 0.0,
        order_by: OrderByOrStr | None = OrderBy.ID,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DecisionEngineFlowsResponse1:
        """List decision engine flows in the workspace

        Args:
            name: optional filter by flow name
            limit: max results (default 100)
            offset: pagination offset
            order_by: sort field
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_flows(
                name=name, limit=limit, offset=offset, order_by=order_by, request_options=request_options
            ),
        )

    def list_messages(
        self,
        flow_id: str,
        *,
        limit: float | None = 100.0,
        offset: float | None = 0.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DecisionEngineFlowMessagesResponse1:
        """List messages for a flow

        Args:
            flow_id: The UUID of the flow
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_messages(flow_id, limit=limit, offset=offset, request_options=request_options)
        )

    def run_flow(
        self, flow_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DecisionEngineFlowRunResponse:
        """Trigger a decision engine run for a specific flow

        Args:
            flow_id: The UUID of the flow
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found Something went wrong ``error`` is ``InternalServerErrorOrStr |
                RawError``."""
        return unwrap(self._with_raw_response.run_flow(flow_id, request_options=request_options))

    def update_message(
        self,
        flow_id: str,
        message_id: str,
        body: DecisionEngineMessageUpdate | DecisionEngineMessageUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DecisionEngineFlowMessagesResponse11:
        """Update a message

        Args:
            flow_id: The UUID of the flow
            message_id: The UUID of the message
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found Validation Failed Something went wrong ``error`` is
                ``ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(
            self._with_raw_response.update_message(flow_id, message_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> DecisionEngineWithRawResponse:
        return self._with_raw_response


class AsyncDecisionEngine:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDecisionEngineWithRawResponse(client, server, auth)

    async def clone_message(
        self,
        flow_id: str,
        message_id: str,
        *,
        body: DecisionEngineMessageClone | DecisionEngineMessageCloneDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DecisionEngineFlowMessagesCloneResponse:
        """Clone a message within a flow. The copy keeps the source message's config, tags, guardrails, and variables,
        and is created disabled.

        Args:
            flow_id: The UUID of the flow
            message_id: The UUID of the message to clone
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found Validation Failed Something went wrong ``error`` is
                ``DecisionEngineErrorResponse | ValidateErrorJson | DecisionEngineFlowMessagesCloneResponse1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.clone_message(flow_id, message_id, body=body, request_options=request_options)
        )

    async def create_message(
        self,
        flow_id: str,
        body: DecisionEngineMessageCreate | DecisionEngineMessageCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DecisionEngineFlowMessagesResponse11:
        """Create a message in a flow

        Args:
            flow_id: The UUID of the flow
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found Validation Failed Something went wrong ``error`` is
                ``ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(await self._with_raw_response.create_message(flow_id, body, request_options=request_options))

    async def delete_message(
        self, flow_id: str, message_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DecisionEngineFlowMessagesResponse13:
        """Delete a message. The message is soft-deleted and disabled in the flow, so it is no longer returned by the
        API and is ineligible for future sends.

        Args:
            flow_id: The UUID of the flow
            message_id: The UUID of the message
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found Something went wrong ``error`` is ``DecisionEngineErrorResponse |
                DecisionEngineFlowMessagesResponse14 | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_message(flow_id, message_id, request_options=request_options)
        )

    async def get_flow(
        self, flow_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DecisionEngineFlowResponse:
        """Retrieve a decision engine flow by ID

        Args:
            flow_id: The UUID of the flow
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_flow(flow_id, request_options=request_options))

    async def get_message(
        self, flow_id: str, message_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DecisionEngineFlowMessagesResponse11:
        """Get a single message by flow and message ID

        Args:
            flow_id: The UUID of the flow
            message_id: The UUID of the message
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_message(flow_id, message_id, request_options=request_options))

    async def list_flows(
        self,
        *,
        name: str | None = None,
        limit: float | None = 100.0,
        offset: float | None = 0.0,
        order_by: OrderByOrStr | None = OrderBy.ID,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DecisionEngineFlowsResponse1:
        """List decision engine flows in the workspace

        Args:
            name: optional filter by flow name
            limit: max results (default 100)
            offset: pagination offset
            order_by: sort field
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_flows(
                name=name, limit=limit, offset=offset, order_by=order_by, request_options=request_options
            ),
        )

    async def list_messages(
        self,
        flow_id: str,
        *,
        limit: float | None = 100.0,
        offset: float | None = 0.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DecisionEngineFlowMessagesResponse1:
        """List messages for a flow

        Args:
            flow_id: The UUID of the flow
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_messages(
                flow_id, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def run_flow(
        self, flow_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DecisionEngineFlowRunResponse:
        """Trigger a decision engine run for a specific flow

        Args:
            flow_id: The UUID of the flow
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found Something went wrong ``error`` is ``InternalServerErrorOrStr |
                RawError``."""
        return unwrap(await self._with_raw_response.run_flow(flow_id, request_options=request_options))

    async def update_message(
        self,
        flow_id: str,
        message_id: str,
        body: DecisionEngineMessageUpdate | DecisionEngineMessageUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DecisionEngineFlowMessagesResponse11:
        """Update a message

        Args:
            flow_id: The UUID of the flow
            message_id: The UUID of the message
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found Validation Failed Something went wrong ``error`` is
                ``ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(
            await self._with_raw_response.update_message(flow_id, message_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncDecisionEngineWithRawResponse:
        return self._with_raw_response


class DecisionEngineWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def clone_message(
        self,
        flow_id: str,
        message_id: str,
        *,
        body: DecisionEngineMessageClone | DecisionEngineMessageCloneDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DecisionEngineFlowMessagesCloneResponse, CloneMessageErrorBody]:
        """Clone a message within a flow. The copy keeps the source message's config, tags, guardrails, and variables,
        and is created disabled.

        Args:
            flow_id: The UUID of the flow
            message_id: The UUID of the message to clone
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/decision-engine/flow/{flowId}/messages/{messageId}/clone"),
            path_params=[param[str]("flowId", flow_id), param[str]("messageId", message_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DecisionEngineMessageClone | DecisionEngineMessageCloneDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DecisionEngineFlowMessagesCloneResponse],
            error_mapper=clone_message_error_mapper,
            request_options=request_options,
        )

    def create_message(
        self,
        flow_id: str,
        body: DecisionEngineMessageCreate | DecisionEngineMessageCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DecisionEngineFlowMessagesResponse11, CreateMessageErrorBody]:
        """Create a message in a flow

        Args:
            flow_id: The UUID of the flow
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/decision-engine/flow/{flowId}/messages"),
            path_params=[param[str]("flowId", flow_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DecisionEngineMessageCreate | DecisionEngineMessageCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DecisionEngineFlowMessagesResponse11],
            error_mapper=create_message_error_mapper,
            request_options=request_options,
        )

    def delete_message(
        self, flow_id: str, message_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DecisionEngineFlowMessagesResponse13, DeleteMessageErrorBody]:
        """Delete a message. The message is soft-deleted and disabled in the flow, so it is no longer returned by the
        API and is ineligible for future sends.

        Args:
            flow_id: The UUID of the flow
            message_id: The UUID of the message
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/decision-engine/flow/{flowId}/messages/{messageId}"),
            path_params=[param[str]("flowId", flow_id), param[str]("messageId", message_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DecisionEngineFlowMessagesResponse13],
            error_mapper=delete_message_error_mapper,
            request_options=request_options,
        )

    def get_flow(
        self, flow_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DecisionEngineFlowResponse, GetFlowErrorBody]:
        """Retrieve a decision engine flow by ID

        Args:
            flow_id: The UUID of the flow
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/decision-engine/flow/{flowId}"),
            path_params=[param[str]("flowId", flow_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DecisionEngineFlowResponse],
            error_mapper=get_flow_error_mapper,
            request_options=request_options,
        )

    def get_message(
        self, flow_id: str, message_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DecisionEngineFlowMessagesResponse11, GetMessageErrorBody]:
        """Get a single message by flow and message ID

        Args:
            flow_id: The UUID of the flow
            message_id: The UUID of the message
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/decision-engine/flow/{flowId}/messages/{messageId}"),
            path_params=[param[str]("flowId", flow_id), param[str]("messageId", message_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DecisionEngineFlowMessagesResponse11],
            error_mapper=get_message_error_mapper,
            request_options=request_options,
        )

    def list_flows(
        self,
        *,
        name: str | None = None,
        limit: float | None = 100.0,
        offset: float | None = 0.0,
        order_by: OrderByOrStr | None = OrderBy.ID,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DecisionEngineFlowsResponse1, ListFlowsErrorBody]:
        """List decision engine flows in the workspace

        Args:
            name: optional filter by flow name
            limit: max results (default 100)
            offset: pagination offset
            order_by: sort field
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/decision-engine/flows"),
            query_params=[
                param[str | None]("name", name),
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[OrderByOrStr | None]("orderBy", order_by),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DecisionEngineFlowsResponse1],
            error_mapper=list_flows_error_mapper,
            request_options=request_options,
        )

    def list_messages(
        self,
        flow_id: str,
        *,
        limit: float | None = 100.0,
        offset: float | None = 0.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DecisionEngineFlowMessagesResponse1, ListMessagesErrorBody]:
        """List messages for a flow

        Args:
            flow_id: The UUID of the flow
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/decision-engine/flow/{flowId}/messages"),
            path_params=[param[str]("flowId", flow_id)],
            query_params=[param[float | None]("limit", limit), param[float | None]("offset", offset)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DecisionEngineFlowMessagesResponse1],
            error_mapper=list_messages_error_mapper,
            request_options=request_options,
        )

    def run_flow(
        self, flow_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DecisionEngineFlowRunResponse, RunFlowErrorBody]:
        """Trigger a decision engine run for a specific flow

        Args:
            flow_id: The UUID of the flow
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/decision-engine/flow/{flowId}/run"),
            path_params=[param[str]("flowId", flow_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DecisionEngineFlowRunResponse],
            error_mapper=run_flow_error_mapper,
            request_options=request_options,
        )

    def update_message(
        self,
        flow_id: str,
        message_id: str,
        body: DecisionEngineMessageUpdate | DecisionEngineMessageUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DecisionEngineFlowMessagesResponse11, UpdateMessageErrorBody]:
        """Update a message

        Args:
            flow_id: The UUID of the flow
            message_id: The UUID of the message
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/decision-engine/flow/{flowId}/messages/{messageId}"),
            path_params=[param[str]("flowId", flow_id), param[str]("messageId", message_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DecisionEngineMessageUpdate | DecisionEngineMessageUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DecisionEngineFlowMessagesResponse11],
            error_mapper=update_message_error_mapper,
            request_options=request_options,
        )


class AsyncDecisionEngineWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def clone_message(
        self,
        flow_id: str,
        message_id: str,
        *,
        body: DecisionEngineMessageClone | DecisionEngineMessageCloneDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DecisionEngineFlowMessagesCloneResponse, CloneMessageErrorBody]:
        """Clone a message within a flow. The copy keeps the source message's config, tags, guardrails, and variables,
        and is created disabled.

        Args:
            flow_id: The UUID of the flow
            message_id: The UUID of the message to clone
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/decision-engine/flow/{flowId}/messages/{messageId}/clone"),
            path_params=[param[str]("flowId", flow_id), param[str]("messageId", message_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DecisionEngineMessageClone | DecisionEngineMessageCloneDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DecisionEngineFlowMessagesCloneResponse],
            error_mapper=clone_message_error_mapper,
            request_options=request_options,
        )

    async def create_message(
        self,
        flow_id: str,
        body: DecisionEngineMessageCreate | DecisionEngineMessageCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DecisionEngineFlowMessagesResponse11, CreateMessageErrorBody]:
        """Create a message in a flow

        Args:
            flow_id: The UUID of the flow
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/decision-engine/flow/{flowId}/messages"),
            path_params=[param[str]("flowId", flow_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DecisionEngineMessageCreate | DecisionEngineMessageCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DecisionEngineFlowMessagesResponse11],
            error_mapper=create_message_error_mapper,
            request_options=request_options,
        )

    async def delete_message(
        self, flow_id: str, message_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DecisionEngineFlowMessagesResponse13, DeleteMessageErrorBody]:
        """Delete a message. The message is soft-deleted and disabled in the flow, so it is no longer returned by the
        API and is ineligible for future sends.

        Args:
            flow_id: The UUID of the flow
            message_id: The UUID of the message
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/decision-engine/flow/{flowId}/messages/{messageId}"),
            path_params=[param[str]("flowId", flow_id), param[str]("messageId", message_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DecisionEngineFlowMessagesResponse13],
            error_mapper=delete_message_error_mapper,
            request_options=request_options,
        )

    async def get_flow(
        self, flow_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DecisionEngineFlowResponse, GetFlowErrorBody]:
        """Retrieve a decision engine flow by ID

        Args:
            flow_id: The UUID of the flow
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/decision-engine/flow/{flowId}"),
            path_params=[param[str]("flowId", flow_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DecisionEngineFlowResponse],
            error_mapper=get_flow_error_mapper,
            request_options=request_options,
        )

    async def get_message(
        self, flow_id: str, message_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DecisionEngineFlowMessagesResponse11, GetMessageErrorBody]:
        """Get a single message by flow and message ID

        Args:
            flow_id: The UUID of the flow
            message_id: The UUID of the message
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/decision-engine/flow/{flowId}/messages/{messageId}"),
            path_params=[param[str]("flowId", flow_id), param[str]("messageId", message_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DecisionEngineFlowMessagesResponse11],
            error_mapper=get_message_error_mapper,
            request_options=request_options,
        )

    async def list_flows(
        self,
        *,
        name: str | None = None,
        limit: float | None = 100.0,
        offset: float | None = 0.0,
        order_by: OrderByOrStr | None = OrderBy.ID,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DecisionEngineFlowsResponse1, ListFlowsErrorBody]:
        """List decision engine flows in the workspace

        Args:
            name: optional filter by flow name
            limit: max results (default 100)
            offset: pagination offset
            order_by: sort field
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/decision-engine/flows"),
            query_params=[
                param[str | None]("name", name),
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[OrderByOrStr | None]("orderBy", order_by),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DecisionEngineFlowsResponse1],
            error_mapper=list_flows_error_mapper,
            request_options=request_options,
        )

    async def list_messages(
        self,
        flow_id: str,
        *,
        limit: float | None = 100.0,
        offset: float | None = 0.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DecisionEngineFlowMessagesResponse1, ListMessagesErrorBody]:
        """List messages for a flow

        Args:
            flow_id: The UUID of the flow
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/decision-engine/flow/{flowId}/messages"),
            path_params=[param[str]("flowId", flow_id)],
            query_params=[param[float | None]("limit", limit), param[float | None]("offset", offset)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DecisionEngineFlowMessagesResponse1],
            error_mapper=list_messages_error_mapper,
            request_options=request_options,
        )

    async def run_flow(
        self, flow_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DecisionEngineFlowRunResponse, RunFlowErrorBody]:
        """Trigger a decision engine run for a specific flow

        Args:
            flow_id: The UUID of the flow
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/decision-engine/flow/{flowId}/run"),
            path_params=[param[str]("flowId", flow_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DecisionEngineFlowRunResponse],
            error_mapper=run_flow_error_mapper,
            request_options=request_options,
        )

    async def update_message(
        self,
        flow_id: str,
        message_id: str,
        body: DecisionEngineMessageUpdate | DecisionEngineMessageUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DecisionEngineFlowMessagesResponse11, UpdateMessageErrorBody]:
        """Update a message

        Args:
            flow_id: The UUID of the flow
            message_id: The UUID of the message
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/decision-engine/flow/{flowId}/messages/{messageId}"),
            path_params=[param[str]("flowId", flow_id), param[str]("messageId", message_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DecisionEngineMessageUpdate | DecisionEngineMessageUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DecisionEngineFlowMessagesResponse11],
            error_mapper=update_message_error_mapper,
            request_options=request_options,
        )
