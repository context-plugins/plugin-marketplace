from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PutResourcePolicyRequest(SdkBaseModel):
    policy_name: str = Field(alias="PolicyName")
    """The name of the resource policy. Must be unique within a specific Amazon Web Services account."""

    policy_document: str = Field(alias="PolicyDocument")
    """The resource policy document, which can be up to 5kb in size."""

    policy_revision_id: Optional[str] = Field(default=UNSET, alias="PolicyRevisionId")
    """Specifies a specific policy revision, to ensure an atomic create operation. By default the resource policy is
    created if it does not exist, or updated with an incremented revision id. The revision id is unique to each policy
    in the account. If the policy revision id does not match the latest revision id, the operation will fail with an
    InvalidPolicyRevisionIdException exception. You can also provide a PolicyRevisionId of 0. In this case, the
    operation will fail with an InvalidPolicyRevisionIdException exception if a resource policy with the same name
    already exists."""

    bypass_policy_lockout_check: Optional[bool] = Field(default=UNSET, alias="BypassPolicyLockoutCheck")
    """A flag to indicate whether to bypass the resource policy lockout safety check. Setting this value to true
    increases the risk that the policy becomes unmanageable. Do not set this value to true indiscriminately. Use this
    parameter only when you include a policy in the request and you intend to prevent the principal that is making the
    request from making a subsequent PutResourcePolicy request. The default value is false."""


class PutResourcePolicyRequestDict(TypedDict):
    policy_name: str
    policy_document: str
    policy_revision_id: NotRequired[str]
    bypass_policy_lockout_check: NotRequired[bool]
