from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bulk_template import BulkTemplate, BulkTemplateDict
from .pagination import Pagination, PaginationDict


class BulkTemplatesResponse(SdkBaseModel):
    data: Optional[list[BulkTemplate]] = UNSET
    meta: Optional[Pagination] = UNSET


class BulkTemplatesResponseDict(TypedDict):
    data: NotRequired[list[BulkTemplateDict]]
    meta: NotRequired[PaginationDict]
