from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tape_info import TapeInfo, TapeInfoDict


class ListTapesOutput(SdkBaseModel):
    tape_infos: Optional[list[TapeInfo]] = Field(default=UNSET, alias="TapeInfos")
    marker: Optional[str] = Field(default=UNSET, alias="Marker")
    """A string that indicates the position at which to begin returning the next list of tapes. Use the marker in your
    next request to continue pagination of tapes. If there are no more tapes to list, this element does not appear in
    the response body."""


class ListTapesOutputDict(TypedDict):
    tape_infos: NotRequired[list[TapeInfoDict]]
    marker: NotRequired[str]
