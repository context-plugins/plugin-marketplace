from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dynamic_routing_rule import DynamicRoutingRule, DynamicRoutingRuleDict
from .qr_code_customizations_public import QrCodeCustomizationsPublic, QrCodeCustomizationsPublicDict


class PublicUpdateQrCodeRequest(SdkBaseModel):
    """Customization and content values for a QR code created through the public API"""

    title: Optional[str] = UNSET
    render_customizations: Optional[QrCodeCustomizationsPublic] = UNSET
    """Options for customizing a QR Code's appearance"""

    archived: Optional[bool] = UNSET
    """A boolean representing if the QR code has been archived"""

    expiration_at: Optional[str] = UNSET
    """Optional expiration timestamp for the QR code's bitlink (e.g., 2025-01-28T14:30:00+0000). Minimum expiration time
    is 5 minutes from now and maximum is 1 year."""

    tags: Optional[list[str]] = UNSET
    """A list of tags to add to the QR code"""

    dynamic_routing: Optional[list[DynamicRoutingRule]] = UNSET
    """Dynamic routing rules for this QR code. Providing this field replaces all existing rules. Send an empty array to
    clear all rules."""


class PublicUpdateQrCodeRequestDict(TypedDict):
    title: NotRequired[str]
    render_customizations: NotRequired[QrCodeCustomizationsPublicDict]
    archived: NotRequired[bool]
    expiration_at: NotRequired[str]
    tags: NotRequired[list[str]]
    dynamic_routing: NotRequired[list[DynamicRoutingRuleDict]]
