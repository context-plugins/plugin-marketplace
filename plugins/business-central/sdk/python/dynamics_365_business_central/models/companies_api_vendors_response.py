from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .vendor import Vendor, VendorDict


class CompaniesApiVendorsResponse(SdkBaseModel):
    value: Optional[list[Vendor]] = UNSET


class CompaniesApiVendorsResponseDict(TypedDict):
    value: NotRequired[list[VendorDict]]
