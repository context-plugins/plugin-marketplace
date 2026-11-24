from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Links1ConnectConsentsApi(SdkBaseModel):
    self: Optional[str] = UNSET


class Links1ConnectConsentsApiDict(TypedDict):
    self: NotRequired[str]
