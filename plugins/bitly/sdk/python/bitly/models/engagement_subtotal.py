from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EngagementSubtotal(SdkBaseModel):
    """Engagement-count subtotal for a single bitlink or decoupled QR code. The ``id`` references either a bitlink
    (``<domain>/<hash>``) or a QR code guid, and ``engagements`` is the combined count of bitlink clicks or QR code
    scans for that entity."""

    engagements: Optional[int] = UNSET
    id: Optional[str] = UNSET


class EngagementSubtotalDict(TypedDict):
    engagements: NotRequired[int]
    id: NotRequired[str]
