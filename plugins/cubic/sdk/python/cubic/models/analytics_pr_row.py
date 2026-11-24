from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class AnalyticsPrRow(SdkBaseModel):
    org: str
    """GitHub owner used for the request."""

    repo: str
    """Repository name."""

    pr_number: int = Field(alias="prNumber")
    """Pull request number."""

    author: str
    """GitHub login of the pull request author."""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """Pull request creation timestamp in ISO 8601 format."""

    merged_at: RFC3339DateTime = Field(alias="mergedAt")
    """Pull request merge timestamp in ISO 8601 format."""

    lines_added: int | None = Field(alias="linesAdded")
    """Lines added in the pull request, or ``null`` when unavailable."""

    lines_deleted: int | None = Field(alias="linesDeleted")
    """Lines deleted in the pull request, or ``null`` when unavailable."""

    number_of_cubic_issues_flagged: int = Field(alias="numberOfCubicIssuesFlagged")
    """Posted cubic findings on the merged pull request, created within the requested date range."""

    number_of_cubic_issues_fixed: int = Field(alias="numberOfCubicIssuesFixed")
    """Posted findings in the requested date range with a detected code change (``aiAddressed = true``). Positive
    feedback alone does not count as a fix, and downvotes do not erase detected fixes."""

    cubic_first_reviewed_at: RFC3339DateTime = Field(alias="cubicFirstReviewedAt")
    """Timestamp of the first completed cubic review for the pull request."""

    total_ai_lines_authored: int | None = Field(alias="totalAiLinesAuthored")
    """AI-authored lines attributed to the pull request, capped at its total added and deleted lines; null when no AI
    authorship data is available."""


class AnalyticsPrRowDict(TypedDict):
    org: str
    repo: str
    pr_number: int
    author: str
    created_at: RFC3339DateTime
    merged_at: RFC3339DateTime
    lines_added: int | None
    lines_deleted: int | None
    number_of_cubic_issues_flagged: int
    number_of_cubic_issues_fixed: int
    cubic_first_reviewed_at: RFC3339DateTime
    total_ai_lines_authored: int | None
