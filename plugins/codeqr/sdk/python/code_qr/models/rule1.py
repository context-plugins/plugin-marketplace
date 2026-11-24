from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.attribute import AttributeOrStr
from .enums.operator import OperatorOrStr


class Rule1(SdkBaseModel):
    attribute: AttributeOrStr
    operator: OperatorOrStr
    value: str
    url: str


class Rule1Dict(TypedDict):
    attribute: AttributeOrStr
    operator: OperatorOrStr
    value: str
    url: str
