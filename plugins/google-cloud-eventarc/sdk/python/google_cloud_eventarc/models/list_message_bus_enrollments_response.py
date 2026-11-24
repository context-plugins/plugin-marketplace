from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListMessageBusEnrollmentsResponse(SdkBaseModel):
    """The response message for the ``ListMessageBusEnrollments`` method.`"""

    enrollments: Optional[list[str]] = UNSET
    """The requested enrollments, up to the number specified in ``page_size``."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A page token that can be sent to ``ListMessageBusEnrollments`` to request the next page. If this is empty, then
    there are no more pages."""

    unreachable: Optional[list[str]] = UNSET
    """Unreachable resources, if any."""


class ListMessageBusEnrollmentsResponseDict(TypedDict):
    enrollments: NotRequired[list[str]]
    next_page_token: NotRequired[str]
    unreachable: NotRequired[list[str]]
