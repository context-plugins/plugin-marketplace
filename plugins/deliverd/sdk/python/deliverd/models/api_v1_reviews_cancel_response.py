from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .agent1 import Agent1, Agent1Dict
from .enums.status_deliverd_dev_reviews_api import StatusDeliverdDevReviewsApiOrStr
from .reviewer import Reviewer, ReviewerDict
from .verdict_deliverd_dev_reviews_api import VerdictDeliverdDevReviewsApi, VerdictDeliverdDevReviewsApiDict


class ApiV1ReviewsCancelResponse(SdkBaseModel):
    callback_secret: Optional[str] = Field(default=UNSET, alias="callbackSecret")
    id: UUID
    status: StatusDeliverdDevReviewsApiOrStr
    url: str
    title: str
    instructions: str | None
    report_id: UUID | None = Field(alias="reportId")
    version_id: UUID | None = Field(alias="versionId")
    external_id: str | None = Field(alias="externalId")
    metadata: dict[str, Any]
    requested_by: str = Field(alias="requestedBy")
    required_approvals: float = Field(alias="requiredApprovals")
    reviewers: list[Reviewer]
    verdicts: list[VerdictDeliverdDevReviewsApi]
    thread_count: float = Field(alias="threadCount")
    settled_at: str | None = Field(alias="settledAt")
    expires_at: str | None = Field(alias="expiresAt")
    agent: Agent1 | None
    model: str | None
    created_at: str = Field(alias="createdAt")


class ApiV1ReviewsCancelResponseDict(TypedDict):
    callback_secret: NotRequired[str]
    id: UUID
    status: StatusDeliverdDevReviewsApiOrStr
    url: str
    title: str
    instructions: str | None
    report_id: UUID | None
    version_id: UUID | None
    external_id: str | None
    metadata: dict[str, Any]
    requested_by: str
    required_approvals: float
    reviewers: list[ReviewerDict]
    verdicts: list[VerdictDeliverdDevReviewsApiDict]
    thread_count: float
    settled_at: str | None
    expires_at: str | None
    agent: Agent1Dict | None
    model: str | None
    created_at: str
