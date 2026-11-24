from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExecutionRequestResult(SdkBaseModel):
    """Result of an execution request submission."""

    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """Unique identifier for tracking this execution request."""

    status: Optional[str] = UNSET
    """Current status of the execution request."""


class ExecutionRequestResultDict(TypedDict):
    request_id: NotRequired[str]
    status: NotRequired[str]
