from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .graph_link import GraphLink, GraphLinkDict
from .service import Service, ServiceDict


class RetrievedService(SdkBaseModel):
    service: Optional[Service] = Field(default=UNSET, alias="Service")
    links: Optional[list[GraphLink]] = Field(default=UNSET, alias="Links")
    """Relation between two 2 services."""


class RetrievedServiceDict(TypedDict):
    service: NotRequired[ServiceDict]
    links: NotRequired[list[GraphLinkDict]]
