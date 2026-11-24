from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_host_project_registration import (
    GoogleCloudApihubV1HostProjectRegistration,
    GoogleCloudApihubV1HostProjectRegistrationDict,
)


class GoogleCloudApihubV1ListHostProjectRegistrationsResponse(SdkBaseModel):
    """The ListHostProjectRegistrations method's response."""

    host_project_registrations: Optional[list[GoogleCloudApihubV1HostProjectRegistration]] = Field(
        default=UNSET, alias="hostProjectRegistrations"
    )
    """The list of host project registrations."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class GoogleCloudApihubV1ListHostProjectRegistrationsResponseDict(TypedDict):
    host_project_registrations: NotRequired[list[GoogleCloudApihubV1HostProjectRegistrationDict]]
    next_page_token: NotRequired[str]
