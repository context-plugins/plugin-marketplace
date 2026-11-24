from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetApiV1ProxiesUserRequestsBandwidthResponse(SdkBaseModel):
    username: Optional[str] = UNSET
    total_bandwidth_usage: Optional[float] = UNSET


class GetApiV1ProxiesUserRequestsBandwidthResponseDict(TypedDict):
    username: NotRequired[str]
    total_bandwidth_usage: NotRequired[float]
