from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .anzsic1 import Anzsic1, Anzsic1Dict
from .enums.match_type1 import MatchType1OrStr


class Category1(SdkBaseModel):
    match_type: Optional[MatchType1OrStr] = Field(default=UNSET, alias="matchType")
    """Indicates the method used to match a payment transaction with a merchant or business classification code.
    Description for each enum; merchantFull: Indicates an exact match between the transaction and a known merchant in
    the database. merchantPartial: Suggests a partial match with a merchant, usually based on substring or fuzzy logic.
    mcc: Match is done using the Merchant Category Code associated with the transaction. ml: Match is determined through
    machine learning algorithms for classification"""

    match_score: Optional[str] = Field(default=UNSET, alias="matchScore")
    """The confidence score for the matchType which is a float value between 0 and 1. The higher the number, the higher
    the confidence in the match."""

    anzsic: Optional[Anzsic1] = UNSET


class Category1Dict(TypedDict):
    match_type: NotRequired[MatchType1OrStr]
    match_score: NotRequired[str]
    anzsic: NotRequired[Anzsic1Dict]
