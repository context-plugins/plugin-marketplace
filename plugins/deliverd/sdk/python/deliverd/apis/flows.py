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
from ..errors.get_api_v1_flows_by_id_error import GetApiV1FlowsByIdErrorBody, get_api_v1_flows_by_id_error_mapper
from ..errors.get_api_v1_flows_by_id_evidence_error import (
    GetApiV1FlowsByIdEvidenceErrorBody,
    get_api_v1_flows_by_id_evidence_error_mapper,
)
from ..errors.post_api_v1_flows_by_id_cancel_error import (
    PostApiV1FlowsByIdCancelErrorBody,
    post_api_v1_flows_by_id_cancel_error_mapper,
)
from ..errors.post_api_v1_flows_by_id_complete_error import (
    PostApiV1FlowsByIdCompleteErrorBody,
    post_api_v1_flows_by_id_complete_error_mapper,
)
from ..models.api_v1_flows_cancel_response import ApiV1FlowsCancelResponse
from ..models.api_v1_flows_complete_response import ApiV1FlowsCompleteResponse
from ..models.api_v1_flows_request import ApiV1FlowsRequest, ApiV1FlowsRequestDict
from ..models.api_v1_flows_response import ApiV1FlowsResponse
from ..models.api_v1_flows_response1 import ApiV1FlowsResponse1
from ..models.enums.format import FormatOrStr
from ..models.enums.status_deliverd_dev_flows_api import StatusDeliverdDevFlowsApiOrStr
from ..server.server import Server


