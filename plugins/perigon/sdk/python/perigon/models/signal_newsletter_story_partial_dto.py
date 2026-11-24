from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel


class SignalNewsletterStoryPartialDto(SdkBaseModel):
    """Story details keyed by story identifier for stories cited in the newsletter."""

    slug: OptionalNullable[str] = UNSET
    """URL-safe identifier for the story."""

    url: OptionalNullable[str] = UNSET
    """URL of the story."""

    title: OptionalNullable[str] = UNSET
    """Story headline."""

    source_favicon: OptionalNullable[str] = Field(default=UNSET, alias="sourceFavicon")
    """URL of the source favicon used for the story."""

    updated_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    """Date and time the story was last updated, in ISO 8601 format."""

    created_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    """Date and time the story was created, in ISO 8601 format."""


class SignalNewsletterStoryPartialDtoDict(TypedDict):
    slug: NotRequired[str | None]
    url: NotRequired[str | None]
    title: NotRequired[str | None]
    source_favicon: NotRequired[str | None]
    updated_at: NotRequired[RFC3339DateTime | None]
    created_at: NotRequired[RFC3339DateTime | None]
