from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_runtime_project_attachment1 import (
    GoogleCloudApihubV1RuntimeProjectAttachment1,
    GoogleCloudApihubV1RuntimeProjectAttachment1Dict,
)


class GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse(SdkBaseModel):
    """The ListRuntimeProjectAttachments method's response."""

    runtime_project_attachment: Optional[GoogleCloudApihubV1RuntimeProjectAttachment1] = Field(
        default=UNSET, alias="runtimeProjectAttachment"
    )
    """Runtime project attachment for a project if exists, empty otherwise."""


class GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponseDict(TypedDict):
    runtime_project_attachment: NotRequired[GoogleCloudApihubV1RuntimeProjectAttachment1Dict]
