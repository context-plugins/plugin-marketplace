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
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.bill_approve_deny_actions_error import (
    BillApproveDenyActionsErrorBody,
    bill_approve_deny_actions_error_mapper,
)
from ..errors.create_bill_approval_policy_error import (
    CreateBillApprovalPolicyErrorBody,
    create_bill_approval_policy_error_mapper,
)
from ..errors.delete_policy_error import DeletePolicyErrorBody, delete_policy_error_mapper
from ..errors.list_bill_approval_policies_error import (
    ListBillApprovalPoliciesErrorBody,
    list_bill_approval_policies_error_mapper,
)
from ..errors.list_bill_user_approvals_error import (
    ListBillUserApprovalsErrorBody,
    list_bill_user_approvals_error_mapper,
)
from ..errors.update_bill_approval_policy_error import (
    UpdateBillApprovalPolicyErrorBody,
    update_bill_approval_policy_error_mapper,
)
from ..models.bill_approval_policy_request_dto import BillApprovalPolicyRequestDto, BillApprovalPolicyRequestDtoDict
from ..models.bill_approval_policy_response_dto import BillApprovalPolicyResponseDto
from ..models.bill_approve_deny_action_request_dto import (
    BillApproveDenyActionRequestDto,
    BillApproveDenyActionRequestDtoDict,
)
from ..models.list_bill_user_approvals_response_dto import ListBillUserApprovalsResponseDto
from ..models.status_dto import StatusDto
from ..server.server import Server


