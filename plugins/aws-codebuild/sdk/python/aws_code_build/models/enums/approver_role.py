from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ApproverRole(str, Enum):
    GITHUB_READ = "GITHUB_READ"
    GITHUB_TRIAGE = "GITHUB_TRIAGE"
    GITHUB_WRITE = "GITHUB_WRITE"
    GITHUB_MAINTAIN = "GITHUB_MAINTAIN"
    GITHUB_ADMIN = "GITHUB_ADMIN"
    GITLAB_GUEST = "GITLAB_GUEST"
    GITLAB_PLANNER = "GITLAB_PLANNER"
    GITLAB_REPORTER = "GITLAB_REPORTER"
    GITLAB_DEVELOPER = "GITLAB_DEVELOPER"
    GITLAB_MAINTAINER = "GITLAB_MAINTAINER"
    GITLAB_OWNER = "GITLAB_OWNER"
    BITBUCKET_READ = "BITBUCKET_READ"
    BITBUCKET_WRITE = "BITBUCKET_WRITE"
    BITBUCKET_ADMIN = "BITBUCKET_ADMIN"

    __str__ = str.__str__


ApproverRoleOrStr: TypeAlias = Annotated[ApproverRole | str, open_enum_validator(ApproverRole)]
