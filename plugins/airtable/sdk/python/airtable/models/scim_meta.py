from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ScimMeta(SdkBaseModel):
    """SCIM resource metadata."""

    resource_type: Optional[str] = Field(default=UNSET, alias="resourceType")
    """The type of resource (User or Group)."""

    created: Optional[RFC3339DateTime] = UNSET
    """The time when the resource was created."""

    last_modified: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastModified")
    """The time when the resource was last modified."""


class ScimMetaDict(TypedDict):
    resource_type: NotRequired[str]
    created: NotRequired[RFC3339DateTime]
    last_modified: NotRequired[RFC3339DateTime]
