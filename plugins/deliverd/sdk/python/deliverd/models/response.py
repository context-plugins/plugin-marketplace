from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .answer import Answer, AnswerDict
from .enums.status1_deliverd_dev_collections_api import Status1DeliverdDevCollectionsApiOrStr


class Response(SdkBaseModel):
    respondent: str
    status: Status1DeliverdDevCollectionsApiOrStr
    submitted_at: str | None = Field(alias="submittedAt")
    answers: list[Answer]


class ResponseDict(TypedDict):
    respondent: str
    status: Status1DeliverdDevCollectionsApiOrStr
    submitted_at: str | None
    answers: list[AnswerDict]
