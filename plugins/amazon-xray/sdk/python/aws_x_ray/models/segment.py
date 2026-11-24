from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Segment(SdkBaseModel):
    id: Optional[str] = Field(default=UNSET, alias="Id")
    """The segment's ID."""

    document: Optional[str] = Field(default=UNSET, alias="Document")
    """The segment document."""


class SegmentDict(TypedDict):
    id: NotRequired[str]
    document: NotRequired[str]
