from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state3 import State3OrStr


class GoogleCloudApigeeV1AnalyticsConfig2(SdkBaseModel):
    """Configuration for the Analytics add-on. Only used in organizations.environments.addonsConfig."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The latest update time."""

    state: Optional[State3OrStr] = UNSET
    """Output only. The state of the Analytics add-on."""

    expire_time_millis: Optional[str] = Field(default=UNSET, alias="expireTimeMillis")
    """Output only. Time at which the Analytics add-on expires in milliseconds since epoch. If unspecified, the add-on
    will never expire."""

    enabled: Optional[bool] = UNSET
    """Whether the Analytics add-on is enabled."""


class GoogleCloudApigeeV1AnalyticsConfig2Dict(TypedDict):
    update_time: NotRequired[str]
    state: NotRequired[State3OrStr]
    expire_time_millis: NotRequired[str]
    enabled: NotRequired[bool]
