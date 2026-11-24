from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .anzsic import Anzsic, AnzsicDict
from .enums.match_type import MatchTypeOrStr


class Category(SdkBaseModel):
    match_type: Optional[MatchTypeOrStr] = Field(default=UNSET, alias="matchType")
    """Indicates the method used to match a payment transaction with a merchant or business classification code."""

    match_score: Optional[float] = Field(default=UNSET, alias="matchScore")
    """The confidence score for the matchType which is a float value between 0 and 1."""

    anzsic: Optional[Anzsic] = UNSET


class CategoryDict(TypedDict):
    match_type: NotRequired[MatchTypeOrStr]
    match_score: NotRequired[float]
    anzsic: NotRequired[AnzsicDict]
