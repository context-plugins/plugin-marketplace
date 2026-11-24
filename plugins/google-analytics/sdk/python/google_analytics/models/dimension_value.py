from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DimensionValue(SdkBaseModel):
    """The value of a dimension."""

    value: Optional[str] = UNSET
    """Value as a string if the dimension type is a string."""


class DimensionValueDict(TypedDict):
    value: NotRequired[str]
