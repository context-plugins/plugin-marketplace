from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.protocol1 import Protocol1OrStr
from .google_cloud_apigee_v1_tls_info_config1 import (
    GoogleCloudApigeeV1TlsInfoConfig1,
    GoogleCloudApigeeV1TlsInfoConfig1Dict,
)


class GoogleCloudApigeeV1TargetServerConfig(SdkBaseModel):
    port: Optional[int] = UNSET
    """Port number for the target server."""

    name: Optional[str] = UNSET
    """Target server revision name in the following format:
    ``organizations/{org}/environments/{env}/targetservers/{targetserver}/revisions/{rev}``"""

    protocol: Optional[Protocol1OrStr] = UNSET
    """The protocol used by this target server."""

    host: Optional[str] = UNSET
    """Host name of the target server."""

    tls_info: Optional[GoogleCloudApigeeV1TlsInfoConfig1] = Field(default=UNSET, alias="tlsInfo")
    """TLS settings for the target server."""

    enabled: Optional[bool] = UNSET
    """Whether the target server is enabled. An empty/omitted value for this field should be interpreted as true."""


class GoogleCloudApigeeV1TargetServerConfigDict(TypedDict):
    port: NotRequired[int]
    name: NotRequired[str]
    protocol: NotRequired[Protocol1OrStr]
    host: NotRequired[str]
    tls_info: NotRequired[GoogleCloudApigeeV1TlsInfoConfig1Dict]
    enabled: NotRequired[bool]
