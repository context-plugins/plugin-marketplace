from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomersRequest1(SdkBaseModel):
    name: Optional[str] = UNSET
    """Updated name. 3-50 characters."""

    contact: Optional[str] = UNSET
    """Updated phone number. Min 8 digits including country code."""

    email: Optional[str] = UNSET
    """Updated email. Max 64 characters."""


class CustomersRequest1Dict(TypedDict):
    name: NotRequired[str]
    contact: NotRequired[str]
    email: NotRequired[str]
