from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ValueCountContentDto(SdkBaseModel):
    count: Optional[int] = UNSET
    value: Optional[Any] = UNSET


class ValueCountContentDtoDict(TypedDict):
    count: NotRequired[int]
    value: NotRequired[Any]
