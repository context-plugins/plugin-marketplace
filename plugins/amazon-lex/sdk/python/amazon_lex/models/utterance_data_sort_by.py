from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.order2 import Order2OrStr


class UtteranceDataSortBy(SdkBaseModel):
    name: Literal["UtteranceTimestamp"] = "UtteranceTimestamp"
    """The measure by which to sort the utterance analytics data. Count – The number of utterances. UtteranceTimestamp –
    The date and time of the utterance."""

    order: Order2OrStr
    """Specifies whether to sort the results in ascending or descending order."""


class UtteranceDataSortByDict(TypedDict):
    name: Literal["UtteranceTimestamp"]
    order: Order2OrStr
