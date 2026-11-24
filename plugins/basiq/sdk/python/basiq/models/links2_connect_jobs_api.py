from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Links2ConnectJobsApi(SdkBaseModel):
    self: Optional[str] = UNSET
    source: Optional[str] = UNSET


class Links2ConnectJobsApiDict(TypedDict):
    self: NotRequired[str]
    source: NotRequired[str]
