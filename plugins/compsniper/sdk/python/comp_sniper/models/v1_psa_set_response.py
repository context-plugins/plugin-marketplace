from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .item3 import Item3, Item3Dict
from .set import Set, SetDict
from .totals import Totals, TotalsDict


class V1PsaSetResponse(SdkBaseModel):
    set_: Optional[Set] = Field(default=UNSET, alias="set")
    total_cards: Optional[int] = Field(default=UNSET, alias="totalCards")
    totals: Optional[Totals] = UNSET
    items: Optional[list[Item3]] = UNSET


class V1PsaSetResponseDict(TypedDict):
    set_: NotRequired[SetDict]
    total_cards: NotRequired[int]
    totals: NotRequired[TotalsDict]
    items: NotRequired[list[Item3Dict]]
