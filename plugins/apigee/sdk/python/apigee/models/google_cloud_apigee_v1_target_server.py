from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.protocol import ProtocolOrStr
from .google_cloud_apigee_v1_tls_info1 import GoogleCloudApigeeV1TlsInfo1, GoogleCloudApigeeV1TlsInfo1Dict


class GoogleCloudApigeeV1TargetServer(SdkBaseModel):
    """TargetServer configuration. TargetServers are used to decouple a proxy TargetEndpoint HTTPTargetConnections from
    concrete URLs for backend services."""

    port: Optional[int] = UNSET
    """Required. The port number this target connects to on the given host. Value must be between 1 and 65535,
    inclusive."""

    name: Optional[str] = UNSET
    """Required. The resource id of this target server."""

    is_enabled: Optional[bool] = Field(default=UNSET, alias="isEnabled")
    """Optional. Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing
    configurations, and one or more TargetServers need to taken out of rotation periodically. Defaults to true."""

    s_sl_info: Optional[GoogleCloudApigeeV1TlsInfo1] = Field(default=UNSET, alias="sSLInfo")
    """Optional. Specifies TLS configuration info for this TargetServer. The JSON name is ``sSLInfo`` for
    legacy/backwards compatibility reasons -- Edge originally supported SSL, and the name is still used for TLS
    configuration."""

    host: Optional[str] = UNSET
    """Required. The host name this target connects to. Value must be a valid hostname as described by RFC-1123."""

    protocol: Optional[ProtocolOrStr] = UNSET
    """Immutable. The protocol used by this TargetServer."""

    description: Optional[str] = UNSET
    """Optional. A human-readable description of this TargetServer."""


class GoogleCloudApigeeV1TargetServerDict(TypedDict):
    port: NotRequired[int]
    name: NotRequired[str]
    is_enabled: NotRequired[bool]
    s_sl_info: NotRequired[GoogleCloudApigeeV1TlsInfo1Dict]
    host: NotRequired[str]
    protocol: NotRequired[ProtocolOrStr]
    description: NotRequired[str]
