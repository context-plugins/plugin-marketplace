from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StartFlywheelIterationRequest(SdkBaseModel):
    flywheel_arn: str = Field(alias="FlywheelArn")
    """The ARN of the flywheel."""

    client_request_token: Optional[str] = Field(default=UNSET, alias="ClientRequestToken")
    """A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates
    one."""


class StartFlywheelIterationRequestDict(TypedDict):
    flywheel_arn: str
    client_request_token: NotRequired[str]
