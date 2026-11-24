from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1RuntimeProjectAttachment1(SdkBaseModel):
    """Runtime project attachment for a project if exists, empty otherwise."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Create time."""

    name: Optional[str] = UNSET
    """Identifier. The resource name of a runtime project attachment. Format:
    "projects/{project}/locations/{location}/runtimeProjectAttachments/{runtime_project_attachment}"."""

    runtime_project: Optional[str] = Field(default=UNSET, alias="runtimeProject")
    """Required. Immutable. Google cloud project name in the format: "projects/abc" or "projects/123". As input, project
    name with either project id or number are accepted. As output, this field will contain project number."""


class GoogleCloudApihubV1RuntimeProjectAttachment1Dict(TypedDict):
    create_time: NotRequired[str]
    name: NotRequired[str]
    runtime_project: NotRequired[str]
