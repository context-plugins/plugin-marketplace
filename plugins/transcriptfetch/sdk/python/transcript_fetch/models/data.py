from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .batch_result import BatchResult, BatchResultDict
from .enums.kind import KindOrStr


class Data(SdkBaseModel):
    kind: Optional[KindOrStr] = UNSET
    results: Optional[list[BatchResult]] = UNSET


class DataDict(TypedDict):
    kind: NotRequired[KindOrStr]
    results: NotRequired[list[BatchResultDict]]
