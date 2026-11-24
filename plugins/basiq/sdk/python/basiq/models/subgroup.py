from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .analysis1 import Analysis1, Analysis1Dict
from .transaction import Transaction, TransactionDict


class Subgroup(SdkBaseModel):
    id: Optional[str] = UNSET
    """Identifier for the subgroup"""

    name: Optional[str] = UNSET
    """Name of the subgroup"""

    analysis: Optional[Analysis1] = UNSET
    transactions: Optional[list[Transaction]] = UNSET


class SubgroupDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    analysis: NotRequired[Analysis1Dict]
    transactions: NotRequired[list[TransactionDict]]
