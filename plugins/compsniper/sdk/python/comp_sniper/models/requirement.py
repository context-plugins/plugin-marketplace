from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type import TypeOrStr


class Requirement(SdkBaseModel):
    type_: TypeOrStr = Field(alias="type")
    code: str
    message: str


class RequirementDict(TypedDict):
    type_: TypeOrStr
    code: str
    message: str
