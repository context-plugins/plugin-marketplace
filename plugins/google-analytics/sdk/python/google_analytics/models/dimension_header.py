from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DimensionHeader(SdkBaseModel):
    """Describes a dimension column in the report. Dimensions requested in a report produce column entries within rows
    and DimensionHeaders. However, dimensions used exclusively within filters or expressions do not produce columns in a
    report; correspondingly, those dimensions do not produce headers."""

    name: Optional[str] = UNSET
    """The dimension's name."""


class DimensionHeaderDict(TypedDict):
    name: NotRequired[str]
