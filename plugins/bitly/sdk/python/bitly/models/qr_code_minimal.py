from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dynamic_routing_rule import DynamicRoutingRule, DynamicRoutingRuleDict
from .enums.qr_code_type_enum import QrCodeTypeEnumOrStr


class QrCodeMinimal(SdkBaseModel):
    qrcode_id: Optional[str] = UNSET
    group_guid: Optional[str] = UNSET
    title: Optional[str] = UNSET
    is_customized: Optional[bool] = UNSET
    """Set to true if the QR code's customization values have been changed from their default setting"""

    serialized_content: Optional[str] = UNSET
    """A serialized string of the QR code's content"""

    qr_code_type: Optional[QrCodeTypeEnumOrStr] = UNSET
    """The type of dynamic/static content the QR serves, e.g. Link In Bio page, micro site, bitlink, email, text, Wifi,
    etc."""

    long_urls: Optional[list[str]] = UNSET
    """A list of destination URLs that the qr code leads to."""

    bitlink_id: Optional[str] = UNSET
    """The bitlink ID associated with the qr code. Not all qr codes are associated with one."""

    is_gs1: Optional[bool] = UNSET
    """Set to true if QR code has GS1 values."""

    created_by: Optional[str] = UNSET
    """User that created the code."""

    tags: Optional[list[str]] = UNSET
    """A list of tags associated with QR code"""

    archived: Optional[bool] = UNSET
    expiration_at: Optional[str] = UNSET
    """Optional expiration timestamp for the QR code's bitlink (e.g., 2025-01-28T14:30:00+0000)"""

    dynamic_routing: Optional[list[DynamicRoutingRule]] = UNSET
    """Dynamic routing rules for this QR code. Only present when at least one rule is configured."""

    created: Optional[str] = UNSET
    modified: Optional[str] = UNSET


class QrCodeMinimalDict(TypedDict):
    qrcode_id: NotRequired[str]
    group_guid: NotRequired[str]
    title: NotRequired[str]
    is_customized: NotRequired[bool]
    serialized_content: NotRequired[str]
    qr_code_type: NotRequired[QrCodeTypeEnumOrStr]
    long_urls: NotRequired[list[str]]
    bitlink_id: NotRequired[str]
    is_gs1: NotRequired[bool]
    created_by: NotRequired[str]
    tags: NotRequired[list[str]]
    archived: NotRequired[bool]
    expiration_at: NotRequired[str]
    dynamic_routing: NotRequired[list[DynamicRoutingRuleDict]]
    created: NotRequired[str]
    modified: NotRequired[str]
