from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pool_info import PoolInfo, PoolInfoDict


class ListTapePoolsOutput(SdkBaseModel):
    pool_infos: Optional[list[PoolInfo]] = Field(default=UNSET, alias="PoolInfos")
    """An array of PoolInfo objects, where each object describes a single custom tape pool. If there are no custom tape
    pools, the PoolInfos is an empty array."""

    marker: Optional[str] = Field(default=UNSET, alias="Marker")
    """A string that indicates the position at which to begin the returned list of tape pools. Use the marker in your
    next request to continue pagination of tape pools. If there are no more tape pools to list, this element does not
    appear in the response body."""


class ListTapePoolsOutputDict(TypedDict):
    pool_infos: NotRequired[list[PoolInfoDict]]
    marker: NotRequired[str]
