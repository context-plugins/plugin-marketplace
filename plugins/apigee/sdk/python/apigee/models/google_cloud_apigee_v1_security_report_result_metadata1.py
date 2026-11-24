from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1SecurityReportResultMetadata1(SdkBaseModel):
    """Result is available only after the query is completed."""

    expires: Optional[str] = UNSET
    """Output only. Expire_time is set to 7 days after report creation. Query result will be unaccessable after this
    time. Example: "2021-05-04T13:38:52-07:00"
    """

    self: Optional[str] = UNSET
    """Self link of the query results. Example:
    ``/organizations/myorg/environments/myenv/securityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result`` or following
    format if query is running at host level:
    ``/organizations/myorg/hostSecurityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result``"""


class GoogleCloudApigeeV1SecurityReportResultMetadata1Dict(TypedDict):
    expires: NotRequired[str]
    self: NotRequired[str]
