from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data import Data, DataDict


class TasksBulkResponse(SdkBaseModel):
    data: Optional[Data] = UNSET
    message: Optional[str] = UNSET


class TasksBulkResponseDict(TypedDict):
    data: NotRequired[DataDict]
    message: NotRequired[str]
