from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Result(SdkBaseModel):
    status: Optional[str] = UNSET
    external_id: Optional[str] = UNSET
    data: Optional[Any] = UNSET


class ResultDict(TypedDict):
    status: NotRequired[str]
    external_id: NotRequired[str]
    data: NotRequired[Any]
