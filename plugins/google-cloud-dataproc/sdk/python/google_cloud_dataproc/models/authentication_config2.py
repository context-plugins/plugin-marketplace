from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.user_workload_authentication_type import UserWorkloadAuthenticationTypeOrStr


class AuthenticationConfig2(SdkBaseModel):
    """Optional. Authentication configuration used to set the default identity for the workload execution. The config
    specifies the type of identity (service account or user) that will be used by workloads to access resources on the
    project(s)."""

    user_workload_authentication_type: Optional[UserWorkloadAuthenticationTypeOrStr] = Field(
        default=UNSET, alias="userWorkloadAuthenticationType"
    )
    """Optional. Authentication type for the user workload running in containers."""


class AuthenticationConfig2Dict(TypedDict):
    user_workload_authentication_type: NotRequired[UserWorkloadAuthenticationTypeOrStr]
