from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.relation import RelationOrStr
from .enums.type2 import Type2OrStr


class DiagramRelationship(SdkBaseModel):
    """One related resource returned by the traversal."""

    id: str
    """Related resource ID."""

    type_: Type2OrStr = Field(alias="type")
    """Component bucket the related resource lives in."""

    name: str
    """Human-readable name of the related resource."""

    service_type: Optional[str] = Field(default=UNSET, alias="serviceType")
    """Cloud service type when available."""

    relation: RelationOrStr
    """How the resource is related to the anchor. ``downstream`` / ``upstream`` are edge relations (anchor is the edge
    origin / destination respectively). ``group_member`` means the related resource is contained in the anchor (anchor
    is a group); ``group_parent`` means the related resource is a group that contains the anchor."""

    hops: int
    """Edge hop count from the anchor. Group-member / group-parent entries are reported as 1."""


class DiagramRelationshipDict(TypedDict):
    id: str
    type_: Type2OrStr
    name: str
    service_type: NotRequired[str]
    relation: RelationOrStr
    hops: int
