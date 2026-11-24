from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Detail(SdkBaseModel):
    loc: Optional[list[str]] = UNSET
    msg: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")


class DetailDict(TypedDict):
    loc: NotRequired[list[str]]
    msg: NotRequired[str]
    type_: NotRequired[str]
