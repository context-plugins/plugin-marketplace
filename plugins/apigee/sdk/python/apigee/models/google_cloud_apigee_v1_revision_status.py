from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_update_error import GoogleCloudApigeeV1UpdateError, GoogleCloudApigeeV1UpdateErrorDict


class GoogleCloudApigeeV1RevisionStatus(SdkBaseModel):
    """The status of a specific resource revision."""

    revision_id: Optional[str] = Field(default=UNSET, alias="revisionId")
    """The revision of the resource."""

    json_spec: Optional[str] = Field(default=UNSET, alias="jsonSpec")
    """The json content of the resource revision. Large specs should be sent individually via the spec field to avoid
    hitting request size limits."""

    replicas: Optional[int] = UNSET
    """The number of replicas that have successfully loaded this revision."""

    errors: Optional[list[GoogleCloudApigeeV1UpdateError]] = UNSET
    """Errors reported when attempting to load this revision."""


class GoogleCloudApigeeV1RevisionStatusDict(TypedDict):
    revision_id: NotRequired[str]
    json_spec: NotRequired[str]
    replicas: NotRequired[int]
    errors: NotRequired[list[GoogleCloudApigeeV1UpdateErrorDict]]
