from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status5 import Status5OrStr


class BuildBatchFilter(SdkBaseModel):
    status: Optional[Status5OrStr] = UNSET
    """The status of the batch builds to retrieve. Only batch builds that have this status will be retrieved."""


class BuildBatchFilterDict(TypedDict):
    status: NotRequired[Status5OrStr]
