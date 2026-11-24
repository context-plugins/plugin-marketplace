from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .vendor_response_dto import VendorResponseDto, VendorResponseDtoDict


class BulkVendorResponseDto(SdkBaseModel):
    """Bulk vendor response."""

    vendors: Optional[list[VendorResponseDto]] = UNSET
    """List of vendors"""


class BulkVendorResponseDtoDict(TypedDict):
    vendors: NotRequired[list[VendorResponseDtoDict]]
