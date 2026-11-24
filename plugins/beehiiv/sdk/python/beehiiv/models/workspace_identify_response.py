from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .workspace_identity import WorkspaceIdentity, WorkspaceIdentityDict


class WorkspaceIdentifyResponse(SdkBaseModel):
    data: WorkspaceIdentity


class WorkspaceIdentifyResponseDict(TypedDict):
    data: WorkspaceIdentityDict
