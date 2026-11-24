from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FlowsToCreate(SdkBaseModel):
    key: Optional[str] = UNSET
    name: Optional[str] = UNSET
    node_count: Optional[int] = Field(default=UNSET, alias="nodeCount")
    incomplete_node_count: Optional[int] = Field(default=UNSET, alias="incompleteNodeCount")


class FlowsToCreateDict(TypedDict):
    key: NotRequired[str]
    name: NotRequired[str]
    node_count: NotRequired[int]
    incomplete_node_count: NotRequired[int]
