from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ModerationLabel(SdkBaseModel):
    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """Specifies the confidence that Amazon Rekognition has that the label has been correctly identified. If you don't
    specify the MinConfidence parameter in the call to DetectModerationLabels, the operation returns labels with a
    confidence value greater than or equal to 50 percent."""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The label name for the type of unsafe content detected in the image."""

    parent_name: Optional[str] = Field(default=UNSET, alias="ParentName")
    """The name for the parent label. Labels at the top level of the hierarchy have the parent label ""."""

    taxonomy_level: Optional[int] = Field(default=UNSET, alias="TaxonomyLevel")
    """The level of the moderation label with regard to its taxonomy, from 1 to 3."""


class ModerationLabelDict(TypedDict):
    confidence: NotRequired[float]
    name: NotRequired[str]
    parent_name: NotRequired[str]
    taxonomy_level: NotRequired[int]
