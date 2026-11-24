from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WorkspaceCreateRequest(SdkBaseModel):
    name: Optional[str] = UNSET


class WorkspaceCreateRequestDict(TypedDict):
    name: NotRequired[str]
