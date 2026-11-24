from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OutcomeLinks(SdkBaseModel):
    """Keyed calls only: signed one-click URLs that record an outcome (POST /v1/outcomes) without a login."""

    legit: Optional[str] = UNSET
    sales_pitch: Optional[str] = UNSET
    spam: Optional[str] = UNSET
    scam: Optional[str] = UNSET
    closed: Optional[str] = UNSET
    good: Optional[str] = UNSET
    """2026-10-05 button, still accepted"""

    junk: Optional[str] = UNSET
    """2026-10-05 button, still accepted"""


class OutcomeLinksDict(TypedDict):
    legit: NotRequired[str]
    sales_pitch: NotRequired[str]
    spam: NotRequired[str]
    scam: NotRequired[str]
    closed: NotRequired[str]
    good: NotRequired[str]
    junk: NotRequired[str]
