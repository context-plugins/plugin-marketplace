from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class StoryArticleRef(SdkBaseModel):
    uid: str
    title: str
    time_published: RFC3339DateTime


class StoryArticleRefDict(TypedDict):
    uid: str
    title: str
    time_published: RFC3339DateTime