class Flows:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FlowsWithRawResponse(client, server, auth)

    def get_api_v1_flows(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: StatusDeliverdDevFlowsApiOrStr | None = None,
        external_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1FlowsResponse1:
        """Send a ``GET`` request.

        Args:
            limit: Value sent with the request.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            status: Value sent with the request.
            external_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Newest first. Members are counted but not listed; read one for those.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_flows(
                limit=limit, cursor=cursor, status=status, external_id=external_id, request_options=request_options
            ),
        )

    def get_api_v1_flows_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1FlowsResponse:
        """The timeline is every audited step across the flow and everything in it, in the order it happened. allSettled
        says nothing is outstanding right now; it is not a claim that the work is finished, because a flow is extended
        as it goes.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The flow

        Raises:
            ApiError: Not found ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_flows_by_id(id_, request_options=request_options))

    def get_api_v1_flows_by_id_evidence(
        self, id_: UUID, *, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """The whole record of one piece of work: every approval, review and request for information with who was asked
        and what they said, the report's version history, and the timeline across all of it. Requires reports:read,
        approvals:read, reviews:read and collections:read — the pack contains everything, so it takes every scope that
        reads any of it. ?format=csv returns the timeline alone as a spreadsheet; the JSON is the whole record. Every
        export is audited as evidence.exported, with the pack's digest, so the trail records which copy was taken.

        Args:
            id_: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The pack (JSON), or the timeline (CSV)

        Raises:
            ApiError: The key does not hold every scope the pack draws on Not found ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_flows_by_id_evidence(
                id_, format_=format_, request_options=request_options
            ),
        )

    def post_api_v1_flows(
        self,
        *,
        body: ApiV1FlowsRequest | ApiV1FlowsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1FlowsResponse:
        """A flow groups the approvals, reviews, collections and reports that belong to one job, so the history reads as
        one sequence rather than four unrelated tables. Nothing is attached here — a member joins by naming flowId when
        it is created. It is a grouping and not a scheduler: nothing waits on a flow and nothing is blocked by one.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The flow, open and empty

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_flows(body=body, request_options=request_options))

    def post_api_v1_flows_by_id_cancel(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1FlowsCancelResponse:
        """The flow and its members stay as evidence of what was started and dropped. Cancelling a flow cancels nothing
        inside it.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The flow, cancelled

        Raises:
            ApiError: Not the creator Already settled ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_flows_by_id_cancel(id_, request_options=request_options))

    def post_api_v1_flows_by_id_complete(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1FlowsCompleteResponse:
        """Only whoever started the flow may, and it stops taking new members. Allowed with members still outstanding;
        how many is recorded and sent with the flow.completed event.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The flow, complete

        Raises:
            ApiError: Not the creator Already settled ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_flows_by_id_complete(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> FlowsWithRawResponse:
        return self._with_raw_response


class AsyncFlows:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFlowsWithRawResponse(client, server, auth)

    async def get_api_v1_flows(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: StatusDeliverdDevFlowsApiOrStr | None = None,
        external_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1FlowsResponse1:
        """Send a ``GET`` request.

        Args:
            limit: Value sent with the request.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            status: Value sent with the request.
            external_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Newest first. Members are counted but not listed; read one for those.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_flows(
                limit=limit, cursor=cursor, status=status, external_id=external_id, request_options=request_options
            ),
        )

    async def get_api_v1_flows_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1FlowsResponse:
        """The timeline is every audited step across the flow and everything in it, in the order it happened. allSettled
        says nothing is outstanding right now; it is not a claim that the work is finished, because a flow is extended
        as it goes.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The flow

        Raises:
            ApiError: Not found ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_api_v1_flows_by_id(id_, request_options=request_options))

    async def get_api_v1_flows_by_id_evidence(
        self, id_: UUID, *, format_: FormatOrStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """The whole record of one piece of work: every approval, review and request for information with who was asked
        and what they said, the report's version history, and the timeline across all of it. Requires reports:read,
        approvals:read, reviews:read and collections:read — the pack contains everything, so it takes every scope that
        reads any of it. ?format=csv returns the timeline alone as a spreadsheet; the JSON is the whole record. Every
        export is audited as evidence.exported, with the pack's digest, so the trail records which copy was taken.

        Args:
            id_: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The pack (JSON), or the timeline (CSV)

        Raises:
            ApiError: The key does not hold every scope the pack draws on Not found ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_flows_by_id_evidence(
                id_, format_=format_, request_options=request_options
            ),
        )

    async def post_api_v1_flows(
        self,
        *,
        body: ApiV1FlowsRequest | ApiV1FlowsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1FlowsResponse:
        """A flow groups the approvals, reviews, collections and reports that belong to one job, so the history reads as
        one sequence rather than four unrelated tables. Nothing is attached here — a member joins by naming flowId when
        it is created. It is a grouping and not a scheduler: nothing waits on a flow and nothing is blocked by one.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The flow, open and empty

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_flows(body=body, request_options=request_options))

    async def post_api_v1_flows_by_id_cancel(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1FlowsCancelResponse:
        """The flow and its members stay as evidence of what was started and dropped. Cancelling a flow cancels nothing
        inside it.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The flow, cancelled

        Raises:
            ApiError: Not the creator Already settled ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_flows_by_id_cancel(id_, request_options=request_options)
        )

    async def post_api_v1_flows_by_id_complete(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1FlowsCompleteResponse:
        """Only whoever started the flow may, and it stops taking new members. Allowed with members still outstanding;
        how many is recorded and sent with the flow.completed event.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The flow, complete

        Raises:
            ApiError: Not the creator Already settled ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_flows_by_id_complete(id_, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncFlowsWithRawResponse:
        return self._with_raw_response


class FlowsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_flows(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: StatusDeliverdDevFlowsApiOrStr | None = None,
        external_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1FlowsResponse1, RawError]:
        """Send a ``GET`` request.

        Args:
            limit: Value sent with the request.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            status: Value sent with the request.
            external_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/flows"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[StatusDeliverdDevFlowsApiOrStr | None]("status", status),
                param[str | None]("externalId", external_id),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1FlowsResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_flows_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1FlowsResponse, GetApiV1FlowsByIdErrorBody]:
        """The timeline is every audited step across the flow and everything in it, in the order it happened. allSettled
        says nothing is outstanding right now; it is not a claim that the work is finished, because a flow is extended
        as it goes.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/flows/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1FlowsResponse],
            error_mapper=get_api_v1_flows_by_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_flows_by_id_evidence(
        self, id_: UUID, *, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], GetApiV1FlowsByIdEvidenceErrorBody]:
        """The whole record of one piece of work: every approval, review and request for information with who was asked
        and what they said, the report's version history, and the timeline across all of it. Requires reports:read,
        approvals:read, reviews:read and collections:read — the pack contains everything, so it takes every scope that
        reads any of it. ?format=csv returns the timeline alone as a spreadsheet; the JSON is the whole record. Every
        export is audited as evidence.exported, with the pack's digest, so the trail records which copy was taken.

        Args:
            id_: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/flows/{id}/evidence"),
            path_params=[param[UUID]("id", id_)],
            query_params=[param[FormatOrStr | None]("format", format_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=get_api_v1_flows_by_id_evidence_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_flows(
        self,
        *,
        body: ApiV1FlowsRequest | ApiV1FlowsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1FlowsResponse, RawError]:
        """A flow groups the approvals, reviews, collections and reports that belong to one job, so the history reads as
        one sequence rather than four unrelated tables. Nothing is attached here — a member joins by naming flowId when
        it is created. It is a grouping and not a scheduler: nothing waits on a flow and nothing is blocked by one.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/flows"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1FlowsRequest | ApiV1FlowsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1FlowsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def post_api_v1_flows_by_id_cancel(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1FlowsCancelResponse, PostApiV1FlowsByIdCancelErrorBody]:
        """The flow and its members stay as evidence of what was started and dropped. Cancelling a flow cancels nothing
        inside it.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/flows/{id}/cancel"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1FlowsCancelResponse],
            error_mapper=post_api_v1_flows_by_id_cancel_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_flows_by_id_complete(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1FlowsCompleteResponse, PostApiV1FlowsByIdCompleteErrorBody]:
        """Only whoever started the flow may, and it stops taking new members. Allowed with members still outstanding;
        how many is recorded and sent with the flow.completed event.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/flows/{id}/complete"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1FlowsCompleteResponse],
            error_mapper=post_api_v1_flows_by_id_complete_error_mapper,
            request_options=request_options,
        )


class AsyncFlowsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_flows(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: StatusDeliverdDevFlowsApiOrStr | None = None,
        external_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1FlowsResponse1, RawError]:
        """Send a ``GET`` request.

        Args:
            limit: Value sent with the request.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            status: Value sent with the request.
            external_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/flows"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[StatusDeliverdDevFlowsApiOrStr | None]("status", status),
                param[str | None]("externalId", external_id),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1FlowsResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_flows_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1FlowsResponse, GetApiV1FlowsByIdErrorBody]:
        """The timeline is every audited step across the flow and everything in it, in the order it happened. allSettled
        says nothing is outstanding right now; it is not a claim that the work is finished, because a flow is extended
        as it goes.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/flows/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1FlowsResponse],
            error_mapper=get_api_v1_flows_by_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_flows_by_id_evidence(
        self, id_: UUID, *, format_: FormatOrStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], GetApiV1FlowsByIdEvidenceErrorBody]:
        """The whole record of one piece of work: every approval, review and request for information with who was asked
        and what they said, the report's version history, and the timeline across all of it. Requires reports:read,
        approvals:read, reviews:read and collections:read — the pack contains everything, so it takes every scope that
        reads any of it. ?format=csv returns the timeline alone as a spreadsheet; the JSON is the whole record. Every
        export is audited as evidence.exported, with the pack's digest, so the trail records which copy was taken.

        Args:
            id_: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/flows/{id}/evidence"),
            path_params=[param[UUID]("id", id_)],
            query_params=[param[FormatOrStr | None]("format", format_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=get_api_v1_flows_by_id_evidence_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_flows(
        self,
        *,
        body: ApiV1FlowsRequest | ApiV1FlowsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1FlowsResponse, RawError]:
        """A flow groups the approvals, reviews, collections and reports that belong to one job, so the history reads as
        one sequence rather than four unrelated tables. Nothing is attached here — a member joins by naming flowId when
        it is created. It is a grouping and not a scheduler: nothing waits on a flow and nothing is blocked by one.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/flows"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1FlowsRequest | ApiV1FlowsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1FlowsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def post_api_v1_flows_by_id_cancel(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1FlowsCancelResponse, PostApiV1FlowsByIdCancelErrorBody]:
        """The flow and its members stay as evidence of what was started and dropped. Cancelling a flow cancels nothing
        inside it.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/flows/{id}/cancel"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1FlowsCancelResponse],
            error_mapper=post_api_v1_flows_by_id_cancel_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_flows_by_id_complete(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1FlowsCompleteResponse, PostApiV1FlowsByIdCompleteErrorBody]:
        """Only whoever started the flow may, and it stops taking new members. Allowed with members still outstanding;
        how many is recorded and sent with the flow.completed event.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/flows/{id}/complete"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1FlowsCompleteResponse],
            error_mapper=post_api_v1_flows_by_id_complete_error_mapper,
            request_options=request_options,
        )
