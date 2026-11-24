from __future__ import annotations

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
from ..errors.post_api_v1_policies_by_id_activate_error import (
    PostApiV1PoliciesByIdActivateErrorBody,
    post_api_v1_policies_by_id_activate_error_mapper,
)
from ..errors.post_api_v1_policies_by_id_versions_error import (
    PostApiV1PoliciesByIdVersionsErrorBody,
    post_api_v1_policies_by_id_versions_error_mapper,
)
from ..errors.post_api_v1_policies_error import PostApiV1PoliciesErrorBody, post_api_v1_policies_error_mapper
from ..models.api_v1_policies_activate_request import ApiV1PoliciesActivateRequest, ApiV1PoliciesActivateRequestDict
from ..models.api_v1_policies_activate_response import ApiV1PoliciesActivateResponse
from ..models.api_v1_policies_replay_request import ApiV1PoliciesReplayRequest, ApiV1PoliciesReplayRequestDict
from ..models.api_v1_policies_replay_response import ApiV1PoliciesReplayResponse
from ..models.api_v1_policies_request import ApiV1PoliciesRequest, ApiV1PoliciesRequestDict
from ..models.api_v1_policies_response import ApiV1PoliciesResponse
from ..models.api_v1_policies_response1 import ApiV1PoliciesResponse1
from ..models.api_v1_policies_simulate_request import ApiV1PoliciesSimulateRequest, ApiV1PoliciesSimulateRequestDict
from ..models.api_v1_policies_simulate_response import ApiV1PoliciesSimulateResponse
from ..models.api_v1_policies_test_request import ApiV1PoliciesTestRequest, ApiV1PoliciesTestRequestDict
from ..models.api_v1_policies_test_response import ApiV1PoliciesTestResponse
from ..models.api_v1_policies_versions_request import ApiV1PoliciesVersionsRequest, ApiV1PoliciesVersionsRequestDict
from ..models.api_v1_policies_versions_response import ApiV1PoliciesVersionsResponse
from ..server.server import Server


