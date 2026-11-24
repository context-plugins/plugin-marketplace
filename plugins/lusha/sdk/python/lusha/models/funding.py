from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .date_model import DateModel, DateModelDict
from .name import Name, NameDict
from .range import Range, RangeDict
from .round import Round, RoundDict


class Funding(SdkBaseModel):
    """All funding sub-filters live under this single object. Every field is optional; combine any subset."""

    is_ipo: Optional[bool] = Field(default=UNSET, alias="isIpo")
    ranges: Optional[list[Range]] = UNSET
    date: Optional[DateModel] = UNSET
    rounds: Optional[list[Round]] = UNSET
    names: Optional[list[Name]] = UNSET
    investors: Optional[list[str]] = UNSET
    """Free text. Accepted but not currently applied downstream."""

    types: Optional[list[str]] = UNSET
    """Legacy free text. Accepted but not currently applied downstream."""


class FundingDict(TypedDict):
    is_ipo: NotRequired[bool]
    ranges: NotRequired[list[RangeDict]]
    date: NotRequired[DateModelDict]
    rounds: NotRequired[list[RoundDict]]
    names: NotRequired[list[NameDict]]
    investors: NotRequired[list[str]]
    types: NotRequired[list[str]]
