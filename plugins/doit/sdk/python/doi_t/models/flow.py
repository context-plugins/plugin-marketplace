from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .incomplete_node import IncompleteNode, IncompleteNodeDict


class Flow(SdkBaseModel):
    key: str
    id: str
    """The created flow's ID in the target tenant."""

    name: str
    status: Literal["draft"] = "draft"
    incomplete_nodes: Optional[list[IncompleteNode]] = Field(default=UNSET, alias="incompleteNodes")
    """Nodes whose tenant-scoped references could not be bound; fix them in the builder before publishing."""


class FlowDict(TypedDict):
    key: str
    id: str
    name: str
    status: Literal["draft"]
    incomplete_nodes: NotRequired[list[IncompleteNodeDict]]
