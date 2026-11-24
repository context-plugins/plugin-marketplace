from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .version import Version, VersionDict


class ApiV1PoliciesResponse(SdkBaseModel):
    id: UUID
    name: str
    version: Version | None


class ApiV1PoliciesResponseDict(TypedDict):
    id: UUID
    name: str
    version: VersionDict | None
