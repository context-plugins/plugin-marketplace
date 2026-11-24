from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .o_auth_credential1 import OAuthCredential1, OAuthCredential1Dict


class GitHubConfig(SdkBaseModel):
    """Configuration for connections to github.com."""

    authorizer_credential: Optional[OAuthCredential1] = Field(default=UNSET, alias="authorizerCredential")
    """Optional. OAuth credential of the account that authorized the Cloud Build GitHub App. It is recommended to use a
    robot account instead of a human user account. The OAuth token must be tied to the Cloud Build GitHub App."""

    app_installation_id: Optional[str] = Field(default=UNSET, alias="appInstallationId")
    """Optional. GitHub App installation id."""


class GitHubConfigDict(TypedDict):
    authorizer_credential: NotRequired[OAuthCredential1Dict]
    app_installation_id: NotRequired[str]
