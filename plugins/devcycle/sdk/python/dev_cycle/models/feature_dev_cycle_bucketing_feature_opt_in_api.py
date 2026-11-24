from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.resolution import ResolutionOrStr


class FeatureDevCycleBucketingFeatureOptInApi(SdkBaseModel):
    id: Optional[str] = UNSET
    """Feature ID"""

    name: Optional[str] = UNSET
    """Public name of the feature"""

    description: Optional[str] = UNSET
    """Public description of the feature"""

    resolution: Optional[ResolutionOrStr] = UNSET
    """Whether the opt-in status was explicitly set by the user or implicitly defaulted"""

    status: Optional[bool] = UNSET
    """Current opt-in status for this feature"""


class FeatureDevCycleBucketingFeatureOptInApiDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    resolution: NotRequired[ResolutionOrStr]
    status: NotRequired[bool]
