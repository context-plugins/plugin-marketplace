from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RequiresCommentApproval(str, Enum):
    """Specifies when comment-based approval is required before triggering a build on pull requests. This setting
    determines whether builds run automatically or require explicit approval through comments. DISABLED: Builds trigger
    automatically without requiring comment approval ALL_PULL_REQUESTS: All pull requests require comment approval
    before builds execute (unless contributor is one of the approver roles) FORK_PULL_REQUESTS: Only pull requests from
    forked repositories require comment approval (unless contributor is one of the approver roles)"""

    DISABLED = "DISABLED"
    ALL_PULL_REQUESTS = "ALL_PULL_REQUESTS"
    FORK_PULL_REQUESTS = "FORK_PULL_REQUESTS"

    __str__ = str.__str__


RequiresCommentApprovalOrStr: TypeAlias = Annotated[
    RequiresCommentApproval | str, open_enum_validator(RequiresCommentApproval)
]
