from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type import TypeOrStr
from .eval_reason import EvalReason, EvalReasonDict
from .unions.value import Value, ValueDict


class Variable(SdkBaseModel):
    id: str = Field(alias="_id")
    """unique database id"""

    feature: Optional[str] = Field(default=UNSET, alias="_feature")
    """Feature ID that this variable belongs to"""

    key: str
    """Unique key by Project, can be used in the SDK / API to reference by 'key' rather than _id."""

    type_: TypeOrStr = Field(alias="type")
    """Variable type"""

    value: Value
    """Variable value can be a string, number, boolean, or JSON"""

    eval: Optional[EvalReason] = UNSET
    """The reason the User was Served this particular value"""


class VariableDict(TypedDict):
    id: str
    feature: NotRequired[str]
    key: str
    type_: TypeOrStr
    value: ValueDict
    eval: NotRequired[EvalReasonDict]
