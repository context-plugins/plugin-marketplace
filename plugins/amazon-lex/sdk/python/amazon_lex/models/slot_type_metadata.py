from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class SlotTypeMetadata(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the slot type."""

    description: Optional[str] = UNSET
    """A description of the slot type."""

    last_updated_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDate")
    """The date that the slot type was updated. When you create a resource, the creation date and last updated date are
    the same."""

    created_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdDate")
    """The date that the slot type was created."""

    version: Optional[str] = UNSET
    """The version of the slot type."""


class SlotTypeMetadataDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    last_updated_date: NotRequired[RFC3339DateTime]
    created_date: NotRequired[RFC3339DateTime]
    version: NotRequired[str]
