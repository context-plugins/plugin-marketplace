from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Instagram2(SdkBaseModel):
    id: OptionalNullable[str] = UNSET
    permalink: OptionalNullable[str] = UNSET
    thumbnail: OptionalNullable[str] = UNSET
    creation_id: OptionalNullable[str] = Field(default=UNSET, alias="creationId")
    """Media container id; lets a retry detect a container Meta already published."""

    skipped_tags: OptionalNullable[list[str]] = Field(default=UNSET, alias="skippedTags")
    """Tagged users or collaborators Instagram rejected; the post was published without them."""

    skipped_location_id: OptionalNullable[str] = Field(default=UNSET, alias="skippedLocationId")
    """Location page id Instagram rejected; the post was published without a location."""


class Instagram2Dict(TypedDict):
    id: NotRequired[str | None]
    permalink: NotRequired[str | None]
    thumbnail: NotRequired[str | None]
    creation_id: NotRequired[str | None]
    skipped_tags: NotRequired[list[str] | None]
    skipped_location_id: NotRequired[str | None]
