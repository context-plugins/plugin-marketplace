from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListTapesInput(SdkBaseModel):
    tape_arns: Optional[list[str]] = Field(default=UNSET, alias="TapeARNs")
    marker: Optional[str] = Field(default=UNSET, alias="Marker")
    """A string that indicates the position at which to begin the returned list of tapes."""

    limit: Optional[int] = Field(default=UNSET, alias="Limit")
    """An optional number limit for the tapes in the list returned by this call."""


class ListTapesInputDict(TypedDict):
    tape_arns: NotRequired[list[str]]
    marker: NotRequired[str]
    limit: NotRequired[int]
