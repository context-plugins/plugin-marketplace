from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .form_summary import FormSummary, FormSummaryDict


class ApiV1ManageFormsResponse(SdkBaseModel):
    data: list[FormSummary]
    next_cursor: str | None = Field(alias="nextCursor")


class ApiV1ManageFormsResponseDict(TypedDict):
    data: list[FormSummaryDict]
    next_cursor: str | None
