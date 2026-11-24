from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Image1(SdkBaseModel):
    main_url: str = Field(alias="mainUrl")
    thumbnail_url: Optional[str] = Field(default=UNSET, alias="thumbnailUrl")
    title: Optional[str] = UNSET


class Image1Dict(TypedDict):
    main_url: str
    thumbnail_url: NotRequired[str]
    title: NotRequired[str]
