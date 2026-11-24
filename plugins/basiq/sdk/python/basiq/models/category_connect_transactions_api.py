from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .anzsic_connect_transactions_api import AnzsicConnectTransactionsApi, AnzsicConnectTransactionsApiDict
from .enums.match_type_connect_transactions_api import MatchTypeConnectTransactionsApiOrStr
from .mcc import Mcc, MccDict


class CategoryConnectTransactionsApi(SdkBaseModel):
    match_type: Optional[MatchTypeConnectTransactionsApiOrStr] = Field(default=UNSET, alias="matchType")
    """Indicates the method used to match a payment transaction with a merchant or business classification code.
    Description for each enum; merchantFull: Indicates an exact match between the transaction and a known merchant in
    the database. merchantPartial: Suggests a partial match with a merchant, usually based on substring or fuzzy logic.
    mcc: Match is done using the Merchant Category Code associated with the transaction. ml: Match is determined through
    machine learning algorithms for classification. none: Match is not found."""

    match_score: Optional[str] = Field(default=UNSET, alias="matchScore")
    """The confidence score for the matchType which is a float value between 0 and 1. The higher the number, the higher
    the confidence in the match."""

    mcc: Optional[Mcc] = UNSET
    """Merchant category codes returned from Data holders."""

    anzsic: Optional[AnzsicConnectTransactionsApi] = UNSET


class CategoryConnectTransactionsApiDict(TypedDict):
    match_type: NotRequired[MatchTypeConnectTransactionsApiOrStr]
    match_score: NotRequired[str]
    mcc: NotRequired[MccDict]
    anzsic: NotRequired[AnzsicConnectTransactionsApiDict]
