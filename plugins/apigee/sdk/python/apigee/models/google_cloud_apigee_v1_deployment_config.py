from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1DeploymentConfig(SdkBaseModel):
    """NEXT ID: 11"""

    deployment_groups: Optional[list[str]] = Field(default=UNSET, alias="deploymentGroups")
    """The list of deployment groups in which this proxy should be deployed. Not currently populated for shared
    flows."""

    attributes: Optional[dict[str, str]] = UNSET
    """Additional key-value metadata for the deployment."""

    service_account: Optional[str] = Field(default=UNSET, alias="serviceAccount")
    """The service account identity associated with this deployment. If non-empty, will be in the following format:
    ``projects/-/serviceAccounts/{account_email}``"""

    endpoints: Optional[dict[str, str]] = UNSET
    """A mapping from basepaths to proxy endpoint names in this proxy. Not populated for shared flows."""

    location: Optional[str] = UNSET
    """Location of the API proxy bundle as a URI."""

    uid: Optional[str] = UNSET
    """Unique ID. The ID will only change if the deployment is deleted and recreated."""

    name: Optional[str] = UNSET
    """Name of the API or shared flow revision to be deployed in the following format:
    ``organizations/{org}/apis/{api}/revisions/{rev}`` or
    ``organizations/{org}/sharedflows/{sharedflow}/revisions/{rev}``"""

    proxy_uid: Optional[str] = Field(default=UNSET, alias="proxyUid")
    """Unique ID of the API proxy revision."""

    base_path: Optional[str] = Field(default=UNSET, alias="basePath")
    """Base path where the application will be hosted. Defaults to "/"."""


class GoogleCloudApigeeV1DeploymentConfigDict(TypedDict):
    deployment_groups: NotRequired[list[str]]
    attributes: NotRequired[dict[str, str]]
    service_account: NotRequired[str]
    endpoints: NotRequired[dict[str, str]]
    location: NotRequired[str]
    uid: NotRequired[str]
    name: NotRequired[str]
    proxy_uid: NotRequired[str]
    base_path: NotRequired[str]
