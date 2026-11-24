from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .qr_code_customizations_static_public import QrCodeCustomizationsStaticPublic, QrCodeCustomizationsStaticPublicDict


class PublicCreateStaticQrCodeRequest(SdkBaseModel):
    """Request body for generating a static QR code image. Customizations such as gradient, background_gradient, frame,
    text and logo are not supported."""

    content: str
    """The raw content to encode in the QR code (e.g. a URL)."""

    group_guid: str
    """The group (brand) GUID used for access control and analytics."""

    render_customizations: Optional[QrCodeCustomizationsStaticPublic] = UNSET
    """Appearance options for a static QR code. gradient, background_gradient, frame, text, and logo are not
    supported."""


class PublicCreateStaticQrCodeRequestDict(TypedDict):
    content: str
    group_guid: str
    render_customizations: NotRequired[QrCodeCustomizationsStaticPublicDict]
