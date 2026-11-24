from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .customization_feature_content_moderation_config import (
    CustomizationFeatureContentModerationConfig,
    CustomizationFeatureContentModerationConfigDict,
)


class CustomizationFeatureConfig(SdkBaseModel):
    content_moderation: Optional[CustomizationFeatureContentModerationConfig] = Field(
        default=UNSET, alias="ContentModeration"
    )


class CustomizationFeatureConfigDict(TypedDict):
    content_moderation: NotRequired[CustomizationFeatureContentModerationConfigDict]
