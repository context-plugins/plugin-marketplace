from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.attribute import AttributeOrStr
from .enums.order import OrderOrStr


class AggregatedUtterancesSortBy(SdkBaseModel):
    attribute: AttributeOrStr
    """The utterance attribute to sort by."""

    order: OrderOrStr
    """Specifies whether to sort the aggregated utterances in ascending or descending order."""


class AggregatedUtterancesSortByDict(TypedDict):
    attribute: AttributeOrStr
    order: OrderOrStr
