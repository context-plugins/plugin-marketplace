from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.operator import OperatorOrStr


class AggregatedUtterancesFilter(SdkBaseModel):
    name: Literal["Utterance"] = "Utterance"
    """The name of the field to filter the utterance list."""

    values: list[str]
    """The value to use for filtering the list of bots."""

    operator: OperatorOrStr
    """The operator to use for the filter. Specify EQ when the ListAggregatedUtterances operation should return only
    utterances that equal the specified value. Specify CO when the ListAggregatedUtterances operation should return
    utterances that contain the specified value."""


class AggregatedUtterancesFilterDict(TypedDict):
    name: Literal["Utterance"]
    values: list[str]
    operator: OperatorOrStr
