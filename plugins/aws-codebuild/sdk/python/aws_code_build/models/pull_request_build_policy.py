from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.approver_role import ApproverRoleOrStr
from .enums.requires_comment_approval import RequiresCommentApprovalOrStr


class PullRequestBuildPolicy(SdkBaseModel):
    requires_comment_approval: RequiresCommentApprovalOrStr = Field(alias="requiresCommentApproval")
    """Specifies when comment-based approval is required before triggering a build on pull requests. This setting
    determines whether builds run automatically or require explicit approval through comments. DISABLED: Builds trigger
    automatically without requiring comment approval ALL_PULL_REQUESTS: All pull requests require comment approval
    before builds execute (unless contributor is one of the approver roles) FORK_PULL_REQUESTS: Only pull requests from
    forked repositories require comment approval (unless contributor is one of the approver roles)"""

    approver_roles: Optional[list[ApproverRoleOrStr]] = Field(default=UNSET, alias="approverRoles")
    """List of repository roles that have approval privileges for pull request builds when comment approval is required.
    Only users with these roles can provide valid comment approvals. If a pull request contributor is one of these
    roles, their pull request builds will trigger automatically. This field is only applicable when
    requiresCommentApproval is not DISABLED."""


class PullRequestBuildPolicyDict(TypedDict):
    requires_comment_approval: RequiresCommentApprovalOrStr
    approver_roles: NotRequired[list[ApproverRoleOrStr]]
