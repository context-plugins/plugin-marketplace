from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_additional_spec_content1 import (
    GoogleCloudApihubV1AdditionalSpecContent1,
    GoogleCloudApihubV1AdditionalSpecContent1Dict,
)


class GoogleCloudApihubV1FetchAdditionalSpecContentResponse(SdkBaseModel):
    """The FetchAdditionalSpecContent method's response."""

    additional_spec_content: Optional[GoogleCloudApihubV1AdditionalSpecContent1] = Field(
        default=UNSET, alias="additionalSpecContent"
    )
    """The additional spec content."""


class GoogleCloudApihubV1FetchAdditionalSpecContentResponseDict(TypedDict):
    additional_spec_content: NotRequired[GoogleCloudApihubV1AdditionalSpecContent1Dict]
