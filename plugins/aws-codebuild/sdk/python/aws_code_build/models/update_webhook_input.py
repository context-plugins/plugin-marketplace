from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.build_type import BuildTypeOrStr
from .pull_request_build_policy import PullRequestBuildPolicy, PullRequestBuildPolicyDict
from .webhook_filter import WebhookFilter, WebhookFilterDict


class UpdateWebhookInput(SdkBaseModel):
    project_name: str = Field(alias="projectName")
    """The name of the CodeBuild project."""

    branch_filter: Optional[str] = Field(default=UNSET, alias="branchFilter")
    """A regular expression used to determine which repository branches are built when a webhook is triggered. If the
    name of a branch matches the regular expression, then it is built. If branchFilter is empty, then all branches are
    built. It is recommended that you use filterGroups instead of branchFilter."""

    rotate_secret: Optional[bool] = Field(default=UNSET, alias="rotateSecret")
    """A boolean value that specifies whether the associated GitHub repository's secret token should be updated. If you
    use Bitbucket for your repository, rotateSecret is ignored."""

    filter_groups: Optional[list[list[WebhookFilter]]] = Field(default=UNSET, alias="filterGroups")
    """An array of arrays of WebhookFilter objects used to determine if a webhook event can trigger a build. A filter
    group must contain at least one EVENT WebhookFilter."""

    build_type: Optional[BuildTypeOrStr] = Field(default=UNSET, alias="buildType")
    """Specifies the type of build this webhook will trigger. RUNNER_BUILDKITE_BUILD is only available for NO_SOURCE
    source type projects configured for Buildkite runner builds. For more information about CodeBuild-hosted Buildkite
    runner builds, see Tutorial: Configure a CodeBuild-hosted Buildkite runner in the CodeBuild user guide."""

    pull_request_build_policy: Optional[PullRequestBuildPolicy] = Field(default=UNSET, alias="pullRequestBuildPolicy")


class UpdateWebhookInputDict(TypedDict):
    project_name: str
    branch_filter: NotRequired[str]
    rotate_secret: NotRequired[bool]
    filter_groups: NotRequired[list[list[WebhookFilterDict]]]
    build_type: NotRequired[BuildTypeOrStr]
    pull_request_build_policy: NotRequired[PullRequestBuildPolicyDict]
