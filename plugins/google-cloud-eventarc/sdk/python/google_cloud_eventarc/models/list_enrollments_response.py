from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enrollment import Enrollment, EnrollmentDict


class ListEnrollmentsResponse(SdkBaseModel):
    """The response message for the ``ListEnrollments`` method."""

    enrollments: Optional[list[Enrollment]] = UNSET
    """The requested Enrollments, up to the number specified in ``page_size``."""

    unreachable: Optional[list[str]] = UNSET
    """Unreachable resources, if any."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A page token that can be sent to ``ListEnrollments`` to request the next page. If this is empty, then there are
    no more pages."""


class ListEnrollmentsResponseDict(TypedDict):
    enrollments: NotRequired[list[EnrollmentDict]]
    unreachable: NotRequired[list[str]]
    next_page_token: NotRequired[str]
