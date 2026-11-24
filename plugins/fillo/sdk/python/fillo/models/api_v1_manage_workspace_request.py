from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageWorkspaceRequest(SdkBaseModel):
    name: str


class ApiV1ManageWorkspaceRequestDict(TypedDict):
    name: str
