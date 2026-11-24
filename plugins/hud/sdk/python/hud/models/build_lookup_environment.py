from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .external_origin import ExternalOrigin, ExternalOriginDict


class BuildLookupEnvironment(SdkBaseModel):
    id: UUID
    name: str
    project_id: UUID
    origin: Optional[ExternalOrigin] = UNSET


class BuildLookupEnvironmentDict(TypedDict):
    id: UUID
    name: str
    project_id: UUID
    origin: NotRequired[ExternalOriginDict]
