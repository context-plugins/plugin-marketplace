from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_security_action import (
    GoogleCloudApigeeV1SecurityAction,
    GoogleCloudApigeeV1SecurityActionDict,
)


class GoogleCloudApigeeV1ListSecurityActionsResponse(SdkBaseModel):
    """Contains a list of SecurityActions in response to a ListSecurityActionRequest."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    security_actions: Optional[list[GoogleCloudApigeeV1SecurityAction]] = Field(default=UNSET, alias="securityActions")
    """The SecurityActions for the specified environment."""


class GoogleCloudApigeeV1ListSecurityActionsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    security_actions: NotRequired[list[GoogleCloudApigeeV1SecurityActionDict]]
