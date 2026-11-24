from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class WorkspacePermissionsResponse(SdkBaseModel):
    data: dict[str, Any]
    """A map of OAuth resources to the permission actions granted for each. Keys are resource names (e.g. ``posts``,
    ``segments``) and values are arrays of granted actions (``read`` and/or ``write``). API keys receive all granular
    OAuth scopes. OAuth tokens receive only the scopes they were authorized for. ``posts`` write access is only included
    when the Send API feature is enabled for the workspace; if the token has ``posts:write`` but Send API is disabled,
    ``posts`` is returned as ``["read"]``."""


class WorkspacePermissionsResponseDict(TypedDict):
    data: dict[str, Any]
