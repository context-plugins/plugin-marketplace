from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity1 import Entity1OrStr


class CustomerRazorpayCustomersApi(SdkBaseModel):
    id: Optional[str] = UNSET
    """Unique customer identifier. Prefix: cust_"""

    entity: Optional[Entity1OrStr] = UNSET
    name: Optional[str] = UNSET
    """Customer name. 3-50 characters. Allowed: alphanumeric, period, apostrophe, forward slash, @, parentheses."""

    contact: Optional[str] = UNSET
    """Phone number. Max 15 characters. Include country code (e.g. +919876543210). Minimum 8 digits."""

    email: Optional[str] = UNSET
    """Email address. Max 64 characters."""

    gstin: Optional[str] = UNSET
    """Goods and Services Tax Identification Number (optional)."""

    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""

    created_at: Optional[int] = UNSET
    """Unix timestamp of customer creation."""


class CustomerRazorpayCustomersApiDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[Entity1OrStr]
    name: NotRequired[str]
    contact: NotRequired[str]
    email: NotRequired[str]
    gstin: NotRequired[str]
    notes: NotRequired[dict[str, str]]
    created_at: NotRequired[int]
