from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.status37 import Status37OrStr
from .error import Error, ErrorDict
from .input import Input, InputDict


class Step32(SdkBaseModel):
    id: str
    execution_id: str = Field(alias="executionId")
    step_id: OptionalNullable[str] = Field(default=UNSET, alias="stepId")
    status: Status37OrStr
    attempt_count: float = Field(alias="attemptCount")
    input: Optional[Input] = UNSET
    output: Optional[dict[str, Any]] = UNSET
    error: OptionalNullable[Error] = UNSET
    started_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="startedAt")
    completed_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="completedAt")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")


class Step32Dict(TypedDict):
    id: str
    execution_id: str
    step_id: NotRequired[str | None]
    status: Status37OrStr
    attempt_count: float
    input: NotRequired[InputDict]
    output: NotRequired[dict[str, Any]]
    error: NotRequired[ErrorDict | None]
    started_at: NotRequired[RFC3339DateTime | None]
    completed_at: NotRequired[RFC3339DateTime | None]
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
