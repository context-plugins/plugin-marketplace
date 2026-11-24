from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .x_plinth import XPlinth, XPlinthDict


class ComplianceResponse(SdkBaseModel):
    """A Charity Check-shaped screen. On an unpaid key the verdicts are present and the evidence fields are blanked —
    ``x_plinth.withheld`` names every one, so a client can tell a blank from a no."""

    code: int = 200
    message: str
    x_plinth: Optional[XPlinth] = UNSET
    ein: str
    compliance: Any
    """The screen itself: BMF status, Pub 78, revocation, sanctions, NTEE, financials."""

    report_date: Optional[str] = UNSET
    report_id: Optional[str] = UNSET
    """Identifies this screen by its contents — a digest of the record, its sources and ``report_date``. Re-deriving it
    from a retained response reproduces the same value; an altered one does not. Not a signature: anyone can recompute
    it, so it evidences drift rather than authenticity."""

    sources: Optional[Any] = UNSET
    """When each IRS/Treasury source behind this screen was last pulled."""


class ComplianceResponseDict(TypedDict):
    code: NotRequired[int]
    message: str
    x_plinth: NotRequired[XPlinthDict]
    ein: str
    compliance: Any
    report_date: NotRequired[str]
    report_id: NotRequired[str]
    sources: NotRequired[Any]
