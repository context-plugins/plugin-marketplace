from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1PostHistoryImportRetryRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")


class ApiV1PostHistoryImportRetryRequestDict(TypedDict):
    team_id: str
