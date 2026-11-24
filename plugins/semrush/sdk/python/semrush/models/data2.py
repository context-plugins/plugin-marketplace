from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Data2(SdkBaseModel):
    """An object describes subscription status related to user"""

    active: Optional[bool] = UNSET
    """Does user subscribed on requested subscription"""


class Data2Dict(TypedDict):
    active: NotRequired[bool]
