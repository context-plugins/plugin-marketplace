from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Filter2(SdkBaseModel):
    name: Optional[str] = UNSET
    """Name of the filter"""

    value: Optional[str] = UNSET


class Filter2Dict(TypedDict):
    name: NotRequired[str]
    value: NotRequired[str]
