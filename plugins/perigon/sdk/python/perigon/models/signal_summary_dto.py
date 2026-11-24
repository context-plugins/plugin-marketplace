from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel


class SignalSummaryDto(SdkBaseModel):
    """Summaries returned for the requested page."""

    text: OptionalNullable[str] = UNSET
    """AI-generated summary of the monitor's matching content."""

    created_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    """Date and time the summary was created, in ISO 8601 format."""

    updated_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    """Date and time the summary was last updated, in ISO 8601 format."""


class SignalSummaryDtoDict(TypedDict):
    text: NotRequired[str | None]
    created_at: NotRequired[RFC3339DateTime | None]
    updated_at: NotRequired[RFC3339DateTime | None]
