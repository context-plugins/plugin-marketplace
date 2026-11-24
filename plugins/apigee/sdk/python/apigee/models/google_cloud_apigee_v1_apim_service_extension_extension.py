from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.supported_event import SupportedEventOrStr


class GoogleCloudApigeeV1ApimServiceExtensionExtension(SdkBaseModel):
    """Extension configuration for Apigee extension processor service extension."""

    fail_open: Optional[bool] = Field(default=UNSET, alias="failOpen")
    """Optional. Whether this request should fail open."""

    match_condition: Optional[str] = Field(default=UNSET, alias="matchCondition")
    """Optional. Match Condition for CEL expression. Refer to
    https://cloud.google.com/service-extensions/docs/cel-matcher-language-reference for more details."""

    hostname: Optional[str] = UNSET
    """Required. One of the hostnames of Apigee EnvGroup where the proxy is deployed. This hostname (i.e FDQN) will be
    used to route traffic from the specified forwarding rule to the environment in Apigee X instance where the proxy is
    deployed for handling extension traffic. Format: ^([a-zA-Z0-9. _-])+$"""

    supported_events: Optional[list[SupportedEventOrStr]] = Field(default=UNSET, alias="supportedEvents")
    """Optional. Supported events for the Service Extension. If not specified, all events are supported."""

    name: Optional[str] = UNSET
    """Required. Name of the ``LbTrafficExtension`` resource. The name must conform with RFC-1034, is restricted to
    lower-cased letters, numbers and hyphens, and can have a maximum length of 63 characters. Additionally, the first
    character must be a letter and the last a letter or a number."""


class GoogleCloudApigeeV1ApimServiceExtensionExtensionDict(TypedDict):
    fail_open: NotRequired[bool]
    match_condition: NotRequired[str]
    hostname: NotRequired[str]
    supported_events: NotRequired[list[SupportedEventOrStr]]
    name: NotRequired[str]
