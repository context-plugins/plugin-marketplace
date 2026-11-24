from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StopExecutionInput(SdkBaseModel):
    execution_arn: str = Field(alias="executionArn")
    """The Amazon Resource Name (ARN) of the execution to stop."""

    error: Optional[str] = UNSET
    """The error code of the failure."""

    cause: Optional[str] = UNSET
    """A more detailed explanation of the cause of the failure."""


class StopExecutionInputDict(TypedDict):
    execution_arn: str
    error: NotRequired[str]
    cause: NotRequired[str]
