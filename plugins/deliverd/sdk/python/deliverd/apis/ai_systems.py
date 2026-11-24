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
from ..errors.patch_api_v1_ai_systems_by_id_error import (
    PatchApiV1AiSystemsByIdErrorBody,
    patch_api_v1_ai_systems_by_id_error_mapper,
)
from ..errors.post_api_v1_ai_systems_by_id_model_change_error import (
    PostApiV1AiSystemsByIdModelChangeErrorBody,
    post_api_v1_ai_systems_by_id_model_change_error_mapper,
)
from ..errors.post_api_v1_ai_systems_by_id_transitions_error import (
    PostApiV1AiSystemsByIdTransitionsErrorBody,
    post_api_v1_ai_systems_by_id_transitions_error_mapper,
)
from ..errors.post_api_v1_ai_systems_error import PostApiV1AiSystemsErrorBody, post_api_v1_ai_systems_error_mapper
from ..models.api_v1_ai_systems_model_change_request import (
    ApiV1AiSystemsModelChangeRequest,
    ApiV1AiSystemsModelChangeRequestDict,
)
from ..models.api_v1_ai_systems_request import ApiV1AiSystemsRequest, ApiV1AiSystemsRequestDict
from ..models.api_v1_ai_systems_request1 import ApiV1AiSystemsRequest1, ApiV1AiSystemsRequest1Dict
from ..models.api_v1_ai_systems_transitions_request import (
    ApiV1AiSystemsTransitionsRequest,
    ApiV1AiSystemsTransitionsRequestDict,
)
from ..models.enums.status_deliverd_dev_ai_systems_api import StatusDeliverdDevAiSystemsApiOrStr
from ..server.server import Server


