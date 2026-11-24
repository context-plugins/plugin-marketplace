from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .auth_mode import AuthMode, AuthModeDict
from .handler_configs import HandlerConfigs, HandlerConfigsDict


class ChannelNamespace(SdkBaseModel):
    api_id: Optional[str] = Field(default=UNSET, alias="apiId")
    """The Api ID."""

    name: Optional[str] = UNSET
    """The name of the channel namespace. This name must be unique within the Api."""

    subscribe_auth_modes: Optional[list[AuthMode]] = Field(default=UNSET, alias="subscribeAuthModes")
    """The authorization mode to use for subscribing to messages on the channel namespace. This configuration overrides
    the default Apiauthorization configuration."""

    publish_auth_modes: Optional[list[AuthMode]] = Field(default=UNSET, alias="publishAuthModes")
    """The authorization mode to use for publishing messages on the channel namespace. This configuration overrides the
    default Apiauthorization configuration."""

    code_handlers: Optional[str] = Field(default=UNSET, alias="codeHandlers")
    """The event handler functions that run custom business logic to process published events and subscribe requests."""

    tags: Optional[dict[str, str]] = UNSET
    channel_namespace_arn: Optional[str] = Field(default=UNSET, alias="channelNamespaceArn")
    """The Amazon Resource Name (ARN) for the ChannelNamespace."""

    created: Optional[RFC3339DateTime] = UNSET
    """The date and time that the ChannelNamespace was created."""

    last_modified: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastModified")
    """The date and time that the ChannelNamespace was last changed."""

    handler_configs: Optional[HandlerConfigs] = Field(default=UNSET, alias="handlerConfigs")


class ChannelNamespaceDict(TypedDict):
    api_id: NotRequired[str]
    name: NotRequired[str]
    subscribe_auth_modes: NotRequired[list[AuthModeDict]]
    publish_auth_modes: NotRequired[list[AuthModeDict]]
    code_handlers: NotRequired[str]
    tags: NotRequired[dict[str, str]]
    channel_namespace_arn: NotRequired[str]
    created: NotRequired[RFC3339DateTime]
    last_modified: NotRequired[RFC3339DateTime]
    handler_configs: NotRequired[HandlerConfigsDict]
