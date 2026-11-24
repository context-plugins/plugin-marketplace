from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Workspace(SdkBaseModel):
    id: str
    name: str


class WorkspaceDict(TypedDict):
    id: str
    name: str