class Policies:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PoliciesWithRawResponse(client, server, auth)

    def get_api_v1_policies(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1PoliciesResponse1:
        """Send a ``GET`` request.

        Args:
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Newest first, each saying which version is in force. Owners and administrators only.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_policies(limit=limit, cursor=cursor, request_options=request_options)
        )

    def post_api_v1_policies(
        self,
        *,
        body: ApiV1PoliciesRequest | ApiV1PoliciesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1PoliciesResponse:
        """A policy is an identity that survives editing; a version is an immutable rule set. Pass ``rules`` to store
        them as version 1 and ``activate: true`` to put that version in force, so a push is one request rather than
        three that can fail between each other. Not an upsert, unlike registering an action: a second policy of the same
        name is refused, because overwriting one would silently replace the rules an organisation is running under. The
        key's holder must be an owner or an administrator — writing a rule is how authority is granted, so the scope
        alone is not enough — and an agent principal is refused outright, since policy decides whether an agent needs a
        person.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The policy, and the first version if one was sent

        Raises:
            ApiError: ``invalid_rules`` — the rule set cannot be stored as written. ``details`` names each condition
                that could not be checked, usually a field no registered action declares. Refused here rather than at
                evaluation, where the rule would match nothing and look exactly like one that has not fired yet.
                ``not_permitted`` — the key's holder is not an owner or an administrator. The scope is not the check
                here: writing a rule grants authority, so a member's key carrying ``policies:write`` is refused exactly
                as if it did not carry it. An agent principal is refused as ``agent_not_permitted``. ``duplicate`` — a
                policy of that name already exists. Add a version to it rather than creating a second one; overwriting
                would silently replace the rules the organisation is running under. ``error`` is
                ``ApiV1Policies400Error1 | ApiV1Policies403Error1 | ApiV1Policies409Error1 | RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_policies(body=body, request_options=request_options))

    def post_api_v1_policies_by_id_activate(
        self,
        id_: UUID,
        *,
        body: ApiV1PoliciesActivateRequest | ApiV1PoliciesActivateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1PoliciesActivateResponse:
        """Supersedes whichever version was active. A superseded version cannot be revived: copy its rules into a new
        version instead, because bringing one back would change what every decision pointing at it meant.

        Args:
            id_: The policy
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The version now in force

        Raises:
            ApiError: ``not_permitted`` — the key's holder is not an owner or an administrator. The scope is not the
                check here: writing a rule grants authority, so a member's key carrying ``policies:write`` is refused
                exactly as if it did not carry it. An agent principal is refused as ``agent_not_permitted``.
                ``not_found`` — this policy has no version with that number. ``superseded`` — that version has already
                been replaced. Copy its rules into a new version rather than reviving it: a past decision points at what
                it said. ``error`` is ``ApiV1PoliciesActivate403Error1 | ApiV1PoliciesActivate404Error1 |
                ApiV1PoliciesActivate409Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_policies_by_id_activate(id_, body=body, request_options=request_options)
        )

    def post_api_v1_policies_by_id_versions(
        self,
        id_: UUID,
        *,
        body: ApiV1PoliciesVersionsRequest | ApiV1PoliciesVersionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1PoliciesVersionsResponse:
        """The whole rule set, not a patch — a version has to be readable on its own, because it is what a past decision
        points at. It lands as a draft unless ``activate`` is set. Rules are validated against the action registry now
        rather than at activation: a condition naming a field the action's schema does not declare is refused here,
        since a rule that silently matches nothing looks exactly like one that has not fired yet. A version that has
        been in force can never be edited — the database refuses it, not only this endpoint.

        Args:
            id_: The policy
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The stored version

        Raises:
            ApiError: ``invalid_rules`` — the rule set cannot be stored as written. ``details`` names each condition
                that could not be checked, usually a field no registered action declares. Refused here rather than at
                evaluation, where the rule would match nothing and look exactly like one that has not fired yet.
                ``not_permitted`` — the key's holder is not an owner or an administrator. The scope is not the check
                here: writing a rule grants authority, so a member's key carrying ``policies:write`` is refused exactly
                as if it did not carry it. An agent principal is refused as ``agent_not_permitted``. ``not_found`` — no
                policy with that id, or it belongs to another organisation. The two are one answer on purpose: telling
                them apart would say whether somebody else holds that id. ``error`` is ``ApiV1PoliciesVersions400Error1
                | ApiV1PoliciesVersions403Error1 | ApiV1PoliciesVersions404Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_policies_by_id_versions(id_, body=body, request_options=request_options)
        )

    def post_api_v1_policies_replay(
        self,
        *,
        body: ApiV1PoliciesReplayRequest | ApiV1PoliciesReplayRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1PoliciesReplayResponse:
        """Re-evaluates the organisation's recorded gate requests from the last ``days`` (default 30, newest 5,000)
        twice: under the rules in force, and with the proposal standing in for its policy's version in force. The
        proposal is a stored version (``policyId`` and ``version``) or a policy file not yet pushed (``name`` and
        ``rules``). Reports how many decisions change and which way, and the requests a person rejected that would now
        be allowed. ``fail`` applies ``failOn``, for CI. Policy rules only: ethics checks are not replayed. Nothing is
        written.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The difference.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_policies_replay(body=body, request_options=request_options))

    def post_api_v1_policies_simulate(
        self,
        *,
        body: ApiV1PoliciesSimulateRequest | ApiV1PoliciesSimulateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1PoliciesSimulateResponse:
        """Evaluates a request against the rules in force and returns the decision and the rule that made it. Not scoped
        to one policy, because enforcement flattens every active version into one rule set and takes the first decisive
        rule by priority — simulating one policy in isolation would report that its rule fires when a higher-priority
        deny elsewhere is what a real request would meet. It runs the same evaluation enforcement runs, so the action
        must exist and the input must satisfy its schema here exactly as in production. Nothing is recorded: a
        simulation that wrote a decision row would put invented traffic into the autonomy rate.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The decision. ``governed`` is false when nothing matched — that is the fail-closed default asking for a
            person, not a rule that did.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_policies_simulate(body=body, request_options=request_options))

    def post_api_v1_policies_test(
        self,
        *,
        body: ApiV1PoliciesTestRequest | ApiV1PoliciesTestRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1PoliciesTestResponse:
        """Evaluates each test case against the proposal, with every other policy in force as it is, after validating
        its input against the action's schema as a real request would be. A case passes when the effect, and the
        deciding rule when ``expect.rule`` is given, match. Nothing is written.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Each case, passed or failed with the reason.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_policies_test(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> PoliciesWithRawResponse:
        return self._with_raw_response


class AsyncPolicies:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPoliciesWithRawResponse(client, server, auth)

    async def get_api_v1_policies(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1PoliciesResponse1:
        """Send a ``GET`` request.

        Args:
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Newest first, each saying which version is in force. Owners and administrators only.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_policies(
                limit=limit, cursor=cursor, request_options=request_options
            ),
        )

    async def post_api_v1_policies(
        self,
        *,
        body: ApiV1PoliciesRequest | ApiV1PoliciesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1PoliciesResponse:
        """A policy is an identity that survives editing; a version is an immutable rule set. Pass ``rules`` to store
        them as version 1 and ``activate: true`` to put that version in force, so a push is one request rather than
        three that can fail between each other. Not an upsert, unlike registering an action: a second policy of the same
        name is refused, because overwriting one would silently replace the rules an organisation is running under. The
        key's holder must be an owner or an administrator — writing a rule is how authority is granted, so the scope
        alone is not enough — and an agent principal is refused outright, since policy decides whether an agent needs a
        person.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The policy, and the first version if one was sent

        Raises:
            ApiError: ``invalid_rules`` — the rule set cannot be stored as written. ``details`` names each condition
                that could not be checked, usually a field no registered action declares. Refused here rather than at
                evaluation, where the rule would match nothing and look exactly like one that has not fired yet.
                ``not_permitted`` — the key's holder is not an owner or an administrator. The scope is not the check
                here: writing a rule grants authority, so a member's key carrying ``policies:write`` is refused exactly
                as if it did not carry it. An agent principal is refused as ``agent_not_permitted``. ``duplicate`` — a
                policy of that name already exists. Add a version to it rather than creating a second one; overwriting
                would silently replace the rules the organisation is running under. ``error`` is
                ``ApiV1Policies400Error1 | ApiV1Policies403Error1 | ApiV1Policies409Error1 | RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_policies(body=body, request_options=request_options))

    async def post_api_v1_policies_by_id_activate(
        self,
        id_: UUID,
        *,
        body: ApiV1PoliciesActivateRequest | ApiV1PoliciesActivateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1PoliciesActivateResponse:
        """Supersedes whichever version was active. A superseded version cannot be revived: copy its rules into a new
        version instead, because bringing one back would change what every decision pointing at it meant.

        Args:
            id_: The policy
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The version now in force

        Raises:
            ApiError: ``not_permitted`` — the key's holder is not an owner or an administrator. The scope is not the
                check here: writing a rule grants authority, so a member's key carrying ``policies:write`` is refused
                exactly as if it did not carry it. An agent principal is refused as ``agent_not_permitted``.
                ``not_found`` — this policy has no version with that number. ``superseded`` — that version has already
                been replaced. Copy its rules into a new version rather than reviving it: a past decision points at what
                it said. ``error`` is ``ApiV1PoliciesActivate403Error1 | ApiV1PoliciesActivate404Error1 |
                ApiV1PoliciesActivate409Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_policies_by_id_activate(
                id_, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_policies_by_id_versions(
        self,
        id_: UUID,
        *,
        body: ApiV1PoliciesVersionsRequest | ApiV1PoliciesVersionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1PoliciesVersionsResponse:
        """The whole rule set, not a patch — a version has to be readable on its own, because it is what a past decision
        points at. It lands as a draft unless ``activate`` is set. Rules are validated against the action registry now
        rather than at activation: a condition naming a field the action's schema does not declare is refused here,
        since a rule that silently matches nothing looks exactly like one that has not fired yet. A version that has
        been in force can never be edited — the database refuses it, not only this endpoint.

        Args:
            id_: The policy
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The stored version

        Raises:
            ApiError: ``invalid_rules`` — the rule set cannot be stored as written. ``details`` names each condition
                that could not be checked, usually a field no registered action declares. Refused here rather than at
                evaluation, where the rule would match nothing and look exactly like one that has not fired yet.
                ``not_permitted`` — the key's holder is not an owner or an administrator. The scope is not the check
                here: writing a rule grants authority, so a member's key carrying ``policies:write`` is refused exactly
                as if it did not carry it. An agent principal is refused as ``agent_not_permitted``. ``not_found`` — no
                policy with that id, or it belongs to another organisation. The two are one answer on purpose: telling
                them apart would say whether somebody else holds that id. ``error`` is ``ApiV1PoliciesVersions400Error1
                | ApiV1PoliciesVersions403Error1 | ApiV1PoliciesVersions404Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_policies_by_id_versions(
                id_, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_policies_replay(
        self,
        *,
        body: ApiV1PoliciesReplayRequest | ApiV1PoliciesReplayRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1PoliciesReplayResponse:
        """Re-evaluates the organisation's recorded gate requests from the last ``days`` (default 30, newest 5,000)
        twice: under the rules in force, and with the proposal standing in for its policy's version in force. The
        proposal is a stored version (``policyId`` and ``version``) or a policy file not yet pushed (``name`` and
        ``rules``). Reports how many decisions change and which way, and the requests a person rejected that would now
        be allowed. ``fail`` applies ``failOn``, for CI. Policy rules only: ethics checks are not replayed. Nothing is
        written.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The difference.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_policies_replay(body=body, request_options=request_options)
        )

    async def post_api_v1_policies_simulate(
        self,
        *,
        body: ApiV1PoliciesSimulateRequest | ApiV1PoliciesSimulateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1PoliciesSimulateResponse:
        """Evaluates a request against the rules in force and returns the decision and the rule that made it. Not scoped
        to one policy, because enforcement flattens every active version into one rule set and takes the first decisive
        rule by priority — simulating one policy in isolation would report that its rule fires when a higher-priority
        deny elsewhere is what a real request would meet. It runs the same evaluation enforcement runs, so the action
        must exist and the input must satisfy its schema here exactly as in production. Nothing is recorded: a
        simulation that wrote a decision row would put invented traffic into the autonomy rate.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The decision. ``governed`` is false when nothing matched — that is the fail-closed default asking for a
            person, not a rule that did.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_policies_simulate(body=body, request_options=request_options)
        )

    async def post_api_v1_policies_test(
        self,
        *,
        body: ApiV1PoliciesTestRequest | ApiV1PoliciesTestRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1PoliciesTestResponse:
        """Evaluates each test case against the proposal, with every other policy in force as it is, after validating
        its input against the action's schema as a real request would be. A case passes when the effect, and the
        deciding rule when ``expect.rule`` is given, match. Nothing is written.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Each case, passed or failed with the reason.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_policies_test(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncPoliciesWithRawResponse:
        return self._with_raw_response


class PoliciesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_policies(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PoliciesResponse1, RawError]:
        """Send a ``GET`` request.

        Args:
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/policies"),
            query_params=[param[int | None]("limit", limit), param[str | None]("cursor", cursor)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1PoliciesResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def post_api_v1_policies(
        self,
        *,
        body: ApiV1PoliciesRequest | ApiV1PoliciesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PoliciesResponse, PostApiV1PoliciesErrorBody]:
        """A policy is an identity that survives editing; a version is an immutable rule set. Pass ``rules`` to store
        them as version 1 and ``activate: true`` to put that version in force, so a push is one request rather than
        three that can fail between each other. Not an upsert, unlike registering an action: a second policy of the same
        name is refused, because overwriting one would silently replace the rules an organisation is running under. The
        key's holder must be an owner or an administrator — writing a rule is how authority is granted, so the scope
        alone is not enough — and an agent principal is refused outright, since policy decides whether an agent needs a
        person.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/policies"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PoliciesRequest | ApiV1PoliciesRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1PoliciesResponse],
            error_mapper=post_api_v1_policies_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_policies_by_id_activate(
        self,
        id_: UUID,
        *,
        body: ApiV1PoliciesActivateRequest | ApiV1PoliciesActivateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PoliciesActivateResponse, PostApiV1PoliciesByIdActivateErrorBody]:
        """Supersedes whichever version was active. A superseded version cannot be revived: copy its rules into a new
        version instead, because bringing one back would change what every decision pointing at it meant.

        Args:
            id_: The policy
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/policies/{id}/activate"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PoliciesActivateRequest | ApiV1PoliciesActivateRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1PoliciesActivateResponse],
            error_mapper=post_api_v1_policies_by_id_activate_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_policies_by_id_versions(
        self,
        id_: UUID,
        *,
        body: ApiV1PoliciesVersionsRequest | ApiV1PoliciesVersionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PoliciesVersionsResponse, PostApiV1PoliciesByIdVersionsErrorBody]:
        """The whole rule set, not a patch — a version has to be readable on its own, because it is what a past decision
        points at. It lands as a draft unless ``activate`` is set. Rules are validated against the action registry now
        rather than at activation: a condition naming a field the action's schema does not declare is refused here,
        since a rule that silently matches nothing looks exactly like one that has not fired yet. A version that has
        been in force can never be edited — the database refuses it, not only this endpoint.

        Args:
            id_: The policy
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/policies/{id}/versions"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PoliciesVersionsRequest | ApiV1PoliciesVersionsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1PoliciesVersionsResponse],
            error_mapper=post_api_v1_policies_by_id_versions_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_policies_replay(
        self,
        *,
        body: ApiV1PoliciesReplayRequest | ApiV1PoliciesReplayRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PoliciesReplayResponse, RawError]:
        """Re-evaluates the organisation's recorded gate requests from the last ``days`` (default 30, newest 5,000)
        twice: under the rules in force, and with the proposal standing in for its policy's version in force. The
        proposal is a stored version (``policyId`` and ``version``) or a policy file not yet pushed (``name`` and
        ``rules``). Reports how many decisions change and which way, and the requests a person rejected that would now
        be allowed. ``fail`` applies ``failOn``, for CI. Policy rules only: ethics checks are not replayed. Nothing is
        written.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/policies/replay"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PoliciesReplayRequest | ApiV1PoliciesReplayRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1PoliciesReplayResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def post_api_v1_policies_simulate(
        self,
        *,
        body: ApiV1PoliciesSimulateRequest | ApiV1PoliciesSimulateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PoliciesSimulateResponse, RawError]:
        """Evaluates a request against the rules in force and returns the decision and the rule that made it. Not scoped
        to one policy, because enforcement flattens every active version into one rule set and takes the first decisive
        rule by priority — simulating one policy in isolation would report that its rule fires when a higher-priority
        deny elsewhere is what a real request would meet. It runs the same evaluation enforcement runs, so the action
        must exist and the input must satisfy its schema here exactly as in production. Nothing is recorded: a
        simulation that wrote a decision row would put invented traffic into the autonomy rate.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/policies/simulate"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PoliciesSimulateRequest | ApiV1PoliciesSimulateRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1PoliciesSimulateResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def post_api_v1_policies_test(
        self,
        *,
        body: ApiV1PoliciesTestRequest | ApiV1PoliciesTestRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PoliciesTestResponse, RawError]:
        """Evaluates each test case against the proposal, with every other policy in force as it is, after validating
        its input against the action's schema as a real request would be. A case passes when the effect, and the
        deciding rule when ``expect.rule`` is given, match. Nothing is written.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/policies/test"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PoliciesTestRequest | ApiV1PoliciesTestRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1PoliciesTestResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncPoliciesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_policies(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PoliciesResponse1, RawError]:
        """Send a ``GET`` request.

        Args:
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/policies"),
            query_params=[param[int | None]("limit", limit), param[str | None]("cursor", cursor)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1PoliciesResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def post_api_v1_policies(
        self,
        *,
        body: ApiV1PoliciesRequest | ApiV1PoliciesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PoliciesResponse, PostApiV1PoliciesErrorBody]:
        """A policy is an identity that survives editing; a version is an immutable rule set. Pass ``rules`` to store
        them as version 1 and ``activate: true`` to put that version in force, so a push is one request rather than
        three that can fail between each other. Not an upsert, unlike registering an action: a second policy of the same
        name is refused, because overwriting one would silently replace the rules an organisation is running under. The
        key's holder must be an owner or an administrator — writing a rule is how authority is granted, so the scope
        alone is not enough — and an agent principal is refused outright, since policy decides whether an agent needs a
        person.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/policies"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PoliciesRequest | ApiV1PoliciesRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1PoliciesResponse],
            error_mapper=post_api_v1_policies_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_policies_by_id_activate(
        self,
        id_: UUID,
        *,
        body: ApiV1PoliciesActivateRequest | ApiV1PoliciesActivateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PoliciesActivateResponse, PostApiV1PoliciesByIdActivateErrorBody]:
        """Supersedes whichever version was active. A superseded version cannot be revived: copy its rules into a new
        version instead, because bringing one back would change what every decision pointing at it meant.

        Args:
            id_: The policy
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/policies/{id}/activate"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PoliciesActivateRequest | ApiV1PoliciesActivateRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1PoliciesActivateResponse],
            error_mapper=post_api_v1_policies_by_id_activate_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_policies_by_id_versions(
        self,
        id_: UUID,
        *,
        body: ApiV1PoliciesVersionsRequest | ApiV1PoliciesVersionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PoliciesVersionsResponse, PostApiV1PoliciesByIdVersionsErrorBody]:
        """The whole rule set, not a patch — a version has to be readable on its own, because it is what a past decision
        points at. It lands as a draft unless ``activate`` is set. Rules are validated against the action registry now
        rather than at activation: a condition naming a field the action's schema does not declare is refused here,
        since a rule that silently matches nothing looks exactly like one that has not fired yet. A version that has
        been in force can never be edited — the database refuses it, not only this endpoint.

        Args:
            id_: The policy
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/policies/{id}/versions"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PoliciesVersionsRequest | ApiV1PoliciesVersionsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1PoliciesVersionsResponse],
            error_mapper=post_api_v1_policies_by_id_versions_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_policies_replay(
        self,
        *,
        body: ApiV1PoliciesReplayRequest | ApiV1PoliciesReplayRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PoliciesReplayResponse, RawError]:
        """Re-evaluates the organisation's recorded gate requests from the last ``days`` (default 30, newest 5,000)
        twice: under the rules in force, and with the proposal standing in for its policy's version in force. The
        proposal is a stored version (``policyId`` and ``version``) or a policy file not yet pushed (``name`` and
        ``rules``). Reports how many decisions change and which way, and the requests a person rejected that would now
        be allowed. ``fail`` applies ``failOn``, for CI. Policy rules only: ethics checks are not replayed. Nothing is
        written.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/policies/replay"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PoliciesReplayRequest | ApiV1PoliciesReplayRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1PoliciesReplayResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def post_api_v1_policies_simulate(
        self,
        *,
        body: ApiV1PoliciesSimulateRequest | ApiV1PoliciesSimulateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PoliciesSimulateResponse, RawError]:
        """Evaluates a request against the rules in force and returns the decision and the rule that made it. Not scoped
        to one policy, because enforcement flattens every active version into one rule set and takes the first decisive
        rule by priority — simulating one policy in isolation would report that its rule fires when a higher-priority
        deny elsewhere is what a real request would meet. It runs the same evaluation enforcement runs, so the action
        must exist and the input must satisfy its schema here exactly as in production. Nothing is recorded: a
        simulation that wrote a decision row would put invented traffic into the autonomy rate.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/policies/simulate"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PoliciesSimulateRequest | ApiV1PoliciesSimulateRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1PoliciesSimulateResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def post_api_v1_policies_test(
        self,
        *,
        body: ApiV1PoliciesTestRequest | ApiV1PoliciesTestRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PoliciesTestResponse, RawError]:
        """Evaluates each test case against the proposal, with every other policy in force as it is, after validating
        its input against the action's schema as a real request would be. A case passes when the effect, and the
        deciding rule when ``expect.rule`` is given, match. Nothing is written.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/policies/test"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PoliciesTestRequest | ApiV1PoliciesTestRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1PoliciesTestResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
