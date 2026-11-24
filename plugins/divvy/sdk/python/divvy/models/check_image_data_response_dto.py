from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .download_link_bill_v3_payments_api import DownloadLinkBillV3PaymentsApi, DownloadLinkBillV3PaymentsApiDict


class CheckImageDataResponseDto(SdkBaseModel):
    """Check image data response."""

    results: Optional[list[DownloadLinkBillV3PaymentsApi]] = UNSET
    """URLs for the check image"""


class CheckImageDataResponseDtoDict(TypedDict):
    results: NotRequired[list[DownloadLinkBillV3PaymentsApiDict]]
