from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type_amazon_rekognition_face_liveness_api import TypeAmazonRekognitionFaceLivenessApiOrStr


class Challenge(SdkBaseModel):
    type_: TypeAmazonRekognitionFaceLivenessApiOrStr = Field(alias="Type")
    """The type of the challenge being used for the Face Liveness session."""

    version: str = Field(alias="Version")
    """The version of the challenge being used for the Face Liveness session."""


class ChallengeDict(TypedDict):
    type_: TypeAmazonRekognitionFaceLivenessApiOrStr
    version: str
