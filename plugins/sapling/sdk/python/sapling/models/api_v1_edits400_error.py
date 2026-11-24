from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1Edits400Error(SdkBaseModel):
    msg: Optional[str] = UNSET
    """Human-readable error message."""


class ApiV1Edits400ErrorDict(TypedDict):
    msg: NotRequired[str]
