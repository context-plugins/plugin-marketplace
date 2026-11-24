from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListGatewaysInput(SdkBaseModel):
    marker: Optional[str] = Field(default=UNSET, alias="Marker")
    """An opaque string that indicates the position at which to begin the returned list of gateways."""

    limit: Optional[int] = Field(default=UNSET, alias="Limit")
    """Specifies that the list of gateways returned be limited to the specified number of items."""


class ListGatewaysInputDict(TypedDict):
    marker: NotRequired[str]
    limit: NotRequired[int]
