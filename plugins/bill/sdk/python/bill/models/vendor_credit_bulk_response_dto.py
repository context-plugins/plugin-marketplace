from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .vendor_credit_response_dto import VendorCreditResponseDto, VendorCreditResponseDtoDict


class VendorCreditBulkResponseDto(SdkBaseModel):
    """Response Dto for bulk vendor credit."""

    vendor_credits: Optional[list[VendorCreditResponseDto]] = Field(default=UNSET, alias="vendorCredits")
    """List of vendor credits"""


class VendorCreditBulkResponseDtoDict(TypedDict):
    vendor_credits: NotRequired[list[VendorCreditResponseDtoDict]]
