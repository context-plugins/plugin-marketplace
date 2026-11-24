from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Kind(str, Enum):
    """The type of restriction that is being applied."""

    PUSH = "push"
    DELETE = "delete"
    FORCE = "force"
    RESTRICT_MERGES = "restrict_merges"
    REQUIRE_TASKS_TO_BE_COMPLETED = "require_tasks_to_be_completed"
    REQUIRE_APPROVALS_TO_MERGE = "require_approvals_to_merge"
    REQUIRE_REVIEW_GROUP_APPROVALS_TO_MERGE = "require_review_group_approvals_to_merge"
    REQUIRE_DEFAULT_REVIEWER_APPROVALS_TO_MERGE = "require_default_reviewer_approvals_to_merge"
    REQUIRE_NO_CHANGES_REQUESTED = "require_no_changes_requested"
    REQUIRE_PASSING_BUILDS_TO_MERGE = "require_passing_builds_to_merge"
    REQUIRE_COMMITS_BEHIND = "require_commits_behind"
    RESET_PULLREQUEST_APPROVALS_ON_CHANGE = "reset_pullrequest_approvals_on_change"
    SMART_RESET_PULLREQUEST_APPROVALS = "smart_reset_pullrequest_approvals"
    RESET_PULLREQUEST_CHANGES_REQUESTED_ON_CHANGE = "reset_pullrequest_changes_requested_on_change"
    REQUIRE_ALL_DEPENDENCIES_MERGED = "require_all_dependencies_merged"
    ENFORCE_MERGE_CHECKS = "enforce_merge_checks"
    ALLOW_AUTO_MERGE_WHEN_BUILDS_PASS = "allow_auto_merge_when_builds_pass"
    REQUIRE_ALL_COMMENTS_RESOLVED = "require_all_comments_resolved"

    __str__ = str.__str__


KindOrStr: TypeAlias = Annotated[Kind | str, open_enum_validator(Kind)]
