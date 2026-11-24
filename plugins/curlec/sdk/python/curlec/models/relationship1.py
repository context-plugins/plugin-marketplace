from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Relationship1(SdkBaseModel):
    director: Optional[bool] = UNSET
    executive: Optional[bool] = UNSET


class Relationship1Dict(TypedDict):
    director: NotRequired[bool]
    executive: NotRequired[bool]
