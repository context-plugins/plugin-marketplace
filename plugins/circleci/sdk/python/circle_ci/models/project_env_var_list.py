from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .project_env_var import ProjectEnvVar, ProjectEnvVarDict


class ProjectEnvVarList(SdkBaseModel):
    items: Optional[list[ProjectEnvVar]] = UNSET
    """List of environment variables"""

    next_page_token: Optional[str] = UNSET
    """Token for retrieving the next page"""


class ProjectEnvVarListDict(TypedDict):
    items: NotRequired[list[ProjectEnvVarDict]]
    next_page_token: NotRequired[str]
