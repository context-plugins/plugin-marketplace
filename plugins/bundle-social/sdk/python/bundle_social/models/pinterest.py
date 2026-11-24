from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Pinterest(SdkBaseModel):
    text: OptionalNullable[str] = UNSET
    description: OptionalNullable[str] = UNSET
    board_name: str = Field(alias="boardName")
    upload_ids: OptionalNullable[list[str]] = Field(default=UNSET, alias="uploadIds")
    thumbnail: OptionalNullable[str] = UNSET
    """The URL to image uploaded on bundle.social."""

    link: OptionalNullable[str] = UNSET
    """The URL to which the Pin will link to."""

    alt_text: OptionalNullable[str] = Field(default=UNSET, alias="altText")
    """The alt text for the image. This is used by screen readers and when the image can't be loaded."""

    note: OptionalNullable[str] = UNSET
    """A note about the Pin. This is not visible to the public."""

    dominant_color: OptionalNullable[str] = Field(default=UNSET, alias="dominantColor")
    """The dominant color of the image. This is used to display the image before it's loaded."""

    is_ai_generated: bool | None = Field(default=False, alias="isAiGenerated")
    """Set to true if the Pin content was generated or modified by AI. Adds Pinterest's AI disclosure label."""


class PinterestDict(TypedDict):
    text: NotRequired[str | None]
    description: NotRequired[str | None]
    board_name: str
    upload_ids: NotRequired[list[str] | None]
    thumbnail: NotRequired[str | None]
    link: NotRequired[str | None]
    alt_text: NotRequired[str | None]
    note: NotRequired[str | None]
    dominant_color: NotRequired[str | None]
    is_ai_generated: NotRequired[bool | None]
