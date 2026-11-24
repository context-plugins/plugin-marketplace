from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_revision_status import (
    GoogleCloudApigeeV1RevisionStatus,
    GoogleCloudApigeeV1RevisionStatusDict,
)


class GoogleCloudApigeeV1ResourceStatus(SdkBaseModel):
    """The status of a resource loaded in the runtime."""

    resource: Optional[str] = UNSET
    """The resource name. Currently only two resources are supported: EnvironmentGroup -
    organizations/{org}/envgroups/{envgroup} EnvironmentConfig -
    organizations/{org}/environments/{environment}/deployedConfig"""

    uid: Optional[str] = UNSET
    """The uid of the resource. In the unexpected case that the instance has multiple uids for the same name, they
    should be reported under separate ResourceStatuses."""

    revisions: Optional[list[GoogleCloudApigeeV1RevisionStatus]] = UNSET
    """Revisions of the resource currently deployed in the instance."""

    total_replicas: Optional[int] = Field(default=UNSET, alias="totalReplicas")
    """The total number of replicas that should have this resource."""


class GoogleCloudApigeeV1ResourceStatusDict(TypedDict):
    resource: NotRequired[str]
    uid: NotRequired[str]
    revisions: NotRequired[list[GoogleCloudApigeeV1RevisionStatusDict]]
    total_replicas: NotRequired[int]
