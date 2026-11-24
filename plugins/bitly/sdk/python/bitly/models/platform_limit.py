from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .method_limit import MethodLimit, MethodLimitDict


class PlatformLimit(SdkBaseModel):
    endpoint: Optional[str] = UNSET
    methods: Optional[list[MethodLimit]] = UNSET


class PlatformLimitDict(TypedDict):
    endpoint: NotRequired[str]
    methods: NotRequired[list[MethodLimitDict]]
