from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .scenario_argument import ScenarioArgument, ScenarioArgumentDict


class TraceScenarioRef(SdkBaseModel):
    id: UUID
    name: str
    registry_id: UUID
    arguments: list[ScenarioArgument]


class TraceScenarioRefDict(TypedDict):
    id: UUID
    name: str
    registry_id: UUID
    arguments: list[ScenarioArgumentDict]
