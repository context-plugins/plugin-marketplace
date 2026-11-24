from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.field_model import FieldModelOrStr
from .enums.operator import OperatorOrStr


class Condition(SdkBaseModel):
    id: Optional[str] = UNSET
    field: FieldModelOrStr
    operator: OperatorOrStr
    value: str
    case_sensitive: bool = Field(default=False, alias="caseSensitive")


class ConditionDict(TypedDict):
    id: NotRequired[str]
    field: FieldModelOrStr
    operator: OperatorOrStr
    value: str
    case_sensitive: NotRequired[bool]
