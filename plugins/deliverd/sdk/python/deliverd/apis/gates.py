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
from ..errors.post_api_v1_gates_by_id_cancel_error import (
    PostApiV1GatesByIdCancelErrorBody,
    post_api_v1_gates_by_id_cancel_error_mapper,
)
from ..errors.post_api_v1_gates_by_id_execution_error import (
    PostApiV1GatesByIdExecutionErrorBody,
    post_api_v1_gates_by_id_execution_error_mapper,
)
from ..errors.post_api_v1_gates_by_id_release_error import (
    PostApiV1GatesByIdReleaseErrorBody,
    post_api_v1_gates_by_id_release_error_mapper,
)
from ..errors.post_api_v1_gates_error import PostApiV1GatesErrorBody, post_api_v1_gates_error_mapper
from ..models.api_v1_gates_cancel_request import ApiV1GatesCancelRequest, ApiV1GatesCancelRequestDict
from ..models.api_v1_gates_cancel_response import ApiV1GatesCancelResponse
from ..models.api_v1_gates_execution_request import ApiV1GatesExecutionRequest, ApiV1GatesExecutionRequestDict
from ..models.api_v1_gates_execution_response import ApiV1GatesExecutionResponse
from ..models.api_v1_gates_release_request import ApiV1GatesReleaseRequest, ApiV1GatesReleaseRequestDict
from ..models.api_v1_gates_release_response import ApiV1GatesReleaseResponse
from ..models.api_v1_gates_request import ApiV1GatesRequest, ApiV1GatesRequestDict
from ..models.api_v1_gates_response import ApiV1GatesResponse
from ..models.api_v1_gates_verify_token_request import ApiV1GatesVerifyTokenRequest, ApiV1GatesVerifyTokenRequestDict
from ..models.api_v1_gates_verify_token_response import ApiV1GatesVerifyTokenResponse
from ..models.enums.format import FormatOrStr
from ..server.server import Server


