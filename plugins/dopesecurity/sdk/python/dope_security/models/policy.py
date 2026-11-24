from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.ssl_inspection import SslInspectionOrStr


class Policy(SdkBaseModel):
    """Summary of a policy"""

    policy_name: str = Field(alias="policyName")
    """Unique name of the policy within the tenant"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """ISO-8601 timestamp of the last policy modification"""

    ssl_inspection: SslInspectionOrStr = Field(alias="sslInspection")
    """Effective SSL inspection status for this policy. If SSL inspection is not explicitly configured on this policy,
    the value is inherited from the Base Policy."""

    clash_count: Optional[int] = Field(default=UNSET, alias="clashCount")
    """Number of users/groups who have this policy as a conflicting assignment. Not present for the Base Policy."""


class PolicyDict(TypedDict):
    policy_name: str
    updated_at: RFC3339DateTime
    ssl_inspection: SslInspectionOrStr
    clash_count: NotRequired[int]
