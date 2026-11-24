from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteChapCredentialsOutput(SdkBaseModel):
    target_arn: Optional[str] = Field(default=UNSET, alias="TargetARN")
    """The Amazon Resource Name (ARN) of the target."""

    initiator_name: Optional[str] = Field(default=UNSET, alias="InitiatorName")
    """The iSCSI initiator that connects to the target."""


class DeleteChapCredentialsOutputDict(TypedDict):
    target_arn: NotRequired[str]
    initiator_name: NotRequired[str]
