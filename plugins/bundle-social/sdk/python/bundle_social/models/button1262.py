from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Button1262(SdkBaseModel):
    id: Optional[str] = UNSET
    type_: Literal["PHONE"] = Field(default="PHONE", alias="type")
    label: str
    phone_number: str = Field(alias="phoneNumber")


class Button1262Dict(TypedDict):
    id: NotRequired[str]
    type_: Literal["PHONE"]
    label: str
    phone_number: str
