from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Source(SdkBaseModel):
    """Sources used to populate the field."""

    article_id: OptionalNullable[str] = Field(default=UNSET, alias="articleId")
    """Perigon article ID of the supporting source, when available."""

    url: OptionalNullable[str] = UNSET
    """URL of the supporting source, when available."""

    title: OptionalNullable[str] = UNSET
    """Title of the supporting source, when available."""


class SourceDict(TypedDict):
    article_id: NotRequired[str | None]
    url: NotRequired[str | None]
    title: NotRequired[str | None]
