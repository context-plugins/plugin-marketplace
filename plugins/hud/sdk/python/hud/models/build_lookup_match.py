from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .build_lookup_environment import BuildLookupEnvironment, BuildLookupEnvironmentDict


class BuildLookupMatch(SdkBaseModel):
    build_id: UUID
    version: Optional[int] = UNSET
    content_digest: str
    environment: BuildLookupEnvironment


class BuildLookupMatchDict(TypedDict):
    build_id: UUID
    version: NotRequired[int]
    content_digest: str
    environment: BuildLookupEnvironmentDict
