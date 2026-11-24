from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DescribeTapeArchivesInput(SdkBaseModel):
    tape_arns: Optional[list[str]] = Field(default=UNSET, alias="TapeARNs")
    """Specifies one or more unique Amazon Resource Names (ARNs) that represent the virtual tapes you want to
    describe."""

    marker: Optional[str] = Field(default=UNSET, alias="Marker")
    """An opaque string that indicates the position at which to begin describing virtual tapes."""

    limit: Optional[int] = Field(default=UNSET, alias="Limit")
    """Specifies that the number of virtual tapes described be limited to the specified number."""


class DescribeTapeArchivesInputDict(TypedDict):
    tape_arns: NotRequired[list[str]]
    marker: NotRequired[str]
    limit: NotRequired[int]
