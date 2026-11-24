from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Member1(SdkBaseModel):
    value: Optional[str] = UNSET
    """The ID of the member user."""


class Member1Dict(TypedDict):
    value: NotRequired[str]
