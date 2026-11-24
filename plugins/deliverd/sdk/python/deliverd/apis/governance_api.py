from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
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
from ..errors.get_api_v1_governance_ict_register_export_error import (
    GetApiV1GovernanceIctRegisterExportErrorBody,
    get_api_v1_governance_ict_register_export_error_mapper,
)
from ..errors.get_api_v1_governance_incidents_by_id_error import (
    GetApiV1GovernanceIncidentsByIdErrorBody,
    get_api_v1_governance_incidents_by_id_error_mapper,
)
from ..errors.get_api_v1_governance_summary_error import (
    GetApiV1GovernanceSummaryErrorBody,
    get_api_v1_governance_summary_error_mapper,
)
from ..errors.post_api_v1_governance_authority_evaluate_error import (
    PostApiV1GovernanceAuthorityEvaluateErrorBody,
    post_api_v1_governance_authority_evaluate_error_mapper,
)
from ..errors.post_api_v1_governance_frameworks_error import (
    PostApiV1GovernanceFrameworksErrorBody,
    post_api_v1_governance_frameworks_error_mapper,
)
from ..errors.post_api_v1_governance_incidents_by_id_reports_error import (
    PostApiV1GovernanceIncidentsByIdReportsErrorBody,
    post_api_v1_governance_incidents_by_id_reports_error_mapper,
)
from ..errors.post_api_v1_governance_incidents_error import (
    PostApiV1GovernanceIncidentsErrorBody,
    post_api_v1_governance_incidents_error_mapper,
)
from ..models.api_v1_governance_authority_evaluate_request import (
    ApiV1GovernanceAuthorityEvaluateRequest,
    ApiV1GovernanceAuthorityEvaluateRequestDict,
)
from ..models.api_v1_governance_frameworks_request import (
    ApiV1GovernanceFrameworksRequest,
    ApiV1GovernanceFrameworksRequestDict,
)
from ..models.api_v1_governance_incidents_reports_request import (
    ApiV1GovernanceIncidentsReportsRequest,
    ApiV1GovernanceIncidentsReportsRequestDict,
)
from ..models.api_v1_governance_incidents_request import (
    ApiV1GovernanceIncidentsRequest,
    ApiV1GovernanceIncidentsRequestDict,
)
from ..models.api_v1_governance_incidents_response import ApiV1GovernanceIncidentsResponse
from ..models.enums.format import FormatOrStr
from ..models.enums.risk import RiskOrStr
from ..models.enums.status_deliverd_dev_governance_api import StatusDeliverdDevGovernanceApiOrStr
from ..models.enums.template import TemplateOrStr
from ..server.server import Server


class GovernanceApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = GovernanceApiWithRawResponse(client, server, auth)

    def get_api_v1_governance_frameworks(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """The built-in packs (NIST AI RMF, ISO/IEC 42001, EU AI Act, UK AI principles, DORA, SR 26-2, PRA SS1/23 and
        FCA AI good practice) with their requirements and versions, the organisation's own frameworks, and which are
        applied at which version. A pack maps requirements onto controls for review; it is not legal advice.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { frameworks, custom, customControls, canAdopt, canWriteCustom, statement }

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_governance_frameworks(request_options=request_options))

    def get_api_v1_governance_frameworks_mapping(
        self,
        *,
        task_id: UUID | None = None,
        framework: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """With ``taskId``, how far that governed task's completed controls cover each requirement. A mapping, never a
        compliance verdict.

        Args:
            task_id: Value sent with the request.
            framework: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { taskId, frameworks, statement }

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_governance_frameworks_mapping(
                task_id=task_id, framework=framework, request_options=request_options
            ),
        )

    def get_api_v1_governance_ict_register(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """DORA's register of information, for the providers behind the organisation's AI systems: who keeps it
        (``entity``), the ``providers``, the ``arrangements`` (contracts) with the AI systems that run under each, what
        each entry still lacks (``gaps``), the ``concentration`` on each provider, and the AI systems not yet in the
        register.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { entity, providers, arrangements, concentration, unregisteredSystems, rules }

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_governance_ict_register(request_options=request_options))

    def get_api_v1_governance_ict_register_export(
        self,
        *,
        format_: FormatOrStr | None = None,
        template: TemplateOrStr | None = None,
        as_of: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """B_01.01, B_02.01, B_02.02, B_05.01, B_06.01 and B_07.01 of Implementing Regulation (EU) 2024/2956, with the
        regulation's column codes. JSON is every template (or ``template``) with its columns and rows; ``format=csv`` is
        one template, headed by its column codes. Values nobody recorded are empty. For the organisation's own register
        to take in, not the submission itself.

        Args:
            format_: Value sent with the request.
            template: Value sent with the request.
            as_of: The reporting date; today when omitted
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { statement, templates }, or CSV

        Raises:
            ApiError: CSV without a template, or an unknown template ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_governance_ict_register_export(
                format_=format_, template=template, as_of=as_of, request_options=request_options
            ),
        )

    def get_api_v1_governance_incidents(
        self,
        *,
        status: StatusDeliverdDevGovernanceApiOrStr | None = None,
        ai_system_id: UUID | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1GovernanceIncidentsResponse:
        """Paged with ``limit`` and ``cursor``; ``nextCursor`` is null at the end. Incidents against a task you cannot
        read are left out.

        Args:
            status: Value sent with the request.
            ai_system_id: Value sent with the request.
            limit: Value sent with the request.
            cursor: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of incidents

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_governance_incidents(
                status=status, ai_system_id=ai_system_id, limit=limit, cursor=cursor, request_options=request_options
            ),
        )

    def get_api_v1_governance_incidents_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """The incident, its DORA classification (``dora``: the facts, ``major``, each criterion and the reason), its
        reports with their sign-off status, and ``schedule``: which report is due next and by when. Nothing is due
        unless it is classified major.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The incident

        Raises:
            ApiError: No such incident, or one against a task you cannot read ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_governance_incidents_by_id(id_, request_options=request_options)
        )

    def get_api_v1_governance_policies(self, *, request_options: RequestOptionsOrDict | None = None) -> dict[str, Any]:
        """Governed tasks record the version they were evaluated against. Publishing a version is done by a person in
        Deliverd.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { policies }

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_governance_policies(request_options=request_options))

    def get_api_v1_governance_summary(
        self,
        *,
        ai_system_id: UUID | None = None,
        risk: RiskOrStr | None = None,
        owner: str | None = None,
        provider: str | None = None,
        data_classification: str | None = None,
        jurisdiction: str | None = None,
        framework: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Systems, governed tasks, outstanding controls, pending approvals, expired exceptions, open incidents and what
        needs review. ``jurisdiction`` and ``framework`` filters are Enterprise. Never a compliance percentage.

        Args:
            ai_system_id: Value sent with the request.
            risk: Value sent with the request.
            owner: Value sent with the request.
            provider: Value sent with the request.
            data_classification: Value sent with the request.
            jurisdiction: Value sent with the request.
            framework: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The summary

        Raises:
            ApiError: The plan does not include this capability (feature_unavailable): Compliance Mode, or the
                Enterprise governance capability named in the message ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_governance_summary(
                ai_system_id=ai_system_id,
                risk=risk,
                owner=owner,
                provider=provider,
                data_classification=data_classification,
                jurisdiction=jurisdiction,
                framework=framework,
                request_options=request_options,
            ),
        )

    def post_api_v1_governance_authority_evaluate(
        self,
        *,
        body: ApiV1GovernanceAuthorityEvaluateRequest | ApiV1GovernanceAuthorityEvaluateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Enterprise. By the organisation's authority policy and the agent's own, which can only be stricter. ``mode``
        is allowed, approval or denied. Records nothing.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { action, mode, source, reason, agentId, agentName }

        Raises:
            ApiError: The plan does not include this capability (feature_unavailable): Compliance Mode, or the
                Enterprise governance capability named in the message ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_governance_authority_evaluate(
                body=body, request_options=request_options
            ),
        )

    def post_api_v1_governance_frameworks(
        self,
        *,
        body: ApiV1GovernanceFrameworksRequest | ApiV1GovernanceFrameworksRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Enterprise. Saved as a draft; it applies only once a person publishes and adopts it. A published version is
        never edited — a change is a new version.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The draft

        Raises:
            ApiError: The framework is not sound, or that version exists The plan does not include this capability
                (feature_unavailable): Compliance Mode, or the Enterprise governance capability named in the message
                ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_governance_frameworks(body=body, request_options=request_options)
        )

    def post_api_v1_governance_incidents(
        self,
        *,
        body: ApiV1GovernanceIncidentsRequest | ApiV1GovernanceIncidentsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Against a governed task, an AI system, or both. High or critical closes the task's governance gate until a
        person resolves it. Permanent: it cannot be edited or withdrawn.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The incident

        Raises:
            ApiError: The plan does not include Compliance Mode (feature_unavailable). Reads are not refused. ``error``
                is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_governance_incidents(body=body, request_options=request_options)
        )

    def post_api_v1_governance_incidents_by_id_reports(
        self,
        id_: UUID,
        *,
        body: ApiV1GovernanceIncidentsReportsRequest | ApiV1GovernanceIncidentsReportsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """initial, intermediate or final on a major incident, in that order; or reclassification, for one notified as
        major and now not. Creates an approval for a person to sign it off. Needs approvals:write as well as
        tasks:write.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { incident, reportId, approvalId, approvalUrl }

        Raises:
            ApiError: The plan does not include Compliance Mode (feature_unavailable). Reads are not refused. Not this
                report yet: the incident is not major, or the report before it has not been submitted ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_governance_incidents_by_id_reports(
                id_, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> GovernanceApiWithRawResponse:
        return self._with_raw_response


class AsyncGovernanceApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncGovernanceApiWithRawResponse(client, server, auth)

    async def get_api_v1_governance_frameworks(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """The built-in packs (NIST AI RMF, ISO/IEC 42001, EU AI Act, UK AI principles, DORA, SR 26-2, PRA SS1/23 and
        FCA AI good practice) with their requirements and versions, the organisation's own frameworks, and which are
        applied at which version. A pack maps requirements onto controls for review; it is not legal advice.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { frameworks, custom, customControls, canAdopt, canWriteCustom, statement }

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_api_v1_governance_frameworks(request_options=request_options))

    async def get_api_v1_governance_frameworks_mapping(
        self,
        *,
        task_id: UUID | None = None,
        framework: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """With ``taskId``, how far that governed task's completed controls cover each requirement. A mapping, never a
        compliance verdict.

        Args:
            task_id: Value sent with the request.
            framework: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { taskId, frameworks, statement }

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_governance_frameworks_mapping(
                task_id=task_id, framework=framework, request_options=request_options
            ),
        )

    async def get_api_v1_governance_ict_register(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """DORA's register of information, for the providers behind the organisation's AI systems: who keeps it
        (``entity``), the ``providers``, the ``arrangements`` (contracts) with the AI systems that run under each, what
        each entry still lacks (``gaps``), the ``concentration`` on each provider, and the AI systems not yet in the
        register.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { entity, providers, arrangements, concentration, unregisteredSystems, rules }

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_api_v1_governance_ict_register(request_options=request_options))

    async def get_api_v1_governance_ict_register_export(
        self,
        *,
        format_: FormatOrStr | None = None,
        template: TemplateOrStr | None = None,
        as_of: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """B_01.01, B_02.01, B_02.02, B_05.01, B_06.01 and B_07.01 of Implementing Regulation (EU) 2024/2956, with the
        regulation's column codes. JSON is every template (or ``template``) with its columns and rows; ``format=csv`` is
        one template, headed by its column codes. Values nobody recorded are empty. For the organisation's own register
        to take in, not the submission itself.

        Args:
            format_: Value sent with the request.
            template: Value sent with the request.
            as_of: The reporting date; today when omitted
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { statement, templates }, or CSV

        Raises:
            ApiError: CSV without a template, or an unknown template ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_governance_ict_register_export(
                format_=format_, template=template, as_of=as_of, request_options=request_options
            ),
        )

    async def get_api_v1_governance_incidents(
        self,
        *,
        status: StatusDeliverdDevGovernanceApiOrStr | None = None,
        ai_system_id: UUID | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1GovernanceIncidentsResponse:
        """Paged with ``limit`` and ``cursor``; ``nextCursor`` is null at the end. Incidents against a task you cannot
        read are left out.

        Args:
            status: Value sent with the request.
            ai_system_id: Value sent with the request.
            limit: Value sent with the request.
            cursor: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of incidents

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_governance_incidents(
                status=status, ai_system_id=ai_system_id, limit=limit, cursor=cursor, request_options=request_options
            ),
        )

    async def get_api_v1_governance_incidents_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """The incident, its DORA classification (``dora``: the facts, ``major``, each criterion and the reason), its
        reports with their sign-off status, and ``schedule``: which report is due next and by when. Nothing is due
        unless it is classified major.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The incident

        Raises:
            ApiError: No such incident, or one against a task you cannot read ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_governance_incidents_by_id(id_, request_options=request_options)
        )

    async def get_api_v1_governance_policies(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """Governed tasks record the version they were evaluated against. Publishing a version is done by a person in
        Deliverd.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { policies }

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_api_v1_governance_policies(request_options=request_options))

    async def get_api_v1_governance_summary(
        self,
        *,
        ai_system_id: UUID | None = None,
        risk: RiskOrStr | None = None,
        owner: str | None = None,
        provider: str | None = None,
        data_classification: str | None = None,
        jurisdiction: str | None = None,
        framework: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Systems, governed tasks, outstanding controls, pending approvals, expired exceptions, open incidents and what
        needs review. ``jurisdiction`` and ``framework`` filters are Enterprise. Never a compliance percentage.

        Args:
            ai_system_id: Value sent with the request.
            risk: Value sent with the request.
            owner: Value sent with the request.
            provider: Value sent with the request.
            data_classification: Value sent with the request.
            jurisdiction: Value sent with the request.
            framework: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The summary

        Raises:
            ApiError: The plan does not include this capability (feature_unavailable): Compliance Mode, or the
                Enterprise governance capability named in the message ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_governance_summary(
                ai_system_id=ai_system_id,
                risk=risk,
                owner=owner,
                provider=provider,
                data_classification=data_classification,
                jurisdiction=jurisdiction,
                framework=framework,
                request_options=request_options,
            ),
        )

    async def post_api_v1_governance_authority_evaluate(
        self,
        *,
        body: ApiV1GovernanceAuthorityEvaluateRequest | ApiV1GovernanceAuthorityEvaluateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Enterprise. By the organisation's authority policy and the agent's own, which can only be stricter. ``mode``
        is allowed, approval or denied. Records nothing.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { action, mode, source, reason, agentId, agentName }

        Raises:
            ApiError: The plan does not include this capability (feature_unavailable): Compliance Mode, or the
                Enterprise governance capability named in the message ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_governance_authority_evaluate(
                body=body, request_options=request_options
            ),
        )

    async def post_api_v1_governance_frameworks(
        self,
        *,
        body: ApiV1GovernanceFrameworksRequest | ApiV1GovernanceFrameworksRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Enterprise. Saved as a draft; it applies only once a person publishes and adopts it. A published version is
        never edited — a change is a new version.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The draft

        Raises:
            ApiError: The framework is not sound, or that version exists The plan does not include this capability
                (feature_unavailable): Compliance Mode, or the Enterprise governance capability named in the message
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_governance_frameworks(body=body, request_options=request_options)
        )

    async def post_api_v1_governance_incidents(
        self,
        *,
        body: ApiV1GovernanceIncidentsRequest | ApiV1GovernanceIncidentsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Against a governed task, an AI system, or both. High or critical closes the task's governance gate until a
        person resolves it. Permanent: it cannot be edited or withdrawn.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The incident

        Raises:
            ApiError: The plan does not include Compliance Mode (feature_unavailable). Reads are not refused. ``error``
                is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_governance_incidents(body=body, request_options=request_options)
        )

    async def post_api_v1_governance_incidents_by_id_reports(
        self,
        id_: UUID,
        *,
        body: ApiV1GovernanceIncidentsReportsRequest | ApiV1GovernanceIncidentsReportsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """initial, intermediate or final on a major incident, in that order; or reclassification, for one notified as
        major and now not. Creates an approval for a person to sign it off. Needs approvals:write as well as
        tasks:write.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { incident, reportId, approvalId, approvalUrl }

        Raises:
            ApiError: The plan does not include Compliance Mode (feature_unavailable). Reads are not refused. Not this
                report yet: the incident is not major, or the report before it has not been submitted ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_governance_incidents_by_id_reports(
                id_, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncGovernanceApiWithRawResponse:
        return self._with_raw_response


class GovernanceApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_governance_frameworks(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], RawError]:
        """The built-in packs (NIST AI RMF, ISO/IEC 42001, EU AI Act, UK AI principles, DORA, SR 26-2, PRA SS1/23 and
        FCA AI good practice) with their requirements and versions, the organisation's own frameworks, and which are
        applied at which version. A pack maps requirements onto controls for review; it is not legal advice.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/governance/frameworks"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_governance_frameworks_mapping(
        self,
        *,
        task_id: UUID | None = None,
        framework: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], RawError]:
        """With ``taskId``, how far that governed task's completed controls cover each requirement. A mapping, never a
        compliance verdict.

        Args:
            task_id: Value sent with the request.
            framework: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/governance/frameworks/mapping"),
            query_params=[param[UUID | None]("taskId", task_id), param[str | None]("framework", framework)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_governance_ict_register(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], RawError]:
        """DORA's register of information, for the providers behind the organisation's AI systems: who keeps it
        (``entity``), the ``providers``, the ``arrangements`` (contracts) with the AI systems that run under each, what
        each entry still lacks (``gaps``), the ``concentration`` on each provider, and the AI systems not yet in the
        register.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/governance/ict-register"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_governance_ict_register_export(
        self,
        *,
        format_: FormatOrStr | None = None,
        template: TemplateOrStr | None = None,
        as_of: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], GetApiV1GovernanceIctRegisterExportErrorBody]:
        """B_01.01, B_02.01, B_02.02, B_05.01, B_06.01 and B_07.01 of Implementing Regulation (EU) 2024/2956, with the
        regulation's column codes. JSON is every template (or ``template``) with its columns and rows; ``format=csv`` is
        one template, headed by its column codes. Values nobody recorded are empty. For the organisation's own register
        to take in, not the submission itself.

        Args:
            format_: Value sent with the request.
            template: Value sent with the request.
            as_of: The reporting date; today when omitted
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/governance/ict-register/export"),
            query_params=[
                param[FormatOrStr | None]("format", format_),
                param[TemplateOrStr | None]("template", template),
                param[Date | None]("asOf", as_of),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=get_api_v1_governance_ict_register_export_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_governance_incidents(
        self,
        *,
        status: StatusDeliverdDevGovernanceApiOrStr | None = None,
        ai_system_id: UUID | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1GovernanceIncidentsResponse, RawError]:
        """Paged with ``limit`` and ``cursor``; ``nextCursor`` is null at the end. Incidents against a task you cannot
        read are left out.

        Args:
            status: Value sent with the request.
            ai_system_id: Value sent with the request.
            limit: Value sent with the request.
            cursor: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/governance/incidents"),
            query_params=[
                param[StatusDeliverdDevGovernanceApiOrStr | None]("status", status),
                param[UUID | None]("aiSystemId", ai_system_id),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1GovernanceIncidentsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_governance_incidents_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], GetApiV1GovernanceIncidentsByIdErrorBody]:
        """The incident, its DORA classification (``dora``: the facts, ``major``, each criterion and the reason), its
        reports with their sign-off status, and ``schedule``: which report is due next and by when. Nothing is due
        unless it is classified major.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/governance/incidents/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=get_api_v1_governance_incidents_by_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_governance_policies(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], RawError]:
        """Governed tasks record the version they were evaluated against. Publishing a version is done by a person in
        Deliverd.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/governance/policies"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_governance_summary(
        self,
        *,
        ai_system_id: UUID | None = None,
        risk: RiskOrStr | None = None,
        owner: str | None = None,
        provider: str | None = None,
        data_classification: str | None = None,
        jurisdiction: str | None = None,
        framework: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], GetApiV1GovernanceSummaryErrorBody]:
        """Systems, governed tasks, outstanding controls, pending approvals, expired exceptions, open incidents and what
        needs review. ``jurisdiction`` and ``framework`` filters are Enterprise. Never a compliance percentage.

        Args:
            ai_system_id: Value sent with the request.
            risk: Value sent with the request.
            owner: Value sent with the request.
            provider: Value sent with the request.
            data_classification: Value sent with the request.
            jurisdiction: Value sent with the request.
            framework: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/governance/summary"),
            query_params=[
                param[UUID | None]("aiSystemId", ai_system_id),
                param[RiskOrStr | None]("risk", risk),
                param[str | None]("owner", owner),
                param[str | None]("provider", provider),
                param[str | None]("dataClassification", data_classification),
                param[str | None]("jurisdiction", jurisdiction),
                param[str | None]("framework", framework),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=get_api_v1_governance_summary_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_governance_authority_evaluate(
        self,
        *,
        body: ApiV1GovernanceAuthorityEvaluateRequest | ApiV1GovernanceAuthorityEvaluateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1GovernanceAuthorityEvaluateErrorBody]:
        """Enterprise. By the organisation's authority policy and the agent's own, which can only be stricter. ``mode``
        is allowed, approval or denied. Records nothing.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/governance/authority/evaluate"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1GovernanceAuthorityEvaluateRequest | ApiV1GovernanceAuthorityEvaluateRequestDict | None
            ](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_governance_authority_evaluate_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_governance_frameworks(
        self,
        *,
        body: ApiV1GovernanceFrameworksRequest | ApiV1GovernanceFrameworksRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1GovernanceFrameworksErrorBody]:
        """Enterprise. Saved as a draft; it applies only once a person publishes and adopts it. A published version is
        never edited — a change is a new version.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/governance/frameworks"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1GovernanceFrameworksRequest | ApiV1GovernanceFrameworksRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_governance_frameworks_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_governance_incidents(
        self,
        *,
        body: ApiV1GovernanceIncidentsRequest | ApiV1GovernanceIncidentsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1GovernanceIncidentsErrorBody]:
        """Against a governed task, an AI system, or both. High or critical closes the task's governance gate until a
        person resolves it. Permanent: it cannot be edited or withdrawn.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/governance/incidents"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1GovernanceIncidentsRequest | ApiV1GovernanceIncidentsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_governance_incidents_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_governance_incidents_by_id_reports(
        self,
        id_: UUID,
        *,
        body: ApiV1GovernanceIncidentsReportsRequest | ApiV1GovernanceIncidentsReportsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1GovernanceIncidentsByIdReportsErrorBody]:
        """initial, intermediate or final on a major incident, in that order; or reclassification, for one notified as
        major and now not. Creates an approval for a person to sign it off. Needs approvals:write as well as
        tasks:write.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/governance/incidents/{id}/reports"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1GovernanceIncidentsReportsRequest | ApiV1GovernanceIncidentsReportsRequestDict | None](
                body
            ),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_governance_incidents_by_id_reports_error_mapper,
            request_options=request_options,
        )


class AsyncGovernanceApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_governance_frameworks(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], RawError]:
        """The built-in packs (NIST AI RMF, ISO/IEC 42001, EU AI Act, UK AI principles, DORA, SR 26-2, PRA SS1/23 and
        FCA AI good practice) with their requirements and versions, the organisation's own frameworks, and which are
        applied at which version. A pack maps requirements onto controls for review; it is not legal advice.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/governance/frameworks"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_governance_frameworks_mapping(
        self,
        *,
        task_id: UUID | None = None,
        framework: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], RawError]:
        """With ``taskId``, how far that governed task's completed controls cover each requirement. A mapping, never a
        compliance verdict.

        Args:
            task_id: Value sent with the request.
            framework: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/governance/frameworks/mapping"),
            query_params=[param[UUID | None]("taskId", task_id), param[str | None]("framework", framework)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_governance_ict_register(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], RawError]:
        """DORA's register of information, for the providers behind the organisation's AI systems: who keeps it
        (``entity``), the ``providers``, the ``arrangements`` (contracts) with the AI systems that run under each, what
        each entry still lacks (``gaps``), the ``concentration`` on each provider, and the AI systems not yet in the
        register.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/governance/ict-register"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_governance_ict_register_export(
        self,
        *,
        format_: FormatOrStr | None = None,
        template: TemplateOrStr | None = None,
        as_of: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], GetApiV1GovernanceIctRegisterExportErrorBody]:
        """B_01.01, B_02.01, B_02.02, B_05.01, B_06.01 and B_07.01 of Implementing Regulation (EU) 2024/2956, with the
        regulation's column codes. JSON is every template (or ``template``) with its columns and rows; ``format=csv`` is
        one template, headed by its column codes. Values nobody recorded are empty. For the organisation's own register
        to take in, not the submission itself.

        Args:
            format_: Value sent with the request.
            template: Value sent with the request.
            as_of: The reporting date; today when omitted
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/governance/ict-register/export"),
            query_params=[
                param[FormatOrStr | None]("format", format_),
                param[TemplateOrStr | None]("template", template),
                param[Date | None]("asOf", as_of),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=get_api_v1_governance_ict_register_export_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_governance_incidents(
        self,
        *,
        status: StatusDeliverdDevGovernanceApiOrStr | None = None,
        ai_system_id: UUID | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1GovernanceIncidentsResponse, RawError]:
        """Paged with ``limit`` and ``cursor``; ``nextCursor`` is null at the end. Incidents against a task you cannot
        read are left out.

        Args:
            status: Value sent with the request.
            ai_system_id: Value sent with the request.
            limit: Value sent with the request.
            cursor: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/governance/incidents"),
            query_params=[
                param[StatusDeliverdDevGovernanceApiOrStr | None]("status", status),
                param[UUID | None]("aiSystemId", ai_system_id),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1GovernanceIncidentsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_governance_incidents_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], GetApiV1GovernanceIncidentsByIdErrorBody]:
        """The incident, its DORA classification (``dora``: the facts, ``major``, each criterion and the reason), its
        reports with their sign-off status, and ``schedule``: which report is due next and by when. Nothing is due
        unless it is classified major.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/governance/incidents/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=get_api_v1_governance_incidents_by_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_governance_policies(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], RawError]:
        """Governed tasks record the version they were evaluated against. Publishing a version is done by a person in
        Deliverd.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/governance/policies"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_governance_summary(
        self,
        *,
        ai_system_id: UUID | None = None,
        risk: RiskOrStr | None = None,
        owner: str | None = None,
        provider: str | None = None,
        data_classification: str | None = None,
        jurisdiction: str | None = None,
        framework: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], GetApiV1GovernanceSummaryErrorBody]:
        """Systems, governed tasks, outstanding controls, pending approvals, expired exceptions, open incidents and what
        needs review. ``jurisdiction`` and ``framework`` filters are Enterprise. Never a compliance percentage.

        Args:
            ai_system_id: Value sent with the request.
            risk: Value sent with the request.
            owner: Value sent with the request.
            provider: Value sent with the request.
            data_classification: Value sent with the request.
            jurisdiction: Value sent with the request.
            framework: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/governance/summary"),
            query_params=[
                param[UUID | None]("aiSystemId", ai_system_id),
                param[RiskOrStr | None]("risk", risk),
                param[str | None]("owner", owner),
                param[str | None]("provider", provider),
                param[str | None]("dataClassification", data_classification),
                param[str | None]("jurisdiction", jurisdiction),
                param[str | None]("framework", framework),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=get_api_v1_governance_summary_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_governance_authority_evaluate(
        self,
        *,
        body: ApiV1GovernanceAuthorityEvaluateRequest | ApiV1GovernanceAuthorityEvaluateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1GovernanceAuthorityEvaluateErrorBody]:
        """Enterprise. By the organisation's authority policy and the agent's own, which can only be stricter. ``mode``
        is allowed, approval or denied. Records nothing.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/governance/authority/evaluate"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1GovernanceAuthorityEvaluateRequest | ApiV1GovernanceAuthorityEvaluateRequestDict | None
            ](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_governance_authority_evaluate_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_governance_frameworks(
        self,
        *,
        body: ApiV1GovernanceFrameworksRequest | ApiV1GovernanceFrameworksRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1GovernanceFrameworksErrorBody]:
        """Enterprise. Saved as a draft; it applies only once a person publishes and adopts it. A published version is
        never edited — a change is a new version.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/governance/frameworks"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1GovernanceFrameworksRequest | ApiV1GovernanceFrameworksRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_governance_frameworks_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_governance_incidents(
        self,
        *,
        body: ApiV1GovernanceIncidentsRequest | ApiV1GovernanceIncidentsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1GovernanceIncidentsErrorBody]:
        """Against a governed task, an AI system, or both. High or critical closes the task's governance gate until a
        person resolves it. Permanent: it cannot be edited or withdrawn.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/governance/incidents"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1GovernanceIncidentsRequest | ApiV1GovernanceIncidentsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_governance_incidents_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_governance_incidents_by_id_reports(
        self,
        id_: UUID,
        *,
        body: ApiV1GovernanceIncidentsReportsRequest | ApiV1GovernanceIncidentsReportsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1GovernanceIncidentsByIdReportsErrorBody]:
        """initial, intermediate or final on a major incident, in that order; or reclassification, for one notified as
        major and now not. Creates an approval for a person to sign it off. Needs approvals:write as well as
        tasks:write.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/governance/incidents/{id}/reports"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1GovernanceIncidentsReportsRequest | ApiV1GovernanceIncidentsReportsRequestDict | None](
                body
            ),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_governance_incidents_by_id_reports_error_mapper,
            request_options=request_options,
        )
