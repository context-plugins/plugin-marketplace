from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.build_type import BuildTypeOrStr
from .pull_request_build_policy import PullRequestBuildPolicy, PullRequestBuildPolicyDict
from .scope_configuration import ScopeConfiguration, ScopeConfigurationDict
from .webhook_filter import WebhookFilter, WebhookFilterDict


class CreateWebhookInput(SdkBaseModel):
    project_name: str = Field(alias="projectName")
    """The name of the CodeBuild project."""

    branch_filter: Optional[str] = Field(default=UNSET, alias="branchFilter")
    """A regular expression used to determine which repository branches are built when a webhook is triggered. If the
    name of a branch matches the regular expression, then it is built. If branchFilter is empty, then all branches are
    built. It is recommended that you use filterGroups instead of branchFilter."""

    filter_groups: Optional[list[list[WebhookFilter]]] = Field(default=UNSET, alias="filterGroups")
    """An array of arrays of WebhookFilter objects used to determine which webhooks are triggered. At least one
    WebhookFilter in the array must specify EVENT as its type. For a build to be triggered, at least one filter group in
    the filterGroups array must pass. For a filter group to pass, each of its filters must pass."""

    build_type: Optional[BuildTypeOrStr] = Field(default=UNSET, alias="buildType")
    """Specifies the type of build this webhook will trigger. RUNNER_BUILDKITE_BUILD is only available for NO_SOURCE
    source type projects configured for Buildkite runner builds. For more information about CodeBuild-hosted Buildkite
    runner builds, see Tutorial: Configure a CodeBuild-hosted Buildkite runner in the CodeBuild user guide."""

    manual_creation: Optional[bool] = Field(default=UNSET, alias="manualCreation")
    """If manualCreation is true, CodeBuild doesn't create a webhook in GitHub and instead returns payloadUrl and secret
    values for the webhook. The payloadUrl and secret values in the output can be used to manually create a webhook
    within GitHub. manualCreation is only available for GitHub webhooks."""

    scope_configuration: Optional[ScopeConfiguration] = Field(default=UNSET, alias="scopeConfiguration")
    pull_request_build_policy: Optional[PullRequestBuildPolicy] = Field(default=UNSET, alias="pullRequestBuildPolicy")


class CreateWebhookInputDict(TypedDict):
    project_name: str
    branch_filter: NotRequired[str]
    filter_groups: NotRequired[list[list[WebhookFilterDict]]]
    build_type: NotRequired[BuildTypeOrStr]
    manual_creation: NotRequired[bool]
    scope_configuration: NotRequired[ScopeConfigurationDict]
    pull_request_build_policy: NotRequired[PullRequestBuildPolicyDict]
