from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RegistrySourceUrlResponse(SdkBaseModel):
    """Source archive locator for a selected build, plus legacy repo metadata."""

    registry_id: UUID
    build_id: Optional[UUID] = UNSET
    download_url: Optional[str] = UNSET
    github_url: Optional[str] = UNSET


class RegistrySourceUrlResponseDict(TypedDict):
    registry_id: UUID
    build_id: NotRequired[UUID]
    download_url: NotRequired[str]
    github_url: NotRequired[str]
