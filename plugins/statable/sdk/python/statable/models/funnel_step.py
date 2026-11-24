from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.kind import KindOrStr


class FunnelStep(SdkBaseModel):
    """One step of a funnel definition. ``kind`` selects which other fields apply."""

    kind: KindOrStr
    path: Optional[str] = UNSET
    """URL path — for kind page/entry_page/exit_page."""

    operator: Optional[str] = UNSET
    """Path match operator (e|b|c|r) — for kind page."""

    event: Optional[str] = UNSET
    """Custom event name — for kind event."""

    prop_key: Optional[str] = UNSET
    """Optional custom-property key — for kind event."""

    prop_value: Optional[str] = UNSET
    """Optional custom-property value — for kind event."""

    goal_id: Optional[int] = UNSET
    """Goal id — for kind goal."""

    threshold: Optional[int] = UNSET
    """Scroll depth 0..100 — for kind scroll."""


class FunnelStepDict(TypedDict):
    kind: KindOrStr
    path: NotRequired[str]
    operator: NotRequired[str]
    event: NotRequired[str]
    prop_key: NotRequired[str]
    prop_value: NotRequired[str]
    goal_id: NotRequired[int]
    threshold: NotRequired[int]
