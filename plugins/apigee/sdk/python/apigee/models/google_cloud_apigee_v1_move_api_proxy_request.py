from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1MoveApiProxyRequest(SdkBaseModel):
    """Moves an API Proxy to a different Space."""

    space: Optional[str] = UNSET
    """Optional. Resource ID of the space to move the proxy to. If unspecified, the proxy will be moved to the
    organization level."""


class GoogleCloudApigeeV1MoveApiProxyRequestDict(TypedDict):
    space: NotRequired[str]
