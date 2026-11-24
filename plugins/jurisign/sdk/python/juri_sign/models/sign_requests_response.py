from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pagination import Pagination, PaginationDict
from .sign_request import SignRequest, SignRequestDict


class SignRequestsResponse(SdkBaseModel):
    data: Optional[list[SignRequest]] = UNSET
    meta: Optional[Pagination] = UNSET


class SignRequestsResponseDict(TypedDict):
    data: NotRequired[list[SignRequestDict]]
    meta: NotRequired[PaginationDict]
