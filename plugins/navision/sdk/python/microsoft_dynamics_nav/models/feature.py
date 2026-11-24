from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Feature(SdkBaseModel):
    id: Optional[str] = UNSET
    """The feature ID"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """The feature display name"""

    description: Optional[str] = UNSET
    """The feature description"""

    enabled: Optional[bool] = UNSET
    """Whether the feature is enabled"""

    learn_more_url: Optional[str] = Field(default=UNSET, alias="learnMoreUrl")
    """URL to documentation about the feature"""


class FeatureDict(TypedDict):
    id: NotRequired[str]
    display_name: NotRequired[str]
    description: NotRequired[str]
    enabled: NotRequired[bool]
    learn_more_url: NotRequired[str]
