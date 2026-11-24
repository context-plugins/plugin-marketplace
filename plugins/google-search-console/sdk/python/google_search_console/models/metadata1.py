from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Metadata1(SdkBaseModel):
    """An object that may be returned with your query results, providing context about the state of the data. See
    details in Metadata object documentation."""

    first_incomplete_date: Optional[str] = Field(default=UNSET, alias="firstIncompleteDate")
    """The first date for which the data is still being collected and processed, presented in ``YYYY-MM-DD`` format
    (ISO-8601 extended local date format). This field is populated only when the request's ``dataState`` is "``all``",
    data is grouped by "``DATE``", and the requested date range contains incomplete data points. All values after the
    ``first_incomplete_date`` may still change noticeably."""

    first_incomplete_hour: Optional[str] = Field(default=UNSET, alias="firstIncompleteHour")
    """The first hour for which the data is still being collected and processed, presented in
    ``YYYY-MM-DDThh:mm:ss[+|-]hh:mm`` format (ISO-8601 extended offset date-time format). This field is populated only
    when the request's ``dataState`` is "``hourly_all``", data is grouped by "``HOUR``" and the requested date range
    contains incomplete data points. All values after the ``first_incomplete_hour`` may still change noticeably."""


class Metadata1Dict(TypedDict):
    first_incomplete_date: NotRequired[str]
    first_incomplete_hour: NotRequired[str]
