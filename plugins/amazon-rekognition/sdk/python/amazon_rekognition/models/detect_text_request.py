from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .detect_text_filters import DetectTextFilters, DetectTextFiltersDict
from .image import Image, ImageDict


class DetectTextRequest(SdkBaseModel):
    image: Image = Field(alias="Image")
    filters: Optional[DetectTextFilters] = Field(default=UNSET, alias="Filters")


class DetectTextRequestDict(TypedDict):
    image: ImageDict
    filters: NotRequired[DetectTextFiltersDict]
