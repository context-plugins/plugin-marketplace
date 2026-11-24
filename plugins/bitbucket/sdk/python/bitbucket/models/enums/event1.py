from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Event1(str, Enum):
    """The event identifier."""

    ISSUE_COMMENT_CREATED = "issue:comment_created"
    ISSUE_CREATED = "issue:created"
    ISSUE_UPDATED = "issue:updated"
    PIPELINE_SPAN_CREATED = "pipeline:span_created"
    PROJECT_UPDATED = "project:updated"
    PULLREQUEST_APPROVED = "pullrequest:approved"
    PULLREQUEST_CHANGES_REQUEST_CREATED = "pullrequest:changes_request_created"
    PULLREQUEST_CHANGES_REQUEST_REMOVED = "pullrequest:changes_request_removed"
    PULLREQUEST_COMMENT_CREATED = "pullrequest:comment_created"
    PULLREQUEST_COMMENT_DELETED = "pullrequest:comment_deleted"
    PULLREQUEST_COMMENT_REOPENED = "pullrequest:comment_reopened"
    PULLREQUEST_COMMENT_RESOLVED = "pullrequest:comment_resolved"
    PULLREQUEST_COMMENT_UPDATED = "pullrequest:comment_updated"
    PULLREQUEST_CREATED = "pullrequest:created"
    PULLREQUEST_FULFILLED = "pullrequest:fulfilled"
    PULLREQUEST_PUSH = "pullrequest:push"
    PULLREQUEST_REJECTED = "pullrequest:rejected"
    PULLREQUEST_UNAPPROVED = "pullrequest:unapproved"
    PULLREQUEST_UPDATED = "pullrequest:updated"
    REPO_COMMIT_COMMENT_CREATED = "repo:commit_comment_created"
    REPO_COMMIT_STATUS_CREATED = "repo:commit_status_created"
    REPO_COMMIT_STATUS_UPDATED = "repo:commit_status_updated"
    REPO_CREATED = "repo:created"
    REPO_DELETED = "repo:deleted"
    REPO_FORK = "repo:fork"
    REPO_IMPORTED = "repo:imported"
    REPO_PUSH = "repo:push"
    REPO_TRANSFER = "repo:transfer"
    REPO_UPDATED = "repo:updated"

    __str__ = str.__str__


Event1OrStr: TypeAlias = Annotated[Event1 | str, open_enum_validator(Event1)]
