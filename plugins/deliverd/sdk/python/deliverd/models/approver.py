from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type import TypeOrStr


class Approver(SdkBaseModel):
    type_: TypeOrStr = Field(alias="type")
    email: str


class ApproverDict(TypedDict):
    type_: TypeOrStr
    email: str
