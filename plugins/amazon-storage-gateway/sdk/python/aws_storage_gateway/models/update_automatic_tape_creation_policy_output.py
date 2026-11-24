from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateAutomaticTapeCreationPolicyOutput(SdkBaseModel):
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")


class UpdateAutomaticTapeCreationPolicyOutputDict(TypedDict):
    gateway_arn: NotRequired[str]
