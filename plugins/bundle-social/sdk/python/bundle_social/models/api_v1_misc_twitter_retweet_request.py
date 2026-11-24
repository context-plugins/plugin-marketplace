from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscTwitterRetweetRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    tweet_id: str = Field(alias="tweetId")
    """The numeric ID of the X post to repost (the last segment of its URL)"""


class ApiV1MiscTwitterRetweetRequestDict(TypedDict):
    team_id: str
    tweet_id: str
