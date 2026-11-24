from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1PostHistoryImportPostsRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    post_ids: list[str] = Field(alias="postIds")


class ApiV1PostHistoryImportPostsRequestDict(TypedDict):
    team_id: str
    post_ids: list[str]
