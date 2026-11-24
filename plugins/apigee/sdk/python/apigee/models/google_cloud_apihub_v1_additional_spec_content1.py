from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.spec_content_type import SpecContentTypeOrStr
from .google_cloud_apihub_v1_spec_contents1 import (
    GoogleCloudApihubV1SpecContents1,
    GoogleCloudApihubV1SpecContents1Dict,
)


class GoogleCloudApihubV1AdditionalSpecContent1(SdkBaseModel):
    """The additional spec content."""

    labels: Optional[dict[str, str]] = UNSET
    """Optional. The labels of the spec content e.g. specboost addon version."""

    spec_contents: Optional[GoogleCloudApihubV1SpecContents1] = Field(default=UNSET, alias="specContents")
    """Optional. The additional spec contents."""

    spec_content_type: Optional[SpecContentTypeOrStr] = Field(default=UNSET, alias="specContentType")
    """Required. The type of the spec content."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The time at which the spec content was last updated."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time at which the spec content was created."""


class GoogleCloudApihubV1AdditionalSpecContent1Dict(TypedDict):
    labels: NotRequired[dict[str, str]]
    spec_contents: NotRequired[GoogleCloudApihubV1SpecContents1Dict]
    spec_content_type: NotRequired[SpecContentTypeOrStr]
    update_time: NotRequired[str]
    create_time: NotRequired[str]