class BillApprovals:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = BillApprovalsWithRawResponse(client, server)

    def bill_approve_deny_actions(
        self,
        body: list[BillApproveDenyActionRequestDto | BillApproveDenyActionRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StatusDto:
        """Approve or deny a bill. Approved bills can be paid. In the request, create an array of objects, where each
        object represents a single bill along with its approval or denial status.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Approve or deny a bill response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bill_approve_deny_actions(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_bill_approval_policy(
        self,
        body: BillApprovalPolicyRequestDto | BillApprovalPolicyRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BillApprovalPolicyResponseDto:
        """Create a new bill approval policy.

        In your request, set ``rules`` and ``approvers`` in the specified format. For example, to create a bill approval
        policy for all bills greater than or equal to ``$1000``, set ``rules`` for ``BILL_AMOUNT``.
        ```
        {
        "policyName": "Approval policy for bills >= $1000", "rules": [
        {
        "key": "BILL_AMOUNT", "op": "gte", "values": [ "1000"
        ]
        }
        ],
        "approvers": [ "{approver_user_id}"
        ]
        }
        ```

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a bill approval policy response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_bill_approval_policy(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def delete_policy(
        self,
        policy_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StatusDto:
        """Delete an existing bill approval policy. A deleted approval policy cannot be restored. The deleted policy is
        not available in the list of approval policies.

        Args:
            policy_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete a bill approval policy response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.delete_policy(
                policy_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def list_bill_approval_policies(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[BillApprovalPolicyResponseDto]:
        """Get a list of bill approval policy objects.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of bill approval policies response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_bill_approval_policies(
                session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def list_bill_user_approvals(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListBillUserApprovalsResponseDto:
        """Get a list of bills that are pending approval by a user. In the response, you get the list of bills that are
        pending approval for the currently signed-in user.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of bills pending approval response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_bill_user_approvals(
                session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def update_bill_approval_policy(
        self,
        policy_id: str,
        body: BillApprovalPolicyRequestDto | BillApprovalPolicyRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BillApprovalPolicyResponseDto:
        """Update an existing bill approval policy.

        Args:
            policy_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a bill approval policy response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_bill_approval_policy(
                policy_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> BillApprovalsWithRawResponse:
        return self._with_raw_response


class AsyncBillApprovals:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncBillApprovalsWithRawResponse(client, server)

    async def bill_approve_deny_actions(
        self,
        body: list[BillApproveDenyActionRequestDto | BillApproveDenyActionRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StatusDto:
        """Approve or deny a bill. Approved bills can be paid. In the request, create an array of objects, where each
        object represents a single bill along with its approval or denial status.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Approve or deny a bill response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bill_approve_deny_actions(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_bill_approval_policy(
        self,
        body: BillApprovalPolicyRequestDto | BillApprovalPolicyRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BillApprovalPolicyResponseDto:
        """Create a new bill approval policy.

        In your request, set ``rules`` and ``approvers`` in the specified format. For example, to create a bill approval
        policy for all bills greater than or equal to ``$1000``, set ``rules`` for ``BILL_AMOUNT``.
        ```
        {
        "policyName": "Approval policy for bills >= $1000", "rules": [
        {
        "key": "BILL_AMOUNT", "op": "gte", "values": [ "1000"
        ]
        }
        ],
        "approvers": [ "{approver_user_id}"
        ]
        }
        ```

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a bill approval policy response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_bill_approval_policy(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def delete_policy(
        self,
        policy_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StatusDto:
        """Delete an existing bill approval policy. A deleted approval policy cannot be restored. The deleted policy is
        not available in the list of approval policies.

        Args:
            policy_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete a bill approval policy response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_policy(
                policy_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def list_bill_approval_policies(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[BillApprovalPolicyResponseDto]:
        """Get a list of bill approval policy objects.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of bill approval policies response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_bill_approval_policies(
                session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def list_bill_user_approvals(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListBillUserApprovalsResponseDto:
        """Get a list of bills that are pending approval by a user. In the response, you get the list of bills that are
        pending approval for the currently signed-in user.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of bills pending approval response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_bill_user_approvals(
                session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def update_bill_approval_policy(
        self,
        policy_id: str,
        body: BillApprovalPolicyRequestDto | BillApprovalPolicyRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BillApprovalPolicyResponseDto:
        """Update an existing bill approval policy.

        Args:
            policy_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a bill approval policy response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_bill_approval_policy(
                policy_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncBillApprovalsWithRawResponse:
        return self._with_raw_response


class BillApprovalsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def bill_approve_deny_actions(
        self,
        body: list[BillApproveDenyActionRequestDto | BillApproveDenyActionRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StatusDto, BillApproveDenyActionsErrorBody]:
        """Approve or deny a bill. Approved bills can be paid. In the request, create an array of objects, where each
        object represents a single bill along with its approval or denial status.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/bill-approvals/actions"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[BillApproveDenyActionRequestDto | BillApproveDenyActionRequestDtoDict]](body),
            decoder=json_decoder[StatusDto],
            error_mapper=bill_approve_deny_actions_error_mapper,
            request_options=request_options,
        )

    def create_bill_approval_policy(
        self,
        body: BillApprovalPolicyRequestDto | BillApprovalPolicyRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BillApprovalPolicyResponseDto, CreateBillApprovalPolicyErrorBody]:
        """Create a new bill approval policy.

        In your request, set ``rules`` and ``approvers`` in the specified format. For example, to create a bill approval
        policy for all bills greater than or equal to ``$1000``, set ``rules`` for ``BILL_AMOUNT``.
        ```
        {
        "policyName": "Approval policy for bills >= $1000", "rules": [
        {
        "key": "BILL_AMOUNT", "op": "gte", "values": [ "1000"
        ]
        }
        ],
        "approvers": [ "{approver_user_id}"
        ]
        }
        ```

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/bill-approvals/policies"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[BillApprovalPolicyRequestDto | BillApprovalPolicyRequestDtoDict](body),
            decoder=json_decoder[BillApprovalPolicyResponseDto],
            error_mapper=create_bill_approval_policy_error_mapper,
            request_options=request_options,
        )

    def delete_policy(
        self,
        policy_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StatusDto, DeletePolicyErrorBody]:
        """Delete an existing bill approval policy. A deleted approval policy cannot be restored. The deleted policy is
        not available in the list of approval policies.

        Args:
            policy_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/bill-approvals/policies/{policyId}"),
            path_params=[param[str]("policyId", policy_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[StatusDto],
            error_mapper=delete_policy_error_mapper,
            request_options=request_options,
        )

    def list_bill_approval_policies(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[BillApprovalPolicyResponseDto], ListBillApprovalPoliciesErrorBody]:
        """Get a list of bill approval policy objects.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/bill-approvals/policies"),
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[list[BillApprovalPolicyResponseDto]],
            error_mapper=list_bill_approval_policies_error_mapper,
            request_options=request_options,
        )

    def list_bill_user_approvals(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBillUserApprovalsResponseDto, ListBillUserApprovalsErrorBody]:
        """Get a list of bills that are pending approval by a user. In the response, you get the list of bills that are
        pending approval for the currently signed-in user.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/bill-approvals/pending-user-approvals"),
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListBillUserApprovalsResponseDto],
            error_mapper=list_bill_user_approvals_error_mapper,
            request_options=request_options,
        )

    def update_bill_approval_policy(
        self,
        policy_id: str,
        body: BillApprovalPolicyRequestDto | BillApprovalPolicyRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BillApprovalPolicyResponseDto, UpdateBillApprovalPolicyErrorBody]:
        """Update an existing bill approval policy.

        Args:
            policy_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/bill-approvals/policies/{policyId}"),
            path_params=[param[str]("policyId", policy_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[BillApprovalPolicyRequestDto | BillApprovalPolicyRequestDtoDict](body),
            decoder=json_decoder[BillApprovalPolicyResponseDto],
            error_mapper=update_bill_approval_policy_error_mapper,
            request_options=request_options,
        )


class AsyncBillApprovalsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def bill_approve_deny_actions(
        self,
        body: list[BillApproveDenyActionRequestDto | BillApproveDenyActionRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StatusDto, BillApproveDenyActionsErrorBody]:
        """Approve or deny a bill. Approved bills can be paid. In the request, create an array of objects, where each
        object represents a single bill along with its approval or denial status.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/bill-approvals/actions"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[BillApproveDenyActionRequestDto | BillApproveDenyActionRequestDtoDict]](body),
            decoder=async_json_decoder[StatusDto],
            error_mapper=bill_approve_deny_actions_error_mapper,
            request_options=request_options,
        )

    async def create_bill_approval_policy(
        self,
        body: BillApprovalPolicyRequestDto | BillApprovalPolicyRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BillApprovalPolicyResponseDto, CreateBillApprovalPolicyErrorBody]:
        """Create a new bill approval policy.

        In your request, set ``rules`` and ``approvers`` in the specified format. For example, to create a bill approval
        policy for all bills greater than or equal to ``$1000``, set ``rules`` for ``BILL_AMOUNT``.
        ```
        {
        "policyName": "Approval policy for bills >= $1000", "rules": [
        {
        "key": "BILL_AMOUNT", "op": "gte", "values": [ "1000"
        ]
        }
        ],
        "approvers": [ "{approver_user_id}"
        ]
        }
        ```

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/bill-approvals/policies"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[BillApprovalPolicyRequestDto | BillApprovalPolicyRequestDtoDict](body),
            decoder=async_json_decoder[BillApprovalPolicyResponseDto],
            error_mapper=create_bill_approval_policy_error_mapper,
            request_options=request_options,
        )

    async def delete_policy(
        self,
        policy_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StatusDto, DeletePolicyErrorBody]:
        """Delete an existing bill approval policy. A deleted approval policy cannot be restored. The deleted policy is
        not available in the list of approval policies.

        Args:
            policy_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/bill-approvals/policies/{policyId}"),
            path_params=[param[str]("policyId", policy_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[StatusDto],
            error_mapper=delete_policy_error_mapper,
            request_options=request_options,
        )

    async def list_bill_approval_policies(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[BillApprovalPolicyResponseDto], ListBillApprovalPoliciesErrorBody]:
        """Get a list of bill approval policy objects.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/bill-approvals/policies"),
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[list[BillApprovalPolicyResponseDto]],
            error_mapper=list_bill_approval_policies_error_mapper,
            request_options=request_options,
        )

    async def list_bill_user_approvals(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBillUserApprovalsResponseDto, ListBillUserApprovalsErrorBody]:
        """Get a list of bills that are pending approval by a user. In the response, you get the list of bills that are
        pending approval for the currently signed-in user.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/bill-approvals/pending-user-approvals"),
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListBillUserApprovalsResponseDto],
            error_mapper=list_bill_user_approvals_error_mapper,
            request_options=request_options,
        )

    async def update_bill_approval_policy(
        self,
        policy_id: str,
        body: BillApprovalPolicyRequestDto | BillApprovalPolicyRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BillApprovalPolicyResponseDto, UpdateBillApprovalPolicyErrorBody]:
        """Update an existing bill approval policy.

        Args:
            policy_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/bill-approvals/policies/{policyId}"),
            path_params=[param[str]("policyId", policy_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[BillApprovalPolicyRequestDto | BillApprovalPolicyRequestDtoDict](body),
            decoder=async_json_decoder[BillApprovalPolicyResponseDto],
            error_mapper=update_bill_approval_policy_error_mapper,
            request_options=request_options,
        )
