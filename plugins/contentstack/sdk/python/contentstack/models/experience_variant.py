from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExperienceVariant(SdkBaseModel):
    """A content variant within a personalization experience."""

    uid: Optional[str] = UNSET
    """Unique identifier of the variant."""

    name: Optional[str] = UNSET
    """Display name of the variant."""

    audience_uid: Optional[str] = UNSET
    """UID of the audience this variant targets (for SEGMENTED experiences)."""

    traffic_percentage: Optional[float] = UNSET
    """Percentage of traffic assigned to this variant (for AB_TEST experiences)."""


class ExperienceVariantDict(TypedDict):
    uid: NotRequired[str]
    name: NotRequired[str]
    audience_uid: NotRequired[str]
    traffic_percentage: NotRequired[float]
