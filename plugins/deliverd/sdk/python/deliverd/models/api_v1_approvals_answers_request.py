from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ApprovalsAnswersRequest(SdkBaseModel):
    question_id: UUID = Field(alias="questionId")
    answer: str


class ApiV1ApprovalsAnswersRequestDict(TypedDict):
    question_id: UUID
    answer: str
