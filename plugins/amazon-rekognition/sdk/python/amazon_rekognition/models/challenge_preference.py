from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1_amazon_rekognition_face_liveness_api import Type1AmazonRekognitionFaceLivenessApiOrStr
from .versions import Versions, VersionsDict


class ChallengePreference(SdkBaseModel):
    type_: Type1AmazonRekognitionFaceLivenessApiOrStr = Field(alias="Type")
    """The types of challenges that have been selected for the Face Liveness session."""

    versions: Optional[Versions] = Field(default=UNSET, alias="Versions")


class ChallengePreferenceDict(TypedDict):
    type_: Type1AmazonRekognitionFaceLivenessApiOrStr
    versions: NotRequired[VersionsDict]
