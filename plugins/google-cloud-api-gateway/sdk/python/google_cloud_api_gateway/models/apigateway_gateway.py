from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.effective_streaming_mode import EffectiveStreamingModeOrStr
from .enums.state2 import State2OrStr
from .enums.streaming_mode import StreamingModeOrStr


class ApigatewayGateway(SdkBaseModel):
    """A Gateway is an API-aware HTTP proxy. It performs API-Method and/or API-Consumer specific actions based on an API
    Config such as authentication, policy enforcement, and backend selection."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Created time."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Optional. Display name."""

    default_hostname: Optional[str] = Field(default=UNSET, alias="defaultHostname")
    """Output only. The default hostname that serves traffic for this Gateway."""

    name: Optional[str] = UNSET
    """Identifier. Resource name of the Gateway. Format: projects/{project}/locations/{location}/gateways/{gateway}"""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. Updated time."""

    labels: Optional[dict[str, str]] = UNSET
    """Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more
    details. https://cloud.google.com/compute/docs/labeling-resources"""

    api_config: Optional[str] = Field(default=UNSET, alias="apiConfig")
    """Required. Resource name of the API Config for this Gateway. Format:
    projects/{project}/locations/global/apis/{api}/configs/{apiConfig}"""

    effective_streaming_mode: Optional[EffectiveStreamingModeOrStr] = Field(
        default=UNSET, alias="effectiveStreamingMode"
    )
    """Output only. The streaming mode this gateway is actually served with, which the service resolves at creation from
    ``streaming_mode``, the referenced API Config, and the platform default at the time. Read this rather than
    ``streaming_mode`` to determine whether a gateway supports streaming."""

    streaming_mode: Optional[StreamingModeOrStr] = Field(default=UNSET, alias="streamingMode")
    """Optional. Immutable. Requests streaming for a new gateway. An attempt to change it on update is rejected. If
    unset, the service selects the mode. This field records only what was requested and is never modified by the
    service; read ``effective_streaming_mode`` for the mode the gateway is served with."""

    state: Optional[State2OrStr] = UNSET
    """Output only. The current state of the Gateway."""


class ApigatewayGatewayDict(TypedDict):
    create_time: NotRequired[str]
    display_name: NotRequired[str]
    default_hostname: NotRequired[str]
    name: NotRequired[str]
    update_time: NotRequired[str]
    labels: NotRequired[dict[str, str]]
    api_config: NotRequired[str]
    effective_streaming_mode: NotRequired[EffectiveStreamingModeOrStr]
    streaming_mode: NotRequired[StreamingModeOrStr]
    state: NotRequired[State2OrStr]
