from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LambdaConflictHandlerConfig(SdkBaseModel):
    lambda_conflict_handler_arn: Optional[str] = Field(default=UNSET, alias="lambdaConflictHandlerArn")
    """The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler."""


class LambdaConflictHandlerConfigDict(TypedDict):
    lambda_conflict_handler_arn: NotRequired[str]
