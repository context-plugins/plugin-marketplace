from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class SignalArticlePartialDto(SdkBaseModel):
    """Article details keyed by article ID for articles related to the event."""

    title: OptionalNullable[str] = UNSET
    """Article headline."""

    url: OptionalNullable[str] = UNSET
    """Canonical URL of the article."""

    domain: OptionalNullable[str] = UNSET
    """Publisher domain for the article."""

    pub_date: OptionalNullable[str] = Field(default=UNSET, alias="pubDate")
    """Article publication date supplied with the monitor result."""

    source_favicon: OptionalNullable[str] = Field(default=UNSET, alias="sourceFavicon")
    """URL of the publisher's favicon."""

    highlights: OptionalNullable[dict[str, Any]] = UNSET
    """Matched text snippets grouped by article field."""


class SignalArticlePartialDtoDict(TypedDict):
    title: NotRequired[str | None]
    url: NotRequired[str | None]
    domain: NotRequired[str | None]
    pub_date: NotRequired[str | None]
    source_favicon: NotRequired[str | None]
    highlights: NotRequired[dict[str, Any] | None]
