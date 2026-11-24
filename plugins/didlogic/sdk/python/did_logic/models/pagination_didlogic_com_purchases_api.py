from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PaginationDidlogicComPurchasesApi(SdkBaseModel):
    pages: int
    page: int
    total_records: int
    per_page: int


class PaginationDidlogicComPurchasesApiDict(TypedDict):
    pages: int
    page: int
    total_records: int
    per_page: int
