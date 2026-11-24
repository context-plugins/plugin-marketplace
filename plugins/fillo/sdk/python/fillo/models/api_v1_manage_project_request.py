from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1ManageProjectRequest(SdkBaseModel):
    name: str
    project: Optional[str] = UNSET
    """The key's own project, by id, slug, or name."""


class ApiV1ManageProjectRequestDict(TypedDict):
    name: str
    project: NotRequired[str]
