from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .trace_scenario_ref import TraceScenarioRef, TraceScenarioRefDict


class TraceTaskRef(SdkBaseModel):
    id: UUID
    version_id: UUID
    version_number: Optional[int] = UNSET
    external_id: Optional[str] = UNSET
    taskset_id: Optional[UUID] = UNSET
    taskset_name: Optional[str] = UNSET
    scenario: Optional[TraceScenarioRef] = UNSET
    scenario_args: Optional[Any] = UNSET


class TraceTaskRefDict(TypedDict):
    id: UUID
    version_id: UUID
    version_number: NotRequired[int]
    external_id: NotRequired[str]
    taskset_id: NotRequired[UUID]
    taskset_name: NotRequired[str]
    scenario: NotRequired[TraceScenarioRefDict]
    scenario_args: NotRequired[Any]
