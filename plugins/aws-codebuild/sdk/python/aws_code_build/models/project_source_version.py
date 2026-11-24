from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ProjectSourceVersion(SdkBaseModel):
    source_identifier: str = Field(alias="sourceIdentifier")
    """An identifier for a source in the build project. The identifier can only contain alphanumeric characters and
    underscores, and must be less than 128 characters in length."""

    source_version: str = Field(alias="sourceVersion")
    """The source version for the corresponding source identifier. If specified, must be one of: For CodeCommit: the
    commit ID, branch, or Git tag to use. For GitHub: the commit ID, pull request ID, branch name, or tag name that
    corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the
    format pr/pull-request-ID (for example, pr/25). If a branch name is specified, the branch's HEAD commit ID is used.
    If not specified, the default branch's HEAD commit ID is used. For GitLab: the commit ID, branch, or Git tag to use.
    For Bitbucket: the commit ID,"""


class ProjectSourceVersionDict(TypedDict):
    source_identifier: str
    source_version: str
