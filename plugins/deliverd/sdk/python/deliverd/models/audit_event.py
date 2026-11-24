from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AuditEvent(SdkBaseModel):
    id: UUID
    event_type: str = Field(alias="eventType")
    actor_type: str = Field(alias="actorType")
    actor_id: str | None = Field(alias="actorId")
    actor_label: str | None = Field(alias="actorLabel")
    resource_type: str | None = Field(alias="resourceType")
    resource_id: str | None = Field(alias="resourceId")
    metadata: dict[str, Any]
    ip: str | None
    request_id: str | None = Field(alias="requestId")
    created_at: str = Field(alias="createdAt")
    chain_seq: int | None = Field(alias="chainSeq")
    """Position in the organisation's hash chain. Null on entries written before the chain began."""

    prev_hash: str | None = Field(alias="prevHash")
    """The hash of the entry before this one in the chain."""

    row_hash: str | None = Field(alias="rowHash")
    """sha256 over prevHash and this entry's fields."""


class AuditEventDict(TypedDict):
    id: UUID
    event_type: str
    actor_type: str
    actor_id: str | None
    actor_label: str | None
    resource_type: str | None
    resource_id: str | None
    metadata: dict[str, Any]
    ip: str | None
    request_id: str | None
    created_at: str
    chain_seq: int | None
    prev_hash: str | None
    row_hash: str | None
