from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProjectsEnvironmentsRevalidateCacheRequest(SdkBaseModel):
    paths: Optional[list[str]] = UNSET
    """Specific URL paths to revalidate. If empty, all paths are revalidated."""


class ProjectsEnvironmentsRevalidateCacheRequestDict(TypedDict):
    paths: NotRequired[list[str]]
