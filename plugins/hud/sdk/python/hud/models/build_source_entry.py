from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type import TypeOrStr


class BuildSourceEntry(SdkBaseModel):
    name: str
    path: str
    type_: TypeOrStr = Field(alias="type")
    size: Optional[int] = UNSET


class BuildSourceEntryDict(TypedDict):
    name: str
    path: str
    type_: TypeOrStr
    size: NotRequired[int]
