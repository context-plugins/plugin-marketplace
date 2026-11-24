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
    async_text_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    text_decoder,
    unwrap,
)
from ..errors.get_api_v1_knowledge_by_id_error import (
    GetApiV1KnowledgeByIdErrorBody,
    get_api_v1_knowledge_by_id_error_mapper,
)
from ..errors.patch_api_v1_knowledge_by_id_error import (
    PatchApiV1KnowledgeByIdErrorBody,
    patch_api_v1_knowledge_by_id_error_mapper,
)
from ..errors.post_api_v1_knowledge_error import PostApiV1KnowledgeErrorBody, post_api_v1_knowledge_error_mapper
from ..errors.post_api_v1_knowledge_import_error import (
    PostApiV1KnowledgeImportErrorBody,
    post_api_v1_knowledge_import_error_mapper,
)
from ..models.api_v1_knowledge_import_request import ApiV1KnowledgeImportRequest, ApiV1KnowledgeImportRequestDict
from ..models.api_v1_knowledge_request import ApiV1KnowledgeRequest, ApiV1KnowledgeRequestDict
from ..models.api_v1_knowledge_request1 import ApiV1KnowledgeRequest1, ApiV1KnowledgeRequest1Dict
from ..models.enums.format_deliverd_dev_knowledge_api import FormatDeliverdDevKnowledgeApiOrStr
from ..models.enums.kind_deliverd_dev_knowledge_api import KindDeliverdDevKnowledgeApiOrStr
from ..models.enums.status_deliverd_dev_knowledge_api import StatusDeliverdDevKnowledgeApiOrStr
from ..server.server import Server


