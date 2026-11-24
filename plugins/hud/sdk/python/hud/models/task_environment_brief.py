from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.source_access import SourceAccessOrStr
from .external_origin import ExternalOrigin, ExternalOriginDict


class TaskEnvironmentBrief(SdkBaseModel):
    """Environment holding the build a task version targets."""

    id: UUID
    name: str
    build_version: Optional[int] = UNSET
    origin: Optional[ExternalOrigin] = UNSET
    source_access: Optional[SourceAccessOrStr] = UNSET


class TaskEnvironmentBriefDict(TypedDict):
    id: UUID
    name: str
    build_version: NotRequired[int]
    origin: NotRequired[ExternalOriginDict]
    source_access: NotRequired[SourceAccessOrStr]
