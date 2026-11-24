from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .decision_engine_message import DecisionEngineMessage, DecisionEngineMessageDict


class DecisionEngineFlowMessagesResponse(SdkBaseModel):
    has_more: bool = Field(alias="hasMore")
    data: list[DecisionEngineMessage]


class DecisionEngineFlowMessagesResponseDict(TypedDict):
    has_more: bool
    data: list[DecisionEngineMessageDict]
