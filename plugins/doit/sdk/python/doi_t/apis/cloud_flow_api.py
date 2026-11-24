from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncAnySchemes,
    AsyncEventStream,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    EventStream,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    async_text_event_decoder,
    json_body,
    json_decoder,
    param,
    text_event_decoder,
    unwrap,
)
from ..errors.build_cloud_flow_error import BuildCloudFlowErrorBody, build_cloud_flow_error_mapper
from ..errors.export_cloudflow_flow_error import ExportCloudflowFlowErrorBody, export_cloudflow_flow_error_mapper
from ..errors.get_cloudflow_flow_run_error import GetCloudflowFlowRunErrorBody, get_cloudflow_flow_run_error_mapper
from ..errors.get_cloudflow_template_error import GetCloudflowTemplateErrorBody, get_cloudflow_template_error_mapper
from ..errors.import_cloudflow_flow_error import ImportCloudflowFlowErrorBody, import_cloudflow_flow_error_mapper
from ..errors.list_cloudflow_flow_runs_error import (
    ListCloudflowFlowRunsErrorBody,
    list_cloudflow_flow_runs_error_mapper,
)
from ..errors.list_cloudflow_templates_error import (
    ListCloudflowTemplatesErrorBody,
    list_cloudflow_templates_error_mapper,
)
from ..errors.list_cloudflows_error import ListCloudflowsErrorBody, list_cloudflows_error_mapper
from ..errors.refine_cloud_flow_error import RefineCloudFlowErrorBody, refine_cloud_flow_error_mapper
from ..errors.stop_cloudflow_flow_error import StopCloudflowFlowErrorBody, stop_cloudflow_flow_error_mapper
from ..errors.test_run_cloudflow_flow_error import TestRunCloudflowFlowErrorBody, test_run_cloudflow_flow_error_mapper
from ..errors.trigger_cloudflow_flow_error import TriggerCloudflowFlowErrorBody, trigger_cloudflow_flow_error_mapper
from ..errors.trigger_cloudflow_webhook_error import (
    TriggerCloudflowWebhookErrorBody,
    trigger_cloudflow_webhook_error_mapper,
)
from ..models.cloud_flow_build_request import CloudFlowBuildRequest, CloudFlowBuildRequestDict
from ..models.cloud_flow_refine_request import CloudFlowRefineRequest, CloudFlowRefineRequestDict
from ..models.cloudflow_flow_bundle import CloudflowFlowBundle
from ..models.cloudflow_import_flows_request import CloudflowImportFlowsRequest, CloudflowImportFlowsRequestDict
from ..models.cloudflow_import_plan import CloudflowImportPlan
from ..models.cloudflow_list_response import CloudflowListResponse
from ..models.cloudflow_run import CloudflowRun
from ..models.cloudflow_run_list import CloudflowRunList
from ..models.cloudflow_run_summary import CloudflowRunSummary
from ..models.cloudflow_template import CloudflowTemplate
from ..models.cloudflow_template_list_response import CloudflowTemplateListResponse
from ..models.cloudflow_v1_trigger_response import CloudflowV1TriggerResponse
from ..models.enums.mode_doi_t_cloud_flow_api import ModeDoiTCloudFlowApiOrStr
from ..server.server import Server


class CloudFlowApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CloudFlowApiWithRawResponse(client, server, auth)

    def build_cloud_flow(
        self,
        body: CloudFlowBuildRequest | CloudFlowBuildRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EventStream[str]:
        """Creates a new CloudFlow and generates its nodes and connections based on the provided natural language
        intent. The operation streams incremental build events, including the ID of the newly created flow, as they are
        produced.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Build event stream.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Acceptable — the client did not include ``text/event-stream`` in the Accept header. Internal Server
                Error - Something went wrong with the DoiT API server. Bad Gateway — the upstream build service returned
                an unexpected error. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.build_cloud_flow(body, request_options=request_options))

    def export_cloudflow_flow(
        self,
        flow_id: str,
        *,
        include_variable_values: bool | None = True,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CloudflowFlowBundle:
        """Serializes the flow — plus every flow it references through subflow nodes — into a tenant-neutral,
        credential-free JSON bundle that can be imported into any tenant with the import operation. Tenant-scoped
        references (connections, Datastore tables, global variables) are declared as named requirements and rebound at
        import time; policy and Slack-channel references cannot travel and are recorded as unsupported references. The
        bundle never contains credentials, tenant identifiers, schedules, or execution state.

        Args:
            flow_id: The ID of the flow to export.
            include_variable_values: When ``false``, local and global variable values are stripped from the bundle;
                names, types, and required-ness always travel. Connection-typed variable values are references, not
                values, and always travel as requirement tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The flow bundle.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unprocessable Entity - The request is well-formed but semantically invalid.
                Unexpected server error. ``error`` is ``ProblemDetails | Error | RawError``."""
        return unwrap(
            self._with_raw_response.export_cloudflow_flow(
                flow_id, include_variable_values=include_variable_values, request_options=request_options
            ),
        )

    def get_cloudflow_flow_run(
        self, flow_id: str, run_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CloudflowRun:
        """Returns a run's status and, for each node, the JSON it consumed and produced. This is how you find out *why*
        a run failed, or that it "succeeded" while producing the wrong data.

        **``input`` is null for most node types, and that is not an error.** Only action nodes — the AWS, GCP, Azure,
        Oracle, DoiT and admin operations — record their inputs. Transform, code, branch, switch, datastore, subflow and
        trigger nodes record none, so their ``input`` is always null. ``output`` is recorded by every node that
        finishes, so read a transform's behaviour from its ``output``.

        Payloads appear as soon as a node reports a terminal status, so a poll loop can read results while later nodes
        are still running.

        Any value the node's schema marks sensitive is replaced with a redaction marker; credentials and connection
        configuration never appear.

        Each ``input`` and ``output`` is capped at 64KB. When a payload exceeds that, whole entries are dropped from the
        end, ``truncated`` is true, and ``totalBytes`` reports the untruncated size — nothing is silently cut, and what
        you receive is always valid JSON.

        Runs belonging to another tenant, or to a different flow, return ``404``. Nodes inside a fan-out currently
        report only the last path to finish.

        Args:
            flow_id: The ID of the flow the run belongs to.
            run_id: The run identifier, as returned when the run was started.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The run and its per-node detail.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Too Many Requests. Unexpected server error. ``error`` is ``ProblemDetails |
                Error | RawError``."""
        return unwrap(self._with_raw_response.get_cloudflow_flow_run(flow_id, run_id, request_options=request_options))

    def get_cloudflow_template(
        self, template_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CloudflowTemplate:
        """Returns a single CloudFlow template by ID.

        Args:
            template_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_cloudflow_template(template_id, request_options=request_options))

    def import_cloudflow_flow(
        self,
        idempotency_key: str,
        body: CloudflowImportFlowsRequest | CloudflowImportFlowsRequestDict,
        *,
        dry_run: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CloudflowImportPlan:
        """Creates every flow of a previously exported bundle in the authenticated tenant. Imports are create-only: each
        call creates new draft flows with new IDs — nothing is published and no schedule is activated until the target
        tenant publishes.

        Requirements declared by the bundle are resolved through ``bindings`` (requirement key → target-tenant resource
        ID). Unbound connections and Datastore tables leave the referencing nodes flagged incomplete; unbound global
        variables are auto-created. Pass ``options.createMissingTables: true`` to create missing Datastore tables from
        the schemas embedded in the bundle (structure only, never row data).

        **Dry-run**: pass ``?dryRun=true`` to validate without writing. The response is an import plan: per-requirement
        resolutions with candidate bindings in the target tenant, the flows that would be created, and every validation
        issue at once.

        Args:
            idempotency_key: Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).
                Re-submitting the same key with the same request returns the cached response without re-executing side
                effects. The server retains the key for at least 24 hours.
            body: The request body.
            dry_run: If ``true``, validates the bundle and resolves its requirements against the tenant without
                committing changes, returning the import plan.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Dry-run import plan (no writes performed).

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. Unprocessable
                Entity - The request is well-formed but semantically invalid. Unexpected server error. ``error`` is
                ``ProblemDetails | Error | RawError``."""
        return unwrap(
            self._with_raw_response.import_cloudflow_flow(
                idempotency_key, body, dry_run=dry_run, request_options=request_options
            ),
        )

    def list_cloudflow_flow_runs(
        self,
        flow_id: str,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        mode: ModeDoiTCloudFlowApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CloudflowRunList:
        """Returns a flow's runs, newest first. Use ``mode`` to separate test runs from production ones — test runs are
        included by default.

        Per-node detail is not included here; fetch a single run to read what each node consumed and produced.

        Args:
            flow_id: The ID of the flow whose runs to list.
            max_results: Maximum runs to return.
            page_token: Continuation token from a previous response.
            mode: Restrict the listing to one kind of run. Omit for both.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of runs.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Too Many Requests. Unexpected server error. ``error`` is ``ProblemDetails |
                Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_cloudflow_flow_runs(
                flow_id, max_results=max_results, page_token=page_token, mode=mode, request_options=request_options
            ),
        )

    def list_cloudflow_templates(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CloudflowTemplateListResponse:
        """Returns the catalogue of available CloudFlow templates (blueprints). Templates are read-only. To create a
        flow from a template, use ``POST /flows`` with a ``templateId``.

        Args:
            max_results: Maximum number of templates to return (1–500). Defaults to 50.
            page_token: Opaque cursor for the next page, taken from ``pageToken`` in the previous response. Omit to
                start from the beginning.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_cloudflow_templates(
                max_results=max_results, page_token=page_token, request_options=request_options
            ),
        )

    def list_cloudflows(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CloudflowListResponse:
        """Returns a cursor-paginated list of CloudFlows.

        Args:
            max_results: Maximum number of flows to return (1–500). Defaults to 50.
            page_token: Opaque cursor for the next page, taken from ``pageToken`` in the previous response. Omit to
                start from the beginning.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated list of CloudFlows.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_cloudflows(
                max_results=max_results, page_token=page_token, request_options=request_options
            ),
        )

    def refine_cloud_flow(
        self,
        flow_id: str,
        body: CloudFlowRefineRequest | CloudFlowRefineRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EventStream[str]:
        """Refines the specified CloudFlow by generating and updating nodes and connections based on the provided
        natural language intent. The operation streams incremental build events as they are produced.

        Args:
            flow_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Refine event stream.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Acceptable — the client did not include ``text/event-stream`` in the Accept header. Internal Server
                Error - Something went wrong with the DoiT API server. Bad Gateway — the upstream refine service
                returned an unexpected error. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.refine_cloud_flow(flow_id, body, request_options=request_options))

    def stop_cloudflow_flow(
        self, flow_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CloudflowRunSummary:
        """Stops the run currently in progress for the given flow. The run is identified from the flow alone — no run ID
        is needed, since a flow can only have one run active at a time.

        No ``Idempotency-Key`` is required. This is a state transition, not a resource creation.

        Returns ``409`` when the flow has no run in progress, which includes a run that reached a terminal state between
        this request and the stop attempt.

        Args:
            flow_id: The ID of the flow whose in-progress run should be stopped.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The run was stopped. The body is the run as it stands after stopping.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. The request conflicts with the current state of the resource. Too Many
                Requests. Unexpected server error. ``error`` is ``ProblemDetails | Error | RawError``."""
        return unwrap(self._with_raw_response.stop_cloudflow_flow(flow_id, request_options=request_options))

    def test_run_cloudflow_flow(
        self,
        flow_id: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = None,
        body: Any | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CloudflowRunSummary:
        """Runs a flow once as a test, and **accepts an unpublished (draft) flow** — unlike ``actions/trigger``, which
        requires the flow to be published. Use this to verify a newly authored or edited flow before publishing it.

        Execution is identical to a production run: the same graph, the same bound connections, the same credentials,
        and the same approval behaviour. An approval-gated node still parks the run and its side effect still waits for
        a real approval — there is no request that skips one.

        The run is recorded as a test, so it does not appear in run history, does not count towards dashboard
        statistics, does not become a dashboard widget's data source, and does not consume a scheduled-run budget. It
        does hold the flow's concurrency lock, so a ``409`` is returned while the flow is already running.

        The flow's first node must be a webhook, scheduled, or manual trigger.

        Before dispatching, the flow is validated with the same checks publish applies — a draft has never been through
        them. A flow that fails returns ``422`` listing every offending node at once, so all of them can be fixed in one
        pass.

        Poll the ``Location`` URL to follow the run and read what each node produced.

        Pass ``?dryRun=true`` to validate the flow without starting a run.

        Args:
            flow_id: The ID of the flow to test-run.
            idempotency_key: Unique key so a retried request cannot start a second run.
            dry_run: Validate the flow and return the outcome without starting a run.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Test run accepted. The response is a snapshot taken at dispatch, so ``status`` is ``pending``; follow the
            ``Location`` header to read the run as it progresses.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. The request conflicts with the current state of the resource. The flow cannot
                be run. ``details`` names every node that must be fixed. Too Many Requests. Unexpected server error.
                ``error`` is ``ProblemDetails | CloudflowTestRunValidation | Error | RawError``."""
        return unwrap(
            self._with_raw_response.test_run_cloudflow_flow(
                flow_id, idempotency_key, dry_run=dry_run, body=body, request_options=request_options
            ),
        )

    def trigger_cloudflow_flow(
        self, flow_id: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> CloudflowRunSummary:
        """Starts a run of a **published** flow whose first node is a webhook, scheduled, or manual trigger. A draft
        flow is rejected with ``422`` — use ``actions/test-run`` to run one.

        No ``Idempotency-Key`` is required. This is a state transition, not a resource creation.

        The response is a snapshot taken at dispatch, so ``status`` is always ``pending`` and the timing fields are not
        yet populated. Read the run back through ``GET /cloudflow/v1/flows/{flowId}/runs/{runId}`` to follow its
        progress.

        A flow holds a concurrency lock while it runs, so triggering one that is already running returns ``409`` with
        the active run embedded in the problem body — no second lookup needed.

        Args:
            flow_id: The ID of the flow to trigger.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The run was started. The snapshot is taken at dispatch, so ``status`` is ``pending``.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. The flow is already running. Extends the standard problem shape with an
                ``execution`` field holding the run that is currently active. The flow cannot be triggered: it is not
                published (``flow_not_published``), or its first node is not a startable trigger
                (``invalid_trigger_type``). Too Many Requests. Unexpected server error. ``error`` is ``ProblemDetails |
                CloudflowV1FlowsActionsTrigger409Error1 | Error | RawError``."""
        return unwrap(
            self._with_raw_response.trigger_cloudflow_flow(flow_id, body=body, request_options=request_options)
        )

    def trigger_cloudflow_webhook(
        self, flow_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None
    ) -> CloudflowV1TriggerResponse:
        """Triggers execution of a published CloudFlow whose first node is a webhook trigger. The request body must be
        valid JSON and is passed to the flow as webhook payload data.

        Args:
            flow_id: The unique ID of the published CloudFlow to trigger.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Accepted - CloudFlow execution started.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Conflict - The CloudFlow already has an active execution
                and cannot be triggered until it completes. Internal Server Error - Something went wrong with the DoiT
                API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.trigger_cloudflow_webhook(flow_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> CloudFlowApiWithRawResponse:
        return self._with_raw_response


class AsyncCloudFlowApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCloudFlowApiWithRawResponse(client, server, auth)

    async def build_cloud_flow(
        self,
        body: CloudFlowBuildRequest | CloudFlowBuildRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncEventStream[str]:
        """Creates a new CloudFlow and generates its nodes and connections based on the provided natural language
        intent. The operation streams incremental build events, including the ID of the newly created flow, as they are
        produced.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Build event stream.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Acceptable — the client did not include ``text/event-stream`` in the Accept header. Internal Server
                Error - Something went wrong with the DoiT API server. Bad Gateway — the upstream build service returned
                an unexpected error. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.build_cloud_flow(body, request_options=request_options))

    async def export_cloudflow_flow(
        self,
        flow_id: str,
        *,
        include_variable_values: bool | None = True,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CloudflowFlowBundle:
        """Serializes the flow — plus every flow it references through subflow nodes — into a tenant-neutral,
        credential-free JSON bundle that can be imported into any tenant with the import operation. Tenant-scoped
        references (connections, Datastore tables, global variables) are declared as named requirements and rebound at
        import time; policy and Slack-channel references cannot travel and are recorded as unsupported references. The
        bundle never contains credentials, tenant identifiers, schedules, or execution state.

        Args:
            flow_id: The ID of the flow to export.
            include_variable_values: When ``false``, local and global variable values are stripped from the bundle;
                names, types, and required-ness always travel. Connection-typed variable values are references, not
                values, and always travel as requirement tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The flow bundle.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unprocessable Entity - The request is well-formed but semantically invalid.
                Unexpected server error. ``error`` is ``ProblemDetails | Error | RawError``."""
        return unwrap(
            await self._with_raw_response.export_cloudflow_flow(
                flow_id, include_variable_values=include_variable_values, request_options=request_options
            ),
        )

    async def get_cloudflow_flow_run(
        self, flow_id: str, run_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CloudflowRun:
        """Returns a run's status and, for each node, the JSON it consumed and produced. This is how you find out *why*
        a run failed, or that it "succeeded" while producing the wrong data.

        **``input`` is null for most node types, and that is not an error.** Only action nodes — the AWS, GCP, Azure,
        Oracle, DoiT and admin operations — record their inputs. Transform, code, branch, switch, datastore, subflow and
        trigger nodes record none, so their ``input`` is always null. ``output`` is recorded by every node that
        finishes, so read a transform's behaviour from its ``output``.

        Payloads appear as soon as a node reports a terminal status, so a poll loop can read results while later nodes
        are still running.

        Any value the node's schema marks sensitive is replaced with a redaction marker; credentials and connection
        configuration never appear.

        Each ``input`` and ``output`` is capped at 64KB. When a payload exceeds that, whole entries are dropped from the
        end, ``truncated`` is true, and ``totalBytes`` reports the untruncated size — nothing is silently cut, and what
        you receive is always valid JSON.

        Runs belonging to another tenant, or to a different flow, return ``404``. Nodes inside a fan-out currently
        report only the last path to finish.

        Args:
            flow_id: The ID of the flow the run belongs to.
            run_id: The run identifier, as returned when the run was started.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The run and its per-node detail.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Too Many Requests. Unexpected server error. ``error`` is ``ProblemDetails |
                Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_cloudflow_flow_run(flow_id, run_id, request_options=request_options)
        )

    async def get_cloudflow_template(
        self, template_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CloudflowTemplate:
        """Returns a single CloudFlow template by ID.

        Args:
            template_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_cloudflow_template(template_id, request_options=request_options)
        )

    async def import_cloudflow_flow(
        self,
        idempotency_key: str,
        body: CloudflowImportFlowsRequest | CloudflowImportFlowsRequestDict,
        *,
        dry_run: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CloudflowImportPlan:
        """Creates every flow of a previously exported bundle in the authenticated tenant. Imports are create-only: each
        call creates new draft flows with new IDs — nothing is published and no schedule is activated until the target
        tenant publishes.

        Requirements declared by the bundle are resolved through ``bindings`` (requirement key → target-tenant resource
        ID). Unbound connections and Datastore tables leave the referencing nodes flagged incomplete; unbound global
        variables are auto-created. Pass ``options.createMissingTables: true`` to create missing Datastore tables from
        the schemas embedded in the bundle (structure only, never row data).

        **Dry-run**: pass ``?dryRun=true`` to validate without writing. The response is an import plan: per-requirement
        resolutions with candidate bindings in the target tenant, the flows that would be created, and every validation
        issue at once.

        Args:
            idempotency_key: Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).
                Re-submitting the same key with the same request returns the cached response without re-executing side
                effects. The server retains the key for at least 24 hours.
            body: The request body.
            dry_run: If ``true``, validates the bundle and resolves its requirements against the tenant without
                committing changes, returning the import plan.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Dry-run import plan (no writes performed).

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. Unprocessable
                Entity - The request is well-formed but semantically invalid. Unexpected server error. ``error`` is
                ``ProblemDetails | Error | RawError``."""
        return unwrap(
            await self._with_raw_response.import_cloudflow_flow(
                idempotency_key, body, dry_run=dry_run, request_options=request_options
            ),
        )

    async def list_cloudflow_flow_runs(
        self,
        flow_id: str,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        mode: ModeDoiTCloudFlowApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CloudflowRunList:
        """Returns a flow's runs, newest first. Use ``mode`` to separate test runs from production ones — test runs are
        included by default.

        Per-node detail is not included here; fetch a single run to read what each node consumed and produced.

        Args:
            flow_id: The ID of the flow whose runs to list.
            max_results: Maximum runs to return.
            page_token: Continuation token from a previous response.
            mode: Restrict the listing to one kind of run. Omit for both.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of runs.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Too Many Requests. Unexpected server error. ``error`` is ``ProblemDetails |
                Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_cloudflow_flow_runs(
                flow_id, max_results=max_results, page_token=page_token, mode=mode, request_options=request_options
            ),
        )

    async def list_cloudflow_templates(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CloudflowTemplateListResponse:
        """Returns the catalogue of available CloudFlow templates (blueprints). Templates are read-only. To create a
        flow from a template, use ``POST /flows`` with a ``templateId``.

        Args:
            max_results: Maximum number of templates to return (1–500). Defaults to 50.
            page_token: Opaque cursor for the next page, taken from ``pageToken`` in the previous response. Omit to
                start from the beginning.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_cloudflow_templates(
                max_results=max_results, page_token=page_token, request_options=request_options
            ),
        )

    async def list_cloudflows(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CloudflowListResponse:
        """Returns a cursor-paginated list of CloudFlows.

        Args:
            max_results: Maximum number of flows to return (1–500). Defaults to 50.
            page_token: Opaque cursor for the next page, taken from ``pageToken`` in the previous response. Omit to
                start from the beginning.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated list of CloudFlows.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_cloudflows(
                max_results=max_results, page_token=page_token, request_options=request_options
            ),
        )

    async def refine_cloud_flow(
        self,
        flow_id: str,
        body: CloudFlowRefineRequest | CloudFlowRefineRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncEventStream[str]:
        """Refines the specified CloudFlow by generating and updating nodes and connections based on the provided
        natural language intent. The operation streams incremental build events as they are produced.

        Args:
            flow_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Refine event stream.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Acceptable — the client did not include ``text/event-stream`` in the Accept header. Internal Server
                Error - Something went wrong with the DoiT API server. Bad Gateway — the upstream refine service
                returned an unexpected error. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.refine_cloud_flow(flow_id, body, request_options=request_options))

    async def stop_cloudflow_flow(
        self, flow_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CloudflowRunSummary:
        """Stops the run currently in progress for the given flow. The run is identified from the flow alone — no run ID
        is needed, since a flow can only have one run active at a time.

        No ``Idempotency-Key`` is required. This is a state transition, not a resource creation.

        Returns ``409`` when the flow has no run in progress, which includes a run that reached a terminal state between
        this request and the stop attempt.

        Args:
            flow_id: The ID of the flow whose in-progress run should be stopped.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The run was stopped. The body is the run as it stands after stopping.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. The request conflicts with the current state of the resource. Too Many
                Requests. Unexpected server error. ``error`` is ``ProblemDetails | Error | RawError``."""
        return unwrap(await self._with_raw_response.stop_cloudflow_flow(flow_id, request_options=request_options))

    async def test_run_cloudflow_flow(
        self,
        flow_id: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = None,
        body: Any | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CloudflowRunSummary:
        """Runs a flow once as a test, and **accepts an unpublished (draft) flow** — unlike ``actions/trigger``, which
        requires the flow to be published. Use this to verify a newly authored or edited flow before publishing it.

        Execution is identical to a production run: the same graph, the same bound connections, the same credentials,
        and the same approval behaviour. An approval-gated node still parks the run and its side effect still waits for
        a real approval — there is no request that skips one.

        The run is recorded as a test, so it does not appear in run history, does not count towards dashboard
        statistics, does not become a dashboard widget's data source, and does not consume a scheduled-run budget. It
        does hold the flow's concurrency lock, so a ``409`` is returned while the flow is already running.

        The flow's first node must be a webhook, scheduled, or manual trigger.

        Before dispatching, the flow is validated with the same checks publish applies — a draft has never been through
        them. A flow that fails returns ``422`` listing every offending node at once, so all of them can be fixed in one
        pass.

        Poll the ``Location`` URL to follow the run and read what each node produced.

        Pass ``?dryRun=true`` to validate the flow without starting a run.

        Args:
            flow_id: The ID of the flow to test-run.
            idempotency_key: Unique key so a retried request cannot start a second run.
            dry_run: Validate the flow and return the outcome without starting a run.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Test run accepted. The response is a snapshot taken at dispatch, so ``status`` is ``pending``; follow the
            ``Location`` header to read the run as it progresses.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. The request conflicts with the current state of the resource. The flow cannot
                be run. ``details`` names every node that must be fixed. Too Many Requests. Unexpected server error.
                ``error`` is ``ProblemDetails | CloudflowTestRunValidation | Error | RawError``."""
        return unwrap(
            await self._with_raw_response.test_run_cloudflow_flow(
                flow_id, idempotency_key, dry_run=dry_run, body=body, request_options=request_options
            ),
        )

    async def trigger_cloudflow_flow(
        self, flow_id: str, *, body: Any | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CloudflowRunSummary:
        """Starts a run of a **published** flow whose first node is a webhook, scheduled, or manual trigger. A draft
        flow is rejected with ``422`` — use ``actions/test-run`` to run one.

        No ``Idempotency-Key`` is required. This is a state transition, not a resource creation.

        The response is a snapshot taken at dispatch, so ``status`` is always ``pending`` and the timing fields are not
        yet populated. Read the run back through ``GET /cloudflow/v1/flows/{flowId}/runs/{runId}`` to follow its
        progress.

        A flow holds a concurrency lock while it runs, so triggering one that is already running returns ``409`` with
        the active run embedded in the problem body — no second lookup needed.

        Args:
            flow_id: The ID of the flow to trigger.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The run was started. The snapshot is taken at dispatch, so ``status`` is ``pending``.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. The flow is already running. Extends the standard problem shape with an
                ``execution`` field holding the run that is currently active. The flow cannot be triggered: it is not
                published (``flow_not_published``), or its first node is not a startable trigger
                (``invalid_trigger_type``). Too Many Requests. Unexpected server error. ``error`` is ``ProblemDetails |
                CloudflowV1FlowsActionsTrigger409Error1 | Error | RawError``."""
        return unwrap(
            await self._with_raw_response.trigger_cloudflow_flow(flow_id, body=body, request_options=request_options)
        )

    async def trigger_cloudflow_webhook(
        self, flow_id: str, body: Any, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CloudflowV1TriggerResponse:
        """Triggers execution of a published CloudFlow whose first node is a webhook trigger. The request body must be
        valid JSON and is passed to the flow as webhook payload data.

        Args:
            flow_id: The unique ID of the published CloudFlow to trigger.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Accepted - CloudFlow execution started.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Conflict - The CloudFlow already has an active execution
                and cannot be triggered until it completes. Internal Server Error - Something went wrong with the DoiT
                API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.trigger_cloudflow_webhook(flow_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncCloudFlowApiWithRawResponse:
        return self._with_raw_response


class CloudFlowApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def build_cloud_flow(
        self,
        body: CloudFlowBuildRequest | CloudFlowBuildRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EventStream[str], BuildCloudFlowErrorBody]:
        """Creates a new CloudFlow and generates its nodes and connections based on the provided natural language
        intent. The operation streams incremental build events, including the ID of the newly created flow, as they are
        produced.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/cloudflow/v1/flows/actions/build"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CloudFlowBuildRequest | CloudFlowBuildRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=text_event_decoder[str](),
            error_mapper=build_cloud_flow_error_mapper,
            request_options=request_options,
        )

    def export_cloudflow_flow(
        self,
        flow_id: str,
        *,
        include_variable_values: bool | None = True,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudflowFlowBundle, ExportCloudflowFlowErrorBody]:
        """Serializes the flow — plus every flow it references through subflow nodes — into a tenant-neutral,
        credential-free JSON bundle that can be imported into any tenant with the import operation. Tenant-scoped
        references (connections, Datastore tables, global variables) are declared as named requirements and rebound at
        import time; policy and Slack-channel references cannot travel and are recorded as unsupported references. The
        bundle never contains credentials, tenant identifiers, schedules, or execution state.

        Args:
            flow_id: The ID of the flow to export.
            include_variable_values: When ``false``, local and global variable values are stripped from the bundle;
                names, types, and required-ness always travel. Connection-typed variable values are references, not
                values, and always travel as requirement tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/cloudflow/v1/flows/{flowId}/export"),
            path_params=[param[str]("flowId", flow_id)],
            query_params=[param[bool | None]("includeVariableValues", include_variable_values)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CloudflowFlowBundle],
            error_mapper=export_cloudflow_flow_error_mapper,
            request_options=request_options,
        )

    def get_cloudflow_flow_run(
        self, flow_id: str, run_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CloudflowRun, GetCloudflowFlowRunErrorBody]:
        """Returns a run's status and, for each node, the JSON it consumed and produced. This is how you find out *why*
        a run failed, or that it "succeeded" while producing the wrong data.

        **``input`` is null for most node types, and that is not an error.** Only action nodes — the AWS, GCP, Azure,
        Oracle, DoiT and admin operations — record their inputs. Transform, code, branch, switch, datastore, subflow and
        trigger nodes record none, so their ``input`` is always null. ``output`` is recorded by every node that
        finishes, so read a transform's behaviour from its ``output``.

        Payloads appear as soon as a node reports a terminal status, so a poll loop can read results while later nodes
        are still running.

        Any value the node's schema marks sensitive is replaced with a redaction marker; credentials and connection
        configuration never appear.

        Each ``input`` and ``output`` is capped at 64KB. When a payload exceeds that, whole entries are dropped from the
        end, ``truncated`` is true, and ``totalBytes`` reports the untruncated size — nothing is silently cut, and what
        you receive is always valid JSON.

        Runs belonging to another tenant, or to a different flow, return ``404``. Nodes inside a fan-out currently
        report only the last path to finish.

        Args:
            flow_id: The ID of the flow the run belongs to.
            run_id: The run identifier, as returned when the run was started.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/cloudflow/v1/flows/{flowId}/runs/{runId}"),
            path_params=[param[str]("flowId", flow_id), param[str]("runId", run_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CloudflowRun],
            error_mapper=get_cloudflow_flow_run_error_mapper,
            request_options=request_options,
        )

    def get_cloudflow_template(
        self, template_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CloudflowTemplate, GetCloudflowTemplateErrorBody]:
        """Returns a single CloudFlow template by ID.

        Args:
            template_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/cloudflow/v1/templates/{templateId}"),
            path_params=[param[str]("templateId", template_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CloudflowTemplate],
            error_mapper=get_cloudflow_template_error_mapper,
            request_options=request_options,
        )

    def import_cloudflow_flow(
        self,
        idempotency_key: str,
        body: CloudflowImportFlowsRequest | CloudflowImportFlowsRequestDict,
        *,
        dry_run: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudflowImportPlan, ImportCloudflowFlowErrorBody]:
        """Creates every flow of a previously exported bundle in the authenticated tenant. Imports are create-only: each
        call creates new draft flows with new IDs — nothing is published and no schedule is activated until the target
        tenant publishes.

        Requirements declared by the bundle are resolved through ``bindings`` (requirement key → target-tenant resource
        ID). Unbound connections and Datastore tables leave the referencing nodes flagged incomplete; unbound global
        variables are auto-created. Pass ``options.createMissingTables: true`` to create missing Datastore tables from
        the schemas embedded in the bundle (structure only, never row data).

        **Dry-run**: pass ``?dryRun=true`` to validate without writing. The response is an import plan: per-requirement
        resolutions with candidate bindings in the target tenant, the flows that would be created, and every validation
        issue at once.

        Args:
            idempotency_key: Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).
                Re-submitting the same key with the same request returns the cached response without re-executing side
                effects. The server retains the key for at least 24 hours.
            body: The request body.
            dry_run: If ``true``, validates the bundle and resolves its requirements against the tenant without
                committing changes, returning the import plan.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/cloudflow/v1/flows/actions/import"),
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            body=json_body[CloudflowImportFlowsRequest | CloudflowImportFlowsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CloudflowImportPlan],
            error_mapper=import_cloudflow_flow_error_mapper,
            request_options=request_options,
        )

    def list_cloudflow_flow_runs(
        self,
        flow_id: str,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        mode: ModeDoiTCloudFlowApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudflowRunList, ListCloudflowFlowRunsErrorBody]:
        """Returns a flow's runs, newest first. Use ``mode`` to separate test runs from production ones — test runs are
        included by default.

        Per-node detail is not included here; fetch a single run to read what each node consumed and produced.

        Args:
            flow_id: The ID of the flow whose runs to list.
            max_results: Maximum runs to return.
            page_token: Continuation token from a previous response.
            mode: Restrict the listing to one kind of run. Omit for both.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/cloudflow/v1/flows/{flowId}/runs"),
            path_params=[param[str]("flowId", flow_id)],
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[ModeDoiTCloudFlowApiOrStr | None]("mode", mode),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CloudflowRunList],
            error_mapper=list_cloudflow_flow_runs_error_mapper,
            request_options=request_options,
        )

    def list_cloudflow_templates(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudflowTemplateListResponse, ListCloudflowTemplatesErrorBody]:
        """Returns the catalogue of available CloudFlow templates (blueprints). Templates are read-only. To create a
        flow from a template, use ``POST /flows`` with a ``templateId``.

        Args:
            max_results: Maximum number of templates to return (1–500). Defaults to 50.
            page_token: Opaque cursor for the next page, taken from ``pageToken`` in the previous response. Omit to
                start from the beginning.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/cloudflow/v1/templates"),
            query_params=[param[int | None]("maxResults", max_results), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CloudflowTemplateListResponse],
            error_mapper=list_cloudflow_templates_error_mapper,
            request_options=request_options,
        )

    def list_cloudflows(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudflowListResponse, ListCloudflowsErrorBody]:
        """Returns a cursor-paginated list of CloudFlows.

        Args:
            max_results: Maximum number of flows to return (1–500). Defaults to 50.
            page_token: Opaque cursor for the next page, taken from ``pageToken`` in the previous response. Omit to
                start from the beginning.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/cloudflow/v1/flows"),
            query_params=[param[int | None]("maxResults", max_results), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CloudflowListResponse],
            error_mapper=list_cloudflows_error_mapper,
            request_options=request_options,
        )

    def refine_cloud_flow(
        self,
        flow_id: str,
        body: CloudFlowRefineRequest | CloudFlowRefineRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EventStream[str], RefineCloudFlowErrorBody]:
        """Refines the specified CloudFlow by generating and updating nodes and connections based on the provided
        natural language intent. The operation streams incremental build events as they are produced.

        Args:
            flow_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/cloudflow/v1/flows/{flowId}/actions/refine"),
            path_params=[param[str]("flowId", flow_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CloudFlowRefineRequest | CloudFlowRefineRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=text_event_decoder[str](),
            error_mapper=refine_cloud_flow_error_mapper,
            request_options=request_options,
        )

    def stop_cloudflow_flow(
        self, flow_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CloudflowRunSummary, StopCloudflowFlowErrorBody]:
        """Stops the run currently in progress for the given flow. The run is identified from the flow alone — no run ID
        is needed, since a flow can only have one run active at a time.

        No ``Idempotency-Key`` is required. This is a state transition, not a resource creation.

        Returns ``409`` when the flow has no run in progress, which includes a run that reached a terminal state between
        this request and the stop attempt.

        Args:
            flow_id: The ID of the flow whose in-progress run should be stopped.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/cloudflow/v1/flows/{flowId}/actions/stop"),
            path_params=[param[str]("flowId", flow_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CloudflowRunSummary],
            error_mapper=stop_cloudflow_flow_error_mapper,
            request_options=request_options,
        )

    def test_run_cloudflow_flow(
        self,
        flow_id: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = None,
        body: Any | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudflowRunSummary, TestRunCloudflowFlowErrorBody]:
        """Runs a flow once as a test, and **accepts an unpublished (draft) flow** — unlike ``actions/trigger``, which
        requires the flow to be published. Use this to verify a newly authored or edited flow before publishing it.

        Execution is identical to a production run: the same graph, the same bound connections, the same credentials,
        and the same approval behaviour. An approval-gated node still parks the run and its side effect still waits for
        a real approval — there is no request that skips one.

        The run is recorded as a test, so it does not appear in run history, does not count towards dashboard
        statistics, does not become a dashboard widget's data source, and does not consume a scheduled-run budget. It
        does hold the flow's concurrency lock, so a ``409`` is returned while the flow is already running.

        The flow's first node must be a webhook, scheduled, or manual trigger.

        Before dispatching, the flow is validated with the same checks publish applies — a draft has never been through
        them. A flow that fails returns ``422`` listing every offending node at once, so all of them can be fixed in one
        pass.

        Poll the ``Location`` URL to follow the run and read what each node produced.

        Pass ``?dryRun=true`` to validate the flow without starting a run.

        Args:
            flow_id: The ID of the flow to test-run.
            idempotency_key: Unique key so a retried request cannot start a second run.
            dry_run: Validate the flow and return the outcome without starting a run.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/cloudflow/v1/flows/{flowId}/actions/test-run"),
            path_params=[param[str]("flowId", flow_id)],
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            body=json_body[Any | None](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CloudflowRunSummary],
            error_mapper=test_run_cloudflow_flow_error_mapper,
            request_options=request_options,
        )

    def trigger_cloudflow_flow(
        self, flow_id: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CloudflowRunSummary, TriggerCloudflowFlowErrorBody]:
        """Starts a run of a **published** flow whose first node is a webhook, scheduled, or manual trigger. A draft
        flow is rejected with ``422`` — use ``actions/test-run`` to run one.

        No ``Idempotency-Key`` is required. This is a state transition, not a resource creation.

        The response is a snapshot taken at dispatch, so ``status`` is always ``pending`` and the timing fields are not
        yet populated. Read the run back through ``GET /cloudflow/v1/flows/{flowId}/runs/{runId}`` to follow its
        progress.

        A flow holds a concurrency lock while it runs, so triggering one that is already running returns ``409`` with
        the active run embedded in the problem body — no second lookup needed.

        Args:
            flow_id: The ID of the flow to trigger.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/cloudflow/v1/flows/{flowId}/actions/trigger"),
            path_params=[param[str]("flowId", flow_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CloudflowRunSummary],
            error_mapper=trigger_cloudflow_flow_error_mapper,
            request_options=request_options,
        )

    def trigger_cloudflow_webhook(
        self, flow_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CloudflowV1TriggerResponse, TriggerCloudflowWebhookErrorBody]:
        """Triggers execution of a published CloudFlow whose first node is a webhook trigger. The request body must be
        valid JSON and is passed to the flow as webhook payload data.

        Args:
            flow_id: The unique ID of the published CloudFlow to trigger.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/cloudflow/v1/trigger/{flowId}"),
            path_params=[param[str]("flowId", flow_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CloudflowV1TriggerResponse],
            error_mapper=trigger_cloudflow_webhook_error_mapper,
            request_options=request_options,
        )


class AsyncCloudFlowApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def build_cloud_flow(
        self,
        body: CloudFlowBuildRequest | CloudFlowBuildRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncEventStream[str], BuildCloudFlowErrorBody]:
        """Creates a new CloudFlow and generates its nodes and connections based on the provided natural language
        intent. The operation streams incremental build events, including the ID of the newly created flow, as they are
        produced.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/cloudflow/v1/flows/actions/build"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CloudFlowBuildRequest | CloudFlowBuildRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_text_event_decoder[str](),
            error_mapper=build_cloud_flow_error_mapper,
            request_options=request_options,
        )

    async def export_cloudflow_flow(
        self,
        flow_id: str,
        *,
        include_variable_values: bool | None = True,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudflowFlowBundle, ExportCloudflowFlowErrorBody]:
        """Serializes the flow — plus every flow it references through subflow nodes — into a tenant-neutral,
        credential-free JSON bundle that can be imported into any tenant with the import operation. Tenant-scoped
        references (connections, Datastore tables, global variables) are declared as named requirements and rebound at
        import time; policy and Slack-channel references cannot travel and are recorded as unsupported references. The
        bundle never contains credentials, tenant identifiers, schedules, or execution state.

        Args:
            flow_id: The ID of the flow to export.
            include_variable_values: When ``false``, local and global variable values are stripped from the bundle;
                names, types, and required-ness always travel. Connection-typed variable values are references, not
                values, and always travel as requirement tokens.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/cloudflow/v1/flows/{flowId}/export"),
            path_params=[param[str]("flowId", flow_id)],
            query_params=[param[bool | None]("includeVariableValues", include_variable_values)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CloudflowFlowBundle],
            error_mapper=export_cloudflow_flow_error_mapper,
            request_options=request_options,
        )

    async def get_cloudflow_flow_run(
        self, flow_id: str, run_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CloudflowRun, GetCloudflowFlowRunErrorBody]:
        """Returns a run's status and, for each node, the JSON it consumed and produced. This is how you find out *why*
        a run failed, or that it "succeeded" while producing the wrong data.

        **``input`` is null for most node types, and that is not an error.** Only action nodes — the AWS, GCP, Azure,
        Oracle, DoiT and admin operations — record their inputs. Transform, code, branch, switch, datastore, subflow and
        trigger nodes record none, so their ``input`` is always null. ``output`` is recorded by every node that
        finishes, so read a transform's behaviour from its ``output``.

        Payloads appear as soon as a node reports a terminal status, so a poll loop can read results while later nodes
        are still running.

        Any value the node's schema marks sensitive is replaced with a redaction marker; credentials and connection
        configuration never appear.

        Each ``input`` and ``output`` is capped at 64KB. When a payload exceeds that, whole entries are dropped from the
        end, ``truncated`` is true, and ``totalBytes`` reports the untruncated size — nothing is silently cut, and what
        you receive is always valid JSON.

        Runs belonging to another tenant, or to a different flow, return ``404``. Nodes inside a fan-out currently
        report only the last path to finish.

        Args:
            flow_id: The ID of the flow the run belongs to.
            run_id: The run identifier, as returned when the run was started.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/cloudflow/v1/flows/{flowId}/runs/{runId}"),
            path_params=[param[str]("flowId", flow_id), param[str]("runId", run_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CloudflowRun],
            error_mapper=get_cloudflow_flow_run_error_mapper,
            request_options=request_options,
        )

    async def get_cloudflow_template(
        self, template_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CloudflowTemplate, GetCloudflowTemplateErrorBody]:
        """Returns a single CloudFlow template by ID.

        Args:
            template_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/cloudflow/v1/templates/{templateId}"),
            path_params=[param[str]("templateId", template_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CloudflowTemplate],
            error_mapper=get_cloudflow_template_error_mapper,
            request_options=request_options,
        )

    async def import_cloudflow_flow(
        self,
        idempotency_key: str,
        body: CloudflowImportFlowsRequest | CloudflowImportFlowsRequestDict,
        *,
        dry_run: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudflowImportPlan, ImportCloudflowFlowErrorBody]:
        """Creates every flow of a previously exported bundle in the authenticated tenant. Imports are create-only: each
        call creates new draft flows with new IDs — nothing is published and no schedule is activated until the target
        tenant publishes.

        Requirements declared by the bundle are resolved through ``bindings`` (requirement key → target-tenant resource
        ID). Unbound connections and Datastore tables leave the referencing nodes flagged incomplete; unbound global
        variables are auto-created. Pass ``options.createMissingTables: true`` to create missing Datastore tables from
        the schemas embedded in the bundle (structure only, never row data).

        **Dry-run**: pass ``?dryRun=true`` to validate without writing. The response is an import plan: per-requirement
        resolutions with candidate bindings in the target tenant, the flows that would be created, and every validation
        issue at once.

        Args:
            idempotency_key: Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).
                Re-submitting the same key with the same request returns the cached response without re-executing side
                effects. The server retains the key for at least 24 hours.
            body: The request body.
            dry_run: If ``true``, validates the bundle and resolves its requirements against the tenant without
                committing changes, returning the import plan.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/cloudflow/v1/flows/actions/import"),
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            body=json_body[CloudflowImportFlowsRequest | CloudflowImportFlowsRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CloudflowImportPlan],
            error_mapper=import_cloudflow_flow_error_mapper,
            request_options=request_options,
        )

    async def list_cloudflow_flow_runs(
        self,
        flow_id: str,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        mode: ModeDoiTCloudFlowApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudflowRunList, ListCloudflowFlowRunsErrorBody]:
        """Returns a flow's runs, newest first. Use ``mode`` to separate test runs from production ones — test runs are
        included by default.

        Per-node detail is not included here; fetch a single run to read what each node consumed and produced.

        Args:
            flow_id: The ID of the flow whose runs to list.
            max_results: Maximum runs to return.
            page_token: Continuation token from a previous response.
            mode: Restrict the listing to one kind of run. Omit for both.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/cloudflow/v1/flows/{flowId}/runs"),
            path_params=[param[str]("flowId", flow_id)],
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[ModeDoiTCloudFlowApiOrStr | None]("mode", mode),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CloudflowRunList],
            error_mapper=list_cloudflow_flow_runs_error_mapper,
            request_options=request_options,
        )

    async def list_cloudflow_templates(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudflowTemplateListResponse, ListCloudflowTemplatesErrorBody]:
        """Returns the catalogue of available CloudFlow templates (blueprints). Templates are read-only. To create a
        flow from a template, use ``POST /flows`` with a ``templateId``.

        Args:
            max_results: Maximum number of templates to return (1–500). Defaults to 50.
            page_token: Opaque cursor for the next page, taken from ``pageToken`` in the previous response. Omit to
                start from the beginning.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/cloudflow/v1/templates"),
            query_params=[param[int | None]("maxResults", max_results), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CloudflowTemplateListResponse],
            error_mapper=list_cloudflow_templates_error_mapper,
            request_options=request_options,
        )

    async def list_cloudflows(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudflowListResponse, ListCloudflowsErrorBody]:
        """Returns a cursor-paginated list of CloudFlows.

        Args:
            max_results: Maximum number of flows to return (1–500). Defaults to 50.
            page_token: Opaque cursor for the next page, taken from ``pageToken`` in the previous response. Omit to
                start from the beginning.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/cloudflow/v1/flows"),
            query_params=[param[int | None]("maxResults", max_results), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CloudflowListResponse],
            error_mapper=list_cloudflows_error_mapper,
            request_options=request_options,
        )

    async def refine_cloud_flow(
        self,
        flow_id: str,
        body: CloudFlowRefineRequest | CloudFlowRefineRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncEventStream[str], RefineCloudFlowErrorBody]:
        """Refines the specified CloudFlow by generating and updating nodes and connections based on the provided
        natural language intent. The operation streams incremental build events as they are produced.

        Args:
            flow_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/cloudflow/v1/flows/{flowId}/actions/refine"),
            path_params=[param[str]("flowId", flow_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CloudFlowRefineRequest | CloudFlowRefineRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_text_event_decoder[str](),
            error_mapper=refine_cloud_flow_error_mapper,
            request_options=request_options,
        )

    async def stop_cloudflow_flow(
        self, flow_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CloudflowRunSummary, StopCloudflowFlowErrorBody]:
        """Stops the run currently in progress for the given flow. The run is identified from the flow alone — no run ID
        is needed, since a flow can only have one run active at a time.

        No ``Idempotency-Key`` is required. This is a state transition, not a resource creation.

        Returns ``409`` when the flow has no run in progress, which includes a run that reached a terminal state between
        this request and the stop attempt.

        Args:
            flow_id: The ID of the flow whose in-progress run should be stopped.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/cloudflow/v1/flows/{flowId}/actions/stop"),
            path_params=[param[str]("flowId", flow_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CloudflowRunSummary],
            error_mapper=stop_cloudflow_flow_error_mapper,
            request_options=request_options,
        )

    async def test_run_cloudflow_flow(
        self,
        flow_id: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = None,
        body: Any | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudflowRunSummary, TestRunCloudflowFlowErrorBody]:
        """Runs a flow once as a test, and **accepts an unpublished (draft) flow** — unlike ``actions/trigger``, which
        requires the flow to be published. Use this to verify a newly authored or edited flow before publishing it.

        Execution is identical to a production run: the same graph, the same bound connections, the same credentials,
        and the same approval behaviour. An approval-gated node still parks the run and its side effect still waits for
        a real approval — there is no request that skips one.

        The run is recorded as a test, so it does not appear in run history, does not count towards dashboard
        statistics, does not become a dashboard widget's data source, and does not consume a scheduled-run budget. It
        does hold the flow's concurrency lock, so a ``409`` is returned while the flow is already running.

        The flow's first node must be a webhook, scheduled, or manual trigger.

        Before dispatching, the flow is validated with the same checks publish applies — a draft has never been through
        them. A flow that fails returns ``422`` listing every offending node at once, so all of them can be fixed in one
        pass.

        Poll the ``Location`` URL to follow the run and read what each node produced.

        Pass ``?dryRun=true`` to validate the flow without starting a run.

        Args:
            flow_id: The ID of the flow to test-run.
            idempotency_key: Unique key so a retried request cannot start a second run.
            dry_run: Validate the flow and return the outcome without starting a run.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/cloudflow/v1/flows/{flowId}/actions/test-run"),
            path_params=[param[str]("flowId", flow_id)],
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            body=json_body[Any | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CloudflowRunSummary],
            error_mapper=test_run_cloudflow_flow_error_mapper,
            request_options=request_options,
        )

    async def trigger_cloudflow_flow(
        self, flow_id: str, *, body: Any | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CloudflowRunSummary, TriggerCloudflowFlowErrorBody]:
        """Starts a run of a **published** flow whose first node is a webhook, scheduled, or manual trigger. A draft
        flow is rejected with ``422`` — use ``actions/test-run`` to run one.

        No ``Idempotency-Key`` is required. This is a state transition, not a resource creation.

        The response is a snapshot taken at dispatch, so ``status`` is always ``pending`` and the timing fields are not
        yet populated. Read the run back through ``GET /cloudflow/v1/flows/{flowId}/runs/{runId}`` to follow its
        progress.

        A flow holds a concurrency lock while it runs, so triggering one that is already running returns ``409`` with
        the active run embedded in the problem body — no second lookup needed.

        Args:
            flow_id: The ID of the flow to trigger.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/cloudflow/v1/flows/{flowId}/actions/trigger"),
            path_params=[param[str]("flowId", flow_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CloudflowRunSummary],
            error_mapper=trigger_cloudflow_flow_error_mapper,
            request_options=request_options,
        )

    async def trigger_cloudflow_webhook(
        self, flow_id: str, body: Any, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CloudflowV1TriggerResponse, TriggerCloudflowWebhookErrorBody]:
        """Triggers execution of a published CloudFlow whose first node is a webhook trigger. The request body must be
        valid JSON and is passed to the flow as webhook payload data.

        Args:
            flow_id: The unique ID of the published CloudFlow to trigger.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/cloudflow/v1/trigger/{flowId}"),
            path_params=[param[str]("flowId", flow_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CloudflowV1TriggerResponse],
            error_mapper=trigger_cloudflow_webhook_error_mapper,
            request_options=request_options,
        )
