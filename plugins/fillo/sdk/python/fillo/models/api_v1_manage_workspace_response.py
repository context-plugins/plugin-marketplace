from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .workspace import Workspace, WorkspaceDict


class ApiV1ManageWorkspaceResponse(SdkBaseModel):
    workspace: Workspace


class ApiV1ManageWorkspaceResponseDict(TypedDict):
    workspace: WorkspaceDict
