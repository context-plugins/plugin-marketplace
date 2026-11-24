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
from ..errors.get_api_v1_playbooks_by_id_error import (
    GetApiV1PlaybooksByIdErrorBody,
    get_api_v1_playbooks_by_id_error_mapper,
)
from ..errors.patch_api_v1_playbooks_by_id_error import (
    PatchApiV1PlaybooksByIdErrorBody,
    patch_api_v1_playbooks_by_id_error_mapper,
)
from ..errors.post_api_v1_playbooks_by_id_approval_error import (
    PostApiV1PlaybooksByIdApprovalErrorBody,
    post_api_v1_playbooks_by_id_approval_error_mapper,
)
from ..errors.post_api_v1_playbooks_by_id_start_error import (
    PostApiV1PlaybooksByIdStartErrorBody,
    post_api_v1_playbooks_by_id_start_error_mapper,
)
from ..errors.post_api_v1_playbooks_by_id_use_error import (
    PostApiV1PlaybooksByIdUseErrorBody,
    post_api_v1_playbooks_by_id_use_error_mapper,
)
from ..errors.post_api_v1_playbooks_by_id_versions_error import (
    PostApiV1PlaybooksByIdVersionsErrorBody,
    post_api_v1_playbooks_by_id_versions_error_mapper,
)
from ..errors.post_api_v1_playbooks_error import PostApiV1PlaybooksErrorBody, post_api_v1_playbooks_error_mapper
from ..models.api_v1_playbooks_approval_request import ApiV1PlaybooksApprovalRequest, ApiV1PlaybooksApprovalRequestDict
from ..models.api_v1_playbooks_request import ApiV1PlaybooksRequest, ApiV1PlaybooksRequestDict
from ..models.api_v1_playbooks_start_request import ApiV1PlaybooksStartRequest, ApiV1PlaybooksStartRequestDict
from ..models.api_v1_playbooks_use_request import ApiV1PlaybooksUseRequest, ApiV1PlaybooksUseRequestDict
from ..models.api_v1_playbooks_versions_request import ApiV1PlaybooksVersionsRequest, ApiV1PlaybooksVersionsRequestDict
from ..models.enums.kind_deliverd_dev_playbooks_api import KindDeliverdDevPlaybooksApiOrStr
from ..server.server import Server


