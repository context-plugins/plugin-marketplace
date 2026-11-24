from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .population1 import Population1, Population1Dict


class Item3(SdkBaseModel):
    spec_id: Optional[str] = Field(default=UNSET, alias="specId")
    card_number: OptionalNullable[str] = Field(default=UNSET, alias="cardNumber")
    name: Optional[str] = UNSET
    variety: OptionalNullable[str] = UNSET
    population: Optional[Population1] = UNSET


class Item3Dict(TypedDict):
    spec_id: NotRequired[str]
    card_number: NotRequired[str | None]
    name: NotRequired[str]
    variety: NotRequired[str | None]
    population: NotRequired[Population1Dict]
