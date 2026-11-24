from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AdaptiveMtFile2(SdkBaseModel):
    """Output only. The Adaptive MT file that was imported."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Timestamp when this file was created."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. Timestamp when this file was last updated."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """The file's display name."""

    name: Optional[str] = UNSET
    """Identifier. The resource name of the file, in form of
    ``projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}``"""

    entry_count: Optional[int] = Field(default=UNSET, alias="entryCount")
    """The number of entries that the file contains."""


class AdaptiveMtFile2Dict(TypedDict):
    create_time: NotRequired[str]
    update_time: NotRequired[str]
    display_name: NotRequired[str]
    name: NotRequired[str]
    entry_count: NotRequired[int]
