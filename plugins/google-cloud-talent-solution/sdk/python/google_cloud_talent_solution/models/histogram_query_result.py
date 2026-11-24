from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HistogramQueryResult(SdkBaseModel):
    """Histogram result that matches HistogramQuery specified in searches."""

    histogram: Optional[dict[str, str]] = UNSET
    """A map from the values of the facet associated with distinct values to the number of matching entries with
    corresponding value. The key format is: * (for string histogram) string values stored in the field. * (for named
    numeric bucket) name specified in ``bucket()`` function, like for ``bucket(0, MAX, "non-negative")``, the key will
    be ``non-negative``. * (for anonymous numeric bucket) range formatted as ``-``, for example, ``0-1000``, ``MIN-0``,
    and ``0-MAX``."""

    histogram_query: Optional[str] = Field(default=UNSET, alias="histogramQuery")
    """Requested histogram expression."""


class HistogramQueryResultDict(TypedDict):
    histogram: NotRequired[dict[str, str]]
    histogram_query: NotRequired[str]
