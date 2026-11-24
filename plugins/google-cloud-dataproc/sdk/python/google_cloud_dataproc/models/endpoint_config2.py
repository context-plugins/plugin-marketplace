from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EndpointConfig2(SdkBaseModel):
    """Optional. Port/endpoint configuration for this cluster"""

    http_ports: Optional[dict[str, str]] = Field(default=UNSET, alias="httpPorts")
    """Output only. The map of port descriptions to URLs. Will only be populated if enable_http_port_access is true."""

    enable_http_port_access: Optional[bool] = Field(default=UNSET, alias="enableHttpPortAccess")
    """Optional. If true, enable http access to specific ports on the cluster from external sources. Defaults to
    false."""


class EndpointConfig2Dict(TypedDict):
    http_ports: NotRequired[dict[str, str]]
    enable_http_port_access: NotRequired[bool]
