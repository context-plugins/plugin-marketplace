from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .ambiguou import Ambiguou, AmbiguouDict
from .resolved import Resolved, ResolvedDict
from .unresolved import Unresolved, UnresolvedDict


class ApiV1AudiencesResolveResponse(SdkBaseModel):
    resolved: list[Resolved]
    ambiguous: list[Ambiguou]
    unresolved: list[Unresolved]


class ApiV1AudiencesResolveResponseDict(TypedDict):
    resolved: list[ResolvedDict]
    ambiguous: list[AmbiguouDict]
    unresolved: list[UnresolvedDict]
