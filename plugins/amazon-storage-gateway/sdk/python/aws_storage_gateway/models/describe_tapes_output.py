from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tape import Tape, TapeDict


class DescribeTapesOutput(SdkBaseModel):
    tapes: Optional[list[Tape]] = Field(default=UNSET, alias="Tapes")
    """An array of virtual tape descriptions."""

    marker: Optional[str] = Field(default=UNSET, alias="Marker")
    """An opaque string that can be used as part of a subsequent DescribeTapes call to retrieve the next page of
    results. If a response does not contain a marker, then there are no more results to be retrieved."""


class DescribeTapesOutputDict(TypedDict):
    tapes: NotRequired[list[TapeDict]]
    marker: NotRequired[str]
