from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .contact1 import Contact1, Contact1Dict
from .pagination import Pagination, PaginationDict


class ContactListResponse(SdkBaseModel):
    data: list[Contact1]
    pagination: Pagination


class ContactListResponseDict(TypedDict):
    data: list[Contact1Dict]
    pagination: PaginationDict
