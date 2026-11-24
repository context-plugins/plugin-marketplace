from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.object import Object, ObjectDict


class PaginatedPipelineScheduleExecutions(SdkBaseModel):
    """A paged list of the executions of a schedule."""

    page: Optional[int] = UNSET
    """Page number of the current results. This is an optional element that is not provided in all responses."""

    values: Optional[list[Object]] = UNSET
    """The values of the current page."""

    size: Optional[int] = UNSET
    """Total number of objects in the response. This is an optional element that is not provided in all responses, as it
    can be expensive to compute."""

    pagelen: Optional[int] = UNSET
    """Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value.
    Individual APIs may enforce different values."""

    next: Optional[str] = UNSET
    """Link to the next page if it exists. The last page of a collection does not have this value. Use this link to
    navigate the result set and refrain from constructing your own URLs."""

    previous: Optional[str] = UNSET
    """Link to previous page if it exists. A collections first page does not have this value. This is an optional
    element that is not provided in all responses. Some result sets strictly support forward navigation and never
    provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to
    navigate the result set and refrain from constructing your own URLs."""


class PaginatedPipelineScheduleExecutionsDict(TypedDict):
    page: NotRequired[int]
    values: NotRequired[list[ObjectDict]]
    size: NotRequired[int]
    pagelen: NotRequired[int]
    next: NotRequired[str]
    previous: NotRequired[str]
