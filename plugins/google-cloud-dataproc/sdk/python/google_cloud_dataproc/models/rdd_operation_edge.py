from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RddOperationEdge(SdkBaseModel):
    """A directed edge representing dependency between two RDDs."""

    from_id: Optional[int] = Field(default=UNSET, alias="fromId")
    to_id: Optional[int] = Field(default=UNSET, alias="toId")


class RddOperationEdgeDict(TypedDict):
    from_id: NotRequired[int]
    to_id: NotRequired[int]
