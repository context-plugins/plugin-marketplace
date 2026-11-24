from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1_amazon_rekognition_face_collections_api import Type1AmazonRekognitionFaceCollectionsApiOrStr


class LandmarkAmazonRekognitionFaceCollectionsApi(SdkBaseModel):
    type_: Optional[Type1AmazonRekognitionFaceCollectionsApiOrStr] = Field(default=UNSET, alias="Type")
    """Type of landmark."""

    x: Optional[float] = Field(default=UNSET, alias="X")
    """The x-coordinate of the landmark expressed as a ratio of the width of the image. The x-coordinate is measured
    from the left-side of the image. For example, if the image is 700 pixels wide and the x-coordinate of the landmark
    is at 350 pixels, this value is 0.5."""

    y: Optional[float] = Field(default=UNSET, alias="Y")
    """The y-coordinate of the landmark expressed as a ratio of the height of the image. The y-coordinate is measured
    from the top of the image. For example, if the image height is 200 pixels and the y-coordinate of the landmark is at
    50 pixels, this value is 0.25."""


class LandmarkAmazonRekognitionFaceCollectionsApiDict(TypedDict):
    type_: NotRequired[Type1AmazonRekognitionFaceCollectionsApiOrStr]
    x: NotRequired[float]
    y: NotRequired[float]
