from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .file_share_info import FileShareInfo, FileShareInfoDict


class ListFileSharesOutput(SdkBaseModel):
    marker: Optional[str] = Field(default=UNSET, alias="Marker")
    """If the request includes Marker, the response returns that value in this field."""

    next_marker: Optional[str] = Field(default=UNSET, alias="NextMarker")
    """If a value is present, there are more file shares to return. In a subsequent request, use NextMarker as the value
    for Marker to retrieve the next set of file shares."""

    file_share_info_list: Optional[list[FileShareInfo]] = Field(default=UNSET, alias="FileShareInfoList")
    """An array of information about the S3 File Gateway's file shares."""


class ListFileSharesOutputDict(TypedDict):
    marker: NotRequired[str]
    next_marker: NotRequired[str]
    file_share_info_list: NotRequired[list[FileShareInfoDict]]
