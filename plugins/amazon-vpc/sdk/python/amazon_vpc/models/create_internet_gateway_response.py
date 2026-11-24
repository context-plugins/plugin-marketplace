from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .internet_gateway import InternetGateway, InternetGatewayDict


class CreateInternetGatewayResponse(SdkBaseModel):
    """Response from the CreateInternetGateway action"""

    internet_gateway: Optional[InternetGateway] = Field(default=UNSET, alias="internetGateway")
    """Describes an internet gateway"""


class CreateInternetGatewayResponseDict(TypedDict):
    internet_gateway: NotRequired[InternetGatewayDict]
