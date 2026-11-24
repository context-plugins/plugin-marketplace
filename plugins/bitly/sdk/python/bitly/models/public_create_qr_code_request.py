from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dynamic_routing_rule import DynamicRoutingRule, DynamicRoutingRuleDict
from .gs1_metadata import Gs1Metadata, Gs1MetadataDict
from .qr_code_customizations_public import QrCodeCustomizationsPublic, QrCodeCustomizationsPublicDict
from .qr_code_destination import QrCodeDestination, QrCodeDestinationDict


class PublicCreateQrCodeRequest(SdkBaseModel):
    """Customization and content values for a QR code created through the public API"""

    title: Optional[str] = UNSET
    """The title of the QR Code"""

    group_guid: str
    """Identify which group to place the QR Code."""

    render_customizations: Optional[QrCodeCustomizationsPublic] = UNSET
    """Options for customizing a QR Code's appearance"""

    archived: Optional[bool] = UNSET
    """A boolean representing if the QR code should be archived (hidden from the UI) upon creation"""

    destination: QrCodeDestination
    gs1: Optional[Gs1Metadata] = UNSET
    """Contains GS1 related metadata"""

    expiration_at: Optional[str] = UNSET
    """Optional expiration timestamp for the QR code's bitlink (e.g., 2025-01-28T14:30:00+0000). Minimum expiration time
    is 5 minutes from now and maximum is 1 year."""

    tags: Optional[list[str]] = UNSET
    """A list of tags to add to the QR code"""

    dynamic_routing: Optional[list[DynamicRoutingRule]] = UNSET
    """Optional dynamic routing rules for this decoupled QR code. Only supported for long_url destinations. Providing
    this field replaces all existing rules. Send an empty array to clear all rules."""

    domain: str = "bit.ly"


class PublicCreateQrCodeRequestDict(TypedDict):
    title: NotRequired[str]
    group_guid: str
    render_customizations: NotRequired[QrCodeCustomizationsPublicDict]
    archived: NotRequired[bool]
    destination: QrCodeDestinationDict
    gs1: NotRequired[Gs1MetadataDict]
    expiration_at: NotRequired[str]
    tags: NotRequired[list[str]]
    dynamic_routing: NotRequired[list[DynamicRoutingRuleDict]]
    domain: NotRequired[str]
