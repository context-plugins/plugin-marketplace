from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class InvoiceRecipient(SdkBaseModel):
    """Invoice Recipient object."""

    to: list[str]
    """Recipient email addresses"""


class InvoiceRecipientDict(TypedDict):
    to: list[str]
