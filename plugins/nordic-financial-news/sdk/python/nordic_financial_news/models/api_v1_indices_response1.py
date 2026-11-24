from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .index_detail import IndexDetail, IndexDetailDict


class ApiV1IndicesResponse1(SdkBaseModel):
    index: IndexDetail


class ApiV1IndicesResponse1Dict(TypedDict):
    index: IndexDetailDict
