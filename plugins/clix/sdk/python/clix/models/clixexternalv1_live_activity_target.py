from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Clixexternalv1LiveActivityTarget(SdkBaseModel):
    project_user_id: str
    """Project-specific user ID for targeting."""


class Clixexternalv1LiveActivityTargetDict(TypedDict):
    project_user_id: str
