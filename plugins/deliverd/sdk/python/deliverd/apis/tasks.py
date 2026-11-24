from __future__ import annotations

from typing import Any
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
from ..errors.get_api_v1_tasks_by_id_error import GetApiV1TasksByIdErrorBody, get_api_v1_tasks_by_id_error_mapper
from ..errors.get_api_v1_tasks_by_id_governance_error import (
    GetApiV1TasksByIdGovernanceErrorBody,
    get_api_v1_tasks_by_id_governance_error_mapper,
)
from ..errors.get_api_v1_tasks_by_id_governance_gate_error import (
    GetApiV1TasksByIdGovernanceGateErrorBody,
    get_api_v1_tasks_by_id_governance_gate_error_mapper,
)
from ..errors.patch_api_v1_tasks_by_id_error import PatchApiV1TasksByIdErrorBody, patch_api_v1_tasks_by_id_error_mapper
from ..errors.patch_api_v1_tasks_by_id_governance_error import (
    PatchApiV1TasksByIdGovernanceErrorBody,
    patch_api_v1_tasks_by_id_governance_error_mapper,
)
from ..errors.post_api_v1_tasks_by_id_apply_error import (
    PostApiV1TasksByIdApplyErrorBody,
    post_api_v1_tasks_by_id_apply_error_mapper,
)
from ..errors.post_api_v1_tasks_by_id_cancel_error import (
    PostApiV1TasksByIdCancelErrorBody,
    post_api_v1_tasks_by_id_cancel_error_mapper,
)
from ..errors.post_api_v1_tasks_by_id_complete_error import (
    PostApiV1TasksByIdCompleteErrorBody,
    post_api_v1_tasks_by_id_complete_error_mapper,
)
from ..errors.post_api_v1_tasks_by_id_findings_by_finding_id_approval_error import (
    PostApiV1TasksByIdFindingsByFindingIdApprovalErrorBody,
    post_api_v1_tasks_by_id_findings_by_finding_id_approval_error_mapper,
)
from ..errors.post_api_v1_tasks_by_id_findings_by_finding_id_knowledge_error import (
    PostApiV1TasksByIdFindingsByFindingIdKnowledgeErrorBody,
    post_api_v1_tasks_by_id_findings_by_finding_id_knowledge_error_mapper,
)
from ..errors.post_api_v1_tasks_by_id_governance_controls_by_key_approval_error import (
    PostApiV1TasksByIdGovernanceControlsByKeyApprovalErrorBody,
    post_api_v1_tasks_by_id_governance_controls_by_key_approval_error_mapper,
)
from ..errors.post_api_v1_tasks_by_id_governance_error import (
    PostApiV1TasksByIdGovernanceErrorBody,
    post_api_v1_tasks_by_id_governance_error_mapper,
)
from ..errors.post_api_v1_tasks_by_id_governance_evidence_error import (
    PostApiV1TasksByIdGovernanceEvidenceErrorBody,
    post_api_v1_tasks_by_id_governance_evidence_error_mapper,
)
from ..errors.post_api_v1_tasks_by_id_governance_reassessments_error import (
    PostApiV1TasksByIdGovernanceReassessmentsErrorBody,
    post_api_v1_tasks_by_id_governance_reassessments_error_mapper,
)
from ..errors.post_api_v1_tasks_by_id_reopen_error import (
    PostApiV1TasksByIdReopenErrorBody,
    post_api_v1_tasks_by_id_reopen_error_mapper,
)
from ..errors.post_api_v1_tasks_by_id_side_tasks_error import (
    PostApiV1TasksByIdSideTasksErrorBody,
    post_api_v1_tasks_by_id_side_tasks_error_mapper,
)
from ..models.api_v1_tasks_apply_request import ApiV1TasksApplyRequest, ApiV1TasksApplyRequestDict
from ..models.api_v1_tasks_cancel_request import ApiV1TasksCancelRequest, ApiV1TasksCancelRequestDict
from ..models.api_v1_tasks_cancel_response import ApiV1TasksCancelResponse
from ..models.api_v1_tasks_complete_request import ApiV1TasksCompleteRequest, ApiV1TasksCompleteRequestDict
from ..models.api_v1_tasks_complete_response import ApiV1TasksCompleteResponse
from ..models.api_v1_tasks_findings_approval_request import (
    ApiV1TasksFindingsApprovalRequest,
    ApiV1TasksFindingsApprovalRequestDict,
)
from ..models.api_v1_tasks_findings_knowledge_request import (
    ApiV1TasksFindingsKnowledgeRequest,
    ApiV1TasksFindingsKnowledgeRequestDict,
)
from ..models.api_v1_tasks_findings_request import ApiV1TasksFindingsRequest, ApiV1TasksFindingsRequestDict
from ..models.api_v1_tasks_governance_controls_approval_request import (
    ApiV1TasksGovernanceControlsApprovalRequest,
    ApiV1TasksGovernanceControlsApprovalRequestDict,
)
from ..models.api_v1_tasks_governance_evidence_request import (
    ApiV1TasksGovernanceEvidenceRequest,
    ApiV1TasksGovernanceEvidenceRequestDict,
)
from ..models.api_v1_tasks_governance_gate_response import ApiV1TasksGovernanceGateResponse
from ..models.api_v1_tasks_governance_reassessments_request import (
    ApiV1TasksGovernanceReassessmentsRequest,
    ApiV1TasksGovernanceReassessmentsRequestDict,
)
from ..models.api_v1_tasks_governance_request import ApiV1TasksGovernanceRequest, ApiV1TasksGovernanceRequestDict
from ..models.api_v1_tasks_governance_request1 import ApiV1TasksGovernanceRequest1, ApiV1TasksGovernanceRequest1Dict
from ..models.api_v1_tasks_graph_response import ApiV1TasksGraphResponse
from ..models.api_v1_tasks_links_request import ApiV1TasksLinksRequest, ApiV1TasksLinksRequestDict
from ..models.api_v1_tasks_reopen_response import ApiV1TasksReopenResponse
from ..models.api_v1_tasks_request import ApiV1TasksRequest, ApiV1TasksRequestDict
from ..models.api_v1_tasks_request1 import ApiV1TasksRequest1, ApiV1TasksRequest1Dict
from ..models.api_v1_tasks_response import ApiV1TasksResponse
from ..models.api_v1_tasks_response2 import ApiV1TasksResponse2
from ..models.api_v1_tasks_side_tasks_request import ApiV1TasksSideTasksRequest, ApiV1TasksSideTasksRequestDict
from ..models.api_v1_tasks_side_tasks_response import ApiV1TasksSideTasksResponse
from ..models.enums.action_deliverd_dev_governance_api import ActionDeliverdDevGovernanceApiOrStr
from ..models.enums.status2_deliverd_dev_tasks_api import Status2DeliverdDevTasksApiOrStr
from ..server.server import Server


