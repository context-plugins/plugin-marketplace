from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_entity_metadata1 import (
    GoogleCloudApigeeV1EntityMetadata1,
    GoogleCloudApigeeV1EntityMetadata1Dict,
)


class GoogleCloudApigeeV1SharedFlow(SdkBaseModel):
    """The metadata describing a shared flow"""

    space: Optional[str] = UNSET
    """Optional. The ID of the space associated with this shared flow. Any IAM policies applied to the space will
    control access to this shared flow. To learn how Spaces can be used to manage resources, read the `Apigee Spaces
    Overview
    <https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview>`__."""

    meta_data: Optional[GoogleCloudApigeeV1EntityMetadata1] = Field(default=UNSET, alias="metaData")
    """Metadata describing the shared flow."""

    name: Optional[str] = UNSET
    """The ID of the shared flow."""

    revision: Optional[list[str]] = UNSET
    """A list of revisions of this shared flow."""

    latest_revision_id: Optional[str] = Field(default=UNSET, alias="latestRevisionId")
    """The id of the most recently created revision for this shared flow."""


class GoogleCloudApigeeV1SharedFlowDict(TypedDict):
    space: NotRequired[str]
    meta_data: NotRequired[GoogleCloudApigeeV1EntityMetadata1Dict]
    name: NotRequired[str]
    revision: NotRequired[list[str]]
    latest_revision_id: NotRequired[str]
