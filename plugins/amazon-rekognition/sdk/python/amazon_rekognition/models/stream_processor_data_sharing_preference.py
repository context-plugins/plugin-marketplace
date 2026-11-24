from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StreamProcessorDataSharingPreference(SdkBaseModel):
    opt_in: bool = Field(alias="OptIn")
    """If this option is set to true, you choose to share data with Rekognition to improve model performance."""


class StreamProcessorDataSharingPreferenceDict(TypedDict):
    opt_in: bool
