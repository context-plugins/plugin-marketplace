from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IdentityInsightRequest(SdkBaseModel):
    name: Optional[str] = UNSET
    """Full name of the user"""

    phone: Optional[str] = UNSET
    """Phone number of the user"""

    email: Optional[str] = UNSET
    """Email address of the user"""

    address: Optional[str] = UNSET
    """Address of the user"""


class IdentityInsightRequestDict(TypedDict):
    name: NotRequired[str]
    phone: NotRequired[str]
    email: NotRequired[str]
    address: NotRequired[str]
