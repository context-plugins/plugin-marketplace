from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HttpEndpoint2(SdkBaseModel):
    """An HTTP endpoint destination described by an URI."""

    uri: Optional[str] = UNSET
    """Required. The URI of the HTTP endpoint. The value must be a RFC2396 URI string. Examples:
    ``http://10.10.10.8:80/route``, ``http://svc.us-central1.p.local:8080/``. Only HTTP and HTTPS protocols are
    supported. The host can be either a static IP addressable from the VPC specified by the network config, or an
    internal DNS hostname of the service resolvable via Cloud DNS."""


class HttpEndpoint2Dict(TypedDict):
    uri: NotRequired[str]
