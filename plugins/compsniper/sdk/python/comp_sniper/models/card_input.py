from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.card_number import CardNumber, CardNumberDict
from .unions.grade_variant_zwxcfr import GradeVariantZwxcfr, GradeVariantZwxcfrDict
from .unions.year import Year, YearDict


class CardInput(SdkBaseModel):
    """Supply an exact keyword, or structured fields. subject is universal; player and character are convenient
    aliases."""

    reference: Optional[str] = UNSET
    """Your inventory or correlation ID, echoed in the result."""

    keyword: Optional[str] = UNSET
    """Exact eBay search keyword. When present it overrides generated structured-field keywords."""

    subject: Optional[str] = UNSET
    player: Optional[str] = UNSET
    character: Optional[str] = UNSET
    year: Optional[Year] = UNSET
    set_: Optional[str] = Field(default=UNSET, alias="set")
    card_number: Optional[CardNumber] = Field(default=UNSET, alias="cardNumber")
    parallel: Optional[str] = UNSET
    grader: Optional[str] = UNSET
    grade: Optional[GradeVariantZwxcfr] = UNSET


class CardInputDict(TypedDict):
    reference: NotRequired[str]
    keyword: NotRequired[str]
    subject: NotRequired[str]
    player: NotRequired[str]
    character: NotRequired[str]
    year: NotRequired[YearDict]
    set_: NotRequired[str]
    card_number: NotRequired[CardNumberDict]
    parallel: NotRequired[str]
    grader: NotRequired[str]
    grade: NotRequired[GradeVariantZwxcfrDict]
