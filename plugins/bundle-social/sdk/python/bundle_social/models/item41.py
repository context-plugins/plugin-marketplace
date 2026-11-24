from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Item41(SdkBaseModel):
    title: str
    type_: Literal["URL"] = Field(default="URL", alias="type")
    payload: Optional[str] = UNSET
    url: str


class Item41Dict(TypedDict):
    title: str
    type_: Literal["URL"]
    payload: NotRequired[str]
    url: str
