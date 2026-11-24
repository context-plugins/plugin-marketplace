from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BankAccountVerifyRequestDto(SdkBaseModel):
    """Verify a bank account"""

    deposit_amount: float = Field(alias="depositAmount")
    """Verify deposit amount.

    Enter an amount between ``0.01`` and ``0.99``. In the sandbox environment, set this field as ``0.50`` to complete
    bank account verification."""


class BankAccountVerifyRequestDtoDict(TypedDict):
    deposit_amount: float
