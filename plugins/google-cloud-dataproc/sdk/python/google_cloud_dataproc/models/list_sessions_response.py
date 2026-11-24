from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .session import Session, SessionDict


class ListSessionsResponse(SdkBaseModel):
    """A list of interactive sessions."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as page_token, to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    sessions: Optional[list[Session]] = UNSET
    """Output only. The sessions from the specified collection."""


class ListSessionsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    sessions: NotRequired[list[SessionDict]]
