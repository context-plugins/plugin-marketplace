from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .key_point import KeyPoint, KeyPointDict
from .question import Question, QuestionDict


class StoryHistoryRecord(SdkBaseModel):
    """History records returned for the requested page."""

    cluster_id: OptionalNullable[str] = Field(default=UNSET, alias="clusterId")
    """Unique identifier of the story associated with this history record."""

    created_at: OptionalNullable[str] = Field(default=UNSET, alias="createdAt")
    """Date and time the history record was created, in ISO 8601 format."""

    name: OptionalNullable[str] = UNSET
    """Story name captured in this history record, when available."""

    triggered_at: OptionalNullable[str] = Field(default=UNSET, alias="triggeredAt")
    """Date and time the story refresh that produced this record was triggered, in ISO 8601 format."""

    summary: OptionalNullable[str] = UNSET
    """Story summary captured in this history record."""

    short_summary: OptionalNullable[str] = Field(default=UNSET, alias="shortSummary")
    """Short story summary captured in this history record, when available."""

    changelog: OptionalNullable[str] = UNSET
    """Description of changes from the previous story version, when available."""

    key_points: OptionalNullable[list[KeyPoint]] = Field(default=UNSET, alias="keyPoints")
    """Key points captured for this version of the story."""

    questions: OptionalNullable[list[Question]] = UNSET
    """Questions and answers generated for this version of the story."""


class StoryHistoryRecordDict(TypedDict):
    cluster_id: NotRequired[str | None]
    created_at: NotRequired[str | None]
    name: NotRequired[str | None]
    triggered_at: NotRequired[str | None]
    summary: NotRequired[str | None]
    short_summary: NotRequired[str | None]
    changelog: NotRequired[str | None]
    key_points: NotRequired[list[KeyPointDict] | None]
    questions: NotRequired[list[QuestionDict] | None]
