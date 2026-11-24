from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Subclass1(SdkBaseModel):
    title: Optional[str] = UNSET
    """SubClass Details"""

    code: Optional[str] = UNSET
    """SubClass Code"""


class Subclass1Dict(TypedDict):
    title: NotRequired[str]
    code: NotRequired[str]
