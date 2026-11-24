from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .diff_stat import DiffStat, DiffStatDict


class PaginatedDiffStat(SdkBaseModel):
    """A paginated list of diffstats."""

    model_config = ConfigDict(extra="forbid")

    size: Optional[int] = UNSET
    """Total number of objects in the response. This is an optional element that is not provided in all responses, as it
    can be expensive to compute."""

    page: Optional[int] = UNSET
    """Page number of the current results. This is an optional element that is not provided in all responses."""

    pagelen: Optional[int] = UNSET
    """Current number of objects on the existing page. The default value is 500 with 5000 being the maximum allowed
    value."""

    next: Optional[str] = UNSET
    """Link to the next page if it exists. The last page of a collection does not have this value. Use this link to
    navigate the result set and refrain from constructing your own URLs."""

    previous: Optional[str] = UNSET
    """Link to previous page if it exists. A collections first page does not have this value. This is an optional
    element that is not provided in all responses. Some result sets strictly support forward navigation and never
    provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to
    navigate the result set and refrain from constructing your own URLs."""

    values: Optional[list[DiffStat]] = UNSET


class PaginatedDiffStatDict(TypedDict):
    size: NotRequired[int]
    page: NotRequired[int]
    pagelen: NotRequired[int]
    next: NotRequired[str]
    previous: NotRequired[str]
    values: NotRequired[list[DiffStatDict]]
