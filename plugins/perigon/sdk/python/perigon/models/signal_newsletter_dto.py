from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .signal_article_partial_dto import SignalArticlePartialDto, SignalArticlePartialDtoDict
from .signal_newsletter_story_partial_dto import SignalNewsletterStoryPartialDto, SignalNewsletterStoryPartialDtoDict
from .x_post import XPost, XPostDict


class SignalNewsletterDto(SdkBaseModel):
    """Newsletters returned for the requested page."""

    uuid: OptionalNullable[UUID] = UNSET
    """Unique identifier for the newsletter."""

    created_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    """Date and time the newsletter was created, in ISO 8601 format."""

    updated_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    """Date and time the newsletter was last updated, in ISO 8601 format."""

    title: OptionalNullable[str] = UNSET
    """Generated title of the newsletter."""

    content: OptionalNullable[str] = UNSET
    """Generated newsletter content."""

    articles: OptionalNullable[dict[str, SignalArticlePartialDto]] = UNSET
    """Article details keyed by article ID for content cited in the newsletter."""

    stories: OptionalNullable[dict[str, SignalNewsletterStoryPartialDto]] = UNSET
    """Story details keyed by story identifier for stories cited in the newsletter."""

    x_posts: OptionalNullable[dict[str, XPost]] = Field(default=UNSET, alias="xPosts")


class SignalNewsletterDtoDict(TypedDict):
    uuid: NotRequired[UUID | None]
    created_at: NotRequired[RFC3339DateTime | None]
    updated_at: NotRequired[RFC3339DateTime | None]
    title: NotRequired[str | None]
    content: NotRequired[str | None]
    articles: NotRequired[dict[str, SignalArticlePartialDtoDict] | None]
    stories: NotRequired[dict[str, SignalNewsletterStoryPartialDtoDict] | None]
    x_posts: NotRequired[dict[str, XPostDict] | None]
