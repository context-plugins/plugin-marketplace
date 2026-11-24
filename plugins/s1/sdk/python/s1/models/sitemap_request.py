from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type import TypeOrStr


class SitemapRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    url: str
    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")


class SitemapRequestDict(TypedDict):
    url: str
    type_: NotRequired[TypeOrStr]
