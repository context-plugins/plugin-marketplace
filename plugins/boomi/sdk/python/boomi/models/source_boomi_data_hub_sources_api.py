from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class SourceBoomiDataHubSourcesApi(SdkBaseModel):
    """A data source that contributes records to the master data hub."""

    id: Optional[str] = UNSET
    """Unique identifier of the source."""

    name: Optional[str] = UNSET
    """Display name of the source."""

    description: Optional[str] = UNSET
    """Human-readable description of the source system."""

    created_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdDate")
    """Timestamp when the source was created."""


class SourceBoomiDataHubSourcesApiDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    created_date: NotRequired[RFC3339DateTime]
