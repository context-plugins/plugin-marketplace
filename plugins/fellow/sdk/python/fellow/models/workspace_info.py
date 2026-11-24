from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class WorkspaceInfo(SdkBaseModel):
    """Workspace information in API responses."""

    id: str
    name: str
    subdomain: str


class WorkspaceInfoDict(TypedDict):
    id: str
    name: str
    subdomain: str
