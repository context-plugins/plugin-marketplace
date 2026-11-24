from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Content(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    text_delta: Optional[str] = UNSET


class ContentDict(TypedDict):
    type_: NotRequired[str]
    text_delta: NotRequired[str]
