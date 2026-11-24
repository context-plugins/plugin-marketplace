from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ReceiptImage(SdkBaseModel):
    """DTO representing an image from the Spend API."""

    url: str
    """Uploaded receipt URL"""

    filename: str
    """Receipt file name"""

    uuid: str
    """BILL-generated UUID for the receipt image"""


class ReceiptImageDict(TypedDict):
    url: str
    filename: str
    uuid: str
