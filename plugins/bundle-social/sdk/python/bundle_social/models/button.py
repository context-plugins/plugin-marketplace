from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Button(SdkBaseModel):
    id: str
    type_: Literal["POSTBACK"] = Field(default="POSTBACK", alias="type")
    label: str
    payload: str


class ButtonDict(TypedDict):
    id: str
    type_: Literal["POSTBACK"]
    label: str
    payload: str