class Gates:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = GatesWithRawResponse(client, server, auth)

    def get_api_v1_gates_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1GatesResponse:
        """Send a ``GET`` request.

        Args:
            id_: The gate decision
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            While a person is deciding, ``status`` is ``pending``; once one has, it is ``approved``, ``rejected``,
            ``expired`` or ``cancelled``, with ``outcome`` and ``settledAt`` filled in. ``allowed`` means a rule
            permitted it or a person agreed to it — an expiry and a cancellation are not allowed, because nobody said
            yes.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_gates_by_id(id_, request_options=request_options))

    def get_api_v1_gates_by_id_evidence(
        self, id_: UUID, *, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """The act, the policy, the scope, who was asked and under what authority, what each said, what the agent
        reported, and in words what Deliverd did not check. ``?format=csv`` is the timeline alone. Needs
        ``approvals:read`` as well.

        Args:
            id_: The gate
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The pack

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_gates_by_id_evidence(
                id_, format_=format_, request_options=request_options
            ),
        )

    def post_api_v1_gates(
        self,
        *,
        body: ApiV1GatesRequest | ApiV1GatesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1GatesResponse:
        """Declare the action you are about to perform and the arguments you will perform it with; your organisation's
        policy answers. Three outcomes, one field to branch on: ``allowed: true`` with status ``allowed`` (a rule
        permitted it), ``allowed: false`` with status ``denied`` (a rule refused it, and ``reason`` says which), or
        status ``pending`` — nobody has decided yet, an ordinary approval has been raised, and ``GET /gates/{id}`` or
        the SDK's ``wait()`` will tell you. A denial is 200, not 403: it is a result you act on, not an error — an agent
        told no behaved correctly by asking. Fails closed throughout: an unregistered action, input its schema does not
        describe, and a policy that cannot be read all refuse or ask a person. ``externalId`` is required, unlike every
        other POST here. A random per-attempt key protects a retried HTTP request but not a retried decision, and a
        crashed agent re-running its refund step would otherwise raise a second approval for the same money — only you
        know which two calls are the same unit of work. An agent key is welcome: registering actions and writing policy
        both refuse one, but an agent calling this is submitting to the rule rather than writing it. Since 0087 a gate
        is also a scoped permission: name the ``destination``, the ``artifact`` and the ``classification``, and the
        answer carries ``decision`` (ALLOW, APPROVAL_REQUIRED, REVIEW_REQUIRED, DENY), ``canExecute``, and the window
        and use count of the permission. An approval covers that scope and nothing else. ``canExecute: true`` is the
        organisation's authorisation only: the platform the agent runs on may still ask for confirmation or refuse.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A decision already made under this ``externalId``, re-read rather than raised again. ``reused`` is true.

        Raises:
            ApiError: ``agents_stopped`` — a person has stopped every agent in the organisation. Do not act or retry;
                tell the user. ``error`` is ``ApiV1Gates423Error1 | RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_gates(body=body, request_options=request_options))

    def post_api_v1_gates_by_id_cancel(
        self,
        id_: UUID,
        *,
        body: ApiV1GatesCancelRequest | ApiV1GatesCancelRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1GatesCancelResponse:
        """Withdraw a request still waiting on a person, or a permission you have not used. Only the agent that asked
        may. A used permission cannot be withdrawn.

        Args:
            id_: The gate
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The gate, withdrawn

        Raises:
            ApiError: ``not_requester`` — only the agent that asked can withdraw it. ``gate_used`` — the permission has
                been used, so there is nothing to withdraw. ``error`` is ``ApiV1GatesCancel403Error1 |
                ApiV1GatesCancel409Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_gates_by_id_cancel(id_, body=body, request_options=request_options)
        )

    def post_api_v1_gates_by_id_execution(
        self,
        id_: UUID,
        *,
        body: ApiV1GatesExecutionRequest | ApiV1GatesExecutionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1GatesExecutionResponse:
        """``started`` claims a use before you act; ``completed`` or ``failed`` finishes that claim. A ``completed``
        with no ``claimId`` claims and reports in one. Checked against what was authorised: another artifact hash is
        ``approval_invalidated``, another destination is ``destination_mismatch``. A spent, lapsed, revoked or withdrawn
        permission is refused with a code saying which. What you report is recorded as your report: ``hash_matched``
        when Deliverd checked the hash, ``reported`` when there was nothing to check; ``verified`` is reserved for acts
        Deliverd performed itself.

        Args:
            id_: The gate
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The receipt, and the gate as it now stands

        Raises:
            ApiError: ``destination_mismatch`` — this permission is for somewhere else. ``approval_invalidated`` — the
                artifact changed after it was approved. Also ``gate_used``, ``gate_expired``, ``gate_revoked``,
                ``gate_cancelled``: ask again. ``error`` is ``ApiV1GatesExecution403Error1 |
                ApiV1GatesExecution409Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_gates_by_id_execution(id_, body=body, request_options=request_options)
        )

    def post_api_v1_gates_by_id_release(
        self,
        id_: UUID,
        *,
        body: ApiV1GatesReleaseRequest | ApiV1GatesReleaseRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1GatesReleaseResponse:
        """The staged report version the gate names goes live, if the gate still authorises it and the report lives
        where the gate said. The organisation's publishing policy still applies: a hold is satisfied only by a gate a
        person approved. The receipt is ``verified`` — Deliverd did it. Needs ``reports:write`` as well.

        Args:
            id_: The gate
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Released

        Raises:
            ApiError: ``policy_approval_required`` — publishing policy holds this for a person, and the gate was allowed
                by a rule. ``error`` is ``ApiV1GatesRelease403Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_gates_by_id_release(id_, body=body, request_options=request_options)
        )

    def post_api_v1_gates_verify_token(
        self,
        *,
        body: ApiV1GatesVerifyTokenRequest | ApiV1GatesVerifyTokenRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1GatesVerifyTokenResponse:
        """Whether a gate's ``decisionToken`` is this deployment's signature over this action and input, for your
        organisation, and unexpired. For a call site with no verifier of its own: the TypeScript and Python SDKs check
        locally with the key at ``/.well-known/deliverd-evidence-key``. A refused token is a 200 with ``valid: false``
        and the ``reason``. It does not spend a use: report the execution for that.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The result

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_gates_verify_token(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> GatesWithRawResponse:
        return self._with_raw_response


class AsyncGates:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncGatesWithRawResponse(client, server, auth)

    async def get_api_v1_gates_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1GatesResponse:
        """Send a ``GET`` request.

        Args:
            id_: The gate decision
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            While a person is deciding, ``status`` is ``pending``; once one has, it is ``approved``, ``rejected``,
            ``expired`` or ``cancelled``, with ``outcome`` and ``settledAt`` filled in. ``allowed`` means a rule
            permitted it or a person agreed to it — an expiry and a cancellation are not allowed, because nobody said
            yes.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_api_v1_gates_by_id(id_, request_options=request_options))

    async def get_api_v1_gates_by_id_evidence(
        self, id_: UUID, *, format_: FormatOrStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """The act, the policy, the scope, who was asked and under what authority, what each said, what the agent
        reported, and in words what Deliverd did not check. ``?format=csv`` is the timeline alone. Needs
        ``approvals:read`` as well.

        Args:
            id_: The gate
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The pack

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_gates_by_id_evidence(
                id_, format_=format_, request_options=request_options
            ),
        )

    async def post_api_v1_gates(
        self,
        *,
        body: ApiV1GatesRequest | ApiV1GatesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1GatesResponse:
        """Declare the action you are about to perform and the arguments you will perform it with; your organisation's
        policy answers. Three outcomes, one field to branch on: ``allowed: true`` with status ``allowed`` (a rule
        permitted it), ``allowed: false`` with status ``denied`` (a rule refused it, and ``reason`` says which), or
        status ``pending`` — nobody has decided yet, an ordinary approval has been raised, and ``GET /gates/{id}`` or
        the SDK's ``wait()`` will tell you. A denial is 200, not 403: it is a result you act on, not an error — an agent
        told no behaved correctly by asking. Fails closed throughout: an unregistered action, input its schema does not
        describe, and a policy that cannot be read all refuse or ask a person. ``externalId`` is required, unlike every
        other POST here. A random per-attempt key protects a retried HTTP request but not a retried decision, and a
        crashed agent re-running its refund step would otherwise raise a second approval for the same money — only you
        know which two calls are the same unit of work. An agent key is welcome: registering actions and writing policy
        both refuse one, but an agent calling this is submitting to the rule rather than writing it. Since 0087 a gate
        is also a scoped permission: name the ``destination``, the ``artifact`` and the ``classification``, and the
        answer carries ``decision`` (ALLOW, APPROVAL_REQUIRED, REVIEW_REQUIRED, DENY), ``canExecute``, and the window
        and use count of the permission. An approval covers that scope and nothing else. ``canExecute: true`` is the
        organisation's authorisation only: the platform the agent runs on may still ask for confirmation or refuse.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A decision already made under this ``externalId``, re-read rather than raised again. ``reused`` is true.

        Raises:
            ApiError: ``agents_stopped`` — a person has stopped every agent in the organisation. Do not act or retry;
                tell the user. ``error`` is ``ApiV1Gates423Error1 | RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_gates(body=body, request_options=request_options))

    async def post_api_v1_gates_by_id_cancel(
        self,
        id_: UUID,
        *,
        body: ApiV1GatesCancelRequest | ApiV1GatesCancelRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1GatesCancelResponse:
        """Withdraw a request still waiting on a person, or a permission you have not used. Only the agent that asked
        may. A used permission cannot be withdrawn.

        Args:
            id_: The gate
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The gate, withdrawn

        Raises:
            ApiError: ``not_requester`` — only the agent that asked can withdraw it. ``gate_used`` — the permission has
                been used, so there is nothing to withdraw. ``error`` is ``ApiV1GatesCancel403Error1 |
                ApiV1GatesCancel409Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_gates_by_id_cancel(
                id_, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_gates_by_id_execution(
        self,
        id_: UUID,
        *,
        body: ApiV1GatesExecutionRequest | ApiV1GatesExecutionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1GatesExecutionResponse:
        """``started`` claims a use before you act; ``completed`` or ``failed`` finishes that claim. A ``completed``
        with no ``claimId`` claims and reports in one. Checked against what was authorised: another artifact hash is
        ``approval_invalidated``, another destination is ``destination_mismatch``. A spent, lapsed, revoked or withdrawn
        permission is refused with a code saying which. What you report is recorded as your report: ``hash_matched``
        when Deliverd checked the hash, ``reported`` when there was nothing to check; ``verified`` is reserved for acts
        Deliverd performed itself.

        Args:
            id_: The gate
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The receipt, and the gate as it now stands

        Raises:
            ApiError: ``destination_mismatch`` — this permission is for somewhere else. ``approval_invalidated`` — the
                artifact changed after it was approved. Also ``gate_used``, ``gate_expired``, ``gate_revoked``,
                ``gate_cancelled``: ask again. ``error`` is ``ApiV1GatesExecution403Error1 |
                ApiV1GatesExecution409Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_gates_by_id_execution(
                id_, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_gates_by_id_release(
        self,
        id_: UUID,
        *,
        body: ApiV1GatesReleaseRequest | ApiV1GatesReleaseRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1GatesReleaseResponse:
        """The staged report version the gate names goes live, if the gate still authorises it and the report lives
        where the gate said. The organisation's publishing policy still applies: a hold is satisfied only by a gate a
        person approved. The receipt is ``verified`` — Deliverd did it. Needs ``reports:write`` as well.

        Args:
            id_: The gate
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Released

        Raises:
            ApiError: ``policy_approval_required`` — publishing policy holds this for a person, and the gate was allowed
                by a rule. ``error`` is ``ApiV1GatesRelease403Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_gates_by_id_release(
                id_, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_gates_verify_token(
        self,
        *,
        body: ApiV1GatesVerifyTokenRequest | ApiV1GatesVerifyTokenRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1GatesVerifyTokenResponse:
        """Whether a gate's ``decisionToken`` is this deployment's signature over this action and input, for your
        organisation, and unexpired. For a call site with no verifier of its own: the TypeScript and Python SDKs check
        locally with the key at ``/.well-known/deliverd-evidence-key``. A refused token is a 200 with ``valid: false``
        and the ``reason``. It does not spend a use: report the execution for that.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The result

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_gates_verify_token(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncGatesWithRawResponse:
        return self._with_raw_response


class GatesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_gates_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1GatesResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: The gate decision
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/gates/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1GatesResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_gates_by_id_evidence(
        self, id_: UUID, *, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], RawError]:
        """The act, the policy, the scope, who was asked and under what authority, what each said, what the agent
        reported, and in words what Deliverd did not check. ``?format=csv`` is the timeline alone. Needs
        ``approvals:read`` as well.

        Args:
            id_: The gate
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/gates/{id}/evidence"),
            path_params=[param[UUID]("id", id_)],
            query_params=[param[FormatOrStr | None]("format", format_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def post_api_v1_gates(
        self,
        *,
        body: ApiV1GatesRequest | ApiV1GatesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1GatesResponse, PostApiV1GatesErrorBody]:
        """Declare the action you are about to perform and the arguments you will perform it with; your organisation's
        policy answers. Three outcomes, one field to branch on: ``allowed: true`` with status ``allowed`` (a rule
        permitted it), ``allowed: false`` with status ``denied`` (a rule refused it, and ``reason`` says which), or
        status ``pending`` — nobody has decided yet, an ordinary approval has been raised, and ``GET /gates/{id}`` or
        the SDK's ``wait()`` will tell you. A denial is 200, not 403: it is a result you act on, not an error — an agent
        told no behaved correctly by asking. Fails closed throughout: an unregistered action, input its schema does not
        describe, and a policy that cannot be read all refuse or ask a person. ``externalId`` is required, unlike every
        other POST here. A random per-attempt key protects a retried HTTP request but not a retried decision, and a
        crashed agent re-running its refund step would otherwise raise a second approval for the same money — only you
        know which two calls are the same unit of work. An agent key is welcome: registering actions and writing policy
        both refuse one, but an agent calling this is submitting to the rule rather than writing it. Since 0087 a gate
        is also a scoped permission: name the ``destination``, the ``artifact`` and the ``classification``, and the
        answer carries ``decision`` (ALLOW, APPROVAL_REQUIRED, REVIEW_REQUIRED, DENY), ``canExecute``, and the window
        and use count of the permission. An approval covers that scope and nothing else. ``canExecute: true`` is the
        organisation's authorisation only: the platform the agent runs on may still ask for confirmation or refuse.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/gates"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1GatesRequest | ApiV1GatesRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1GatesResponse],
            error_mapper=post_api_v1_gates_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_gates_by_id_cancel(
        self,
        id_: UUID,
        *,
        body: ApiV1GatesCancelRequest | ApiV1GatesCancelRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1GatesCancelResponse, PostApiV1GatesByIdCancelErrorBody]:
        """Withdraw a request still waiting on a person, or a permission you have not used. Only the agent that asked
        may. A used permission cannot be withdrawn.

        Args:
            id_: The gate
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/gates/{id}/cancel"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1GatesCancelRequest | ApiV1GatesCancelRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1GatesCancelResponse],
            error_mapper=post_api_v1_gates_by_id_cancel_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_gates_by_id_execution(
        self,
        id_: UUID,
        *,
        body: ApiV1GatesExecutionRequest | ApiV1GatesExecutionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1GatesExecutionResponse, PostApiV1GatesByIdExecutionErrorBody]:
        """``started`` claims a use before you act; ``completed`` or ``failed`` finishes that claim. A ``completed``
        with no ``claimId`` claims and reports in one. Checked against what was authorised: another artifact hash is
        ``approval_invalidated``, another destination is ``destination_mismatch``. A spent, lapsed, revoked or withdrawn
        permission is refused with a code saying which. What you report is recorded as your report: ``hash_matched``
        when Deliverd checked the hash, ``reported`` when there was nothing to check; ``verified`` is reserved for acts
        Deliverd performed itself.

        Args:
            id_: The gate
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/gates/{id}/execution"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1GatesExecutionRequest | ApiV1GatesExecutionRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1GatesExecutionResponse],
            error_mapper=post_api_v1_gates_by_id_execution_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_gates_by_id_release(
        self,
        id_: UUID,
        *,
        body: ApiV1GatesReleaseRequest | ApiV1GatesReleaseRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1GatesReleaseResponse, PostApiV1GatesByIdReleaseErrorBody]:
        """The staged report version the gate names goes live, if the gate still authorises it and the report lives
        where the gate said. The organisation's publishing policy still applies: a hold is satisfied only by a gate a
        person approved. The receipt is ``verified`` — Deliverd did it. Needs ``reports:write`` as well.

        Args:
            id_: The gate
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/gates/{id}/release"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1GatesReleaseRequest | ApiV1GatesReleaseRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1GatesReleaseResponse],
            error_mapper=post_api_v1_gates_by_id_release_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_gates_verify_token(
        self,
        *,
        body: ApiV1GatesVerifyTokenRequest | ApiV1GatesVerifyTokenRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1GatesVerifyTokenResponse, RawError]:
        """Whether a gate's ``decisionToken`` is this deployment's signature over this action and input, for your
        organisation, and unexpired. For a call site with no verifier of its own: the TypeScript and Python SDKs check
        locally with the key at ``/.well-known/deliverd-evidence-key``. A refused token is a 200 with ``valid: false``
        and the ``reason``. It does not spend a use: report the execution for that.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/gates/verify-token"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1GatesVerifyTokenRequest | ApiV1GatesVerifyTokenRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1GatesVerifyTokenResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncGatesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_gates_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1GatesResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: The gate decision
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/gates/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1GatesResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_gates_by_id_evidence(
        self, id_: UUID, *, format_: FormatOrStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], RawError]:
        """The act, the policy, the scope, who was asked and under what authority, what each said, what the agent
        reported, and in words what Deliverd did not check. ``?format=csv`` is the timeline alone. Needs
        ``approvals:read`` as well.

        Args:
            id_: The gate
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/gates/{id}/evidence"),
            path_params=[param[UUID]("id", id_)],
            query_params=[param[FormatOrStr | None]("format", format_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def post_api_v1_gates(
        self,
        *,
        body: ApiV1GatesRequest | ApiV1GatesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1GatesResponse, PostApiV1GatesErrorBody]:
        """Declare the action you are about to perform and the arguments you will perform it with; your organisation's
        policy answers. Three outcomes, one field to branch on: ``allowed: true`` with status ``allowed`` (a rule
        permitted it), ``allowed: false`` with status ``denied`` (a rule refused it, and ``reason`` says which), or
        status ``pending`` — nobody has decided yet, an ordinary approval has been raised, and ``GET /gates/{id}`` or
        the SDK's ``wait()`` will tell you. A denial is 200, not 403: it is a result you act on, not an error — an agent
        told no behaved correctly by asking. Fails closed throughout: an unregistered action, input its schema does not
        describe, and a policy that cannot be read all refuse or ask a person. ``externalId`` is required, unlike every
        other POST here. A random per-attempt key protects a retried HTTP request but not a retried decision, and a
        crashed agent re-running its refund step would otherwise raise a second approval for the same money — only you
        know which two calls are the same unit of work. An agent key is welcome: registering actions and writing policy
        both refuse one, but an agent calling this is submitting to the rule rather than writing it. Since 0087 a gate
        is also a scoped permission: name the ``destination``, the ``artifact`` and the ``classification``, and the
        answer carries ``decision`` (ALLOW, APPROVAL_REQUIRED, REVIEW_REQUIRED, DENY), ``canExecute``, and the window
        and use count of the permission. An approval covers that scope and nothing else. ``canExecute: true`` is the
        organisation's authorisation only: the platform the agent runs on may still ask for confirmation or refuse.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/gates"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1GatesRequest | ApiV1GatesRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1GatesResponse],
            error_mapper=post_api_v1_gates_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_gates_by_id_cancel(
        self,
        id_: UUID,
        *,
        body: ApiV1GatesCancelRequest | ApiV1GatesCancelRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1GatesCancelResponse, PostApiV1GatesByIdCancelErrorBody]:
        """Withdraw a request still waiting on a person, or a permission you have not used. Only the agent that asked
        may. A used permission cannot be withdrawn.

        Args:
            id_: The gate
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/gates/{id}/cancel"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1GatesCancelRequest | ApiV1GatesCancelRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1GatesCancelResponse],
            error_mapper=post_api_v1_gates_by_id_cancel_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_gates_by_id_execution(
        self,
        id_: UUID,
        *,
        body: ApiV1GatesExecutionRequest | ApiV1GatesExecutionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1GatesExecutionResponse, PostApiV1GatesByIdExecutionErrorBody]:
        """``started`` claims a use before you act; ``completed`` or ``failed`` finishes that claim. A ``completed``
        with no ``claimId`` claims and reports in one. Checked against what was authorised: another artifact hash is
        ``approval_invalidated``, another destination is ``destination_mismatch``. A spent, lapsed, revoked or withdrawn
        permission is refused with a code saying which. What you report is recorded as your report: ``hash_matched``
        when Deliverd checked the hash, ``reported`` when there was nothing to check; ``verified`` is reserved for acts
        Deliverd performed itself.

        Args:
            id_: The gate
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/gates/{id}/execution"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1GatesExecutionRequest | ApiV1GatesExecutionRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1GatesExecutionResponse],
            error_mapper=post_api_v1_gates_by_id_execution_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_gates_by_id_release(
        self,
        id_: UUID,
        *,
        body: ApiV1GatesReleaseRequest | ApiV1GatesReleaseRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1GatesReleaseResponse, PostApiV1GatesByIdReleaseErrorBody]:
        """The staged report version the gate names goes live, if the gate still authorises it and the report lives
        where the gate said. The organisation's publishing policy still applies: a hold is satisfied only by a gate a
        person approved. The receipt is ``verified`` — Deliverd did it. Needs ``reports:write`` as well.

        Args:
            id_: The gate
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/gates/{id}/release"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1GatesReleaseRequest | ApiV1GatesReleaseRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1GatesReleaseResponse],
            error_mapper=post_api_v1_gates_by_id_release_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_gates_verify_token(
        self,
        *,
        body: ApiV1GatesVerifyTokenRequest | ApiV1GatesVerifyTokenRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1GatesVerifyTokenResponse, RawError]:
        """Whether a gate's ``decisionToken`` is this deployment's signature over this action and input, for your
        organisation, and unexpired. For a call site with no verifier of its own: the TypeScript and Python SDKs check
        locally with the key at ``/.well-known/deliverd-evidence-key``. A refused token is a 200 with ``valid: false``
        and the ``reason``. It does not spend a use: report the execution for that.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/gates/verify-token"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1GatesVerifyTokenRequest | ApiV1GatesVerifyTokenRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1GatesVerifyTokenResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
