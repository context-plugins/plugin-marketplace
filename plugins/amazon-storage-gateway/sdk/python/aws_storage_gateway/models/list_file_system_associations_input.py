from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListFileSystemAssociationsInput(SdkBaseModel):
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
    limit: Optional[int] = Field(default=UNSET, alias="Limit")
    """The maximum number of file system associations to return in the response. If present, Limit must be an integer
    with a value greater than zero. Optional."""

    marker: Optional[str] = Field(default=UNSET, alias="Marker")
    """Opaque pagination token returned from a previous ListFileSystemAssociations operation. If present, Marker
    specifies where to continue the list from after a previous call to ListFileSystemAssociations. Optional."""


class ListFileSystemAssociationsInputDict(TypedDict):
    gateway_arn: NotRequired[str]
    limit: NotRequired[int]
    marker: NotRequired[str]
