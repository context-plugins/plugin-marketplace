from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type7 import Type7OrStr


class SegmentTypeInfo(SdkBaseModel):
    type_: Optional[Type7OrStr] = Field(default=UNSET, alias="Type")
    """The type of a segment (technical cue or shot detection)."""

    model_version: Optional[str] = Field(default=UNSET, alias="ModelVersion")
    """The version of the model used to detect segments."""


class SegmentTypeInfoDict(TypedDict):
    type_: NotRequired[Type7OrStr]
    model_version: NotRequired[str]
