from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data import Data, DataDict
from .meta import Meta, MetaDict


class V1BuildingsByUrlResponse(SdkBaseModel):
    data: Optional[Data] = UNSET
    meta: Optional[Meta] = UNSET
    request_id: Optional[str] = UNSET


class V1BuildingsByUrlResponseDict(TypedDict):
    data: NotRequired[DataDict]
    meta: NotRequired[MetaDict]
    request_id: NotRequired[str]
