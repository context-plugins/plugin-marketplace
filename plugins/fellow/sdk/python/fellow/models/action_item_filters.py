from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.scope import ScopeOrStr


class ActionItemFilters(SdkBaseModel):
    created_at_start: OptionalNullable[str] = UNSET
    """Only return action items created at or after this date. Accepts YYYY-MM-DD or an ISO datetime, and is inclusive.
    A value without a time means midnight UTC, so an end bound of 2024-01-05 excludes everything later that day."""

    created_at_end: OptionalNullable[str] = UNSET
    """Only return action items created at or before this date. Accepts YYYY-MM-DD or an ISO datetime, and is inclusive.
    A value without a time means midnight UTC, so an end bound of 2024-01-05 excludes everything later that day."""

    updated_at_start: OptionalNullable[str] = UNSET
    """Only return action items updated at or after this date. Accepts YYYY-MM-DD or an ISO datetime, and is inclusive.
    A value without a time means midnight UTC, so an end bound of 2024-01-05 excludes everything later that day. Whether
    updated_at moves depends on where the change was made. Edits in the note itself, including its text, completion,
    assignees and due date, all bump updated_at. An assignee or due date changed outside the note, such as from the
    action items list, is written to a separate record and leaves updated_at unchanged, so this filter does not pick
    that item up."""

    updated_at_end: OptionalNullable[str] = UNSET
    """Only return action items updated at or before this date. Accepts YYYY-MM-DD or an ISO datetime, and is inclusive.
    A value without a time means midnight UTC, so an end bound of 2024-01-05 excludes everything later that day. Whether
    updated_at moves depends on where the change was made. Edits in the note itself, including its text, completion,
    assignees and due date, all bump updated_at. An assignee or due date changed outside the note, such as from the
    action items list, is written to a separate record and leaves updated_at unchanged, so this filter does not pick
    that item up."""

    completed: OptionalNullable[bool] = UNSET
    archived: OptionalNullable[bool] = UNSET
    ai_detected: OptionalNullable[bool] = UNSET
    ai_suggestion_accepted_by_user: OptionalNullable[bool] = UNSET
    scope: OptionalNullable[ScopeOrStr] = UNSET


class ActionItemFiltersDict(TypedDict):
    created_at_start: NotRequired[str | None]
    created_at_end: NotRequired[str | None]
    updated_at_start: NotRequired[str | None]
    updated_at_end: NotRequired[str | None]
    completed: NotRequired[bool | None]
    archived: NotRequired[bool | None]
    ai_detected: NotRequired[bool | None]
    ai_suggestion_accepted_by_user: NotRequired[bool | None]
    scope: NotRequired[ScopeOrStr | None]
