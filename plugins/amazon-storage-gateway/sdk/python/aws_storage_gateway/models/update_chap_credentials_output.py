from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateChapCredentialsOutput(SdkBaseModel):
    target_arn: Optional[str] = Field(default=UNSET, alias="TargetARN")
    """The Amazon Resource Name (ARN) of the target. This is the same target specified in the request."""

    initiator_name: Optional[str] = Field(default=UNSET, alias="InitiatorName")
    """The iSCSI initiator that connects to the target. This is the same initiator name specified in the request."""


class UpdateChapCredentialsOutputDict(TypedDict):
    target_arn: NotRequired[str]
    initiator_name: NotRequired[str]
