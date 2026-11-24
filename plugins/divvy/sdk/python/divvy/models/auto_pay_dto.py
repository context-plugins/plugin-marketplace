from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AutoPayDto(SdkBaseModel):
    """The type Auto Pay dto. (CONTROLLER)"""

    enabled: Optional[bool] = UNSET
    """Set as ``true`` if the vendor auto-pay is enabled"""

    bank_account_id: Optional[str] = Field(default=UNSET, alias="bankAccountId")
    """BILL-generated ID of the organization bank account used to set up vendor auto-pay. The value begins with
    ``bac``."""

    created_by: Optional[str] = Field(default=UNSET, alias="createdBy")
    """BILL-generated ID of the user that set up vendor auto-pay. The value begins with ``006``.

    You can retrieve your user ID when you sign in with ``/v3/login``."""

    max_amount: Optional[float] = Field(default=UNSET, alias="maxAmount")
    """Maximum bill amount for which vendor auto-pay is enabled"""

    days_before_due_date: Optional[int] = Field(default=UNSET, alias="daysBeforeDueDate")
    """Number of days before the bill payment due date.

    For example, if ``dueBeforeDueDate`` is ``3``, BILL submits the vendor payment 3 days before the bill payment due
    date."""


class AutoPayDtoDict(TypedDict):
    enabled: NotRequired[bool]
    bank_account_id: NotRequired[str]
    created_by: NotRequired[str]
    max_amount: NotRequired[float]
    days_before_due_date: NotRequired[int]
