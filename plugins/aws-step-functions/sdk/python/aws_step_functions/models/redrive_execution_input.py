from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RedriveExecutionInput(SdkBaseModel):
    execution_arn: str = Field(alias="executionArn")
    """The Amazon Resource Name (ARN) of the execution to be redriven."""

    client_token: Optional[str] = Field(default=UNSET, alias="clientToken")
    """A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t
    specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the
    request to ensure idempotency. The API will return idempotent responses for the last 10 client tokens used to
    successfully redrive the execution. These client tokens are valid for up to 15 minutes after they are first used."""


class RedriveExecutionInputDict(TypedDict):
    execution_arn: str
    client_token: NotRequired[str]
