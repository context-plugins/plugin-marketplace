from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Default2(SdkBaseModel):
    payables: Optional[bool] = UNSET
    """Set as ``true`` if the card account is set as default for Accounts Payable operations"""

    receivables: Optional[bool] = UNSET
    """Set as ``true`` if the card account is set as default for Accounts Receivable operations"""

    funding: Optional[bool] = UNSET
    """Set as ``true`` if the card account is set as default for funding"""

    disbursement: Optional[bool] = UNSET
    """Set as ``true`` if the card account is set as default for disbursement"""


class Default2Dict(TypedDict):
    payables: NotRequired[bool]
    receivables: NotRequired[bool]
    funding: NotRequired[bool]
    disbursement: NotRequired[bool]
