from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.permission1 import Permission1OrStr
from .group import Group, GroupDict
from .links import Links, LinksDict
from .project_bitbucket_projects_api import ProjectBitbucketProjectsApi, ProjectBitbucketProjectsApiDict


class ProjectGroupPermission(SdkBaseModel):
    """A group's permission for a given project."""

    type_: str = Field(alias="type")
    links: Optional[Links] = UNSET
    permission: Optional[Permission1OrStr] = UNSET
    group: Optional[Group] = UNSET
    project: Optional[ProjectBitbucketProjectsApi] = UNSET


class ProjectGroupPermissionDict(TypedDict):
    type_: str
    links: NotRequired[LinksDict]
    permission: NotRequired[Permission1OrStr]
    group: NotRequired[GroupDict]
    project: NotRequired[ProjectBitbucketProjectsApiDict]
