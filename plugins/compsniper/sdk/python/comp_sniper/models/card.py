from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Card(SdkBaseModel):
    spec_id: Optional[str] = Field(default=UNSET, alias="specId")
    subject: Optional[str] = UNSET
    card_number: OptionalNullable[str] = Field(default=UNSET, alias="cardNumber")
    set_name: OptionalNullable[str] = Field(default=UNSET, alias="setName")
    year: OptionalNullable[str] = UNSET


class CardDict(TypedDict):
    spec_id: NotRequired[str]
    subject: NotRequired[str]
    card_number: NotRequired[str | None]
    set_name: NotRequired[str | None]
    year: NotRequired[str | None]
