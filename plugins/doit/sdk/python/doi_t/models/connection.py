from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Connection(SdkBaseModel):
    key: str
    provider: str
    """Cloud provider the bound connection must have (e.g. ``amazon-web-services``)."""

    name: str
    """The source connection's display name, as a matching hint."""

    used_by_nodes: Optional[list[str]] = Field(default=UNSET, alias="usedByNodes")


class ConnectionDict(TypedDict):
    key: str
    provider: str
    name: str
    used_by_nodes: NotRequired[list[str]]
