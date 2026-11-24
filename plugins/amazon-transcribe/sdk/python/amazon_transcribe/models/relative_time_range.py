from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RelativeTimeRange(SdkBaseModel):
    start_percentage: Optional[int] = Field(default=UNSET, alias="StartPercentage")
    """The time, in percentage, when Amazon Transcribe starts searching for the specified criteria in your media file.
    If you include StartPercentage in your request, you must also include EndPercentage."""

    end_percentage: Optional[int] = Field(default=UNSET, alias="EndPercentage")
    """The time, in percentage, when Amazon Transcribe stops searching for the specified criteria in your media file. If
    you include EndPercentage in your request, you must also include StartPercentage."""

    first: Optional[int] = Field(default=UNSET, alias="First")
    """The time, in percentage, from the start of your media file until the specified value. Amazon Transcribe searches
    for your specified criteria in this time segment."""

    last: Optional[int] = Field(default=UNSET, alias="Last")
    """The time, in percentage, from the specified value until the end of your media file. Amazon Transcribe searches
    for your specified criteria in this time segment."""


class RelativeTimeRangeDict(TypedDict):
    start_percentage: NotRequired[int]
    end_percentage: NotRequired[int]
    first: NotRequired[int]
    last: NotRequired[int]
