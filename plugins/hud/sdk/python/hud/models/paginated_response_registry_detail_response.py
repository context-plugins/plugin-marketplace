from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .registry_detail_response import RegistryDetailResponse, RegistryDetailResponseDict


class PaginatedResponseRegistryDetailResponse(SdkBaseModel):
    items: list[RegistryDetailResponse]
    total: int
    limit: int
    offset: int


class PaginatedResponseRegistryDetailResponseDict(TypedDict):
    items: list[RegistryDetailResponseDict]
    total: int
    limit: int
    offset: int
