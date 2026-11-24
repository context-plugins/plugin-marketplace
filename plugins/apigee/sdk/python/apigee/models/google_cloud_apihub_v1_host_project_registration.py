from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1HostProjectRegistration(SdkBaseModel):
    """Host project registration refers to the registration of a Google cloud project with Api Hub as a host project.
    This is the project where Api Hub is provisioned. It acts as the consumer project for the Api Hub instance
    provisioned. Multiple runtime projects can be attached to the host project and these attachments define the scope of
    Api Hub."""

    name: Optional[str] = UNSET
    """Identifier. The name of the host project registration. Format:
    "projects/{project}/locations/{location}/hostProjectRegistrations/{host_project_registration}"."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time at which the host project registration was created."""

    gcp_project: Optional[str] = Field(default=UNSET, alias="gcpProject")
    """Required. Immutable. Google cloud project name in the format: "projects/abc" or "projects/123". As input, project
    name with either project id or number are accepted. As output, this field will contain project number."""


class GoogleCloudApihubV1HostProjectRegistrationDict(TypedDict):
    name: NotRequired[str]
    create_time: NotRequired[str]
    gcp_project: NotRequired[str]
