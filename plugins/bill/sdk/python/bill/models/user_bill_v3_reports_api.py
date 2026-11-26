from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UserBillV3ReportsApi(SdkBaseModel):
    id: Optional[str] = UNSET
    """BILL-generated ID of the user. The value begins with ``006``."""

    name: Optional[str] = UNSET
    """Name of the user"""


class UserBillV3ReportsApiDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
