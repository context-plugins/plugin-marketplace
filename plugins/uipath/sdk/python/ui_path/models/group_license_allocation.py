from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .license_allocation_entry import LicenseAllocationEntry, LicenseAllocationEntryDict


class GroupLicenseAllocation(SdkBaseModel):
    """License allocation rule for a user group"""

    group_id: Optional[str] = Field(default=UNSET, alias="groupId")
    """Unique identifier of the group this allocation applies to"""

    user_licenses: Optional[list[LicenseAllocationEntry]] = Field(default=UNSET, alias="userLicenses")


class GroupLicenseAllocationDict(TypedDict):
    group_id: NotRequired[str]
    user_licenses: NotRequired[list[LicenseAllocationEntryDict]]
