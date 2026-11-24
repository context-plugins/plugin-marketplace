from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dynamic_routing_rule import DynamicRoutingRule, DynamicRoutingRuleDict
from .enums.qr_code_type_enum import QrCodeTypeEnumOrStr
from .gs1_metadata import Gs1Metadata, Gs1MetadataDict
from .qr_code_customizations_public import QrCodeCustomizationsPublic, QrCodeCustomizationsPublicDict


class QrCodeDetails(SdkBaseModel):
    qrcode_id: Optional[str] = UNSET
    group_guid: Optional[str] = UNSET
    title: Optional[str] = UNSET
    gs1: Optional[Gs1Metadata] = UNSET
    """Contains GS1 related metadata"""

    render_customizations: Optional[QrCodeCustomizationsPublic] = UNSET
    """Options for customizing a QR Code's appearance"""

    qr_code_type: Optional[QrCodeTypeEnumOrStr] = UNSET
    """The type of dynamic/static content the QR serves, e.g. Link In Bio page, micro site, bitlink, email, text, Wifi,
    etc."""

    bitlink_id: Optional[str] = UNSET
    """The bitlink associated with the qr code. Not all qr codes are associated with one."""

    long_urls: Optional[list[str]] = UNSET
    """A list of destination URLs that the qr code leads to."""

    serialized_content: Optional[str] = UNSET
    """The serialized string of the QR code's content"""

    archived: Optional[bool] = UNSET
    created: Optional[str] = UNSET
    modified: Optional[str] = UNSET
    expiration_at: Optional[str] = UNSET
    """Optional expiration timestamp for the QR code's bitlink (e.g., 2025-01-28T14:30:00+0000)"""

    tags: Optional[list[str]] = UNSET
    """A list of tags associated with QR code"""

    dynamic_routing: Optional[list[DynamicRoutingRule]] = UNSET
    """Dynamic routing rules for this QR code. Only present when at least one rule is configured."""


class QrCodeDetailsDict(TypedDict):
    qrcode_id: NotRequired[str]
    group_guid: NotRequired[str]
    title: NotRequired[str]
    gs1: NotRequired[Gs1MetadataDict]
    render_customizations: NotRequired[QrCodeCustomizationsPublicDict]
    qr_code_type: NotRequired[QrCodeTypeEnumOrStr]
    bitlink_id: NotRequired[str]
    long_urls: NotRequired[list[str]]
    serialized_content: NotRequired[str]
    archived: NotRequired[bool]
    created: NotRequired[str]
    modified: NotRequired[str]
    expiration_at: NotRequired[str]
    tags: NotRequired[list[str]]
    dynamic_routing: NotRequired[list[DynamicRoutingRuleDict]]
