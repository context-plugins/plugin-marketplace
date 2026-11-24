from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .auth_mode import AuthMode, AuthModeDict
from .auth_provider import AuthProvider, AuthProviderDict
from .event_log_config import EventLogConfig, EventLogConfigDict


class EventConfig(SdkBaseModel):
    auth_providers: list[AuthProvider] = Field(alias="authProviders")
    """A list of authorization providers."""

    connection_auth_modes: list[AuthMode] = Field(alias="connectionAuthModes")
    """A list of valid authorization modes for the Event API connections."""

    default_publish_auth_modes: list[AuthMode] = Field(alias="defaultPublishAuthModes")
    """A list of valid authorization modes for the Event API publishing."""

    default_subscribe_auth_modes: list[AuthMode] = Field(alias="defaultSubscribeAuthModes")
    """A list of valid authorization modes for the Event API subscriptions."""

    log_config: Optional[EventLogConfig] = Field(default=UNSET, alias="logConfig")


class EventConfigDict(TypedDict):
    auth_providers: list[AuthProviderDict]
    connection_auth_modes: list[AuthModeDict]
    default_publish_auth_modes: list[AuthModeDict]
    default_subscribe_auth_modes: list[AuthModeDict]
    log_config: NotRequired[EventLogConfigDict]
