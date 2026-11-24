from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict


class ApiV1MiscLinkedinMentionsBuilderRequest(SdkBaseModel):
    text: str = ""
    tags: Optional[list[TagModel]] = UNSET


class ApiV1MiscLinkedinMentionsBuilderRequestDict(TypedDict):
    text: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
