from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .runtime_lex_button import RuntimeLexButton, RuntimeLexButtonDict


class GenericAttachment(SdkBaseModel):
    title: Optional[str] = UNSET
    """The title of the option."""

    sub_title: Optional[str] = Field(default=UNSET, alias="subTitle")
    """The subtitle shown below the title."""

    attachment_link_url: Optional[str] = Field(default=UNSET, alias="attachmentLinkUrl")
    """The URL of an attachment to the response card."""

    image_url: Optional[str] = Field(default=UNSET, alias="imageUrl")
    """The URL of an image that is displayed to the user."""

    buttons: Optional[list[RuntimeLexButton]] = UNSET
    """The list of options to show to the user."""


class GenericAttachmentDict(TypedDict):
    title: NotRequired[str]
    sub_title: NotRequired[str]
    attachment_link_url: NotRequired[str]
    image_url: NotRequired[str]
    buttons: NotRequired[list[RuntimeLexButtonDict]]
