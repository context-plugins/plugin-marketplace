from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WorkspaceUpdateRequest(SdkBaseModel):
    name: Optional[str] = UNSET


class WorkspaceUpdateRequestDict(TypedDict):
    name: NotRequired[str]
