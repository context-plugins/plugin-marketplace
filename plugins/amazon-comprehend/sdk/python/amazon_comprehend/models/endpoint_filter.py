from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status8 import Status8OrStr


class EndpointFilter(SdkBaseModel):
    model_arn: Optional[str] = Field(default=UNSET, alias="ModelArn")
    """The Amazon Resource Number (ARN) of the model to which the endpoint is attached."""

    status: Optional[Status8OrStr] = Field(default=UNSET, alias="Status")
    """Specifies the status of the endpoint being returned. Possible values are: Creating, Ready, Updating, Deleting,
    Failed."""

    creation_time_before: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTimeBefore")
    """Specifies a date before which the returned endpoint or endpoints were created."""

    creation_time_after: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTimeAfter")
    """Specifies a date after which the returned endpoint or endpoints were created."""


class EndpointFilterDict(TypedDict):
    model_arn: NotRequired[str]
    status: NotRequired[Status8OrStr]
    creation_time_before: NotRequired[RFC3339DateTime]
    creation_time_after: NotRequired[RFC3339DateTime]
