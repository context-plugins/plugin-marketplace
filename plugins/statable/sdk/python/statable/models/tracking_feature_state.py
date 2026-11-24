from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TrackingFeatureState(SdkBaseModel):
    id: str
    label: str
    enabled: bool
    locked: bool
    """Always collected; cannot be turned off."""

    default: bool
    requires: Optional[list[str]] = UNSET
    """Feature ids that must also be enabled."""

    size_br: int
    """Marginal cost in bytes, brotli-compressed."""


class TrackingFeatureStateDict(TypedDict):
    id: str
    label: str
    enabled: bool
    locked: bool
    default: bool
    requires: NotRequired[list[str]]
    size_br: int
