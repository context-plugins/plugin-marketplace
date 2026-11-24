from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.type import TypeOrStr


class Job(SdkBaseModel):
    id: Optional[UUID] = UNSET
    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    name: Optional[str] = UNSET
    state: Optional[str] = UNSET
    command: Optional[str] = UNSET
    agent_query_rules: Optional[list[str]] = UNSET
    web_url: Optional[str] = UNSET
    log_url: Optional[str] = UNSET
    raw_log_url: Optional[str] = UNSET
    exit_status: OptionalNullable[int] = UNSET
    started_at: OptionalNullable[RFC3339DateTime] = UNSET
    finished_at: OptionalNullable[RFC3339DateTime] = UNSET


class JobDict(TypedDict):
    id: NotRequired[UUID]
    type_: NotRequired[TypeOrStr]
    name: NotRequired[str]
    state: NotRequired[str]
    command: NotRequired[str]
    agent_query_rules: NotRequired[list[str]]
    web_url: NotRequired[str]
    log_url: NotRequired[str]
    raw_log_url: NotRequired[str]
    exit_status: NotRequired[int | None]
    started_at: NotRequired[RFC3339DateTime | None]
    finished_at: NotRequired[RFC3339DateTime | None]
