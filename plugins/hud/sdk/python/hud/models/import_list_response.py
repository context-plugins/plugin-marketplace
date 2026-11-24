from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .import_response import ImportResponse, ImportResponseDict


class ImportListResponse(SdkBaseModel):
    imports: list[ImportResponse]
    total: int


class ImportListResponseDict(TypedDict):
    imports: list[ImportResponseDict]
    total: int
