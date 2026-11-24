from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.markup import MarkupOrStr


class TitleBitbucketPullrequestsApi(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    raw: Optional[str] = UNSET
    """The text as it was typed by a user."""

    markup: Optional[MarkupOrStr] = UNSET
    """The type of markup language the raw content is to be interpreted in."""

    html: Optional[str] = UNSET
    """The user's content rendered as HTML."""


class TitleBitbucketPullrequestsApiDict(TypedDict):
    raw: NotRequired[str]
    markup: NotRequired[MarkupOrStr]
    html: NotRequired[str]
