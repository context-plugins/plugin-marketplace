from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .diagram_relationship import DiagramRelationship, DiagramRelationshipDict
from .diagram_relationships_anchor import DiagramRelationshipsAnchor, DiagramRelationshipsAnchorDict
from .enums.depth import DepthOrStr
from .enums.direction import DirectionOrStr
from .enums.kind import KindOrStr


class DiagramRelationshipsResponse(SdkBaseModel):
    """The response payload for the resource relationships endpoint."""

    anchor: DiagramRelationshipsAnchor
    """The anchor resource the traversal started from."""

    direction: DirectionOrStr
    depth: DepthOrStr
    kind: KindOrStr
    relations: list[DiagramRelationship]
    """Resources related to the anchor (capped at 200)."""

    truncated: bool
    """True when the relation list was capped at 200 entries."""


class DiagramRelationshipsResponseDict(TypedDict):
    anchor: DiagramRelationshipsAnchorDict
    direction: DirectionOrStr
    depth: DepthOrStr
    kind: KindOrStr
    relations: list[DiagramRelationshipDict]
    truncated: bool
