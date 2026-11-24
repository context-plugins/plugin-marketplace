from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1MiscRedditSubredditFlairsResponse(SdkBaseModel):
    id: Optional[str] = UNSET
    text: Optional[str] = UNSET
    css_class: Optional[str] = Field(default=UNSET, alias="cssClass")
    text_color: Optional[str] = Field(default=UNSET, alias="textColor")
    background_color: Optional[str] = Field(default=UNSET, alias="backgroundColor")
    mod_only: Optional[bool] = Field(default=UNSET, alias="modOnly")
    allowable_content: Optional[str] = Field(default=UNSET, alias="allowableContent")
    max_emojis: Optional[float] = Field(default=UNSET, alias="maxEmojis")


class ApiV1MiscRedditSubredditFlairsResponseDict(TypedDict):
    id: NotRequired[str]
    text: NotRequired[str]
    css_class: NotRequired[str]
    text_color: NotRequired[str]
    background_color: NotRequired[str]
    mod_only: NotRequired[bool]
    allowable_content: NotRequired[str]
    max_emojis: NotRequired[float]
