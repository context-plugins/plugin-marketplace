from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomersRequest(SdkBaseModel):
    name: str
    """Customer name. 3-50 characters. Allowed: alphanumeric, period, apostrophe, forward slash, @, parentheses."""

    contact: Optional[str] = UNSET
    """Phone number with country code. Min 8 digits, max 15 chars. Example: +919876543210."""

    email: Optional[str] = UNSET
    """Email address. Max 64 characters."""

    gstin: Optional[str] = UNSET
    """GST Identification Number."""

    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""


class CustomersRequestDict(TypedDict):
    name: str
    contact: NotRequired[str]
    email: NotRequired[str]
    gstin: NotRequired[str]
    notes: NotRequired[dict[str, str]]
