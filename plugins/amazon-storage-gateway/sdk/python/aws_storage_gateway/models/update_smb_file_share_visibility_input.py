from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UpdateSmbFileShareVisibilityInput(SdkBaseModel):
    gateway_arn: str = Field(alias="GatewayARN")
    file_shares_visible: bool = Field(alias="FileSharesVisible")
    """The shares on this gateway appear when listing shares."""


class UpdateSmbFileShareVisibilityInputDict(TypedDict):
    gateway_arn: str
    file_shares_visible: bool
