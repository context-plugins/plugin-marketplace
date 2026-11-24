from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .button import Button, ButtonDict


class ImageResponseCard(SdkBaseModel):
    title: str
    """The title to display on the response card. The format of the title is determined by the platform displaying the
    response card."""

    subtitle: Optional[str] = UNSET
    """The subtitle to display on the response card. The format of the subtitle is determined by the platform displaying
    the response card."""

    image_url: Optional[str] = Field(default=UNSET, alias="imageUrl")
    """The URL of an image to display on the response card. The image URL must be publicly available so that the
    platform displaying the response card has access to the image."""

    buttons: Optional[list[Button]] = UNSET
    """A list of buttons that should be displayed on the response card. The arrangement of the buttons is determined by
    the platform that displays the button."""


class ImageResponseCardDict(TypedDict):
    title: str
    subtitle: NotRequired[str]
    image_url: NotRequired[str]
    buttons: NotRequired[list[ButtonDict]]
