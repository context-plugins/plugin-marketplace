from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1EntityMetadata3(SdkBaseModel):
    """Output only. Metadata describing the API proxy."""

    created_at: Optional[str] = Field(default=UNSET, alias="createdAt")
    """Time at which the API proxy was created, in milliseconds since epoch."""

    sub_type: Optional[str] = Field(default=UNSET, alias="subType")
    """The type of entity described"""

    last_modified_at: Optional[str] = Field(default=UNSET, alias="lastModifiedAt")
    """Time at which the API proxy was most recently modified, in milliseconds since epoch."""


class GoogleCloudApigeeV1EntityMetadata3Dict(TypedDict):
    created_at: NotRequired[str]
    sub_type: NotRequired[str]
    last_modified_at: NotRequired[str]
