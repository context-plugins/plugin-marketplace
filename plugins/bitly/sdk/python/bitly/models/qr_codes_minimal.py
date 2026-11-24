from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .qr_code_minimal import QrCodeMinimal, QrCodeMinimalDict
from .qr_pagination import QrPagination, QrPaginationDict


class QrCodesMinimal(SdkBaseModel):
    """QR code paginated list Response"""

    qr_codes: Optional[list[QrCodeMinimal]] = UNSET
    pagination: Optional[QrPagination] = UNSET
    """This object specifies how to query the next set of results."""


class QrCodesMinimalDict(TypedDict):
    qr_codes: NotRequired[list[QrCodeMinimalDict]]
    pagination: NotRequired[QrPaginationDict]
