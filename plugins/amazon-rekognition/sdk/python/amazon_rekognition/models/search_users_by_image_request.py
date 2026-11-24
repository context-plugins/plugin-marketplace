from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.quality_filter_amazon_rekognition_user_api import QualityFilterAmazonRekognitionUserApiOrStr
from .image import Image, ImageDict


class SearchUsersByImageRequest(SdkBaseModel):
    collection_id: str = Field(alias="CollectionId")
    """The ID of an existing collection containing the UserID."""

    image: Image = Field(alias="Image")
    user_match_threshold: Optional[float] = Field(default=UNSET, alias="UserMatchThreshold")
    """Specifies the minimum confidence in the UserID match to return. Default value is 80."""

    max_users: Optional[int] = Field(default=UNSET, alias="MaxUsers")
    """Maximum number of UserIDs to return."""

    quality_filter: Optional[QualityFilterAmazonRekognitionUserApiOrStr] = Field(default=UNSET, alias="QualityFilter")
    """A filter that specifies a quality bar for how much filtering is done to identify faces. Filtered faces aren't
    searched for in the collection. The default value is NONE."""


class SearchUsersByImageRequestDict(TypedDict):
    collection_id: str
    image: ImageDict
    user_match_threshold: NotRequired[float]
    max_users: NotRequired[int]
    quality_filter: NotRequired[QualityFilterAmazonRekognitionUserApiOrStr]