class Tasks:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TasksWithRawResponse(client, server, auth)

    def get_api_v1_tasks(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: Status2DeliverdDevTasksApiOrStr | None = None,
        external_id: str | None = None,
        q: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1TasksResponse2:
        """Most recently active first. Side tasks are reached through the objective they belong to.

        Args:
            limit: Value sent with the request.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            status: Value sent with the request.
            external_id: Value sent with the request.
            q: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of objectives, each with side-task counts

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_tasks(
                limit=limit, cursor=cursor, status=status, external_id=external_id, q=q, request_options=request_options
            ),
        )

    def get_api_v1_tasks_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1TasksResponse:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The task

        Raises:
            ApiError: Not found, or not visible to you ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_tasks_by_id(id_, request_options=request_options))

    def get_api_v1_tasks_by_id_context(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """The objective, where the task stands, confirmed and suggested decisions, open questions, constraints,
        side-task results, the next action, the reports published for the task (``reports``: up to ten live ones, newest
        first, each ``{ id, title, url, version, publishedAt }``), and a paragraph to re-anchor on.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The context

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_tasks_by_id_context(id_, request_options=request_options))

    def get_api_v1_tasks_by_id_context_given(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """Every time knowledge or a playbook was handed to the task or the tasks under it, newest first, with who
        confirmed each entry.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``{ taskId, given }``

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_tasks_by_id_context_given(id_, request_options=request_options)
        )

    def get_api_v1_tasks_by_id_governance(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """The profile, AI system, every control with its state and how it is met, the evidence, readiness and the gate
        answer. A side task's id answers for its objective.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The governance

        Raises:
            ApiError: No such task, or not governed ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_tasks_by_id_governance(id_, request_options=request_options))

    def get_api_v1_tasks_by_id_governance_gate(
        self,
        id_: UUID,
        *,
        action: ActionDeliverdDevGovernanceApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1TasksGovernanceGateResponse:
        """``allowed``, ``reason``, ``missingControls`` and ``blockers`` — an open reassessment, an overdue review or a
        high or critical incident, which only a person clears. With ``?action=`` (Enterprise) it also asks agent
        authority: ``authority.mode`` is allowed, approval or denied. Every check is recorded.

        Args:
            id_: Value sent with the request.
            action: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The gate's answer

        Raises:
            ApiError: With ``?action=``, the plan does not include agent authority (feature_unavailable). Without it the
                gate is a read, open on every plan. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_tasks_by_id_governance_gate(
                id_, action=action, request_options=request_options
            ),
        )

    def get_api_v1_tasks_by_id_governance_pack(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """Profile, AI system, controls, evidence, task graph, decisions, approvals and the audit timeline, with a
        sha256 digest. ``?format=html`` to read and print. It assists audit; it does not certify compliance with any
        law. Every export is audited.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The pack

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_tasks_by_id_governance_pack(id_, request_options=request_options)
        )

    def get_api_v1_tasks_by_id_graph(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1TasksGraphResponse:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Metadata only

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_tasks_by_id_graph(id_, request_options=request_options))

    def patch_api_v1_tasks_by_id(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksRequest1 | ApiV1TasksRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1TasksResponse:
        """State patches merge: fields left out stay. Changing the objective itself is refused to an agent; only a
        person changes what the work is for.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The task

        Raises:
            ApiError: An agent tried to change the objective Finished, or changed since expectedVersion ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.patch_api_v1_tasks_by_id(id_, body=body, request_options=request_options))

    def patch_api_v1_tasks_by_id_governance(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksGovernanceRequest1 | ApiV1TasksGovernanceRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Controls are recomputed. An agent may raise risk or add facts; only a person lowers risk, weakens oversight
        or clears a fact (403 not_permitted).

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The governance

        Raises:
            ApiError: The plan does not include Compliance Mode (feature_unavailable). Reads are not refused. An agent
                weakening the profile version_conflict ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.patch_api_v1_tasks_by_id_governance(id_, body=body, request_options=request_options)
        )

    def post_api_v1_tasks(
        self,
        *,
        body: ApiV1TasksRequest | ApiV1TasksRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1TasksResponse:
        """What the work is ultimately for, kept apart from the conversation and returned at the top of every context.
        With externalId, an open objective the caller already started under it is returned instead (resumed: true,
        status 200).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An open objective already started under this externalId

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_tasks(body=body, request_options=request_options))

    def post_api_v1_tasks_by_id_apply(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksApplyRequest | ApiV1TasksApplyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Applied carries decisions up as suggestions (confirmed only when a person applies in Deliverd), adds a
        summary, merges open questions and takes the next action. Answers with the parent's context and a message that
        returns to the objective.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The side task, the parent and its context

        Raises:
            ApiError: Not completed yet, or already applied ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_tasks_by_id_apply(id_, body=body, request_options=request_options)
        )

    def post_api_v1_tasks_by_id_cancel(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksCancelRequest | ApiV1TasksCancelRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1TasksCancelResponse:
        """Cancelling an objective cancels the side tasks still open under it.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The task, cancelled

        Raises:
            ApiError: Already finished ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_tasks_by_id_cancel(id_, body=body, request_options=request_options)
        )

    def post_api_v1_tasks_by_id_complete(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksCompleteRequest | ApiV1TasksCompleteRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1TasksCompleteResponse:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The task, complete

        Raises:
            ApiError: Already finished ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_tasks_by_id_complete(id_, body=body, request_options=request_options)
        )

    def post_api_v1_tasks_by_id_findings(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksFindingsRequest | ApiV1TasksFindingsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """A decision is stored as a suggestion until a person confirms it or an approval decides it.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The finding

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_tasks_by_id_findings(id_, body=body, request_options=request_options)
        )

    def post_api_v1_tasks_by_id_findings_by_finding_id_approval(
        self,
        id_: UUID,
        finding_id: UUID,
        *,
        body: ApiV1TasksFindingsApprovalRequest | ApiV1TasksFindingsApprovalRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """An ordinary approval request on the objective's flow. Approved confirms the decision; rejected rejects it.

        Args:
            id_: Value sent with the request.
            finding_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The decision and its approval

        Raises:
            ApiError: Already decided, or already put to approval ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_tasks_by_id_findings_by_finding_id_approval(
                id_, finding_id, body=body, request_options=request_options
            ),
        )

    def post_api_v1_tasks_by_id_findings_by_finding_id_knowledge(
        self,
        id_: UUID,
        finding_id: UUID,
        *,
        body: ApiV1TasksFindingsKnowledgeRequest | ApiV1TasksFindingsKnowledgeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Keeps the finding and its task as the entry's source. Still a proposal until a person confirms it.

        Args:
            id_: Value sent with the request.
            finding_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``{ entry, resumed, screening }``

        Raises:
            ApiError: The plan does not include Objectives (feature_unavailable). Reads are not refused. ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_tasks_by_id_findings_by_finding_id_knowledge(
                id_, finding_id, body=body, request_options=request_options
            ),
        )

    def post_api_v1_tasks_by_id_governance(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksGovernanceRequest | ApiV1TasksGovernanceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Put an objective under Compliance Mode with what is known of its profile. Idempotent.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The governance

        Raises:
            ApiError: The plan does not include Compliance Mode (feature_unavailable). Reads are not refused. ``error``
                is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_tasks_by_id_governance(id_, body=body, request_options=request_options)
        )

    def post_api_v1_tasks_by_id_governance_controls_by_key_approval(
        self,
        id_: UUID,
        key: str,
        *,
        body: (
            ApiV1TasksGovernanceControlsApprovalRequest | ApiV1TasksGovernanceControlsApprovalRequestDict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """An ordinary approval through the organisation's approval process. The control is satisfied when it is
        approved. Needs approvals:write.

        Args:
            id_: Value sent with the request.
            key: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The governance and the approval

        Raises:
            ApiError: The plan does not include Compliance Mode (feature_unavailable). Reads are not refused. Already
                satisfied, waived or waiting ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_tasks_by_id_governance_controls_by_key_approval(
                id_, key, body=body, request_options=request_options
            ),
        )

    def post_api_v1_tasks_by_id_governance_evidence(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksGovernanceEvidenceRequest | ApiV1TasksGovernanceEvidenceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Mapped to the controls it speaks to; one item may satisfy several. Approval controls are not satisfied by
        evidence. Scored evidence carries ``results`` (what was measured), a tool's own ``report`` (promptfoo, Inspect,
        garak, Weave, Braintrust, JUnit and more), turned into results here, or a ``pull`` from the organisation's
        connected Langfuse, LangSmith, Braintrust or Weave: the newest experiment or evaluation with the name, read with
        keys the caller never holds. ``release`` names the release the results tested — ``provider``, ``model``,
        ``modelVersion``, ``promptHash``, ``guardrailsHash``, digests never the text — and is kept on the run: evidence
        naming another release than the AI system now runs does not count, and says so (``otherRelease``); evidence
        naming none counts as before. A control with thresholds is met only when its newest scored evidence of this
        release meets them. A pull answers 404 when the tool is not connected or has no such experiment, 409
        ``connection_refused`` when the tool refuses the stored key, and 502 ``upstream_unavailable`` when it cannot be
        read.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The governance

        Raises:
            ApiError: The plan does not include Compliance Mode (feature_unavailable). Reads are not refused. A pull:
                the tool refused the organisation's stored key (connection_refused). An administrator reconnects it. A
                pull: the tool could not be reached, was limiting requests, or answered with something that is not its
                API (upstream_unavailable). ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_tasks_by_id_governance_evidence(
                id_, body=body, request_options=request_options
            ),
        )

    def post_api_v1_tasks_by_id_governance_reassessments(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksGovernanceReassessmentsRequest | ApiV1TasksGovernanceReassessmentsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Enterprise. The gate stays closed until a person completes the reassessment in Deliverd.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { reassessment, governance }

        Raises:
            ApiError: The plan does not include this capability (feature_unavailable): Compliance Mode, or the
                Enterprise governance capability named in the message ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_tasks_by_id_governance_reassessments(
                id_, body=body, request_options=request_options
            ),
        )

    def post_api_v1_tasks_by_id_links(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksLinksRequest | ApiV1TasksLinksRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """An edge beyond parent and child: depends_on, blocks, related_to, supersedes or resulted_in.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The link

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_tasks_by_id_links(id_, body=body, request_options=request_options)
        )

    def post_api_v1_tasks_by_id_reopen(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1TasksReopenResponse:
        """The earlier result is kept in previousResults.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The task, in progress again

        Raises:
            ApiError: Not finished, or its parent is ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_tasks_by_id_reopen(id_, request_options=request_options))

    def post_api_v1_tasks_by_id_side_tasks(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksSideTasksRequest | ApiV1TasksSideTasksRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1TasksSideTasksResponse:
        """It begins with a snapshot of the parent: objective, state, decisions and constraints.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The side task

        Raises:
            ApiError: The parent is finished ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_tasks_by_id_side_tasks(id_, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> TasksWithRawResponse:
        return self._with_raw_response


class AsyncTasks:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTasksWithRawResponse(client, server, auth)

    async def get_api_v1_tasks(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: Status2DeliverdDevTasksApiOrStr | None = None,
        external_id: str | None = None,
        q: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1TasksResponse2:
        """Most recently active first. Side tasks are reached through the objective they belong to.

        Args:
            limit: Value sent with the request.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            status: Value sent with the request.
            external_id: Value sent with the request.
            q: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of objectives, each with side-task counts

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_tasks(
                limit=limit, cursor=cursor, status=status, external_id=external_id, q=q, request_options=request_options
            ),
        )

    async def get_api_v1_tasks_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1TasksResponse:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The task

        Raises:
            ApiError: Not found, or not visible to you ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_api_v1_tasks_by_id(id_, request_options=request_options))

    async def get_api_v1_tasks_by_id_context(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """The objective, where the task stands, confirmed and suggested decisions, open questions, constraints,
        side-task results, the next action, the reports published for the task (``reports``: up to ten live ones, newest
        first, each ``{ id, title, url, version, publishedAt }``), and a paragraph to re-anchor on.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The context

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_tasks_by_id_context(id_, request_options=request_options)
        )

    async def get_api_v1_tasks_by_id_context_given(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """Every time knowledge or a playbook was handed to the task or the tasks under it, newest first, with who
        confirmed each entry.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``{ taskId, given }``

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_tasks_by_id_context_given(id_, request_options=request_options)
        )

    async def get_api_v1_tasks_by_id_governance(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """The profile, AI system, every control with its state and how it is met, the evidence, readiness and the gate
        answer. A side task's id answers for its objective.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The governance

        Raises:
            ApiError: No such task, or not governed ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_tasks_by_id_governance(id_, request_options=request_options)
        )

    async def get_api_v1_tasks_by_id_governance_gate(
        self,
        id_: UUID,
        *,
        action: ActionDeliverdDevGovernanceApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1TasksGovernanceGateResponse:
        """``allowed``, ``reason``, ``missingControls`` and ``blockers`` — an open reassessment, an overdue review or a
        high or critical incident, which only a person clears. With ``?action=`` (Enterprise) it also asks agent
        authority: ``authority.mode`` is allowed, approval or denied. Every check is recorded.

        Args:
            id_: Value sent with the request.
            action: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The gate's answer

        Raises:
            ApiError: With ``?action=``, the plan does not include agent authority (feature_unavailable). Without it the
                gate is a read, open on every plan. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_tasks_by_id_governance_gate(
                id_, action=action, request_options=request_options
            ),
        )

    async def get_api_v1_tasks_by_id_governance_pack(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """Profile, AI system, controls, evidence, task graph, decisions, approvals and the audit timeline, with a
        sha256 digest. ``?format=html`` to read and print. It assists audit; it does not certify compliance with any
        law. Every export is audited.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The pack

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_tasks_by_id_governance_pack(id_, request_options=request_options)
        )

    async def get_api_v1_tasks_by_id_graph(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1TasksGraphResponse:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Metadata only

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_api_v1_tasks_by_id_graph(id_, request_options=request_options))

    async def patch_api_v1_tasks_by_id(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksRequest1 | ApiV1TasksRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1TasksResponse:
        """State patches merge: fields left out stay. Changing the objective itself is refused to an agent; only a
        person changes what the work is for.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The task

        Raises:
            ApiError: An agent tried to change the objective Finished, or changed since expectedVersion ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.patch_api_v1_tasks_by_id(id_, body=body, request_options=request_options)
        )

    async def patch_api_v1_tasks_by_id_governance(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksGovernanceRequest1 | ApiV1TasksGovernanceRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Controls are recomputed. An agent may raise risk or add facts; only a person lowers risk, weakens oversight
        or clears a fact (403 not_permitted).

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The governance

        Raises:
            ApiError: The plan does not include Compliance Mode (feature_unavailable). Reads are not refused. An agent
                weakening the profile version_conflict ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.patch_api_v1_tasks_by_id_governance(
                id_, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_tasks(
        self,
        *,
        body: ApiV1TasksRequest | ApiV1TasksRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1TasksResponse:
        """What the work is ultimately for, kept apart from the conversation and returned at the top of every context.
        With externalId, an open objective the caller already started under it is returned instead (resumed: true,
        status 200).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An open objective already started under this externalId

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_tasks(body=body, request_options=request_options))

    async def post_api_v1_tasks_by_id_apply(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksApplyRequest | ApiV1TasksApplyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Applied carries decisions up as suggestions (confirmed only when a person applies in Deliverd), adds a
        summary, merges open questions and takes the next action. Answers with the parent's context and a message that
        returns to the objective.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The side task, the parent and its context

        Raises:
            ApiError: Not completed yet, or already applied ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_tasks_by_id_apply(id_, body=body, request_options=request_options)
        )

    async def post_api_v1_tasks_by_id_cancel(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksCancelRequest | ApiV1TasksCancelRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1TasksCancelResponse:
        """Cancelling an objective cancels the side tasks still open under it.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The task, cancelled

        Raises:
            ApiError: Already finished ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_tasks_by_id_cancel(
                id_, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_tasks_by_id_complete(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksCompleteRequest | ApiV1TasksCompleteRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1TasksCompleteResponse:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The task, complete

        Raises:
            ApiError: Already finished ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_tasks_by_id_complete(
                id_, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_tasks_by_id_findings(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksFindingsRequest | ApiV1TasksFindingsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """A decision is stored as a suggestion until a person confirms it or an approval decides it.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The finding

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_tasks_by_id_findings(
                id_, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_tasks_by_id_findings_by_finding_id_approval(
        self,
        id_: UUID,
        finding_id: UUID,
        *,
        body: ApiV1TasksFindingsApprovalRequest | ApiV1TasksFindingsApprovalRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """An ordinary approval request on the objective's flow. Approved confirms the decision; rejected rejects it.

        Args:
            id_: Value sent with the request.
            finding_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The decision and its approval

        Raises:
            ApiError: Already decided, or already put to approval ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_tasks_by_id_findings_by_finding_id_approval(
                id_, finding_id, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_tasks_by_id_findings_by_finding_id_knowledge(
        self,
        id_: UUID,
        finding_id: UUID,
        *,
        body: ApiV1TasksFindingsKnowledgeRequest | ApiV1TasksFindingsKnowledgeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Keeps the finding and its task as the entry's source. Still a proposal until a person confirms it.

        Args:
            id_: Value sent with the request.
            finding_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``{ entry, resumed, screening }``

        Raises:
            ApiError: The plan does not include Objectives (feature_unavailable). Reads are not refused. ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_tasks_by_id_findings_by_finding_id_knowledge(
                id_, finding_id, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_tasks_by_id_governance(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksGovernanceRequest | ApiV1TasksGovernanceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Put an objective under Compliance Mode with what is known of its profile. Idempotent.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The governance

        Raises:
            ApiError: The plan does not include Compliance Mode (feature_unavailable). Reads are not refused. ``error``
                is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_tasks_by_id_governance(
                id_, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_tasks_by_id_governance_controls_by_key_approval(
        self,
        id_: UUID,
        key: str,
        *,
        body: (
            ApiV1TasksGovernanceControlsApprovalRequest | ApiV1TasksGovernanceControlsApprovalRequestDict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """An ordinary approval through the organisation's approval process. The control is satisfied when it is
        approved. Needs approvals:write.

        Args:
            id_: Value sent with the request.
            key: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The governance and the approval

        Raises:
            ApiError: The plan does not include Compliance Mode (feature_unavailable). Reads are not refused. Already
                satisfied, waived or waiting ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_tasks_by_id_governance_controls_by_key_approval(
                id_, key, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_tasks_by_id_governance_evidence(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksGovernanceEvidenceRequest | ApiV1TasksGovernanceEvidenceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Mapped to the controls it speaks to; one item may satisfy several. Approval controls are not satisfied by
        evidence. Scored evidence carries ``results`` (what was measured), a tool's own ``report`` (promptfoo, Inspect,
        garak, Weave, Braintrust, JUnit and more), turned into results here, or a ``pull`` from the organisation's
        connected Langfuse, LangSmith, Braintrust or Weave: the newest experiment or evaluation with the name, read with
        keys the caller never holds. ``release`` names the release the results tested — ``provider``, ``model``,
        ``modelVersion``, ``promptHash``, ``guardrailsHash``, digests never the text — and is kept on the run: evidence
        naming another release than the AI system now runs does not count, and says so (``otherRelease``); evidence
        naming none counts as before. A control with thresholds is met only when its newest scored evidence of this
        release meets them. A pull answers 404 when the tool is not connected or has no such experiment, 409
        ``connection_refused`` when the tool refuses the stored key, and 502 ``upstream_unavailable`` when it cannot be
        read.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The governance

        Raises:
            ApiError: The plan does not include Compliance Mode (feature_unavailable). Reads are not refused. A pull:
                the tool refused the organisation's stored key (connection_refused). An administrator reconnects it. A
                pull: the tool could not be reached, was limiting requests, or answered with something that is not its
                API (upstream_unavailable). ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_tasks_by_id_governance_evidence(
                id_, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_tasks_by_id_governance_reassessments(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksGovernanceReassessmentsRequest | ApiV1TasksGovernanceReassessmentsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Enterprise. The gate stays closed until a person completes the reassessment in Deliverd.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { reassessment, governance }

        Raises:
            ApiError: The plan does not include this capability (feature_unavailable): Compliance Mode, or the
                Enterprise governance capability named in the message ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_tasks_by_id_governance_reassessments(
                id_, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_tasks_by_id_links(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksLinksRequest | ApiV1TasksLinksRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """An edge beyond parent and child: depends_on, blocks, related_to, supersedes or resulted_in.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The link

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_tasks_by_id_links(id_, body=body, request_options=request_options)
        )

    async def post_api_v1_tasks_by_id_reopen(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1TasksReopenResponse:
        """The earlier result is kept in previousResults.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The task, in progress again

        Raises:
            ApiError: Not finished, or its parent is ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_tasks_by_id_reopen(id_, request_options=request_options)
        )

    async def post_api_v1_tasks_by_id_side_tasks(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksSideTasksRequest | ApiV1TasksSideTasksRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1TasksSideTasksResponse:
        """It begins with a snapshot of the parent: objective, state, decisions and constraints.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The side task

        Raises:
            ApiError: The parent is finished ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_tasks_by_id_side_tasks(
                id_, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTasksWithRawResponse:
        return self._with_raw_response


class TasksWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_tasks(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: Status2DeliverdDevTasksApiOrStr | None = None,
        external_id: str | None = None,
        q: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1TasksResponse2, RawError]:
        """Most recently active first. Side tasks are reached through the objective they belong to.

        Args:
            limit: Value sent with the request.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            status: Value sent with the request.
            external_id: Value sent with the request.
            q: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/tasks"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[Status2DeliverdDevTasksApiOrStr | None]("status", status),
                param[str | None]("externalId", external_id),
                param[str | None]("q", q),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1TasksResponse2],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_tasks_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1TasksResponse, GetApiV1TasksByIdErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/tasks/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1TasksResponse],
            error_mapper=get_api_v1_tasks_by_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_tasks_by_id_context(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], RawError]:
        """The objective, where the task stands, confirmed and suggested decisions, open questions, constraints,
        side-task results, the next action, the reports published for the task (``reports``: up to ten live ones, newest
        first, each ``{ id, title, url, version, publishedAt }``), and a paragraph to re-anchor on.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/tasks/{id}/context"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_tasks_by_id_context_given(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], RawError]:
        """Every time knowledge or a playbook was handed to the task or the tasks under it, newest first, with who
        confirmed each entry.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/tasks/{id}/context-given"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_tasks_by_id_governance(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], GetApiV1TasksByIdGovernanceErrorBody]:
        """The profile, AI system, every control with its state and how it is met, the evidence, readiness and the gate
        answer. A side task's id answers for its objective.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/tasks/{id}/governance"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=get_api_v1_tasks_by_id_governance_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_tasks_by_id_governance_gate(
        self,
        id_: UUID,
        *,
        action: ActionDeliverdDevGovernanceApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1TasksGovernanceGateResponse, GetApiV1TasksByIdGovernanceGateErrorBody]:
        """``allowed``, ``reason``, ``missingControls`` and ``blockers`` — an open reassessment, an overdue review or a
        high or critical incident, which only a person clears. With ``?action=`` (Enterprise) it also asks agent
        authority: ``authority.mode`` is allowed, approval or denied. Every check is recorded.

        Args:
            id_: Value sent with the request.
            action: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/tasks/{id}/governance/gate"),
            path_params=[param[UUID]("id", id_)],
            query_params=[param[ActionDeliverdDevGovernanceApiOrStr | None]("action", action)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1TasksGovernanceGateResponse],
            error_mapper=get_api_v1_tasks_by_id_governance_gate_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_tasks_by_id_governance_pack(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], RawError]:
        """Profile, AI system, controls, evidence, task graph, decisions, approvals and the audit timeline, with a
        sha256 digest. ``?format=html`` to read and print. It assists audit; it does not certify compliance with any
        law. Every export is audited.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/tasks/{id}/governance/pack"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_tasks_by_id_graph(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1TasksGraphResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/tasks/{id}/graph"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1TasksGraphResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def patch_api_v1_tasks_by_id(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksRequest1 | ApiV1TasksRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1TasksResponse, PatchApiV1TasksByIdErrorBody]:
        """State patches merge: fields left out stay. Changing the objective itself is refused to an agent; only a
        person changes what the work is for.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/tasks/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksRequest1 | ApiV1TasksRequest1Dict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1TasksResponse],
            error_mapper=patch_api_v1_tasks_by_id_error_mapper,
            request_options=request_options,
        )

    def patch_api_v1_tasks_by_id_governance(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksGovernanceRequest1 | ApiV1TasksGovernanceRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PatchApiV1TasksByIdGovernanceErrorBody]:
        """Controls are recomputed. An agent may raise risk or add facts; only a person lowers risk, weakens oversight
        or clears a fact (403 not_permitted).

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/tasks/{id}/governance"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksGovernanceRequest1 | ApiV1TasksGovernanceRequest1Dict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=patch_api_v1_tasks_by_id_governance_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_tasks(
        self,
        *,
        body: ApiV1TasksRequest | ApiV1TasksRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1TasksResponse, RawError]:
        """What the work is ultimately for, kept apart from the conversation and returned at the top of every context.
        With externalId, an open objective the caller already started under it is returned instead (resumed: true,
        status 200).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksRequest | ApiV1TasksRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1TasksResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def post_api_v1_tasks_by_id_apply(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksApplyRequest | ApiV1TasksApplyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1TasksByIdApplyErrorBody]:
        """Applied carries decisions up as suggestions (confirmed only when a person applies in Deliverd), adds a
        summary, merges open questions and takes the next action. Answers with the parent's context and a message that
        returns to the objective.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/apply"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksApplyRequest | ApiV1TasksApplyRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_tasks_by_id_apply_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_tasks_by_id_cancel(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksCancelRequest | ApiV1TasksCancelRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1TasksCancelResponse, PostApiV1TasksByIdCancelErrorBody]:
        """Cancelling an objective cancels the side tasks still open under it.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/cancel"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksCancelRequest | ApiV1TasksCancelRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1TasksCancelResponse],
            error_mapper=post_api_v1_tasks_by_id_cancel_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_tasks_by_id_complete(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksCompleteRequest | ApiV1TasksCompleteRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1TasksCompleteResponse, PostApiV1TasksByIdCompleteErrorBody]:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/complete"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksCompleteRequest | ApiV1TasksCompleteRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1TasksCompleteResponse],
            error_mapper=post_api_v1_tasks_by_id_complete_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_tasks_by_id_findings(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksFindingsRequest | ApiV1TasksFindingsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], RawError]:
        """A decision is stored as a suggestion until a person confirms it or an approval decides it.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/findings"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksFindingsRequest | ApiV1TasksFindingsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def post_api_v1_tasks_by_id_findings_by_finding_id_approval(
        self,
        id_: UUID,
        finding_id: UUID,
        *,
        body: ApiV1TasksFindingsApprovalRequest | ApiV1TasksFindingsApprovalRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1TasksByIdFindingsByFindingIdApprovalErrorBody]:
        """An ordinary approval request on the objective's flow. Approved confirms the decision; rejected rejects it.

        Args:
            id_: Value sent with the request.
            finding_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/findings/{findingId}/approval"),
            path_params=[param[UUID]("id", id_), param[UUID]("findingId", finding_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksFindingsApprovalRequest | ApiV1TasksFindingsApprovalRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_tasks_by_id_findings_by_finding_id_approval_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_tasks_by_id_findings_by_finding_id_knowledge(
        self,
        id_: UUID,
        finding_id: UUID,
        *,
        body: ApiV1TasksFindingsKnowledgeRequest | ApiV1TasksFindingsKnowledgeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1TasksByIdFindingsByFindingIdKnowledgeErrorBody]:
        """Keeps the finding and its task as the entry's source. Still a proposal until a person confirms it.

        Args:
            id_: Value sent with the request.
            finding_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/findings/{findingId}/knowledge"),
            path_params=[param[UUID]("id", id_), param[UUID]("findingId", finding_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksFindingsKnowledgeRequest | ApiV1TasksFindingsKnowledgeRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_tasks_by_id_findings_by_finding_id_knowledge_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_tasks_by_id_governance(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksGovernanceRequest | ApiV1TasksGovernanceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1TasksByIdGovernanceErrorBody]:
        """Put an objective under Compliance Mode with what is known of its profile. Idempotent.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/governance"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksGovernanceRequest | ApiV1TasksGovernanceRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_tasks_by_id_governance_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_tasks_by_id_governance_controls_by_key_approval(
        self,
        id_: UUID,
        key: str,
        *,
        body: (
            ApiV1TasksGovernanceControlsApprovalRequest | ApiV1TasksGovernanceControlsApprovalRequestDict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1TasksByIdGovernanceControlsByKeyApprovalErrorBody]:
        """An ordinary approval through the organisation's approval process. The control is satisfied when it is
        approved. Needs approvals:write.

        Args:
            id_: Value sent with the request.
            key: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/governance/controls/{key}/approval"),
            path_params=[param[UUID]("id", id_), param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1TasksGovernanceControlsApprovalRequest | ApiV1TasksGovernanceControlsApprovalRequestDict | None
            ](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_tasks_by_id_governance_controls_by_key_approval_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_tasks_by_id_governance_evidence(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksGovernanceEvidenceRequest | ApiV1TasksGovernanceEvidenceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1TasksByIdGovernanceEvidenceErrorBody]:
        """Mapped to the controls it speaks to; one item may satisfy several. Approval controls are not satisfied by
        evidence. Scored evidence carries ``results`` (what was measured), a tool's own ``report`` (promptfoo, Inspect,
        garak, Weave, Braintrust, JUnit and more), turned into results here, or a ``pull`` from the organisation's
        connected Langfuse, LangSmith, Braintrust or Weave: the newest experiment or evaluation with the name, read with
        keys the caller never holds. ``release`` names the release the results tested — ``provider``, ``model``,
        ``modelVersion``, ``promptHash``, ``guardrailsHash``, digests never the text — and is kept on the run: evidence
        naming another release than the AI system now runs does not count, and says so (``otherRelease``); evidence
        naming none counts as before. A control with thresholds is met only when its newest scored evidence of this
        release meets them. A pull answers 404 when the tool is not connected or has no such experiment, 409
        ``connection_refused`` when the tool refuses the stored key, and 502 ``upstream_unavailable`` when it cannot be
        read.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/governance/evidence"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksGovernanceEvidenceRequest | ApiV1TasksGovernanceEvidenceRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_tasks_by_id_governance_evidence_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_tasks_by_id_governance_reassessments(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksGovernanceReassessmentsRequest | ApiV1TasksGovernanceReassessmentsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1TasksByIdGovernanceReassessmentsErrorBody]:
        """Enterprise. The gate stays closed until a person completes the reassessment in Deliverd.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/governance/reassessments"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1TasksGovernanceReassessmentsRequest | ApiV1TasksGovernanceReassessmentsRequestDict | None
            ](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_tasks_by_id_governance_reassessments_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_tasks_by_id_links(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksLinksRequest | ApiV1TasksLinksRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], RawError]:
        """An edge beyond parent and child: depends_on, blocks, related_to, supersedes or resulted_in.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/links"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksLinksRequest | ApiV1TasksLinksRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def post_api_v1_tasks_by_id_reopen(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1TasksReopenResponse, PostApiV1TasksByIdReopenErrorBody]:
        """The earlier result is kept in previousResults.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/reopen"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1TasksReopenResponse],
            error_mapper=post_api_v1_tasks_by_id_reopen_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_tasks_by_id_side_tasks(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksSideTasksRequest | ApiV1TasksSideTasksRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1TasksSideTasksResponse, PostApiV1TasksByIdSideTasksErrorBody]:
        """It begins with a snapshot of the parent: objective, state, decisions and constraints.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/side-tasks"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksSideTasksRequest | ApiV1TasksSideTasksRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1TasksSideTasksResponse],
            error_mapper=post_api_v1_tasks_by_id_side_tasks_error_mapper,
            request_options=request_options,
        )


class AsyncTasksWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_tasks(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: Status2DeliverdDevTasksApiOrStr | None = None,
        external_id: str | None = None,
        q: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1TasksResponse2, RawError]:
        """Most recently active first. Side tasks are reached through the objective they belong to.

        Args:
            limit: Value sent with the request.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            status: Value sent with the request.
            external_id: Value sent with the request.
            q: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/tasks"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[Status2DeliverdDevTasksApiOrStr | None]("status", status),
                param[str | None]("externalId", external_id),
                param[str | None]("q", q),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1TasksResponse2],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_tasks_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1TasksResponse, GetApiV1TasksByIdErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/tasks/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1TasksResponse],
            error_mapper=get_api_v1_tasks_by_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_tasks_by_id_context(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], RawError]:
        """The objective, where the task stands, confirmed and suggested decisions, open questions, constraints,
        side-task results, the next action, the reports published for the task (``reports``: up to ten live ones, newest
        first, each ``{ id, title, url, version, publishedAt }``), and a paragraph to re-anchor on.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/tasks/{id}/context"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_tasks_by_id_context_given(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], RawError]:
        """Every time knowledge or a playbook was handed to the task or the tasks under it, newest first, with who
        confirmed each entry.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/tasks/{id}/context-given"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_tasks_by_id_governance(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], GetApiV1TasksByIdGovernanceErrorBody]:
        """The profile, AI system, every control with its state and how it is met, the evidence, readiness and the gate
        answer. A side task's id answers for its objective.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/tasks/{id}/governance"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=get_api_v1_tasks_by_id_governance_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_tasks_by_id_governance_gate(
        self,
        id_: UUID,
        *,
        action: ActionDeliverdDevGovernanceApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1TasksGovernanceGateResponse, GetApiV1TasksByIdGovernanceGateErrorBody]:
        """``allowed``, ``reason``, ``missingControls`` and ``blockers`` — an open reassessment, an overdue review or a
        high or critical incident, which only a person clears. With ``?action=`` (Enterprise) it also asks agent
        authority: ``authority.mode`` is allowed, approval or denied. Every check is recorded.

        Args:
            id_: Value sent with the request.
            action: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/tasks/{id}/governance/gate"),
            path_params=[param[UUID]("id", id_)],
            query_params=[param[ActionDeliverdDevGovernanceApiOrStr | None]("action", action)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1TasksGovernanceGateResponse],
            error_mapper=get_api_v1_tasks_by_id_governance_gate_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_tasks_by_id_governance_pack(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], RawError]:
        """Profile, AI system, controls, evidence, task graph, decisions, approvals and the audit timeline, with a
        sha256 digest. ``?format=html`` to read and print. It assists audit; it does not certify compliance with any
        law. Every export is audited.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/tasks/{id}/governance/pack"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_tasks_by_id_graph(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1TasksGraphResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/tasks/{id}/graph"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1TasksGraphResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def patch_api_v1_tasks_by_id(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksRequest1 | ApiV1TasksRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1TasksResponse, PatchApiV1TasksByIdErrorBody]:
        """State patches merge: fields left out stay. Changing the objective itself is refused to an agent; only a
        person changes what the work is for.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/tasks/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksRequest1 | ApiV1TasksRequest1Dict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1TasksResponse],
            error_mapper=patch_api_v1_tasks_by_id_error_mapper,
            request_options=request_options,
        )

    async def patch_api_v1_tasks_by_id_governance(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksGovernanceRequest1 | ApiV1TasksGovernanceRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PatchApiV1TasksByIdGovernanceErrorBody]:
        """Controls are recomputed. An agent may raise risk or add facts; only a person lowers risk, weakens oversight
        or clears a fact (403 not_permitted).

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/tasks/{id}/governance"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksGovernanceRequest1 | ApiV1TasksGovernanceRequest1Dict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=patch_api_v1_tasks_by_id_governance_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_tasks(
        self,
        *,
        body: ApiV1TasksRequest | ApiV1TasksRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1TasksResponse, RawError]:
        """What the work is ultimately for, kept apart from the conversation and returned at the top of every context.
        With externalId, an open objective the caller already started under it is returned instead (resumed: true,
        status 200).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksRequest | ApiV1TasksRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1TasksResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def post_api_v1_tasks_by_id_apply(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksApplyRequest | ApiV1TasksApplyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1TasksByIdApplyErrorBody]:
        """Applied carries decisions up as suggestions (confirmed only when a person applies in Deliverd), adds a
        summary, merges open questions and takes the next action. Answers with the parent's context and a message that
        returns to the objective.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/apply"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksApplyRequest | ApiV1TasksApplyRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_tasks_by_id_apply_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_tasks_by_id_cancel(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksCancelRequest | ApiV1TasksCancelRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1TasksCancelResponse, PostApiV1TasksByIdCancelErrorBody]:
        """Cancelling an objective cancels the side tasks still open under it.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/cancel"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksCancelRequest | ApiV1TasksCancelRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1TasksCancelResponse],
            error_mapper=post_api_v1_tasks_by_id_cancel_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_tasks_by_id_complete(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksCompleteRequest | ApiV1TasksCompleteRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1TasksCompleteResponse, PostApiV1TasksByIdCompleteErrorBody]:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/complete"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksCompleteRequest | ApiV1TasksCompleteRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1TasksCompleteResponse],
            error_mapper=post_api_v1_tasks_by_id_complete_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_tasks_by_id_findings(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksFindingsRequest | ApiV1TasksFindingsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], RawError]:
        """A decision is stored as a suggestion until a person confirms it or an approval decides it.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/findings"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksFindingsRequest | ApiV1TasksFindingsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def post_api_v1_tasks_by_id_findings_by_finding_id_approval(
        self,
        id_: UUID,
        finding_id: UUID,
        *,
        body: ApiV1TasksFindingsApprovalRequest | ApiV1TasksFindingsApprovalRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1TasksByIdFindingsByFindingIdApprovalErrorBody]:
        """An ordinary approval request on the objective's flow. Approved confirms the decision; rejected rejects it.

        Args:
            id_: Value sent with the request.
            finding_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/findings/{findingId}/approval"),
            path_params=[param[UUID]("id", id_), param[UUID]("findingId", finding_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksFindingsApprovalRequest | ApiV1TasksFindingsApprovalRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_tasks_by_id_findings_by_finding_id_approval_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_tasks_by_id_findings_by_finding_id_knowledge(
        self,
        id_: UUID,
        finding_id: UUID,
        *,
        body: ApiV1TasksFindingsKnowledgeRequest | ApiV1TasksFindingsKnowledgeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1TasksByIdFindingsByFindingIdKnowledgeErrorBody]:
        """Keeps the finding and its task as the entry's source. Still a proposal until a person confirms it.

        Args:
            id_: Value sent with the request.
            finding_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/findings/{findingId}/knowledge"),
            path_params=[param[UUID]("id", id_), param[UUID]("findingId", finding_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksFindingsKnowledgeRequest | ApiV1TasksFindingsKnowledgeRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_tasks_by_id_findings_by_finding_id_knowledge_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_tasks_by_id_governance(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksGovernanceRequest | ApiV1TasksGovernanceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1TasksByIdGovernanceErrorBody]:
        """Put an objective under Compliance Mode with what is known of its profile. Idempotent.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/governance"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksGovernanceRequest | ApiV1TasksGovernanceRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_tasks_by_id_governance_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_tasks_by_id_governance_controls_by_key_approval(
        self,
        id_: UUID,
        key: str,
        *,
        body: (
            ApiV1TasksGovernanceControlsApprovalRequest | ApiV1TasksGovernanceControlsApprovalRequestDict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1TasksByIdGovernanceControlsByKeyApprovalErrorBody]:
        """An ordinary approval through the organisation's approval process. The control is satisfied when it is
        approved. Needs approvals:write.

        Args:
            id_: Value sent with the request.
            key: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/governance/controls/{key}/approval"),
            path_params=[param[UUID]("id", id_), param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1TasksGovernanceControlsApprovalRequest | ApiV1TasksGovernanceControlsApprovalRequestDict | None
            ](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_tasks_by_id_governance_controls_by_key_approval_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_tasks_by_id_governance_evidence(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksGovernanceEvidenceRequest | ApiV1TasksGovernanceEvidenceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1TasksByIdGovernanceEvidenceErrorBody]:
        """Mapped to the controls it speaks to; one item may satisfy several. Approval controls are not satisfied by
        evidence. Scored evidence carries ``results`` (what was measured), a tool's own ``report`` (promptfoo, Inspect,
        garak, Weave, Braintrust, JUnit and more), turned into results here, or a ``pull`` from the organisation's
        connected Langfuse, LangSmith, Braintrust or Weave: the newest experiment or evaluation with the name, read with
        keys the caller never holds. ``release`` names the release the results tested — ``provider``, ``model``,
        ``modelVersion``, ``promptHash``, ``guardrailsHash``, digests never the text — and is kept on the run: evidence
        naming another release than the AI system now runs does not count, and says so (``otherRelease``); evidence
        naming none counts as before. A control with thresholds is met only when its newest scored evidence of this
        release meets them. A pull answers 404 when the tool is not connected or has no such experiment, 409
        ``connection_refused`` when the tool refuses the stored key, and 502 ``upstream_unavailable`` when it cannot be
        read.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/governance/evidence"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksGovernanceEvidenceRequest | ApiV1TasksGovernanceEvidenceRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_tasks_by_id_governance_evidence_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_tasks_by_id_governance_reassessments(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksGovernanceReassessmentsRequest | ApiV1TasksGovernanceReassessmentsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1TasksByIdGovernanceReassessmentsErrorBody]:
        """Enterprise. The gate stays closed until a person completes the reassessment in Deliverd.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/governance/reassessments"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1TasksGovernanceReassessmentsRequest | ApiV1TasksGovernanceReassessmentsRequestDict | None
            ](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_tasks_by_id_governance_reassessments_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_tasks_by_id_links(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksLinksRequest | ApiV1TasksLinksRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], RawError]:
        """An edge beyond parent and child: depends_on, blocks, related_to, supersedes or resulted_in.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/links"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksLinksRequest | ApiV1TasksLinksRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def post_api_v1_tasks_by_id_reopen(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1TasksReopenResponse, PostApiV1TasksByIdReopenErrorBody]:
        """The earlier result is kept in previousResults.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/reopen"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1TasksReopenResponse],
            error_mapper=post_api_v1_tasks_by_id_reopen_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_tasks_by_id_side_tasks(
        self,
        id_: UUID,
        *,
        body: ApiV1TasksSideTasksRequest | ApiV1TasksSideTasksRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1TasksSideTasksResponse, PostApiV1TasksByIdSideTasksErrorBody]:
        """It begins with a snapshot of the parent: objective, state, decisions and constraints.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/tasks/{id}/side-tasks"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1TasksSideTasksRequest | ApiV1TasksSideTasksRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1TasksSideTasksResponse],
            error_mapper=post_api_v1_tasks_by_id_side_tasks_error_mapper,
            request_options=request_options,
        )
