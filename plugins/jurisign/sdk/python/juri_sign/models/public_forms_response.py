from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pagination import Pagination, PaginationDict
from .public_form import PublicForm, PublicFormDict


class PublicFormsResponse(SdkBaseModel):
    data: Optional[list[PublicForm]] = UNSET
    meta: Optional[Pagination] = UNSET


class PublicFormsResponseDict(TypedDict):
    data: NotRequired[list[PublicFormDict]]
    meta: NotRequired[PaginationDict]