class Knowledge:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = KnowledgeWithRawResponse(client, server, auth)

    def get_api_v1_knowledge(
        self,
        *,
        q: str | None = None,
        kind: KindDeliverdDevKnowledgeApiOrStr | None = None,
        status: StatusDeliverdDevKnowledgeApiOrStr | None = None,
        workspace_id: UUID | None = None,
        flow_id: UUID | None = None,
        limit: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Ranked by relevance to ``q``, or newest first without it. Confirmed entries unless ``status`` says otherwise:
        only those are to be relied on. ``more`` is true when the list was cut at ``limit``.

        Args:
            q: Value sent with the request.
            kind: Value sent with the request.
            status: Value sent with the request.
            workspace_id: Value sent with the request.
            flow_id: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``{ entries, more }``

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_knowledge(
                q=q,
                kind=kind,
                status=status,
                workspace_id=workspace_id,
                flow_id=flow_id,
                limit=limit,
                request_options=request_options,
            ),
        )

    def get_api_v1_knowledge_agents_md(
        self, *, workspace_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> str:
        """For a tool that reads files rather than calling tools. A snapshot that says where the live version is.

        Args:
            workspace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            AGENTS.md

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_knowledge_agents_md(
                workspace_id=workspace_id, request_options=request_options
            ),
        )

    def get_api_v1_knowledge_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The entry, its ``history`` and any ``pendingRevision``

        Raises:
            ApiError: Not found, or not visible to you ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_knowledge_by_id(id_, request_options=request_options))

    def get_api_v1_knowledge_export(
        self,
        *,
        format_: FormatDeliverdDevKnowledgeApiOrStr | None = None,
        status: StatusDeliverdDevKnowledgeApiOrStr | None = None,
        workspace_id: UUID | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> str:
        """Everything the caller may see, as Markdown that imports back (the default) or JSON. Audited.

        Args:
            format_: Value sent with the request.
            status: Value sent with the request.
            workspace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The file

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_knowledge_export(
                format_=format_, status=status, workspace_id=workspace_id, request_options=request_options
            ),
        )

    def patch_api_v1_knowledge_by_id(
        self,
        id_: UUID,
        *,
        body: ApiV1KnowledgeRequest1 | ApiV1KnowledgeRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Only while it is proposed, and only by a person or the agent that proposed it. A confirmed entry's words
        never change: propose a revision.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The entry

        Raises:
            ApiError: The plan does not include Objectives (feature_unavailable). Reads are not refused. No longer a
                proposal ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.patch_api_v1_knowledge_by_id(id_, body=body, request_options=request_options)
        )

    def post_api_v1_knowledge(
        self,
        *,
        body: ApiV1KnowledgeRequest | ApiV1KnowledgeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """A proposal until a person confirms it in Deliverd; no key confirms anything. A secret is refused; personal
        data is said back as ``screening``. With ``supersedesId`` it is a revision that replaces the confirmed entry
        once confirmed. With ``externalId``, an open entry under the same one is returned instead (``resumed: true``,
        status 200).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An open entry under this externalId

        Raises:
            ApiError: The plan does not include Objectives (feature_unavailable). Reads are not refused. ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_knowledge(body=body, request_options=request_options))

    def post_api_v1_knowledge_import(
        self,
        *,
        body: ApiV1KnowledgeImportRequest | ApiV1KnowledgeImportRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """A Deliverd export, or a notes file an agent tool keeps (AGENTS.md, CLAUDE.md): each heading becomes one
        proposed entry. Entries already there by title or id are skipped and said so.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``{ created, skipped }``

        Raises:
            ApiError: The plan does not include Objectives (feature_unavailable). Reads are not refused. ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_knowledge_import(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> KnowledgeWithRawResponse:
        return self._with_raw_response


class AsyncKnowledge:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncKnowledgeWithRawResponse(client, server, auth)

    async def get_api_v1_knowledge(
        self,
        *,
        q: str | None = None,
        kind: KindDeliverdDevKnowledgeApiOrStr | None = None,
        status: StatusDeliverdDevKnowledgeApiOrStr | None = None,
        workspace_id: UUID | None = None,
        flow_id: UUID | None = None,
        limit: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Ranked by relevance to ``q``, or newest first without it. Confirmed entries unless ``status`` says otherwise:
        only those are to be relied on. ``more`` is true when the list was cut at ``limit``.

        Args:
            q: Value sent with the request.
            kind: Value sent with the request.
            status: Value sent with the request.
            workspace_id: Value sent with the request.
            flow_id: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``{ entries, more }``

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_knowledge(
                q=q,
                kind=kind,
                status=status,
                workspace_id=workspace_id,
                flow_id=flow_id,
                limit=limit,
                request_options=request_options,
            ),
        )

    async def get_api_v1_knowledge_agents_md(
        self, *, workspace_id: UUID | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> str:
        """For a tool that reads files rather than calling tools. A snapshot that says where the live version is.

        Args:
            workspace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            AGENTS.md

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_knowledge_agents_md(
                workspace_id=workspace_id, request_options=request_options
            ),
        )

    async def get_api_v1_knowledge_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The entry, its ``history`` and any ``pendingRevision``

        Raises:
            ApiError: Not found, or not visible to you ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_api_v1_knowledge_by_id(id_, request_options=request_options))

    async def get_api_v1_knowledge_export(
        self,
        *,
        format_: FormatDeliverdDevKnowledgeApiOrStr | None = None,
        status: StatusDeliverdDevKnowledgeApiOrStr | None = None,
        workspace_id: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> str:
        """Everything the caller may see, as Markdown that imports back (the default) or JSON. Audited.

        Args:
            format_: Value sent with the request.
            status: Value sent with the request.
            workspace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The file

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_knowledge_export(
                format_=format_, status=status, workspace_id=workspace_id, request_options=request_options
            ),
        )

    async def patch_api_v1_knowledge_by_id(
        self,
        id_: UUID,
        *,
        body: ApiV1KnowledgeRequest1 | ApiV1KnowledgeRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """Only while it is proposed, and only by a person or the agent that proposed it. A confirmed entry's words
        never change: propose a revision.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The entry

        Raises:
            ApiError: The plan does not include Objectives (feature_unavailable). Reads are not refused. No longer a
                proposal ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.patch_api_v1_knowledge_by_id(id_, body=body, request_options=request_options)
        )

    async def post_api_v1_knowledge(
        self,
        *,
        body: ApiV1KnowledgeRequest | ApiV1KnowledgeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """A proposal until a person confirms it in Deliverd; no key confirms anything. A secret is refused; personal
        data is said back as ``screening``. With ``supersedesId`` it is a revision that replaces the confirmed entry
        once confirmed. With ``externalId``, an open entry under the same one is returned instead (``resumed: true``,
        status 200).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An open entry under this externalId

        Raises:
            ApiError: The plan does not include Objectives (feature_unavailable). Reads are not refused. ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_knowledge(body=body, request_options=request_options))

    async def post_api_v1_knowledge_import(
        self,
        *,
        body: ApiV1KnowledgeImportRequest | ApiV1KnowledgeImportRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """A Deliverd export, or a notes file an agent tool keeps (AGENTS.md, CLAUDE.md): each heading becomes one
        proposed entry. Entries already there by title or id are skipped and said so.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``{ created, skipped }``

        Raises:
            ApiError: The plan does not include Objectives (feature_unavailable). Reads are not refused. ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_knowledge_import(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncKnowledgeWithRawResponse:
        return self._with_raw_response


class KnowledgeWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_knowledge(
        self,
        *,
        q: str | None = None,
        kind: KindDeliverdDevKnowledgeApiOrStr | None = None,
        status: StatusDeliverdDevKnowledgeApiOrStr | None = None,
        workspace_id: UUID | None = None,
        flow_id: UUID | None = None,
        limit: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], RawError]:
        """Ranked by relevance to ``q``, or newest first without it. Confirmed entries unless ``status`` says otherwise:
        only those are to be relied on. ``more`` is true when the list was cut at ``limit``.

        Args:
            q: Value sent with the request.
            kind: Value sent with the request.
            status: Value sent with the request.
            workspace_id: Value sent with the request.
            flow_id: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/knowledge"),
            query_params=[
                param[str | None]("q", q),
                param[KindDeliverdDevKnowledgeApiOrStr | None]("kind", kind),
                param[StatusDeliverdDevKnowledgeApiOrStr | None]("status", status),
                param[UUID | None]("workspaceId", workspace_id),
                param[UUID | None]("flowId", flow_id),
                param[int | None]("limit", limit),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_knowledge_agents_md(
        self, *, workspace_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[str, RawError]:
        """For a tool that reads files rather than calling tools. A snapshot that says where the live version is.

        Args:
            workspace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/knowledge/agents-md"),
            query_params=[param[UUID | None]("workspaceId", workspace_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=text_decoder[str],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_knowledge_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], GetApiV1KnowledgeByIdErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/knowledge/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=get_api_v1_knowledge_by_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_knowledge_export(
        self,
        *,
        format_: FormatDeliverdDevKnowledgeApiOrStr | None = None,
        status: StatusDeliverdDevKnowledgeApiOrStr | None = None,
        workspace_id: UUID | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[str, RawError]:
        """Everything the caller may see, as Markdown that imports back (the default) or JSON. Audited.

        Args:
            format_: Value sent with the request.
            status: Value sent with the request.
            workspace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/knowledge/export"),
            query_params=[
                param[FormatDeliverdDevKnowledgeApiOrStr | None]("format", format_),
                param[StatusDeliverdDevKnowledgeApiOrStr | None]("status", status),
                param[UUID | None]("workspaceId", workspace_id),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=text_decoder[str],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def patch_api_v1_knowledge_by_id(
        self,
        id_: UUID,
        *,
        body: ApiV1KnowledgeRequest1 | ApiV1KnowledgeRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PatchApiV1KnowledgeByIdErrorBody]:
        """Only while it is proposed, and only by a person or the agent that proposed it. A confirmed entry's words
        never change: propose a revision.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/knowledge/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1KnowledgeRequest1 | ApiV1KnowledgeRequest1Dict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=patch_api_v1_knowledge_by_id_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_knowledge(
        self,
        *,
        body: ApiV1KnowledgeRequest | ApiV1KnowledgeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1KnowledgeErrorBody]:
        """A proposal until a person confirms it in Deliverd; no key confirms anything. A secret is refused; personal
        data is said back as ``screening``. With ``supersedesId`` it is a revision that replaces the confirmed entry
        once confirmed. With ``externalId``, an open entry under the same one is returned instead (``resumed: true``,
        status 200).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/knowledge"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1KnowledgeRequest | ApiV1KnowledgeRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_knowledge_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_knowledge_import(
        self,
        *,
        body: ApiV1KnowledgeImportRequest | ApiV1KnowledgeImportRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1KnowledgeImportErrorBody]:
        """A Deliverd export, or a notes file an agent tool keeps (AGENTS.md, CLAUDE.md): each heading becomes one
        proposed entry. Entries already there by title or id are skipped and said so.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/knowledge/import"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1KnowledgeImportRequest | ApiV1KnowledgeImportRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_knowledge_import_error_mapper,
            request_options=request_options,
        )


class AsyncKnowledgeWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_knowledge(
        self,
        *,
        q: str | None = None,
        kind: KindDeliverdDevKnowledgeApiOrStr | None = None,
        status: StatusDeliverdDevKnowledgeApiOrStr | None = None,
        workspace_id: UUID | None = None,
        flow_id: UUID | None = None,
        limit: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], RawError]:
        """Ranked by relevance to ``q``, or newest first without it. Confirmed entries unless ``status`` says otherwise:
        only those are to be relied on. ``more`` is true when the list was cut at ``limit``.

        Args:
            q: Value sent with the request.
            kind: Value sent with the request.
            status: Value sent with the request.
            workspace_id: Value sent with the request.
            flow_id: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/knowledge"),
            query_params=[
                param[str | None]("q", q),
                param[KindDeliverdDevKnowledgeApiOrStr | None]("kind", kind),
                param[StatusDeliverdDevKnowledgeApiOrStr | None]("status", status),
                param[UUID | None]("workspaceId", workspace_id),
                param[UUID | None]("flowId", flow_id),
                param[int | None]("limit", limit),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_knowledge_agents_md(
        self, *, workspace_id: UUID | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[str, RawError]:
        """For a tool that reads files rather than calling tools. A snapshot that says where the live version is.

        Args:
            workspace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/knowledge/agents-md"),
            query_params=[param[UUID | None]("workspaceId", workspace_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_text_decoder[str],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_knowledge_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], GetApiV1KnowledgeByIdErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/knowledge/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=get_api_v1_knowledge_by_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_knowledge_export(
        self,
        *,
        format_: FormatDeliverdDevKnowledgeApiOrStr | None = None,
        status: StatusDeliverdDevKnowledgeApiOrStr | None = None,
        workspace_id: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[str, RawError]:
        """Everything the caller may see, as Markdown that imports back (the default) or JSON. Audited.

        Args:
            format_: Value sent with the request.
            status: Value sent with the request.
            workspace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/knowledge/export"),
            query_params=[
                param[FormatDeliverdDevKnowledgeApiOrStr | None]("format", format_),
                param[StatusDeliverdDevKnowledgeApiOrStr | None]("status", status),
                param[UUID | None]("workspaceId", workspace_id),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_text_decoder[str],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def patch_api_v1_knowledge_by_id(
        self,
        id_: UUID,
        *,
        body: ApiV1KnowledgeRequest1 | ApiV1KnowledgeRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PatchApiV1KnowledgeByIdErrorBody]:
        """Only while it is proposed, and only by a person or the agent that proposed it. A confirmed entry's words
        never change: propose a revision.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/knowledge/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1KnowledgeRequest1 | ApiV1KnowledgeRequest1Dict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=patch_api_v1_knowledge_by_id_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_knowledge(
        self,
        *,
        body: ApiV1KnowledgeRequest | ApiV1KnowledgeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1KnowledgeErrorBody]:
        """A proposal until a person confirms it in Deliverd; no key confirms anything. A secret is refused; personal
        data is said back as ``screening``. With ``supersedesId`` it is a revision that replaces the confirmed entry
        once confirmed. With ``externalId``, an open entry under the same one is returned instead (``resumed: true``,
        status 200).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/knowledge"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1KnowledgeRequest | ApiV1KnowledgeRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_knowledge_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_knowledge_import(
        self,
        *,
        body: ApiV1KnowledgeImportRequest | ApiV1KnowledgeImportRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1KnowledgeImportErrorBody]:
        """A Deliverd export, or a notes file an agent tool keeps (AGENTS.md, CLAUDE.md): each heading becomes one
        proposed entry. Entries already there by title or id are skipped and said so.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/knowledge/import"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1KnowledgeImportRequest | ApiV1KnowledgeImportRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_knowledge_import_error_mapper,
            request_options=request_options,
        )
