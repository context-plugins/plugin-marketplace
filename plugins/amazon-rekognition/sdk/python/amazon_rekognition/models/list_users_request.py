from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListUsersRequest(SdkBaseModel):
    collection_id: str = Field(alias="CollectionId")
    """The ID of an existing collection."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """Maximum number of UsersID to return."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Pagingation token to receive the next set of UsersID."""


class ListUsersRequestDict(TypedDict):
    collection_id: str
    max_results: NotRequired[int]
    next_token: NotRequired[str]
