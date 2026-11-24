from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_spec_contents2 import (
    GoogleCloudApihubV1SpecContents2,
    GoogleCloudApihubV1SpecContents2Dict,
)


class GoogleCloudApihubV1GenerateSpecResponse(SdkBaseModel):
    """Response for GenerateSpec."""

    generated_spec: Optional[GoogleCloudApihubV1SpecContents2] = Field(default=UNSET, alias="generatedSpec")
    """The merged OpenAPI document for the requested window."""


class GoogleCloudApihubV1GenerateSpecResponseDict(TypedDict):
    generated_spec: NotRequired[GoogleCloudApihubV1SpecContents2Dict]
