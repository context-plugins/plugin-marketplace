from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr


class RunSummary(SdkBaseModel):
    id: UUID
    task: str
    title: str
    model: str
    model_params: Optional[Any] = Field(default=UNSET, alias="modelParams")
    context_limit: int = Field(alias="contextLimit")
    status: StatusOrStr
    result: str
    output: Optional[Any] = UNSET
    output_schema: Optional[Any] = Field(default=UNSET, alias="outputSchema")
    error: str
    session_id: UUID = Field(alias="sessionId")
    workspace_id: UUID = Field(alias="workspaceId")
    attached_file_ids: Optional[list[UUID]] = Field(default=UNSET, alias="attachedFileIds")
    judgement: Optional[Any] = UNSET
    total_input_tokens: int = Field(alias="totalInputTokens")
    total_output_tokens: int = Field(alias="totalOutputTokens")
    total_cost_usd: str = Field(alias="totalCostUsd")
    created_at: RFC3339DateTime = Field(alias="createdAt")
    updated_at: RFC3339DateTime = Field(alias="updatedAt")


class RunSummaryDict(TypedDict):
    id: UUID
    task: str
    title: str
    model: str
    model_params: NotRequired[Any]
    context_limit: int
    status: StatusOrStr
    result: str
    output: NotRequired[Any]
    output_schema: NotRequired[Any]
    error: str
    session_id: UUID
    workspace_id: UUID
    attached_file_ids: NotRequired[list[UUID]]
    judgement: NotRequired[Any]
    total_input_tokens: int
    total_output_tokens: int
    total_cost_usd: str
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
