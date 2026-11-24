from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .user_info import UserInfo, UserInfoDict
from .workspace_info import WorkspaceInfo, WorkspaceInfoDict


class AuthenticatedUserResponse(SdkBaseModel):
    """Response for the /me endpoint."""

    user: UserInfo
    """User information in API responses."""

    workspace: WorkspaceInfo
    """Workspace information in API responses."""


class AuthenticatedUserResponseDict(TypedDict):
    user: UserInfoDict
    workspace: WorkspaceInfoDict
