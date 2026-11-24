from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.type1 import Type1OrStr


class ContactPointRequestBody(SdkBaseModel):
    type_: Type1OrStr = Field(alias="type")
    name: str
    email: OptionalNullable[str] = UNSET
    webhook: OptionalNullable[str] = UNSET


class ContactPointRequestBodyDict(TypedDict):
    type_: Type1OrStr
    name: str
    email: NotRequired[str | None]
    webhook: NotRequired[str | None]
