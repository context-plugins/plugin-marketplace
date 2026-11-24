from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PaginationBundleSocialOrganizationApi(SdkBaseModel):
    page: float
    page_size: float = Field(alias="pageSize")
    total: float
    total_pages: float = Field(alias="totalPages")


class PaginationBundleSocialOrganizationApiDict(TypedDict):
    page: float
    page_size: float
    total: float
    total_pages: float
