from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class Transaction(SdkBaseModel):
    id: Optional[str] = UNSET
    """Identifier for the transaction"""

    date: Optional[Date] = UNSET
    """Date of the transaction"""

    description: Optional[str] = UNSET
    """Description of the transaction"""

    amount: Optional[str] = UNSET
    """Amount of the transaction"""


class TransactionDict(TypedDict):
    id: NotRequired[str]
    date: NotRequired[Date]
    description: NotRequired[str]
    amount: NotRequired[str]
