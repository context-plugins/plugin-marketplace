from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state6 import State6OrStr
from .google_cloud_apigee_v1_security_action_condition_config2 import (
    GoogleCloudApigeeV1SecurityActionConditionConfig2,
    GoogleCloudApigeeV1SecurityActionConditionConfig2Dict,
)
from .google_cloud_apigee_v1_security_action_deny2 import (
    GoogleCloudApigeeV1SecurityActionDeny2,
    GoogleCloudApigeeV1SecurityActionDeny2Dict,
)
from .google_cloud_apigee_v1_security_action_flag2 import (
    GoogleCloudApigeeV1SecurityActionFlag2,
    GoogleCloudApigeeV1SecurityActionFlag2Dict,
)


class GoogleCloudApigeeV1SecurityAction(SdkBaseModel):
    """A SecurityAction is rule that can be enforced at an environment level. The result is one of: - A denied API call
    - An explicitly allowed API call - A flagged API call (HTTP headers added before the target receives it) At least
    one condition is required to create a SecurityAction."""

    ttl: Optional[str] = UNSET
    """Input only. The TTL for this SecurityAction."""

    deny: Optional[GoogleCloudApigeeV1SecurityActionDeny2] = UNSET
    """Deny a request through if it matches this SecurityAction."""

    description: Optional[str] = UNSET
    """Optional. An optional user provided description of the SecurityAction."""

    name: Optional[str] = UNSET
    """Immutable. This field is ignored during creation as per AIP-133. Please set the ``security_action_id`` field in
    the CreateSecurityActionRequest when creating a new SecurityAction. Format:
    organizations/{org}/environments/{env}/securityActions/{security_action}"""

    condition_config: Optional[GoogleCloudApigeeV1SecurityActionConditionConfig2] = Field(
        default=UNSET, alias="conditionConfig"
    )
    """Required. A valid SecurityAction must contain at least one condition."""

    api_proxies: Optional[list[str]] = Field(default=UNSET, alias="apiProxies")
    """Optional. If unset, this would apply to all proxies in the environment. If set, this action is enforced only if
    at least one proxy in the repeated list is deployed at the time of enforcement. If set, several restrictions are
    enforced on SecurityActions. There can be at most 100 enabled actions with proxies set in an env. Several other
    restrictions apply on conditions and are detailed later."""

    flag: Optional[GoogleCloudApigeeV1SecurityActionFlag2] = UNSET
    """Flag a request through if it matches this SecurityAction."""

    allow: Optional[Any] = UNSET
    """Allow a request through if it matches this SecurityAction."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The create time for this SecurityAction."""

    state: Optional[State6OrStr] = UNSET
    """Required. Only an ENABLED SecurityAction is enforced. An ENABLED SecurityAction past its expiration time will not
    be enforced."""

    expire_time: Optional[str] = Field(default=UNSET, alias="expireTime")
    """The expiration for this SecurityAction."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The update time for this SecurityAction. This reflects when this SecurityAction changed states."""


class GoogleCloudApigeeV1SecurityActionDict(TypedDict):
    ttl: NotRequired[str]
    deny: NotRequired[GoogleCloudApigeeV1SecurityActionDeny2Dict]
    description: NotRequired[str]
    name: NotRequired[str]
    condition_config: NotRequired[GoogleCloudApigeeV1SecurityActionConditionConfig2Dict]
    api_proxies: NotRequired[list[str]]
    flag: NotRequired[GoogleCloudApigeeV1SecurityActionFlag2Dict]
    allow: NotRequired[Any]
    create_time: NotRequired[str]
    state: NotRequired[State6OrStr]
    expire_time: NotRequired[str]
    update_time: NotRequired[str]
