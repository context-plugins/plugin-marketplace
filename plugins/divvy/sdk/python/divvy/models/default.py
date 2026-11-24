from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Default(SdkBaseModel):
    payables: Optional[bool] = UNSET
    """Set as ``true`` if the bank account is set as default for Accounts Payable operations"""

    receivables: Optional[bool] = UNSET
    """Set as ``true`` if the bank account is set as default for Accounts Receivable operations"""


class DefaultDict(TypedDict):
    payables: NotRequired[bool]
    receivables: NotRequired[bool]
