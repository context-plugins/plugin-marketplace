from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Label(SdkBaseModel):
    """Map of field names to custom label text. Supports localisation (Hindi, Tamil, etc.)."""

    payment_for: Optional[str] = Field(default=UNSET, alias="PAYMENT FOR")
    receipt_no: Optional[str] = Field(default=UNSET, alias="RECEIPT NO.")
    amount_payable: Optional[str] = Field(default=UNSET, alias="AMOUNT PAYABLE")
    expires_on: Optional[str] = Field(default=UNSET, alias="EXPIRES ON")
    due: Optional[str] = Field(default=UNSET, alias="DUE")
    paid: Optional[str] = Field(default=UNSET, alias="PAID")
    amount_paid: Optional[str] = Field(default=UNSET, alias="AMOUNT PAID")
    issued_to: Optional[str] = Field(default=UNSET, alias="ISSUED TO")


class LabelDict(TypedDict):
    payment_for: NotRequired[str]
    receipt_no: NotRequired[str]
    amount_payable: NotRequired[str]
    expires_on: NotRequired[str]
    due: NotRequired[str]
    paid: NotRequired[str]
    amount_paid: NotRequired[str]
    issued_to: NotRequired[str]
