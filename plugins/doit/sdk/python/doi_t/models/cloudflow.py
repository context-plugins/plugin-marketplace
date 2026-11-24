from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.last_execution_status import LastExecutionStatusOrStr


class Cloudflow(SdkBaseModel):
    id: str
    name: str
    description: Optional[str] = UNSET
    instructions: OptionalNullable[str] = UNSET
    published: bool
    trigger_type: OptionalNullable[str] = Field(default=UNSET, alias="triggerType")
    create_time: RFC3339DateTime = Field(alias="createTime")
    update_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="updateTime")
    last_executed_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="lastExecutedTime")
    last_execution_status: OptionalNullable[LastExecutionStatusOrStr] = Field(
        default=UNSET, alias="lastExecutionStatus"
    )
    next_run: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="nextRun")
    """Next scheduled execution time. ``null`` when the CloudFlow has no active schedule."""


class CloudflowDict(TypedDict):
    id: str
    name: str
    description: NotRequired[str]
    instructions: NotRequired[str | None]
    published: bool
    trigger_type: NotRequired[str | None]
    create_time: RFC3339DateTime
    update_time: NotRequired[RFC3339DateTime | None]
    last_executed_time: NotRequired[RFC3339DateTime | None]
    last_execution_status: NotRequired[LastExecutionStatusOrStr | None]
    next_run: NotRequired[RFC3339DateTime | None]
