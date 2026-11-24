from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .audience_operator_with_audience_match_filter import (
    AudienceOperatorWithAudienceMatchFilter,
    AudienceOperatorWithAudienceMatchFilterDict,
)


class TargetAudience(SdkBaseModel):
    name: Optional[str] = UNSET
    """Audience display name, must be set for project-level audiences."""

    filters: AudienceOperatorWithAudienceMatchFilter
    """Audience filters, describing logic for segmenting users"""


class TargetAudienceDict(TypedDict):
    name: NotRequired[str]
    filters: AudienceOperatorWithAudienceMatchFilterDict
