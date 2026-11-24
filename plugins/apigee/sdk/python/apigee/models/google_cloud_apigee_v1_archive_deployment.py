from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1ArchiveDeployment(SdkBaseModel):
    """Archive Deployment information."""

    created_at: Optional[str] = Field(default=UNSET, alias="createdAt")
    """Output only. The time at which the Archive Deployment was created in milliseconds since the epoch."""

    updated_at: Optional[str] = Field(default=UNSET, alias="updatedAt")
    """Output only. The time at which the Archive Deployment was updated in milliseconds since the epoch."""

    labels: Optional[dict[str, str]] = UNSET
    r"""User-supplied key-value pairs used to organize ArchiveDeployments. Label keys must be between 1 and 63
    characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular
    expression: \p{Ll}\p{Lo}{0,62} Label values must be between 1 and 63 characters long, have a UTF-8 encoding of
    maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more
    than 64 labels can be associated with a given store."""

    name: Optional[str] = UNSET
    """Name of the Archive Deployment in the following format:
    ``organizations/{org}/environments/{env}/archiveDeployments/{id}``."""

    gcs_uri: Optional[str] = Field(default=UNSET, alias="gcsUri")
    """Input only. The Google Cloud Storage signed URL returned from GenerateUploadUrl and used to upload the Archive
    zip file."""

    operation: Optional[str] = UNSET
    """Output only. A reference to the LRO that created this Archive Deployment in the following format:
    ``organizations/{org}/operations/{id}``"""


class GoogleCloudApigeeV1ArchiveDeploymentDict(TypedDict):
    created_at: NotRequired[str]
    updated_at: NotRequired[str]
    labels: NotRequired[dict[str, str]]
    name: NotRequired[str]
    gcs_uri: NotRequired[str]
    operation: NotRequired[str]
