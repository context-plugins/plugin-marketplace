from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .adaptive_mt_file import AdaptiveMtFile, AdaptiveMtFileDict


class ListAdaptiveMtFilesResponse(SdkBaseModel):
    """The response for listing all AdaptiveMt files under a given dataset."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Optional. A token to retrieve a page of results. Pass this value in the ListAdaptiveMtFilesRequest.page_token
    field in the subsequent call to ``ListAdaptiveMtFiles`` method to retrieve the next page of results."""

    adaptive_mt_files: Optional[list[AdaptiveMtFile]] = Field(default=UNSET, alias="adaptiveMtFiles")
    """Output only. The Adaptive MT files."""


class ListAdaptiveMtFilesResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    adaptive_mt_files: NotRequired[list[AdaptiveMtFileDict]]
