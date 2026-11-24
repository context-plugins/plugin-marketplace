from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bitlink_body import BitlinkBody, BitlinkBodyDict
from .engagement_subtotal import EngagementSubtotal, EngagementSubtotalDict
from .qr_code_minimal import QrCodeMinimal, QrCodeMinimalDict


class TopLinksAndQrCodes(SdkBaseModel):
    """Response shape for top bitlinks and decoupled QR codes in a group, ranked together by engagement count. ``links``
    and ``qr_codes`` are independent lists (a link and a decoupled QR code are never the same entity);
    ``sorted_engagements`` is the unified descending-by-engagement ordering across both, with each entry's id
    referencing either a bitlink or a QR code guid. Coupled QRCs are listed by their bitlink ID."""

    links: Optional[list[BitlinkBody]] = UNSET
    qr_codes: Optional[list[QrCodeMinimal]] = UNSET
    sorted_engagements: Optional[list[EngagementSubtotal]] = UNSET


class TopLinksAndQrCodesDict(TypedDict):
    links: NotRequired[list[BitlinkBodyDict]]
    qr_codes: NotRequired[list[QrCodeMinimalDict]]
    sorted_engagements: NotRequired[list[EngagementSubtotalDict]]
