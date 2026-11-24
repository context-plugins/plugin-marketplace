from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ReimbursementReceiptRequestDto(SdkBaseModel):
    """Add a reimbursement receipt"""

    url: str
    """Uploaded receipt URL"""

    filename: str
    """Receipt file name"""


class ReimbursementReceiptRequestDtoDict(TypedDict):
    url: str
    filename: str
