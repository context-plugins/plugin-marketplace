from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscFacebookRecommendationsImportRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    count: int


class ApiV1MiscFacebookRecommendationsImportRequestDict(TypedDict):
    team_id: str
    count: int
