from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .license_allocation_entry import LicenseAllocationEntry, LicenseAllocationEntryDict


class UpdateGroupLicenseAllocationRequest(SdkBaseModel):
    """Request payload for updating license allocation for a group"""

    user_licenses: Optional[list[LicenseAllocationEntry]] = Field(default=UNSET, alias="userLicenses")


class UpdateGroupLicenseAllocationRequestDict(TypedDict):
    user_licenses: NotRequired[list[LicenseAllocationEntryDict]]
