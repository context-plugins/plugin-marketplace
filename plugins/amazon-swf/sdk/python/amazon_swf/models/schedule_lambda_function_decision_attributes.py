from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ScheduleLambdaFunctionDecisionAttributes(SdkBaseModel):
    id: str
    """A string that identifies the Lambda function execution in the event history."""

    name: str
    """The name, or ARN, of the Lambda function to schedule."""

    control: Optional[str] = UNSET
    """The data attached to the event that the decider can use in subsequent workflow tasks. This data isn't sent to the
    Lambda task."""

    input: Optional[str] = UNSET
    """The optional input data to be supplied to the Lambda function."""

    start_to_close_timeout: Optional[str] = Field(default=UNSET, alias="startToCloseTimeout")
    """The timeout value, in seconds, after which the Lambda function is considered to be failed once it has started.
    This can be any integer from 1-900 (1s-15m). If no value is supplied, then a default value of 900s is assumed."""


class ScheduleLambdaFunctionDecisionAttributesDict(TypedDict):
    id: str
    name: str
    control: NotRequired[str]
    input: NotRequired[str]
    start_to_close_timeout: NotRequired[str]
