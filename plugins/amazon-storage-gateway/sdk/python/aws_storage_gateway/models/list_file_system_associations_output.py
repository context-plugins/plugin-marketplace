from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .file_system_association_summary import FileSystemAssociationSummary, FileSystemAssociationSummaryDict


class ListFileSystemAssociationsOutput(SdkBaseModel):
    marker: Optional[str] = Field(default=UNSET, alias="Marker")
    """If the request includes Marker, the response returns that value in this field."""

    next_marker: Optional[str] = Field(default=UNSET, alias="NextMarker")
    """If a value is present, there are more file system associations to return. In a subsequent request, use NextMarker
    as the value for Marker to retrieve the next set of file system associations."""

    file_system_association_summary_list: Optional[list[FileSystemAssociationSummary]] = Field(
        default=UNSET, alias="FileSystemAssociationSummaryList"
    )
    """An array of information about the Amazon FSx gateway's file system associations."""


class ListFileSystemAssociationsOutputDict(TypedDict):
    marker: NotRequired[str]
    next_marker: NotRequired[str]
    file_system_association_summary_list: NotRequired[list[FileSystemAssociationSummaryDict]]
