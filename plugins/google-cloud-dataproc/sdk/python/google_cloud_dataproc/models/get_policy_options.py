from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetPolicyOptions(SdkBaseModel):
    """Encapsulates settings provided to GetIamPolicy."""

    requested_policy_version: Optional[int] = Field(default=UNSET, alias="requestedPolicyVersion")
    """Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3.
    Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must
    specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field
    unset.The policy in the response might use the policy version that you specified, or it might use a lower policy
    version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses
    version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation
    (https://cloud.google.com/iam/help/conditions/resource-policies)."""


class GetPolicyOptionsDict(TypedDict):
    requested_policy_version: NotRequired[int]
