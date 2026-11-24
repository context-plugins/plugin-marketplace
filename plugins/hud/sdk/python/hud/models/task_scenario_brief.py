from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .scenario_argument import ScenarioArgument, ScenarioArgumentDict


class TaskScenarioBrief(SdkBaseModel):
    id: UUID
    name: str
    description: Optional[str] = UNSET
    registry_id: UUID
    build_id: UUID
    sdk_generation: Optional[str] = UNSET
    arguments: Optional[list[ScenarioArgument]] = UNSET
    registry_display_name: Optional[str] = UNSET
    build_version: Optional[int] = UNSET
    has_workspace: bool = False


class TaskScenarioBriefDict(TypedDict):
    id: UUID
    name: str
    description: NotRequired[str]
    registry_id: UUID
    build_id: UUID
    sdk_generation: NotRequired[str]
    arguments: NotRequired[list[ScenarioArgumentDict]]
    registry_display_name: NotRequired[str]
    build_version: NotRequired[int]
    has_workspace: NotRequired[bool]
