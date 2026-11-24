from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class PaymentHistorySimple(SdkBaseModel):
    unique_account_identifier: Optional[str] = UNSET
    """Unique name / number to identify the specific customer account"""

    paid_before_flag: Optional[bool] = UNSET
    """Whether the customer has paid before or not"""

    date_of_last_paid_purchase: Date
    """ISO 8601 date e.g. 2018-10-17"""

    date_of_first_paid_purchase: Date
    """ISO 8601 date e.g. 2018-10-17"""


class PaymentHistorySimpleDict(TypedDict):
    unique_account_identifier: NotRequired[str]
    paid_before_flag: NotRequired[bool]
    date_of_last_paid_purchase: Date
    date_of_first_paid_purchase: Date
