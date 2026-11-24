from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PaginationResponse(SdkBaseModel):
    """Information about current and next page for cursor based pagination"""

    end_cursor: str = Field(alias="endCursor")
    """Opaque string representing a cursor to the last record returned in the response. Used for requesting the next
    page."""

    has_next_page: bool = Field(alias="hasNextPage")
    """indicates if there is another page of data to fetch or not"""


class PaginationResponseDict(TypedDict):
    end_cursor: str
    has_next_page: bool