class Playbooks:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PlaybooksWithRawResponse(client, server, auth)

    def get_api_v1_playbooks(
        self,
        *,
        kind: KindDeliverdDevPlaybooksApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """One row per playbook: its newest version, and ``inForce``, the version that runs. Approved prompts are
        playbooks of ``kind`` prompt; ``?kind=`` keeps one or the other.

        Args:
            kind: procedure for playbooks of steps, prompt for approved prompts; both when omitted
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``{ playbooks }``

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_playbooks(kind=kind, request_options=request_options))

    def get_api_v1_playbooks_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The version, ``versions``, ``inForceId`` and ``knowledge``

        Raises:
            ApiError: Not found, or not visible to you ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_playbooks_by_id(id_, request_options=request_options))

    def patch_api_v1_playbooks_by_id(
        self,
        id_: UUID,
        *,
        body: ApiV1PlaybooksRequest | ApiV1PlaybooksRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Only before it has been put to anybody. After that, draft the next version.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The draft

        Raises:
            ApiError: The plan does not include Objectives (feature_unavailable). Reads are not refused. Already
                submitted ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.patch_api_v1_playbooks_by_id(id_, body=body, request_options=request_options)
        )

    def post_api_v1_playbooks(
        self,
        *,
        body: ApiV1PlaybooksRequest | ApiV1PlaybooksRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Steps, each with the rule that applies before it acts: ``none``, ``gate`` (with the ``action`` to check),
        ``approval`` or ``review``. Or ``prompt`` instead of steps, for an approved prompt: its words with ``{input}``
        placeholders, an owner and a review date. Nobody runs a draft: a governing person publishes it in the app, or an
        approval of it is approved.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The draft

        Raises:
            ApiError: The plan does not include Objectives (feature_unavailable). Reads are not refused. ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_playbooks(body=body, request_options=request_options))

    def post_api_v1_playbooks_by_id_approval(
        self,
        id_: UUID,
        *,
        body: ApiV1PlaybooksApprovalRequest | ApiV1PlaybooksApprovalRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """A Deliverd approval of the playbook; approved, it goes in force. Needs ``approvals:write`` and
        ``tasks:write``. Its content is fixed from here.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The version, awaiting approval

        Raises:
            ApiError: The plan does not include Objectives (feature_unavailable). Reads are not refused. Already
                submitted ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_playbooks_by_id_approval(
                id_, body=body, request_options=request_options
            ),
        )

    def post_api_v1_playbooks_by_id_start(
        self,
        id_: UUID,
        *,
        body: ApiV1PlaybooksStartRequest | ApiV1PlaybooksStartRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Starts the version in force as an objective, with a side task per step holding its instruction and the call
        its rule needs. Naming an older version runs the one in force (``ranOlderVersion``). Missing required inputs are
        refused with ``details.missingInputs``. With ``externalId``, an open run is returned instead (status 200).

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An open run under this externalId

        Raises:
            ApiError: The plan does not include Objectives (feature_unavailable). Reads are not refused. No version is
                in force ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_playbooks_by_id_start(id_, body=body, request_options=request_options)
        )

    def post_api_v1_playbooks_by_id_use(
        self,
        id_: UUID,
        *,
        body: ApiV1PlaybooksUseRequest | ApiV1PlaybooksUseRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """The version in force of the prompt, with the inputs put in, and its limitations. Each use is recorded against
        the version. Naming an older version hands out the one in force (``ranOlderVersion``). Required inputs not given
        are listed in ``missingInputs`` and their placeholders left in the words. Needs ``tasks:read``.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``{ prompt, text, missingInputs, limitations, ranOlderVersion }``

        Raises:
            ApiError: No version is in force ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_playbooks_by_id_use(id_, body=body, request_options=request_options)
        )

    def post_api_v1_playbooks_by_id_versions(
        self,
        id_: UUID,
        *,
        body: ApiV1PlaybooksVersionsRequest | ApiV1PlaybooksVersionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """The version in force keeps running until this one is put in force.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The new draft

        Raises:
            ApiError: The plan does not include Objectives (feature_unavailable). Reads are not refused. ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_playbooks_by_id_versions(
                id_, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> PlaybooksWithRawResponse:
        return self._with_raw_response


class AsyncPlaybooks:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPlaybooksWithRawResponse(client, server, auth)

    async def get_api_v1_playbooks(
        self,
        *,
        kind: KindDeliverdDevPlaybooksApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """One row per playbook: its newest version, and ``inForce``, the version that runs. Approved prompts are
        playbooks of ``kind`` prompt; ``?kind=`` keeps one or the other.

        Args:
            kind: procedure for playbooks of steps, prompt for approved prompts; both when omitted
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``{ playbooks }``

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_api_v1_playbooks(kind=kind, request_options=request_options))

    async def get_api_v1_playbooks_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The version, ``versions``, ``inForceId`` and ``knowledge``

        Raises:
            ApiError: Not found, or not visible to you ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_api_v1_playbooks_by_id(id_, request_options=request_options))

    async def patch_api_v1_playbooks_by_id(
        self,
        id_: UUID,
        *,
        body: ApiV1PlaybooksRequest | ApiV1PlaybooksRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Only before it has been put to anybody. After that, draft the next version.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The draft

        Raises:
            ApiError: The plan does not include Objectives (feature_unavailable). Reads are not refused. Already
                submitted ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.patch_api_v1_playbooks_by_id(id_, body=body, request_options=request_options)
        )

    async def post_api_v1_playbooks(
        self,
        *,
        body: ApiV1PlaybooksRequest | ApiV1PlaybooksRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Steps, each with the rule that applies before it acts: ``none``, ``gate`` (with the ``action`` to check),
        ``approval`` or ``review``. Or ``prompt`` instead of steps, for an approved prompt: its words with ``{input}``
        placeholders, an owner and a review date. Nobody runs a draft: a governing person publishes it in the app, or an
        approval of it is approved.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The draft

        Raises:
            ApiError: The plan does not include Objectives (feature_unavailable). Reads are not refused. ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_playbooks(body=body, request_options=request_options))

    async def post_api_v1_playbooks_by_id_approval(
        self,
        id_: UUID,
        *,
        body: ApiV1PlaybooksApprovalRequest | ApiV1PlaybooksApprovalRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """A Deliverd approval of the playbook; approved, it goes in force. Needs ``approvals:write`` and
        ``tasks:write``. Its content is fixed from here.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The version, awaiting approval

        Raises:
            ApiError: The plan does not include Objectives (feature_unavailable). Reads are not refused. Already
                submitted ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_playbooks_by_id_approval(
                id_, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_playbooks_by_id_start(
        self,
        id_: UUID,
        *,
        body: ApiV1PlaybooksStartRequest | ApiV1PlaybooksStartRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Starts the version in force as an objective, with a side task per step holding its instruction and the call
        its rule needs. Naming an older version runs the one in force (``ranOlderVersion``). Missing required inputs are
        refused with ``details.missingInputs``. With ``externalId``, an open run is returned instead (status 200).

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An open run under this externalId

        Raises:
            ApiError: The plan does not include Objectives (feature_unavailable). Reads are not refused. No version is
                in force ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_playbooks_by_id_start(
                id_, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_playbooks_by_id_use(
        self,
        id_: UUID,
        *,
        body: ApiV1PlaybooksUseRequest | ApiV1PlaybooksUseRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """The version in force of the prompt, with the inputs put in, and its limitations. Each use is recorded against
        the version. Naming an older version hands out the one in force (``ranOlderVersion``). Required inputs not given
        are listed in ``missingInputs`` and their placeholders left in the words. Needs ``tasks:read``.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``{ prompt, text, missingInputs, limitations, ranOlderVersion }``

        Raises:
            ApiError: No version is in force ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_playbooks_by_id_use(
                id_, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_playbooks_by_id_versions(
        self,
        id_: UUID,
        *,
        body: ApiV1PlaybooksVersionsRequest | ApiV1PlaybooksVersionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """The version in force keeps running until this one is put in force.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The new draft

        Raises:
            ApiError: The plan does not include Objectives (feature_unavailable). Reads are not refused. ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_playbooks_by_id_versions(
                id_, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPlaybooksWithRawResponse:
        return self._with_raw_response


class PlaybooksWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_playbooks(
        self,
        *,
        kind: KindDeliverdDevPlaybooksApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], RawError]:
        """One row per playbook: its newest version, and ``inForce``, the version that runs. Approved prompts are
        playbooks of ``kind`` prompt; ``?kind=`` keeps one or the other.

        Args:
            kind: procedure for playbooks of steps, prompt for approved prompts; both when omitted
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/playbooks"),
            query_params=[param[KindDeliverdDevPlaybooksApiOrStr | None]("kind", kind)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_playbooks_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], GetApiV1PlaybooksByIdErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/playbooks/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=get_api_v1_playbooks_by_id_error_mapper,
            request_options=request_options,
        )

    def patch_api_v1_playbooks_by_id(
        self,
        id_: UUID,
        *,
        body: ApiV1PlaybooksRequest | ApiV1PlaybooksRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PatchApiV1PlaybooksByIdErrorBody]:
        """Only before it has been put to anybody. After that, draft the next version.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/playbooks/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PlaybooksRequest | ApiV1PlaybooksRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=patch_api_v1_playbooks_by_id_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_playbooks(
        self,
        *,
        body: ApiV1PlaybooksRequest | ApiV1PlaybooksRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1PlaybooksErrorBody]:
        """Steps, each with the rule that applies before it acts: ``none``, ``gate`` (with the ``action`` to check),
        ``approval`` or ``review``. Or ``prompt`` instead of steps, for an approved prompt: its words with ``{input}``
        placeholders, an owner and a review date. Nobody runs a draft: a governing person publishes it in the app, or an
        approval of it is approved.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/playbooks"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PlaybooksRequest | ApiV1PlaybooksRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_playbooks_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_playbooks_by_id_approval(
        self,
        id_: UUID,
        *,
        body: ApiV1PlaybooksApprovalRequest | ApiV1PlaybooksApprovalRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1PlaybooksByIdApprovalErrorBody]:
        """A Deliverd approval of the playbook; approved, it goes in force. Needs ``approvals:write`` and
        ``tasks:write``. Its content is fixed from here.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/playbooks/{id}/approval"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PlaybooksApprovalRequest | ApiV1PlaybooksApprovalRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_playbooks_by_id_approval_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_playbooks_by_id_start(
        self,
        id_: UUID,
        *,
        body: ApiV1PlaybooksStartRequest | ApiV1PlaybooksStartRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1PlaybooksByIdStartErrorBody]:
        """Starts the version in force as an objective, with a side task per step holding its instruction and the call
        its rule needs. Naming an older version runs the one in force (``ranOlderVersion``). Missing required inputs are
        refused with ``details.missingInputs``. With ``externalId``, an open run is returned instead (status 200).

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/playbooks/{id}/start"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PlaybooksStartRequest | ApiV1PlaybooksStartRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_playbooks_by_id_start_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_playbooks_by_id_use(
        self,
        id_: UUID,
        *,
        body: ApiV1PlaybooksUseRequest | ApiV1PlaybooksUseRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1PlaybooksByIdUseErrorBody]:
        """The version in force of the prompt, with the inputs put in, and its limitations. Each use is recorded against
        the version. Naming an older version hands out the one in force (``ranOlderVersion``). Required inputs not given
        are listed in ``missingInputs`` and their placeholders left in the words. Needs ``tasks:read``.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/playbooks/{id}/use"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PlaybooksUseRequest | ApiV1PlaybooksUseRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_playbooks_by_id_use_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_playbooks_by_id_versions(
        self,
        id_: UUID,
        *,
        body: ApiV1PlaybooksVersionsRequest | ApiV1PlaybooksVersionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1PlaybooksByIdVersionsErrorBody]:
        """The version in force keeps running until this one is put in force.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/playbooks/{id}/versions"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PlaybooksVersionsRequest | ApiV1PlaybooksVersionsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_playbooks_by_id_versions_error_mapper,
            request_options=request_options,
        )


class AsyncPlaybooksWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_playbooks(
        self,
        *,
        kind: KindDeliverdDevPlaybooksApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], RawError]:
        """One row per playbook: its newest version, and ``inForce``, the version that runs. Approved prompts are
        playbooks of ``kind`` prompt; ``?kind=`` keeps one or the other.

        Args:
            kind: procedure for playbooks of steps, prompt for approved prompts; both when omitted
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/playbooks"),
            query_params=[param[KindDeliverdDevPlaybooksApiOrStr | None]("kind", kind)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_playbooks_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], GetApiV1PlaybooksByIdErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/playbooks/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=get_api_v1_playbooks_by_id_error_mapper,
            request_options=request_options,
        )

    async def patch_api_v1_playbooks_by_id(
        self,
        id_: UUID,
        *,
        body: ApiV1PlaybooksRequest | ApiV1PlaybooksRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PatchApiV1PlaybooksByIdErrorBody]:
        """Only before it has been put to anybody. After that, draft the next version.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/playbooks/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PlaybooksRequest | ApiV1PlaybooksRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=patch_api_v1_playbooks_by_id_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_playbooks(
        self,
        *,
        body: ApiV1PlaybooksRequest | ApiV1PlaybooksRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1PlaybooksErrorBody]:
        """Steps, each with the rule that applies before it acts: ``none``, ``gate`` (with the ``action`` to check),
        ``approval`` or ``review``. Or ``prompt`` instead of steps, for an approved prompt: its words with ``{input}``
        placeholders, an owner and a review date. Nobody runs a draft: a governing person publishes it in the app, or an
        approval of it is approved.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/playbooks"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PlaybooksRequest | ApiV1PlaybooksRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_playbooks_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_playbooks_by_id_approval(
        self,
        id_: UUID,
        *,
        body: ApiV1PlaybooksApprovalRequest | ApiV1PlaybooksApprovalRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1PlaybooksByIdApprovalErrorBody]:
        """A Deliverd approval of the playbook; approved, it goes in force. Needs ``approvals:write`` and
        ``tasks:write``. Its content is fixed from here.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/playbooks/{id}/approval"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PlaybooksApprovalRequest | ApiV1PlaybooksApprovalRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_playbooks_by_id_approval_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_playbooks_by_id_start(
        self,
        id_: UUID,
        *,
        body: ApiV1PlaybooksStartRequest | ApiV1PlaybooksStartRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1PlaybooksByIdStartErrorBody]:
        """Starts the version in force as an objective, with a side task per step holding its instruction and the call
        its rule needs. Naming an older version runs the one in force (``ranOlderVersion``). Missing required inputs are
        refused with ``details.missingInputs``. With ``externalId``, an open run is returned instead (status 200).

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/playbooks/{id}/start"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PlaybooksStartRequest | ApiV1PlaybooksStartRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_playbooks_by_id_start_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_playbooks_by_id_use(
        self,
        id_: UUID,
        *,
        body: ApiV1PlaybooksUseRequest | ApiV1PlaybooksUseRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1PlaybooksByIdUseErrorBody]:
        """The version in force of the prompt, with the inputs put in, and its limitations. Each use is recorded against
        the version. Naming an older version hands out the one in force (``ranOlderVersion``). Required inputs not given
        are listed in ``missingInputs`` and their placeholders left in the words. Needs ``tasks:read``.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/playbooks/{id}/use"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PlaybooksUseRequest | ApiV1PlaybooksUseRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_playbooks_by_id_use_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_playbooks_by_id_versions(
        self,
        id_: UUID,
        *,
        body: ApiV1PlaybooksVersionsRequest | ApiV1PlaybooksVersionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1PlaybooksByIdVersionsErrorBody]:
        """The version in force keeps running until this one is put in force.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/playbooks/{id}/versions"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PlaybooksVersionsRequest | ApiV1PlaybooksVersionsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_playbooks_by_id_versions_error_mapper,
            request_options=request_options,
        )
