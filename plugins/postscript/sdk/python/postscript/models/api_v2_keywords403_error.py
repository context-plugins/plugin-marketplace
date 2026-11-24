from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV2Keywords403Error(SdkBaseModel):
    error: Optional[str] = UNSET


class ApiV2Keywords403ErrorDict(TypedDict):
    error: NotRequired[str]
