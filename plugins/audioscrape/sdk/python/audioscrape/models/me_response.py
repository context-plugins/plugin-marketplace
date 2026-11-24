from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .me_api_key1 import MeApiKey1, MeApiKey1Dict
from .me_plan import MePlan, MePlanDict
from .me_user import MeUser, MeUserDict
from .me_workspace1 import MeWorkspace1, MeWorkspace1Dict


class MeResponse(SdkBaseModel):
    api_key: OptionalNullable[MeApiKey1] = UNSET
    api_version: str
    """Effective dated API version this request was evaluated against, per the ``Audioscrape-Version`` header /
    ``api_keys.pinned_version`` resolution."""

    plan: MePlan
    user: MeUser
    workspace: MeWorkspace1
    """Workspace this request is scoped to (resolved from the API key or the session's active workspace). List all your
    workspaces at ``/api/workspaces``."""


class MeResponseDict(TypedDict):
    api_key: NotRequired[MeApiKey1Dict | None]
    api_version: str
    plan: MePlanDict
    user: MeUserDict
    workspace: MeWorkspace1Dict
