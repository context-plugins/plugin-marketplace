from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TransactionReceiptRequestDto(SdkBaseModel):
    """Add a transaction receipt"""

    url: str
    """Uploaded receipt URL"""


class TransactionReceiptRequestDtoDict(TypedDict):
    url: str
