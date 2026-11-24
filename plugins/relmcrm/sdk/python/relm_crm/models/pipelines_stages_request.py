from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1 import Type1OrStr


class PipelinesStagesRequest(SdkBaseModel):
    key: str
    """Slugified on write; original kept as label."""

    label: Optional[str] = UNSET
    ordinal: Optional[int] = UNSET
    type_: Optional[Type1OrStr] = Field(default=UNSET, alias="type")


class PipelinesStagesRequestDict(TypedDict):
    key: str
    label: NotRequired[str]
    ordinal: NotRequired[int]
    type_: NotRequired[Type1OrStr]
