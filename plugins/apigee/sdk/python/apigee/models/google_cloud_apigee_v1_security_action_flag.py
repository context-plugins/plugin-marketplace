from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_security_action_http_header import (
    GoogleCloudApigeeV1SecurityActionHttpHeader,
    GoogleCloudApigeeV1SecurityActionHttpHeaderDict,
)


class GoogleCloudApigeeV1SecurityActionFlag(SdkBaseModel):
    """The message that should be set in the case of a Flag action."""

    headers: Optional[list[GoogleCloudApigeeV1SecurityActionHttpHeader]] = UNSET
    """Optional. A list of HTTP headers to be sent to the target in case of a FLAG SecurityAction. Limit 5 headers per
    SecurityAction. At least one is mandatory."""


class GoogleCloudApigeeV1SecurityActionFlagDict(TypedDict):
    headers: NotRequired[list[GoogleCloudApigeeV1SecurityActionHttpHeaderDict]]
