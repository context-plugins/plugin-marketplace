from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Button1(SdkBaseModel):
    id: str
    type_: Literal["URL"] = Field(default="URL", alias="type")
    label: str
    url: str


class Button1Dict(TypedDict):
    id: str
    type_: Literal["URL"]
    label: str
    url: str
