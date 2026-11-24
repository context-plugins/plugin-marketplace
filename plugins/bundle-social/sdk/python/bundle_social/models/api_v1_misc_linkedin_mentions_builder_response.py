from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscLinkedinMentionsBuilderResponse(SdkBaseModel):
    commentary: str


class ApiV1MiscLinkedinMentionsBuilderResponseDict(TypedDict):
    commentary: str
