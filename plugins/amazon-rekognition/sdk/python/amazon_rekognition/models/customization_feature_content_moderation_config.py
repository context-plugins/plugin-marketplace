from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomizationFeatureContentModerationConfig(SdkBaseModel):
    confidence_threshold: Optional[float] = Field(default=UNSET, alias="ConfidenceThreshold")
    """The confidence level you plan to use to identify if unsafe content is present during inference."""


class CustomizationFeatureContentModerationConfigDict(TypedDict):
    confidence_threshold: NotRequired[float]
