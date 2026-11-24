from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.mode import ModeOrStr
from .enums.type3_aws_code_build_projects_api import Type3AwsCodeBuildProjectsApiOrStr


class ProjectCacheAwsCodeBuildProjectsApi(SdkBaseModel):
    type_: Type3AwsCodeBuildProjectsApiOrStr = Field(alias="type")
    """The type of cache used by the build project. Valid values include: NO_CACHE: The build project does not use any
    cache. S3: The build project reads and writes from and to S3. LOCAL: The build project stores a cache locally on a
    build host that is only available to that build host."""

    location: Optional[str] = UNSET
    """Information about the cache location: NO_CACHE or LOCAL: This value is ignored. S3: This is the S3 bucket
    name/prefix."""

    modes: Optional[list[ModeOrStr]] = UNSET
    """An array of strings that specify the local cache modes. You can use one or more local cache modes at the same
    time. This is only used for LOCAL cache types. Possible values are: LOCAL_SOURCE_CACHE Caches Git metadata for
    primary and secondary sources. After the cache is created, subsequent builds pull only the change between commits.
    This mode is a good choice for projects with a clean working directory and a source that is a large Git repository.
    If you choose this option and your project does not use a Git repository (GitHub, GitHub Enterprise, or Bitbucket),
    the option is ignored. LOCAL_DOC"""

    cache_namespace: Optional[str] = Field(default=UNSET, alias="cacheNamespace")
    """Defines the scope of the cache. You can use this namespace to share a cache across multiple projects. For more
    information, see Cache sharing between projects in the CodeBuild User Guide."""


class ProjectCacheAwsCodeBuildProjectsApiDict(TypedDict):
    type_: Type3AwsCodeBuildProjectsApiOrStr
    location: NotRequired[str]
    modes: NotRequired[list[ModeOrStr]]
    cache_namespace: NotRequired[str]
