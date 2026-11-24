from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Process(SdkBaseModel):
    """A Boomi integration process that defines automated data flows between systems."""

    id: Optional[str] = UNSET
    """Unique identifier of the process (component ID)."""

    name: Optional[str] = UNSET
    """Display name of the integration process."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Component type, always 'process' for integration processes."""

    folder_id: Optional[str] = Field(default=UNSET, alias="folderId")
    """ID of the folder containing this process."""

    deleted: Optional[bool] = UNSET
    """Whether this process has been deleted."""

    current_version: Optional[str] = Field(default=UNSET, alias="currentVersion")
    """Current version identifier of the process."""

    created_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdDate")
    """Timestamp when the process was created."""

    modified_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="modifiedDate")
    """Timestamp when the process was last modified."""


class ProcessDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    type_: NotRequired[str]
    folder_id: NotRequired[str]
    deleted: NotRequired[bool]
    current_version: NotRequired[str]
    created_date: NotRequired[RFC3339DateTime]
    modified_date: NotRequired[RFC3339DateTime]
