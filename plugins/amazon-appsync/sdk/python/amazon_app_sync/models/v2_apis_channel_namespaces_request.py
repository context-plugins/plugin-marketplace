from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .auth_mode import AuthMode, AuthModeDict
from .handler_configs import HandlerConfigs, HandlerConfigsDict


class V2ApisChannelNamespacesRequest(SdkBaseModel):
    name: str
    """The name of the ChannelNamespace. This name must be unique within the Api"""

    subscribe_auth_modes: Optional[list[AuthMode]] = Field(default=UNSET, alias="subscribeAuthModes")
    """The authorization mode to use for subscribing to messages on the channel namespace. This configuration overrides
    the default Api authorization configuration."""

    publish_auth_modes: Optional[list[AuthMode]] = Field(default=UNSET, alias="publishAuthModes")
    """The authorization mode to use for publishing messages on the channel namespace. This configuration overrides the
    default Api authorization configuration."""

    code_handlers: Optional[str] = Field(default=UNSET, alias="codeHandlers")
    """The event handler functions that run custom business logic to process published events and subscribe requests."""

    tags: Optional[dict[str, str]] = UNSET
    handler_configs: Optional[HandlerConfigs] = Field(default=UNSET, alias="handlerConfigs")


class V2ApisChannelNamespacesRequestDict(TypedDict):
    name: str
    subscribe_auth_modes: NotRequired[list[AuthModeDict]]
    publish_auth_modes: NotRequired[list[AuthModeDict]]
    code_handlers: NotRequired[str]
    tags: NotRequired[dict[str, str]]
    handler_configs: NotRequired[HandlerConfigsDict]
