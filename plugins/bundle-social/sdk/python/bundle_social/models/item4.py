from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Item4(SdkBaseModel):
    title: str
    type_: Literal["POSTBACK"] = Field(default="POSTBACK", alias="type")
    payload: str
    url: Optional[str] = UNSET


class Item4Dict(TypedDict):
    title: str
    type_: Literal["POSTBACK"]
    payload: str
    url: NotRequired[str]
