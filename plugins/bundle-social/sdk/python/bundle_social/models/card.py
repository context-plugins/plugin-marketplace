from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .unions.button3 import Button3, Button3Dict


class Card(SdkBaseModel):
    id: str
    title: str
    subtitle: OptionalNullable[str] = UNSET
    image_upload_id: OptionalNullable[str] = Field(default=UNSET, alias="imageUploadId")
    buttons: Optional[list[Button3]] = UNSET


class CardDict(TypedDict):
    id: str
    title: str
    subtitle: NotRequired[str | None]
    image_upload_id: NotRequired[str | None]
    buttons: NotRequired[list[Button3Dict]]
