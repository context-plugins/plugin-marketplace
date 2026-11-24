from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .condition import Condition, ConditionDict


class Step(SdkBaseModel):
    id: Optional[str] = UNSET
    type_: Literal["CONDITION"] = Field(default="CONDITION", alias="type")
    conditions: list[Condition]


class StepDict(TypedDict):
    id: NotRequired[str]
    type_: Literal["CONDITION"]
    conditions: list[ConditionDict]
