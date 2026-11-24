from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel


class Doc(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: UUID
    """The public id of the Doc"""

    title: str | None
    """The Doc's title"""

    content_markdown: str | None
    """The Doc's content in Markdown format (converted from HTML storage)."""

    content_html: OptionalNullable[str] = UNSET
    """The Doc's content in HTML format (as stored in S3). Only included when include_html=true query parameter is
    provided."""

    app_url: str
    """The Shortcut application url for the Doc"""

    created_at: RFC3339DateTime
    """The time/date the Doc was created"""

    updated_at: RFC3339DateTime
    """The time/date the Doc was last updated"""

    archived: bool
    """Whether the Doc is archived"""


class DocDict(TypedDict):
    id: UUID
    title: str | None
    content_markdown: str | None
    content_html: NotRequired[str | None]
    app_url: str
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    archived: bool
