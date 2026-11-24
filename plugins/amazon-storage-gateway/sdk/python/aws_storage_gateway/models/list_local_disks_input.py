from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ListLocalDisksInput(SdkBaseModel):
    gateway_arn: str = Field(alias="GatewayARN")


class ListLocalDisksInputDict(TypedDict):
    gateway_arn: str
