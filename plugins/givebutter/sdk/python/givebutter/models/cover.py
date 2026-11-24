from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.source import SourceOrStr
from .enums.type1 import Type1OrStr


class Cover(SdkBaseModel):
    source: OptionalNullable[SourceOrStr] = UNSET
    type_: OptionalNullable[Type1OrStr] = Field(default=UNSET, alias="type")
    url: OptionalNullable[str] = UNSET


class CoverDict(TypedDict):
    source: NotRequired[SourceOrStr | None]
    type_: NotRequired[Type1OrStr | None]
    url: NotRequired[str | None]