class AiSystems:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AiSystemsWithRawResponse(client, server, auth)

    def get_api_v1_ai_systems(
        self,
        *,
        status: StatusDeliverdDevAiSystemsApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Send a ``GET`` request.

        Args:
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { aiSystems }

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_ai_systems(status=status, request_options=request_options))

    def get_api_v1_ai_systems_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """``system`` is the record; ``status`` and ``steps`` say where it stands in its lifecycle and which steps out
        of it the caller may take (with every reason when not); ``roles`` are the members who answer for it; ``history``
        is every move; ``versions`` are snapshots of what it said; ``governedTaskIds`` are the governed tasks naming it.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { system, template, status, steps, roles, endedRoles, history, versions, aiAct, governedTaskIds }

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_ai_systems_by_id(id_, request_options=request_options))

    def get_api_v1_ai_systems_by_id_transitions(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { template, status, steps, history }

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_ai_systems_by_id_transitions(id_, request_options=request_options)
        )

    def patch_api_v1_ai_systems_by_id(
        self,
        id_: UUID,
        *,
        body: ApiV1AiSystemsRequest1 | ApiV1AiSystemsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """An agent cannot lower its risk. Its status is not a field: the lifecycle moves it (``POST
        /api/v1/ai-systems/{id}/transitions``). Each change is a new version; values a key or an agent writes are
        labelled in ``provenance`` as imported or suggested until a person saves them. 409 when the record changed since
        it was read.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The system

        Raises:
            ApiError: The plan does not include Compliance Mode (feature_unavailable). Reads are not refused. ``error``
                is ``RawError``."""
        return unwrap(
            self._with_raw_response.patch_api_v1_ai_systems_by_id(id_, body=body, request_options=request_options)
        )

    def post_api_v1_ai_systems(
        self,
        *,
        body: ApiV1AiSystemsRequest | ApiV1AiSystemsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The system

        Raises:
            ApiError: A live system already has that name The plan does not include Compliance Mode
                (feature_unavailable). Reads are not refused. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_ai_systems(body=body, request_options=request_options))

    def post_api_v1_ai_systems_by_id_model_change(
        self,
        id_: UUID,
        *,
        body: ApiV1AiSystemsModelChangeRequest | ApiV1AiSystemsModelChangeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Enterprise. ``promptHash`` and ``guardrailsHash`` are digests (``sha256:…``, a commit, a version tag), never
        the text. Every governed task using the system gets a reassessment, which closes its gate until a person
        completes it, and the evaluation, resilience testing, change record and compliance approval of the old release
        stop counting — and, under a model-risk pack, its independent validation and model documentation. Recording a
        first fingerprint changes nothing; changing or removing one does. ``changed`` names the parts that differ from
        what was recorded: the same release again changes nothing and records nothing, so a build step may send it on
        every build.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { system, reassessments, changed }

        Raises:
            ApiError: The plan does not include this capability (feature_unavailable): Compliance Mode, or the
                Enterprise governance capability named in the message ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_ai_systems_by_id_model_change(
                id_, body=body, request_options=request_options
            ),
        )

    def post_api_v1_ai_systems_by_id_transitions(
        self,
        id_: UUID,
        *,
        body: ApiV1AiSystemsTransitionsRequest | ApiV1AiSystemsTransitionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """A key or an agent may put a proposal forward (``submit``) or take it back (``withdraw``). Approving,
        rejecting, returning, suspending, reinstating and retiring are a person's, in the app. A step is refused, with
        every reason, when the record lacks what it needs, when the caller may not take it, or when it is a decision and
        the caller holds a role on the record or moved it to its current status. 409 when the record changed since it
        was read.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The record, as GET /api/v1/ai-systems/{id}

        Raises:
            ApiError: The plan does not include Compliance Mode (feature_unavailable). Reads are not refused. ``error``
                is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_ai_systems_by_id_transitions(
                id_, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AiSystemsWithRawResponse:
        return self._with_raw_response


class AsyncAiSystems:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAiSystemsWithRawResponse(client, server, auth)

    async def get_api_v1_ai_systems(
        self,
        *,
        status: StatusDeliverdDevAiSystemsApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Send a ``GET`` request.

        Args:
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { aiSystems }

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_ai_systems(status=status, request_options=request_options)
        )

    async def get_api_v1_ai_systems_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """``system`` is the record; ``status`` and ``steps`` say where it stands in its lifecycle and which steps out
        of it the caller may take (with every reason when not); ``roles`` are the members who answer for it; ``history``
        is every move; ``versions`` are snapshots of what it said; ``governedTaskIds`` are the governed tasks naming it.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { system, template, status, steps, roles, endedRoles, history, versions, aiAct, governedTaskIds }

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_api_v1_ai_systems_by_id(id_, request_options=request_options))

    async def get_api_v1_ai_systems_by_id_transitions(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { template, status, steps, history }

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_ai_systems_by_id_transitions(id_, request_options=request_options)
        )

    async def patch_api_v1_ai_systems_by_id(
        self,
        id_: UUID,
        *,
        body: ApiV1AiSystemsRequest1 | ApiV1AiSystemsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """An agent cannot lower its risk. Its status is not a field: the lifecycle moves it (``POST
        /api/v1/ai-systems/{id}/transitions``). Each change is a new version; values a key or an agent writes are
        labelled in ``provenance`` as imported or suggested until a person saves them. 409 when the record changed since
        it was read.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The system

        Raises:
            ApiError: The plan does not include Compliance Mode (feature_unavailable). Reads are not refused. ``error``
                is ``RawError``."""
        return unwrap(
            await self._with_raw_response.patch_api_v1_ai_systems_by_id(id_, body=body, request_options=request_options)
        )

    async def post_api_v1_ai_systems(
        self,
        *,
        body: ApiV1AiSystemsRequest | ApiV1AiSystemsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The system

        Raises:
            ApiError: A live system already has that name The plan does not include Compliance Mode
                (feature_unavailable). Reads are not refused. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_ai_systems(body=body, request_options=request_options))

    async def post_api_v1_ai_systems_by_id_model_change(
        self,
        id_: UUID,
        *,
        body: ApiV1AiSystemsModelChangeRequest | ApiV1AiSystemsModelChangeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Enterprise. ``promptHash`` and ``guardrailsHash`` are digests (``sha256:…``, a commit, a version tag), never
        the text. Every governed task using the system gets a reassessment, which closes its gate until a person
        completes it, and the evaluation, resilience testing, change record and compliance approval of the old release
        stop counting — and, under a model-risk pack, its independent validation and model documentation. Recording a
        first fingerprint changes nothing; changing or removing one does. ``changed`` names the parts that differ from
        what was recorded: the same release again changes nothing and records nothing, so a build step may send it on
        every build.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { system, reassessments, changed }

        Raises:
            ApiError: The plan does not include this capability (feature_unavailable): Compliance Mode, or the
                Enterprise governance capability named in the message ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_ai_systems_by_id_model_change(
                id_, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_ai_systems_by_id_transitions(
        self,
        id_: UUID,
        *,
        body: ApiV1AiSystemsTransitionsRequest | ApiV1AiSystemsTransitionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """A key or an agent may put a proposal forward (``submit``) or take it back (``withdraw``). Approving,
        rejecting, returning, suspending, reinstating and retiring are a person's, in the app. A step is refused, with
        every reason, when the record lacks what it needs, when the caller may not take it, or when it is a decision and
        the caller holds a role on the record or moved it to its current status. 409 when the record changed since it
        was read.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The record, as GET /api/v1/ai-systems/{id}

        Raises:
            ApiError: The plan does not include Compliance Mode (feature_unavailable). Reads are not refused. ``error``
                is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_ai_systems_by_id_transitions(
                id_, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAiSystemsWithRawResponse:
        return self._with_raw_response


class AiSystemsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_ai_systems(
        self,
        *,
        status: StatusDeliverdDevAiSystemsApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], RawError]:
        """Send a ``GET`` request.

        Args:
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/ai-systems"),
            query_params=[param[StatusDeliverdDevAiSystemsApiOrStr | None]("status", status)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_ai_systems_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], RawError]:
        """``system`` is the record; ``status`` and ``steps`` say where it stands in its lifecycle and which steps out
        of it the caller may take (with every reason when not); ``roles`` are the members who answer for it; ``history``
        is every move; ``versions`` are snapshots of what it said; ``governedTaskIds`` are the governed tasks naming it.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/ai-systems/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_ai_systems_by_id_transitions(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/ai-systems/{id}/transitions"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def patch_api_v1_ai_systems_by_id(
        self,
        id_: UUID,
        *,
        body: ApiV1AiSystemsRequest1 | ApiV1AiSystemsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PatchApiV1AiSystemsByIdErrorBody]:
        """An agent cannot lower its risk. Its status is not a field: the lifecycle moves it (``POST
        /api/v1/ai-systems/{id}/transitions``). Each change is a new version; values a key or an agent writes are
        labelled in ``provenance`` as imported or suggested until a person saves them. 409 when the record changed since
        it was read.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/ai-systems/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AiSystemsRequest1 | ApiV1AiSystemsRequest1Dict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=patch_api_v1_ai_systems_by_id_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_ai_systems(
        self,
        *,
        body: ApiV1AiSystemsRequest | ApiV1AiSystemsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1AiSystemsErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/ai-systems"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AiSystemsRequest | ApiV1AiSystemsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_ai_systems_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_ai_systems_by_id_model_change(
        self,
        id_: UUID,
        *,
        body: ApiV1AiSystemsModelChangeRequest | ApiV1AiSystemsModelChangeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1AiSystemsByIdModelChangeErrorBody]:
        """Enterprise. ``promptHash`` and ``guardrailsHash`` are digests (``sha256:…``, a commit, a version tag), never
        the text. Every governed task using the system gets a reassessment, which closes its gate until a person
        completes it, and the evaluation, resilience testing, change record and compliance approval of the old release
        stop counting — and, under a model-risk pack, its independent validation and model documentation. Recording a
        first fingerprint changes nothing; changing or removing one does. ``changed`` names the parts that differ from
        what was recorded: the same release again changes nothing and records nothing, so a build step may send it on
        every build.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/ai-systems/{id}/model-change"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AiSystemsModelChangeRequest | ApiV1AiSystemsModelChangeRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_ai_systems_by_id_model_change_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_ai_systems_by_id_transitions(
        self,
        id_: UUID,
        *,
        body: ApiV1AiSystemsTransitionsRequest | ApiV1AiSystemsTransitionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1AiSystemsByIdTransitionsErrorBody]:
        """A key or an agent may put a proposal forward (``submit``) or take it back (``withdraw``). Approving,
        rejecting, returning, suspending, reinstating and retiring are a person's, in the app. A step is refused, with
        every reason, when the record lacks what it needs, when the caller may not take it, or when it is a decision and
        the caller holds a role on the record or moved it to its current status. 409 when the record changed since it
        was read.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/ai-systems/{id}/transitions"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AiSystemsTransitionsRequest | ApiV1AiSystemsTransitionsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_ai_systems_by_id_transitions_error_mapper,
            request_options=request_options,
        )


class AsyncAiSystemsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_ai_systems(
        self,
        *,
        status: StatusDeliverdDevAiSystemsApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], RawError]:
        """Send a ``GET`` request.

        Args:
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/ai-systems"),
            query_params=[param[StatusDeliverdDevAiSystemsApiOrStr | None]("status", status)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_ai_systems_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], RawError]:
        """``system`` is the record; ``status`` and ``steps`` say where it stands in its lifecycle and which steps out
        of it the caller may take (with every reason when not); ``roles`` are the members who answer for it; ``history``
        is every move; ``versions`` are snapshots of what it said; ``governedTaskIds`` are the governed tasks naming it.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/ai-systems/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_ai_systems_by_id_transitions(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/ai-systems/{id}/transitions"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def patch_api_v1_ai_systems_by_id(
        self,
        id_: UUID,
        *,
        body: ApiV1AiSystemsRequest1 | ApiV1AiSystemsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PatchApiV1AiSystemsByIdErrorBody]:
        """An agent cannot lower its risk. Its status is not a field: the lifecycle moves it (``POST
        /api/v1/ai-systems/{id}/transitions``). Each change is a new version; values a key or an agent writes are
        labelled in ``provenance`` as imported or suggested until a person saves them. 409 when the record changed since
        it was read.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/ai-systems/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AiSystemsRequest1 | ApiV1AiSystemsRequest1Dict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=patch_api_v1_ai_systems_by_id_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_ai_systems(
        self,
        *,
        body: ApiV1AiSystemsRequest | ApiV1AiSystemsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1AiSystemsErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/ai-systems"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AiSystemsRequest | ApiV1AiSystemsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_ai_systems_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_ai_systems_by_id_model_change(
        self,
        id_: UUID,
        *,
        body: ApiV1AiSystemsModelChangeRequest | ApiV1AiSystemsModelChangeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1AiSystemsByIdModelChangeErrorBody]:
        """Enterprise. ``promptHash`` and ``guardrailsHash`` are digests (``sha256:…``, a commit, a version tag), never
        the text. Every governed task using the system gets a reassessment, which closes its gate until a person
        completes it, and the evaluation, resilience testing, change record and compliance approval of the old release
        stop counting — and, under a model-risk pack, its independent validation and model documentation. Recording a
        first fingerprint changes nothing; changing or removing one does. ``changed`` names the parts that differ from
        what was recorded: the same release again changes nothing and records nothing, so a build step may send it on
        every build.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/ai-systems/{id}/model-change"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AiSystemsModelChangeRequest | ApiV1AiSystemsModelChangeRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_ai_systems_by_id_model_change_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_ai_systems_by_id_transitions(
        self,
        id_: UUID,
        *,
        body: ApiV1AiSystemsTransitionsRequest | ApiV1AiSystemsTransitionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1AiSystemsByIdTransitionsErrorBody]:
        """A key or an agent may put a proposal forward (``submit``) or take it back (``withdraw``). Approving,
        rejecting, returning, suspending, reinstating and retiring are a person's, in the app. A step is refused, with
        every reason, when the record lacks what it needs, when the caller may not take it, or when it is a decision and
        the caller holds a role on the record or moved it to its current status. 409 when the record changed since it
        was read.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/ai-systems/{id}/transitions"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AiSystemsTransitionsRequest | ApiV1AiSystemsTransitionsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_ai_systems_by_id_transitions_error_mapper,
            request_options=request_options,
        )
