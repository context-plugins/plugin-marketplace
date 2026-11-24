from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LifecycleConfig2(SdkBaseModel):
    """Optional. Lifecycle setting for the cluster."""

    idle_delete_ttl: Optional[str] = Field(default=UNSET, alias="idleDeleteTtl")
    """Optional. The duration to keep the cluster alive while idling (when no jobs are running). Passing this threshold
    will cause the cluster to be deleted. Minimum value is 5 minutes; maximum value is 14 days (see JSON representation
    of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json))."""

    idle_stop_ttl: Optional[str] = Field(default=UNSET, alias="idleStopTtl")
    """Optional. The duration to keep the cluster started while idling (when no jobs are running). Passing this
    threshold will cause the cluster to be stopped. Minimum value is 5 minutes; maximum value is 14 days (see JSON
    representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json))."""

    auto_stop_ttl: Optional[str] = Field(default=UNSET, alias="autoStopTtl")
    """Optional. The lifetime duration of the cluster. The cluster will be auto-stopped at the end of this period,
    calculated from the time of submission of the create or update cluster request. Minimum value is 10 minutes; maximum
    value is 14 days (see JSON representation of Duration
    (https://developers.google.com/protocol-buffers/docs/proto3#json))."""

    auto_delete_time: Optional[str] = Field(default=UNSET, alias="autoDeleteTime")
    """Optional. The time when cluster will be auto-deleted (see JSON representation of Timestamp
    (https://developers.google.com/protocol-buffers/docs/proto3#json))."""

    auto_delete_ttl: Optional[str] = Field(default=UNSET, alias="autoDeleteTtl")
    """Optional. The lifetime duration of cluster. The cluster will be auto-deleted at the end of this period. Minimum
    value is 10 minutes; maximum value is 14 days (see JSON representation of Duration
    (https://developers.google.com/protocol-buffers/docs/proto3#json))."""

    idle_start_time: Optional[str] = Field(default=UNSET, alias="idleStartTime")
    """Output only. The time when cluster became idle (most recent job finished) and became eligible for deletion due to
    idleness (see JSON representation of Timestamp
    (https://developers.google.com/protocol-buffers/docs/proto3#json))."""

    auto_stop_time: Optional[str] = Field(default=UNSET, alias="autoStopTime")
    """Optional. The time when cluster will be auto-stopped (see JSON representation of Timestamp
    (https://developers.google.com/protocol-buffers/docs/proto3#json))."""


class LifecycleConfig2Dict(TypedDict):
    idle_delete_ttl: NotRequired[str]
    idle_stop_ttl: NotRequired[str]
    auto_stop_ttl: NotRequired[str]
    auto_delete_time: NotRequired[str]
    auto_delete_ttl: NotRequired[str]
    idle_start_time: NotRequired[str]
    auto_stop_time: NotRequired[str]
