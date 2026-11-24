from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .build_status_config import BuildStatusConfig, BuildStatusConfigDict
from .enums.type_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_retrybuild_api import (
    TypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiOrStr,
)
from .git_submodules_config import GitSubmodulesConfig, GitSubmodulesConfigDict
from .source_auth_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_retrybuild_api import (
    SourceAuthAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
    SourceAuthAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiDict,
)


class ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi(SdkBaseModel):
    type_: TypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiOrStr = Field(alias="type")
    """The type of repository that contains the source code to be built. Valid values include: BITBUCKET: The source
    code is in a Bitbucket repository. CODECOMMIT: The source code is in an CodeCommit repository. CODEPIPELINE: The
    source code settings are specified in the source action of a pipeline in CodePipeline. GITHUB: The source code is in
    a GitHub repository. GITHUB_ENTERPRISE: The source code is in a GitHub Enterprise Server repository. GITLAB: The
    source code is in a GitLab repository. GITLAB_SELF_MANAGED: The source code is in a self-managed GitLab repository.
    NO_SOURCE: The project does not"""

    location: Optional[str] = UNSET
    """Information about the location of the source code to be built. Valid values include: For source code settings
    that are specified in the source action of a pipeline in CodePipeline, location should not be specified. If it is
    specified, CodePipeline ignores it. This is because CodePipeline uses the settings in a pipeline's source action
    instead of this value. For source code in an CodeCommit repository, the HTTPS clone URL to the repository that
    contains the source code and the buildspec file (for example, https://git-codecommit..amazonaws.com/v1/repos/). For
    source code in an Amazon S3 input bu"""

    git_clone_depth: Optional[int] = Field(default=UNSET, alias="gitCloneDepth")
    """Information about the Git clone depth for the build project."""

    git_submodules_config: Optional[GitSubmodulesConfig] = Field(default=UNSET, alias="gitSubmodulesConfig")
    buildspec: Optional[str] = UNSET
    """The buildspec file declaration to use for the builds in this build project. If this value is set, it can be
    either an inline buildspec definition, the path to an alternate buildspec file relative to the value of the built-in
    CODEBUILD_SRC_DIR environment variable, or the path to an S3 bucket. The bucket must be in the same Amazon Web
    Services Region as the build project. Specify the buildspec file using its ARN (for example,
    arn:aws:s3:::my-codebuild-sample2/buildspec.yml). If this value is not provided or is set to an empty string, the
    source code must contain a buildspec file in its root dir"""

    auth: Optional[SourceAuthAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi] = UNSET
    report_build_status: Optional[bool] = Field(default=UNSET, alias="reportBuildStatus")
    """Set to true to report the status of a build's start and finish to your source provider. This option is valid only
    when your source provider is GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, GitLab, GitLab Self Managed, or
    Bitbucket. If this is set and you use a different source provider, an invalidInputException is thrown. To be able to
    report the build status to the source provider, the user associated with the source provider must have write access
    to the repo. If the user does not have write access, the build status cannot be updated. For more information, see
    Source provider acces"""

    build_status_config: Optional[BuildStatusConfig] = Field(default=UNSET, alias="buildStatusConfig")
    insecure_ssl: Optional[bool] = Field(default=UNSET, alias="insecureSsl")
    """Enable this flag to ignore SSL warnings while connecting to the project source code."""

    source_identifier: Optional[str] = Field(default=UNSET, alias="sourceIdentifier")
    """An identifier for this project source. The identifier can only contain alphanumeric characters and underscores,
    and must be less than 128 characters in length."""


class ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiDict(TypedDict):
    type_: TypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiOrStr
    location: NotRequired[str]
    git_clone_depth: NotRequired[int]
    git_submodules_config: NotRequired[GitSubmodulesConfigDict]
    buildspec: NotRequired[str]
    auth: NotRequired[SourceAuthAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiDict]
    report_build_status: NotRequired[bool]
    build_status_config: NotRequired[BuildStatusConfigDict]
    insecure_ssl: NotRequired[bool]
    source_identifier: NotRequired[str]
