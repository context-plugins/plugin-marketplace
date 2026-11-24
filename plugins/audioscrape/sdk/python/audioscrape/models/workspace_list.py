from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .workspace_summary import WorkspaceSummary, WorkspaceSummaryDict


class WorkspaceList(SdkBaseModel):
    total: int
    workspaces: list[WorkspaceSummary]


class WorkspaceListDict(TypedDict):
    total: int
    workspaces: list[WorkspaceSummaryDict]
