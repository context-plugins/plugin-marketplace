from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Retention(SdkBaseModel):
    result_until: Optional[str] = UNSET
    message_stored: Optional[bool] = UNSET


class RetentionDict(TypedDict):
    result_until: NotRequired[str]
    message_stored: NotRequired[bool]
