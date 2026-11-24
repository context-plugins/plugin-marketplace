from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListTagsForResourceInput(SdkBaseModel):
    resource_arn: str = Field(alias="ResourceARN")
    """The Amazon Resource Name (ARN) of the resource for which you want to list tags."""

    marker: Optional[str] = Field(default=UNSET, alias="Marker")
    """An opaque string that indicates the position at which to begin returning the list of tags."""

    limit: Optional[int] = Field(default=UNSET, alias="Limit")
    """Specifies that the list of tags returned be limited to the specified number of items."""


class ListTagsForResourceInputDict(TypedDict):
    resource_arn: str
    marker: NotRequired[str]
    limit: NotRequired[int]
