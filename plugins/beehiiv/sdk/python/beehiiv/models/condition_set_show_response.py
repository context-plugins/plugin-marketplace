from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .condition_set import ConditionSet, ConditionSetDict


class ConditionSetShowResponse(SdkBaseModel):
    data: ConditionSet


class ConditionSetShowResponseDict(TypedDict):
    data: ConditionSetDict
