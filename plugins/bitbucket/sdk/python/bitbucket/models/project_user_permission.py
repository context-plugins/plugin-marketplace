from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.permission1 import Permission1OrStr
from .links import Links, LinksDict
from .project_bitbucket_projects_api import ProjectBitbucketProjectsApi, ProjectBitbucketProjectsApiDict
from .user import User, UserDict


class ProjectUserPermission(SdkBaseModel):
    """A user's direct permission for a given project."""

    type_: str = Field(alias="type")
    links: Optional[Links] = UNSET
    permission: Optional[Permission1OrStr] = UNSET
    user: Optional[User] = UNSET
    project: Optional[ProjectBitbucketProjectsApi] = UNSET


class ProjectUserPermissionDict(TypedDict):
    type_: str
    links: NotRequired[LinksDict]
    permission: NotRequired[Permission1OrStr]
    user: NotRequired[UserDict]
    project: NotRequired[ProjectBitbucketProjectsApiDict]
