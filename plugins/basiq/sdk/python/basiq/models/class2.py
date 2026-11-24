from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Class2(SdkBaseModel):
    title: Optional[str] = UNSET
    """Class Details"""

    code: Optional[str] = UNSET
    """Class Code"""


class Class2Dict(TypedDict):
    title: NotRequired[str]
    code: NotRequired[str]
