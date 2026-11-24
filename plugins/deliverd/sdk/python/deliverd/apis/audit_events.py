from __future__ import annotations

from uuid import UUID

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    RFC3339DateTime,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.api_v1_audit_events_response import ApiV1AuditEventsResponse
from ..models.enums.actor_type import ActorTypeOrStr
from ..server.server import Server


class AuditEvents:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AuditEventsWithRawResponse(client, server, auth)

    def get_api_v1_audit_events(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        since: RFC3339DateTime | None = None,
        until: RFC3339DateTime | None = None,
        event_type: str | None = None,
        actor_id: UUID | None = None,
        actor_type: ActorTypeOrStr | None = None,
        resource_type: str | None = None,
        resource_id: str | None = None,
        flow_id: UUID | None = None,
        after_seq: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AuditEventsResponse:
        """The organisation's audit trail, newest first, a page at a time, for a SIEM, a warehouse or an auditor's
        script. Each entry carries its position in the organisation's hash chain (``chainSeq``), the hash before it
        (``prevHash``) and its own (``rowHash``). Needs ``audit:read`` and a key bound to an owner, an administrator or
        a security administrator, read on every call; an agent key is refused (``403 agent_not_permitted``), as is
        anybody else (``403 not_permitted``). To tail the log, pass ``afterSeq`` (the last ``chainSeq`` you have):
        entries then come oldest first by chain position, which cannot miss an entry written late with an earlier time,
        as ``since`` can. For a live feed, subscribe a webhook endpoint to ``audit.event`` instead.

        Args:
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            since: Entries at or after this time (ISO 8601).
            until: Entries at or before this time (ISO 8601).
            event_type: An event type (``report.published``), or a family ending in a dot (``legal_hold.``).
            actor_id: The person, agent or key that acted.
            actor_type: What kind of actor.
            resource_type: What the entry is about, e.g. ``report``.
            resource_id: The id of what it is about.
            flow_id: Entries about this flow (project) and everything attached to it: its approvals, reviews, requests
                and reports.
            after_seq: Entries after this chain position, oldest first: the way to tail the log. Pass the last chainSeq
                you have; 0 starts at the first chained entry. Unlike since, it cannot miss an entry written late with
                an earlier time.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Entries, newest first

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_audit_events(
                limit=limit,
                cursor=cursor,
                since=since,
                until=until,
                event_type=event_type,
                actor_id=actor_id,
                actor_type=actor_type,
                resource_type=resource_type,
                resource_id=resource_id,
                flow_id=flow_id,
                after_seq=after_seq,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AuditEventsWithRawResponse:
        return self._with_raw_response


class AsyncAuditEvents:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAuditEventsWithRawResponse(client, server, auth)

    async def get_api_v1_audit_events(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        since: RFC3339DateTime | None = None,
        until: RFC3339DateTime | None = None,
        event_type: str | None = None,
        actor_id: UUID | None = None,
        actor_type: ActorTypeOrStr | None = None,
        resource_type: str | None = None,
        resource_id: str | None = None,
        flow_id: UUID | None = None,
        after_seq: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AuditEventsResponse:
        """The organisation's audit trail, newest first, a page at a time, for a SIEM, a warehouse or an auditor's
        script. Each entry carries its position in the organisation's hash chain (``chainSeq``), the hash before it
        (``prevHash``) and its own (``rowHash``). Needs ``audit:read`` and a key bound to an owner, an administrator or
        a security administrator, read on every call; an agent key is refused (``403 agent_not_permitted``), as is
        anybody else (``403 not_permitted``). To tail the log, pass ``afterSeq`` (the last ``chainSeq`` you have):
        entries then come oldest first by chain position, which cannot miss an entry written late with an earlier time,
        as ``since`` can. For a live feed, subscribe a webhook endpoint to ``audit.event`` instead.

        Args:
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            since: Entries at or after this time (ISO 8601).
            until: Entries at or before this time (ISO 8601).
            event_type: An event type (``report.published``), or a family ending in a dot (``legal_hold.``).
            actor_id: The person, agent or key that acted.
            actor_type: What kind of actor.
            resource_type: What the entry is about, e.g. ``report``.
            resource_id: The id of what it is about.
            flow_id: Entries about this flow (project) and everything attached to it: its approvals, reviews, requests
                and reports.
            after_seq: Entries after this chain position, oldest first: the way to tail the log. Pass the last chainSeq
                you have; 0 starts at the first chained entry. Unlike since, it cannot miss an entry written late with
                an earlier time.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Entries, newest first

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_audit_events(
                limit=limit,
                cursor=cursor,
                since=since,
                until=until,
                event_type=event_type,
                actor_id=actor_id,
                actor_type=actor_type,
                resource_type=resource_type,
                resource_id=resource_id,
                flow_id=flow_id,
                after_seq=after_seq,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAuditEventsWithRawResponse:
        return self._with_raw_response


class AuditEventsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_audit_events(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        since: RFC3339DateTime | None = None,
        until: RFC3339DateTime | None = None,
        event_type: str | None = None,
        actor_id: UUID | None = None,
        actor_type: ActorTypeOrStr | None = None,
        resource_type: str | None = None,
        resource_id: str | None = None,
        flow_id: UUID | None = None,
        after_seq: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AuditEventsResponse, RawError]:
        """The organisation's audit trail, newest first, a page at a time, for a SIEM, a warehouse or an auditor's
        script. Each entry carries its position in the organisation's hash chain (``chainSeq``), the hash before it
        (``prevHash``) and its own (``rowHash``). Needs ``audit:read`` and a key bound to an owner, an administrator or
        a security administrator, read on every call; an agent key is refused (``403 agent_not_permitted``), as is
        anybody else (``403 not_permitted``). To tail the log, pass ``afterSeq`` (the last ``chainSeq`` you have):
        entries then come oldest first by chain position, which cannot miss an entry written late with an earlier time,
        as ``since`` can. For a live feed, subscribe a webhook endpoint to ``audit.event`` instead.

        Args:
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            since: Entries at or after this time (ISO 8601).
            until: Entries at or before this time (ISO 8601).
            event_type: An event type (``report.published``), or a family ending in a dot (``legal_hold.``).
            actor_id: The person, agent or key that acted.
            actor_type: What kind of actor.
            resource_type: What the entry is about, e.g. ``report``.
            resource_id: The id of what it is about.
            flow_id: Entries about this flow (project) and everything attached to it: its approvals, reviews, requests
                and reports.
            after_seq: Entries after this chain position, oldest first: the way to tail the log. Pass the last chainSeq
                you have; 0 starts at the first chained entry. Unlike since, it cannot miss an entry written late with
                an earlier time.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/audit-events"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[RFC3339DateTime | None]("since", since),
                param[RFC3339DateTime | None]("until", until),
                param[str | None]("eventType", event_type),
                param[UUID | None]("actorId", actor_id),
                param[ActorTypeOrStr | None]("actorType", actor_type),
                param[str | None]("resourceType", resource_type),
                param[str | None]("resourceId", resource_id),
                param[UUID | None]("flowId", flow_id),
                param[int | None]("afterSeq", after_seq),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AuditEventsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncAuditEventsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_audit_events(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        since: RFC3339DateTime | None = None,
        until: RFC3339DateTime | None = None,
        event_type: str | None = None,
        actor_id: UUID | None = None,
        actor_type: ActorTypeOrStr | None = None,
        resource_type: str | None = None,
        resource_id: str | None = None,
        flow_id: UUID | None = None,
        after_seq: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AuditEventsResponse, RawError]:
        """The organisation's audit trail, newest first, a page at a time, for a SIEM, a warehouse or an auditor's
        script. Each entry carries its position in the organisation's hash chain (``chainSeq``), the hash before it
        (``prevHash``) and its own (``rowHash``). Needs ``audit:read`` and a key bound to an owner, an administrator or
        a security administrator, read on every call; an agent key is refused (``403 agent_not_permitted``), as is
        anybody else (``403 not_permitted``). To tail the log, pass ``afterSeq`` (the last ``chainSeq`` you have):
        entries then come oldest first by chain position, which cannot miss an entry written late with an earlier time,
        as ``since`` can. For a live feed, subscribe a webhook endpoint to ``audit.event`` instead.

        Args:
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            since: Entries at or after this time (ISO 8601).
            until: Entries at or before this time (ISO 8601).
            event_type: An event type (``report.published``), or a family ending in a dot (``legal_hold.``).
            actor_id: The person, agent or key that acted.
            actor_type: What kind of actor.
            resource_type: What the entry is about, e.g. ``report``.
            resource_id: The id of what it is about.
            flow_id: Entries about this flow (project) and everything attached to it: its approvals, reviews, requests
                and reports.
            after_seq: Entries after this chain position, oldest first: the way to tail the log. Pass the last chainSeq
                you have; 0 starts at the first chained entry. Unlike since, it cannot miss an entry written late with
                an earlier time.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/audit-events"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[RFC3339DateTime | None]("since", since),
                param[RFC3339DateTime | None]("until", until),
                param[str | None]("eventType", event_type),
                param[UUID | None]("actorId", actor_id),
                param[ActorTypeOrStr | None]("actorType", actor_type),
                param[str | None]("resourceType", resource_type),
                param[str | None]("resourceId", resource_id),
                param[UUID | None]("flowId", flow_id),
                param[int | None]("afterSeq", after_seq),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AuditEventsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
