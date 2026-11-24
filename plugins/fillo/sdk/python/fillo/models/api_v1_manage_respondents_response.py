from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .respondent import Respondent, RespondentDict


class ApiV1ManageRespondentsResponse(SdkBaseModel):
    data: list[Respondent]
    next_cursor: str | None = Field(alias="nextCursor")


class ApiV1ManageRespondentsResponseDict(TypedDict):
    data: list[RespondentDict]
    next_cursor: str | None
