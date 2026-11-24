from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .card_batch_options import CardBatchOptions, CardBatchOptionsDict
from .card_input import CardInput, CardInputDict


class CardBatchRequest(SdkBaseModel):
    cards: list[CardInput]
    options: Optional[CardBatchOptions] = UNSET


class CardBatchRequestDict(TypedDict):
    cards: list[CardInputDict]
    options: NotRequired[CardBatchOptionsDict]
