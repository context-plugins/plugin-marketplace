from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.auto_update import AutoUpdateOrStr
from .enums.feature_amazon_rekognition_project_api import FeatureAmazonRekognitionProjectApiOrStr


class CreateProjectRequest(SdkBaseModel):
    project_name: str = Field(alias="ProjectName")
    """The name of the project to create."""

    feature: Optional[FeatureAmazonRekognitionProjectApiOrStr] = Field(default=UNSET, alias="Feature")
    """Specifies feature that is being customized. If no value is provided CUSTOM_LABELS is used as a default."""

    auto_update: Optional[AutoUpdateOrStr] = Field(default=UNSET, alias="AutoUpdate")
    """Specifies whether automatic retraining should be attempted for the versions of the project. Automatic retraining
    is done as a best effort. Required argument for Content Moderation. Applicable only to adapters."""

    tags: Optional[dict[str, str]] = Field(default=UNSET, alias="Tags")
    """A set of tags (key-value pairs) that you want to attach to the project."""


class CreateProjectRequestDict(TypedDict):
    project_name: str
    feature: NotRequired[FeatureAmazonRekognitionProjectApiOrStr]
    auto_update: NotRequired[AutoUpdateOrStr]
    tags: NotRequired[dict[str, str]]
