from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .event_config import EventConfig, EventConfigDict


class Api(SdkBaseModel):
    api_id: Optional[str] = Field(default=UNSET, alias="apiId")
    """The Api ID."""

    name: Optional[str] = UNSET
    """The name of the Api."""

    owner_contact: Optional[str] = Field(default=UNSET, alias="ownerContact")
    """The owner contact information for the Api"""

    tags: Optional[dict[str, str]] = UNSET
    dns: Optional[dict[str, str]] = UNSET
    """The DNS records for the API. This will include an HTTP and a real-time endpoint."""

    api_arn: Optional[str] = Field(default=UNSET, alias="apiArn")
    """The Amazon Resource Name (ARN) for the Api."""

    created: Optional[RFC3339DateTime] = UNSET
    """The date and time that the Api was created."""

    xray_enabled: Optional[bool] = Field(default=UNSET, alias="xrayEnabled")
    """A flag indicating whether to use X-Ray tracing for this Api."""

    waf_web_acl_arn: Optional[str] = Field(default=UNSET, alias="wafWebAclArn")
    """The Amazon Resource Name (ARN) of the WAF web access control list (web ACL) associated with this Api, if one
    exists."""

    event_config: Optional[EventConfig] = Field(default=UNSET, alias="eventConfig")


class ApiDict(TypedDict):
    api_id: NotRequired[str]
    name: NotRequired[str]
    owner_contact: NotRequired[str]
    tags: NotRequired[dict[str, str]]
    dns: NotRequired[dict[str, str]]
    api_arn: NotRequired[str]
    created: NotRequired[RFC3339DateTime]
    xray_enabled: NotRequired[bool]
    waf_web_acl_arn: NotRequired[str]
    event_config: NotRequired[EventConfigDict]
