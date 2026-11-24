from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.connection_state import ConnectionStateOrStr


class Agent(SdkBaseModel):
    id: Optional[UUID] = UNSET
    name: Optional[str] = UNSET
    connection_state: Optional[ConnectionStateOrStr] = UNSET
    hostname: Optional[str] = UNSET
    ip_address: Optional[str] = UNSET
    user_agent: Optional[str] = UNSET
    version: Optional[str] = UNSET
    meta_data: Optional[list[str]] = UNSET
    cluster_id: Optional[UUID] = UNSET
    queue: Optional[str] = UNSET
    created_at: Optional[RFC3339DateTime] = UNSET


class AgentDict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
    connection_state: NotRequired[ConnectionStateOrStr]
    hostname: NotRequired[str]
    ip_address: NotRequired[str]
    user_agent: NotRequired[str]
    version: NotRequired[str]
    meta_data: NotRequired[list[str]]
    cluster_id: NotRequired[UUID]
    queue: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
