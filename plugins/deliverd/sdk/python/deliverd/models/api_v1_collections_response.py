from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .agent1 import Agent1, Agent1Dict
from .enums.status_deliverd_dev_collections_api import StatusDeliverdDevCollectionsApiOrStr
from .question1 import Question1, Question1Dict
from .response import Response, ResponseDict


class ApiV1CollectionsResponse(SdkBaseModel):
    callback_secret: Optional[str] = Field(default=UNSET, alias="callbackSecret")
    id: UUID
    status: StatusDeliverdDevCollectionsApiOrStr
    url: str
    title: str
    instructions: str | None
    report_id: UUID | None = Field(alias="reportId")
    external_id: str | None = Field(alias="externalId")
    metadata: dict[str, Any]
    requested_by: str = Field(alias="requestedBy")
    required_responses: float = Field(alias="requiredResponses")
    questions: list[Question1]
    responses: list[Response]
    submitted_count: float = Field(alias="submittedCount")
    asked_count: float = Field(alias="askedCount")
    settled_at: str | None = Field(alias="settledAt")
    due_at: str | None = Field(alias="dueAt")
    expires_at: str | None = Field(alias="expiresAt")
    agent: Agent1 | None
    model: str | None
    created_at: str = Field(alias="createdAt")


class ApiV1CollectionsResponseDict(TypedDict):
    callback_secret: NotRequired[str]
    id: UUID
    status: StatusDeliverdDevCollectionsApiOrStr
    url: str
    title: str
    instructions: str | None
    report_id: UUID | None
    external_id: str | None
    metadata: dict[str, Any]
    requested_by: str
    required_responses: float
    questions: list[Question1Dict]
    responses: list[ResponseDict]
    submitted_count: float
    asked_count: float
    settled_at: str | None
    due_at: str | None
    expires_at: str | None
    agent: Agent1Dict | None
    model: str | None
    created_at: str
