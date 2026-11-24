from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_devtools_cloudbuild_v2_service_directory_config2 import (
    GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig2,
    GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig2Dict,
)


class GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfig(SdkBaseModel):
    """Configuration for connections to an instance of GitHub Enterprise."""

    host_uri: Optional[str] = Field(default=UNSET, alias="hostUri")
    """Required. The URI of the GitHub Enterprise host this connection is for."""

    webhook_secret_secret_version: Optional[str] = Field(default=UNSET, alias="webhookSecretSecretVersion")
    """Optional. SecretManager resource containing the webhook secret of the GitHub App, formatted as
    ``projects/*/secrets/*/versions/*``."""

    api_key: Optional[str] = Field(default=UNSET, alias="apiKey")
    """Required. API Key used for authentication of webhook events."""

    app_slug: Optional[str] = Field(default=UNSET, alias="appSlug")
    """Optional. The URL-friendly name of the GitHub App."""

    ssl_ca: Optional[str] = Field(default=UNSET, alias="sslCa")
    """Optional. SSL certificate to use for requests to GitHub Enterprise."""

    private_key_secret_version: Optional[str] = Field(default=UNSET, alias="privateKeySecretVersion")
    """Optional. SecretManager resource containing the private key of the GitHub App, formatted as
    ``projects/*/secrets/*/versions/*``."""

    service_directory_config: Optional[GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig2] = Field(
        default=UNSET, alias="serviceDirectoryConfig"
    )
    """Optional. Configuration for using Service Directory to privately connect to a GitHub Enterprise server. This
    should only be set if the GitHub Enterprise server is hosted on-premises and not reachable by public internet. If
    this field is left empty, calls to the GitHub Enterprise server will be made over the public internet."""

    app_installation_id: Optional[str] = Field(default=UNSET, alias="appInstallationId")
    """Optional. ID of the installation of the GitHub App."""

    app_id: Optional[str] = Field(default=UNSET, alias="appId")
    """Optional. Id of the GitHub App created from the manifest."""

    server_version: Optional[str] = Field(default=UNSET, alias="serverVersion")
    """Output only. GitHub Enterprise version installed at the host_uri."""


class GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfigDict(TypedDict):
    host_uri: NotRequired[str]
    webhook_secret_secret_version: NotRequired[str]
    api_key: NotRequired[str]
    app_slug: NotRequired[str]
    ssl_ca: NotRequired[str]
    private_key_secret_version: NotRequired[str]
    service_directory_config: NotRequired[GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig2Dict]
    app_installation_id: NotRequired[str]
    app_id: NotRequired[str]
    server_version: NotRequired[str]
