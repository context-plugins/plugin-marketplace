from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .account import Account, AccountDict
from .enums.branch_match_kind import BranchMatchKindOrStr
from .enums.branch_type import BranchTypeOrStr
from .enums.kind import KindOrStr
from .group import Group, GroupDict
from .links import Links, LinksDict


class Branchrestriction(SdkBaseModel):
    """All Of object, branchrestriction."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    links: Optional[Links] = UNSET
    id: Optional[int] = UNSET
    """The branch restriction status' id."""

    kind: KindOrStr
    """The type of restriction that is being applied."""

    branch_match_kind: BranchMatchKindOrStr
    """Indicates how the restriction is matched against a branch. The default is ``glob``."""

    branch_type: Optional[BranchTypeOrStr] = UNSET
    """Apply the restriction to branches of this type. Active when ``branch_match_kind`` is ``branching_model``. The
    branch type will be calculated using the branching model configured for the repository."""

    pattern: str
    """Apply the restriction to branches that match this pattern. Active when ``branch_match_kind`` is ``glob``. Will be
    empty when ``branch_match_kind`` is ``branching_model``."""

    value: Optional[int] = UNSET
    """Value with kind-specific semantics:

    * ``require_approvals_to_merge`` uses it to require a minimum number of approvals on a PR.

    * ``require_default_reviewer_approvals_to_merge`` uses it to require a minimum number of approvals from default
        reviewers on a PR.

    * ``require_passing_builds_to_merge`` uses it to require a minimum number of passing builds.

    * ``require_commits_behind`` uses it to require the current branch is up to a maximum number of commits behind it
        destination."""

    users: Optional[list[Account]] = UNSET
    groups: Optional[list[Group]] = UNSET


class BranchrestrictionDict(TypedDict):
    type_: NotRequired[str]
    links: NotRequired[LinksDict]
    id: NotRequired[int]
    kind: KindOrStr
    branch_match_kind: BranchMatchKindOrStr
    branch_type: NotRequired[BranchTypeOrStr]
    pattern: str
    value: NotRequired[int]
    users: NotRequired[list[AccountDict]]
    groups: NotRequired[list[GroupDict]]
