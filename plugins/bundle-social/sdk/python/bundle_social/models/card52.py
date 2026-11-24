from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .unions.button1263 import Button1263, Button1263Dict


class Card52(SdkBaseModel):
    id: Optional[str] = UNSET
    title: str
    subtitle: OptionalNullable[str] = UNSET
    image_url: OptionalNullable[str] = Field(default=UNSET, alias="imageUrl")
    buttons: Optional[list[Button1263]] = UNSET


class Card52Dict(TypedDict):
    id: NotRequired[str]
    title: str
    subtitle: NotRequired[str | None]
    image_url: NotRequired[str | None]
    buttons: NotRequired[list[Button1263Dict]]
