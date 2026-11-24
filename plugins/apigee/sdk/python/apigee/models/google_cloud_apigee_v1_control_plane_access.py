from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1ControlPlaneAccess(SdkBaseModel):
    """ControlPlaneAccess is the request body and response body of UpdateControlPlaneAccess. and the response body of
    GetControlPlaneAccess. The input identities contains an array of service accounts to grant access to the respective
    control plane resource, with each service account specified using the following format:
    ``serviceAccount:``***service-account-name***. The ***service-account-name*** is formatted like an email address.
    For example: ``my-control-plane-service_account@my_project_id.iam.gserviceaccount.com`` You might specify multiple
    service accounts, for example, if you have multiple environments and wish to assign a unique service account to each
    one."""

    name: Optional[str] = UNSET
    """Identifier. The resource name of the ControlPlaneAccess. Format: "organizations/{org}/controlPlaneAccess"
    """

    watcher_identities: Optional[list[str]] = Field(default=UNSET, alias="watcherIdentities")
    """Optional. Service accounts granted access to control plane resources for the apigee-watcher component."""

    synchronizer_identities: Optional[list[str]] = Field(default=UNSET, alias="synchronizerIdentities")
    """Optional. Array of service accounts to grant access to control plane resources (for the Synchronizer component).
    The service accounts must have **Apigee Synchronizer Manager** role. See also `Create service accounts
    <https://cloud.google.com/apigee/docs/hybrid/latest/sa-about#create-the-service-accounts>`__."""

    analytics_publisher_identities: Optional[list[str]] = Field(default=UNSET, alias="analyticsPublisherIdentities")
    """Optional. Array of service accounts authorized to publish analytics data to the control plane (for the Message
    Processor component)."""


class GoogleCloudApigeeV1ControlPlaneAccessDict(TypedDict):
    name: NotRequired[str]
    watcher_identities: NotRequired[list[str]]
    synchronizer_identities: NotRequired[list[str]]
    analytics_publisher_identities: NotRequired[list[str]]
