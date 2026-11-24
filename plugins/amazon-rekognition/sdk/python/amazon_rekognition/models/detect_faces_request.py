from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.attribute import AttributeOrStr
from .image import Image, ImageDict


class DetectFacesRequest(SdkBaseModel):
    image: Image = Field(alias="Image")
    attributes: Optional[list[AttributeOrStr]] = Field(default=UNSET, alias="Attributes")
    """An array of facial attributes you want to be returned. A DEFAULT subset of facial attributes - BoundingBox,
    Confidence, Pose, Quality, and Landmarks - will always be returned. You can request for specific facial attributes
    (in addition to the default list) - by using ["DEFAULT", "FACE_OCCLUDED"] or just ["FACE_OCCLUDED"]. You can request
    for all facial attributes by using ["ALL"]. Requesting more attributes may increase response time. If you provide
    both, ["ALL", "DEFAULT"], the service uses a logical "AND" operator to determine which attributes to return (in this
    case, all attributes). Note t"""


class DetectFacesRequestDict(TypedDict):
    image: ImageDict
    attributes: NotRequired[list[AttributeOrStr]]
