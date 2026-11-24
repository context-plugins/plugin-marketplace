from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.scope import ScopeOrStr


class ScopeConfiguration(SdkBaseModel):
    name: str
    """The name of either the group, enterprise, or organization that will send webhook events to CodeBuild, depending
    on the type of webhook."""

    domain: Optional[str] = UNSET
    """The domain of the GitHub Enterprise organization or the GitLab Self Managed group. Note that this parameter is
    only required if your project's source type is GITHUB_ENTERPRISE or GITLAB_SELF_MANAGED."""

    scope: ScopeOrStr
    """The type of scope for a GitHub or GitLab webhook. The scope default is GITHUB_ORGANIZATION."""


class ScopeConfigurationDict(TypedDict):
    name: str
    domain: NotRequired[str]
    scope: ScopeOrStr
