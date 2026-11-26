from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Code1(SdkBaseModel):
    name: Optional[str] = UNSET
    """Name"""

    value: Optional[str] = UNSET
    """Value"""


class Code1Dict(TypedDict):
    name: NotRequired[str]
    value: NotRequired[str]
