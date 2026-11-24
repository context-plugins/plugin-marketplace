from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .tagged1 import Tagged1, Tagged1Dict


class CarouselItem(SdkBaseModel):
    upload_id: str = Field(alias="uploadId")
    alt_text: OptionalNullable[str] = Field(default=UNSET, alias="altText")
    tagged: OptionalNullable[list[Tagged1]] = UNSET


class CarouselItemDict(TypedDict):
    upload_id: str
    alt_text: NotRequired[str | None]
    tagged: NotRequired[list[Tagged1Dict] | None]
