from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Button2(SdkBaseModel):
    id: str
    type_: Literal["PHONE"] = Field(default="PHONE", alias="type")
    label: str
    phone_number: str = Field(alias="phoneNumber")


class Button2Dict(TypedDict):
    id: str
    type_: Literal["PHONE"]
    label: str
    phone_number: str
