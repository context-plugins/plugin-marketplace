from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Datum1CommonelementsComChangeFeedApi(SdkBaseModel):
    change_kind: Optional[str] = UNSET
    """One of the 13 change kinds."""

    event_count: Optional[float] = UNSET
    """Events of this kind in the window."""

    org_count: Optional[float] = UNSET
    """Distinct associations with at least one such event."""

    states_covered: Optional[float] = UNSET
    """Distinct states represented."""


class Datum1CommonelementsComChangeFeedApiDict(TypedDict):
    change_kind: NotRequired[str]
    event_count: NotRequired[float]
    org_count: NotRequired[float]
    states_covered: NotRequired[float]
