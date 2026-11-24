from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateEndpointResponse(SdkBaseModel):
    desired_model_arn: Optional[str] = Field(default=UNSET, alias="DesiredModelArn")
    """The Amazon Resource Number (ARN) of the new model."""


class UpdateEndpointResponseDict(TypedDict):
    desired_model_arn: NotRequired[str]
