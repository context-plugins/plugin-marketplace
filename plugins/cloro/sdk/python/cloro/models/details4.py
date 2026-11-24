from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Details4(SdkBaseModel):
    field: Optional[str] = UNSET
    value: Optional[str] = UNSET
    task_id: Optional[str] = Field(default=UNSET, alias="taskId")
    """ID of the existing task that holds this idempotencyKey. Poll it with GET /v1/async/task/{taskId}."""


class Details4Dict(TypedDict):
    field: NotRequired[str]
    value: NotRequired[str]
    task_id: NotRequired[str]
