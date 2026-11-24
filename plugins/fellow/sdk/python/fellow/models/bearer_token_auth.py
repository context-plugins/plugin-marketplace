from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .enums.type import Type, TypeOrStr


class BearerTokenAuth(SdkBaseModel):
    type_: TypeOrStr = Field(default=Type.BEARER_TOKEN, alias="type")
    token: str


class BearerTokenAuthDict(TypedDict):
    type_: NotRequired[TypeOrStr]
    token: str
