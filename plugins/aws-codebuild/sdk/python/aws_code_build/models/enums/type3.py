from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type3(str, Enum):
    """The type of repository that contains the source code to be built. Valid values include: BITBUCKET: The source
    code is in a Bitbucket repository. CODECOMMIT: The source code is in an CodeCommit repository. CODEPIPELINE: The
    source code settings are specified in the source action of a pipeline in CodePipeline. GITHUB: The source code is in
    a GitHub repository. GITHUB_ENTERPRISE: The source code is in a GitHub Enterprise Server repository. GITLAB: The
    source code is in a GitLab repository. GITLAB_SELF_MANAGED: The source code is in a self-managed GitLab repository.
    NO_SOURCE: The project does not"""

    CODECOMMIT = "CODECOMMIT"
    CODEPIPELINE = "CODEPIPELINE"
    GITHUB = "GITHUB"
    GITLAB = "GITLAB"
    GITLAB_SELF_MANAGED = "GITLAB_SELF_MANAGED"
    S3 = "S3"
    BITBUCKET = "BITBUCKET"
    GITHUB_ENTERPRISE = "GITHUB_ENTERPRISE"
    NO_SOURCE = "NO_SOURCE"

    __str__ = str.__str__


Type3OrStr: TypeAlias = Annotated[Type3 | str, open_enum_validator(Type3)]
