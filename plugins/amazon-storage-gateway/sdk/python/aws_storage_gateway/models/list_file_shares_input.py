from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListFileSharesInput(SdkBaseModel):
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
    """The Amazon Resource Name (ARN) of the gateway whose file shares you want to list. If this field is not present,
    all file shares under your account are listed."""

    limit: Optional[int] = Field(default=UNSET, alias="Limit")
    """The maximum number of file shares to return in the response. The value must be an integer with a value greater
    than zero. Optional."""

    marker: Optional[str] = Field(default=UNSET, alias="Marker")
    """Opaque pagination token returned from a previous ListFileShares operation. If present, Marker specifies where to
    continue the list from after a previous call to ListFileShares. Optional."""


class ListFileSharesInputDict(TypedDict):
    gateway_arn: NotRequired[str]
    limit: NotRequired[int]
    marker: NotRequired[str]
