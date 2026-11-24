from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LicenseAllocationEntry(SdkBaseModel):
    """A single license type allocation for a group"""

    code: Optional[str] = UNSET
    """License product code identifier"""

    total_count: Optional[int] = Field(default=UNSET, alias="totalCount")
    """Total number of licenses allocated to the group"""

    used_count: Optional[int] = Field(default=UNSET, alias="usedCount")
    """Number of licenses currently consumed by group members"""


class LicenseAllocationEntryDict(TypedDict):
    code: NotRequired[str]
    total_count: NotRequired[int]
    used_count: NotRequired[int]
