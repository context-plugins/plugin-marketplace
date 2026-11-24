from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .enums.type1 import Type1, Type1OrStr


class BasicAuth(SdkBaseModel):
    type_: Type1OrStr = Field(default=Type1.BASIC_AUTH, alias="type")
    username: str
    password: str


class BasicAuthDict(TypedDict):
    type_: NotRequired[Type1OrStr]
    username: str
    password: str
