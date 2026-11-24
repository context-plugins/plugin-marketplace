from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ContentDetails(SdkBaseModel):
    item_count: Optional[int] = Field(default=UNSET, alias="itemCount")


class ContentDetailsDict(TypedDict):
    item_count: NotRequired[int]
