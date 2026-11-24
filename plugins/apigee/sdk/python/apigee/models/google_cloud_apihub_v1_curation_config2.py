from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.curation_type import CurationTypeOrStr
from .google_cloud_apihub_v1_custom_curation1 import (
    GoogleCloudApihubV1CustomCuration1,
    GoogleCloudApihubV1CustomCuration1Dict,
)


class GoogleCloudApihubV1CurationConfig2(SdkBaseModel):
    """Optional. This configuration should be provided if the plugin action is publishing data to API hub curate
    layer."""

    custom_curation: Optional[GoogleCloudApihubV1CustomCuration1] = Field(default=UNSET, alias="customCuration")
    """Optional. Custom curation information for this plugin instance."""

    curation_type: Optional[CurationTypeOrStr] = Field(default=UNSET, alias="curationType")
    """Required. The curation type for this plugin instance."""


class GoogleCloudApihubV1CurationConfig2Dict(TypedDict):
    custom_curation: NotRequired[GoogleCloudApihubV1CustomCuration1Dict]
    curation_type: NotRequired[CurationTypeOrStr]
