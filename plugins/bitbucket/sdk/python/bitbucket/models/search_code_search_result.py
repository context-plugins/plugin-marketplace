from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .commit_file import CommitFile, CommitFileDict
from .search_content_match import SearchContentMatch, SearchContentMatchDict
from .search_segment import SearchSegment, SearchSegmentDict


class SearchCodeSearchResult(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    content_match_count: Optional[int] = UNSET
    content_matches: Optional[list[SearchContentMatch]] = UNSET
    path_matches: Optional[list[SearchSegment]] = UNSET
    file: Optional[CommitFile] = UNSET
    """A file object, representing a file at a commit in a repository"""


class SearchCodeSearchResultDict(TypedDict):
    type_: NotRequired[str]
    content_match_count: NotRequired[int]
    content_matches: NotRequired[list[SearchContentMatchDict]]
    path_matches: NotRequired[list[SearchSegmentDict]]
    file: NotRequired[CommitFileDict]
