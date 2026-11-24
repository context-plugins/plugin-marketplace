from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel


class SourceGroupDto(SdkBaseModel):
    """Named group of news source domains for filtering search and monitors."""

    id: OptionalNullable[int] = UNSET
    """Numeric identifier for the source group."""

    created_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    """Date and time the source group was created, in ISO 8601 format."""

    updated_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    """Date and time the source group was last updated, in ISO 8601 format."""

    name: OptionalNullable[str] = UNSET
    """Unique slug name for the source group."""

    display_name: OptionalNullable[str] = Field(default=UNSET, alias="displayName")
    """Human-readable display name."""

    description: OptionalNullable[str] = UNSET
    """Optional description of the source group."""

    domains: OptionalNullable[list[str]] = UNSET
    """Publisher domains included in the group."""

    organization_id: OptionalNullable[int] = Field(default=UNSET, alias="organizationId")
    """Owning organization ID when the source group is private."""

    visible: OptionalNullable[bool] = UNSET
    """Whether the source group is publicly visible."""


class SourceGroupDtoDict(TypedDict):
    id: NotRequired[int | None]
    created_at: NotRequired[RFC3339DateTime | None]
    updated_at: NotRequired[RFC3339DateTime | None]
    name: NotRequired[str | None]
    display_name: NotRequired[str | None]
    description: NotRequired[str | None]
    domains: NotRequired[list[str] | None]
    organization_id: NotRequired[int | None]
    visible: NotRequired[bool | None]
