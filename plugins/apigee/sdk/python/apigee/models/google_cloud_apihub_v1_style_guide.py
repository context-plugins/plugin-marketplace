from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.linter1 import Linter1OrStr
from .google_cloud_apihub_v1_style_guide_contents1 import (
    GoogleCloudApihubV1StyleGuideContents1,
    GoogleCloudApihubV1StyleGuideContents1Dict,
)


class GoogleCloudApihubV1StyleGuide(SdkBaseModel):
    """Represents a singleton style guide resource to be used for linting Open API specs."""

    contents: Optional[GoogleCloudApihubV1StyleGuideContents1] = UNSET
    """Required. Input only. The contents of the uploaded style guide."""

    name: Optional[str] = UNSET
    """Identifier. The name of the style guide. Format:
    ``projects/{project}/locations/{location}/plugins/{plugin}/styleGuide``"""

    linter: Optional[Linter1OrStr] = UNSET
    """Required. Target linter for the style guide."""


class GoogleCloudApihubV1StyleGuideDict(TypedDict):
    contents: NotRequired[GoogleCloudApihubV1StyleGuideContents1Dict]
    name: NotRequired[str]
    linter: NotRequired[Linter1OrStr]
