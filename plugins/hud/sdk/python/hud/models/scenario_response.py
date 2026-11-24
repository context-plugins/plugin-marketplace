from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .scenario_argument import ScenarioArgument, ScenarioArgumentDict


class ScenarioResponse(SdkBaseModel):
    id: UUID
    registry_id: UUID
    build_id: UUID
    name: str
    slug: Optional[str] = UNSET
    description: Optional[str] = UNSET
    args_schema: Optional[Any] = UNSET
    arguments: Optional[list[ScenarioArgument]] = UNSET
    metadata: Optional[Any] = UNSET
    trace_name_template: Optional[str] = UNSET
    created_at: RFC3339DateTime


class ScenarioResponseDict(TypedDict):
    id: UUID
    registry_id: UUID
    build_id: UUID
    name: str
    slug: NotRequired[str]
    description: NotRequired[str]
    args_schema: NotRequired[Any]
    arguments: NotRequired[list[ScenarioArgumentDict]]
    metadata: NotRequired[Any]
    trace_name_template: NotRequired[str]
    created_at: RFC3339DateTime
