from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .decision_engine_flow import DecisionEngineFlow, DecisionEngineFlowDict


class DecisionEngineFlowsResponse(SdkBaseModel):
    has_more: bool = Field(alias="hasMore")
    data: list[DecisionEngineFlow]


class DecisionEngineFlowsResponseDict(TypedDict):
    has_more: bool
    data: list[DecisionEngineFlowDict]
