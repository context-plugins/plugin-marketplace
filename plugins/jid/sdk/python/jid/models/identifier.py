from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Identifier(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    value: Optional[str] = UNSET
    source: Optional[str] = UNSET


class IdentifierDict(TypedDict):
    type_: NotRequired[str]
    value: NotRequired[str]
    source: NotRequired[str]
