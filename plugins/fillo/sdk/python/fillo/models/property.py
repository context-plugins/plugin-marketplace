from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type import TypeOrStr
from .option import Option, OptionDict


class Property(SdkBaseModel):
    property: str
    label: str
    type_: TypeOrStr = Field(alias="type")
    field_type: str = Field(alias="fieldType")
    group_name: Optional[str] = Field(default=UNSET, alias="groupName")
    options: list[Option]


class PropertyDict(TypedDict):
    property: str
    label: str
    type_: TypeOrStr
    field_type: str
    group_name: NotRequired[str]
    options: list[OptionDict]
