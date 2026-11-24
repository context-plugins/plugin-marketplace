from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .admin_set_state import AdminSetState, AdminSetStateDict


class Endpoint(SdkBaseModel):
    admin_set_state: Optional[AdminSetState] = Field(default=UNSET, alias="adminSetState")
    agent_uuid: Optional[UUID] = Field(default=UNSET, alias="agentUUID")
    """the unique id of the endpoint"""

    user_uuid: Optional[UUID] = Field(default=UNSET, alias="userUUID")
    """the unique id of the active user on the endpoint"""

    agent_version: Optional[str] = Field(default=UNSET, alias="agentVersion")
    """the current version of the endpoint"""

    binary_type: Optional[str] = Field(default=UNSET, alias="binaryType")
    """type of ISA for computer processors"""

    city_name: Optional[str] = Field(default=UNSET, alias="cityName")
    """the name of the city where the endpoint is located"""

    region: Optional[str] = UNSET
    """the name of the region where the endpoint is located"""

    country_name: Optional[str] = Field(default=UNSET, alias="countryName")
    """the name of the country where the endpoint is located"""

    cpu_family: Optional[str] = Field(default=UNSET, alias="cpuFamily")
    """the type of CPU on the device hosting the endpoint"""

    debug_state: Optional[str] = Field(default=UNSET, alias="debugState")
    """indicates the debug state of the endpoint. 0 means not in debug, 1 means set to debug, 2 means acknowledged
    receipt of debug request"""

    device_name: Optional[str] = Field(default=UNSET, alias="deviceName")
    """the name of the device hosting the endpoint"""

    disable_mode: Optional[bool] = Field(default=UNSET, alias="disableMode")
    """indicates if the endpoint is disabled or not"""

    error_message: Optional[str] = Field(default=UNSET, alias="errorMessage")
    """additional details regarding an error"""

    fallback_mode: Optional[bool] = Field(default=UNSET, alias="fallbackMode")
    """indicates if the endpoint is in fallback mode"""

    configuration_last_updated: Optional[RFC3339DateTime] = Field(default=UNSET, alias="configurationLastUpdated")
    """the date and time when the endpoint last updated the configuration"""

    os_version: Optional[str] = Field(default=UNSET, alias="osVersion")
    """Operating System version of the device"""

    policy_name: Optional[str] = Field(default=UNSET, alias="policyName")
    """name of the policy that is being used by the endpoint"""

    realtime_connection: Optional[bool] = Field(default=UNSET, alias="realtimeConnection")
    """indicates if the endpoint has an active web-socket connection"""

    status: Optional[str] = UNSET
    """the current operational status of the endpoint"""

    last_seen: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastSeen")
    """the date and time when the endpoint was last seen"""

    user_id: Optional[str] = Field(default=UNSET, alias="userId")
    """the user id of the user that is using the endpoint. ``userId`` for OIDC users is usually their email address."""

    email_id: Optional[str] = Field(default=UNSET, alias="emailId")
    """the email of the user that is using the endpoint"""


class EndpointDict(TypedDict):
    admin_set_state: NotRequired[AdminSetStateDict]
    agent_uuid: NotRequired[UUID]
    user_uuid: NotRequired[UUID]
    agent_version: NotRequired[str]
    binary_type: NotRequired[str]
    city_name: NotRequired[str]
    region: NotRequired[str]
    country_name: NotRequired[str]
    cpu_family: NotRequired[str]
    debug_state: NotRequired[str]
    device_name: NotRequired[str]
    disable_mode: NotRequired[bool]
    error_message: NotRequired[str]
    fallback_mode: NotRequired[bool]
    configuration_last_updated: NotRequired[RFC3339DateTime]
    os_version: NotRequired[str]
    policy_name: NotRequired[str]
    realtime_connection: NotRequired[bool]
    status: NotRequired[str]
    last_seen: NotRequired[RFC3339DateTime]
    user_id: NotRequired[str]
    email_id: NotRequired[str]
