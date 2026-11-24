from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.fillbot_status import FillbotStatusOrStr
from .fillbot_metadata import FillbotMetadata, FillbotMetadataDict
from .matched_entity_data import MatchedEntityData, MatchedEntityDataDict
from .signal_article_partial_dto import SignalArticlePartialDto, SignalArticlePartialDtoDict
from .x_post import XPost, XPostDict


class SignalEventDto(SdkBaseModel):
    """Events returned for the requested page."""

    uuid: OptionalNullable[UUID] = UNSET
    """Unique identifier for the monitor event."""

    created_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    """Date and time the event was created, in ISO 8601 format."""

    updated_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    """Date and time the event was last updated, in ISO 8601 format."""

    event_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="eventDate")
    """Date and time the detected event occurred, in ISO 8601 format when available."""

    event_type: OptionalNullable[str] = Field(default=UNSET, alias="eventType")
    """Detected event category produced by the monitor."""

    data: OptionalNullable[dict[str, Any]] = UNSET
    """Structured event fields defined by the monitor's data schema."""

    related_article_ids: OptionalNullable[list[str]] = Field(default=UNSET, alias="relatedArticleIds")
    """Perigon article IDs related to the event."""

    articles: OptionalNullable[dict[str, SignalArticlePartialDto]] = UNSET
    """Article details keyed by article ID for articles related to the event."""

    entities: OptionalNullable[list[MatchedEntityData]] = UNSET
    """Entities matched in the content that produced the event."""

    summary: OptionalNullable[str] = UNSET
    """AI-generated summary of the event, when available."""

    fillbot_metadata: Optional[FillbotMetadata] = Field(default=UNSET, alias="fillbotMetadata")
    fillbot_schedule_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="fillbotScheduleAt")
    """Date and time enrichment is scheduled to run, in ISO 8601 format."""

    fillbot_last_run_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="fillbotLastRunAt")
    """Date and time enrichment last ran, in ISO 8601 format."""

    fillbot_status: OptionalNullable[FillbotStatusOrStr] = Field(default=UNSET, alias="fillbotStatus")
    """Current event enrichment status. Accepts PENDING, IN_PROGRESS, COMPLETE, or EXHAUSTED."""

    duplicate: OptionalNullable[bool] = UNSET
    x_posts: OptionalNullable[list[XPost]] = Field(default=UNSET, alias="xPosts")


class SignalEventDtoDict(TypedDict):
    uuid: NotRequired[UUID | None]
    created_at: NotRequired[RFC3339DateTime | None]
    updated_at: NotRequired[RFC3339DateTime | None]
    event_date: NotRequired[RFC3339DateTime | None]
    event_type: NotRequired[str | None]
    data: NotRequired[dict[str, Any] | None]
    related_article_ids: NotRequired[list[str] | None]
    articles: NotRequired[dict[str, SignalArticlePartialDtoDict] | None]
    entities: NotRequired[list[MatchedEntityDataDict] | None]
    summary: NotRequired[str | None]
    fillbot_metadata: NotRequired[FillbotMetadataDict]
    fillbot_schedule_at: NotRequired[RFC3339DateTime | None]
    fillbot_last_run_at: NotRequired[RFC3339DateTime | None]
    fillbot_status: NotRequired[FillbotStatusOrStr | None]
    duplicate: NotRequired[bool | None]
    x_posts: NotRequired[list[XPostDict] | None]
