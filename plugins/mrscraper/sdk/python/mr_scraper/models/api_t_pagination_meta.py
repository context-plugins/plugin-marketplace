from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiTPaginationMeta(SdkBaseModel):
    page: Optional[int] = UNSET
    page_size: Optional[int] = Field(default=UNSET, alias="pageSize")
    total: Optional[int] = UNSET
    total_page: Optional[int] = Field(default=UNSET, alias="totalPage")


class ApiTPaginationMetaDict(TypedDict):
    page: NotRequired[int]
    page_size: NotRequired[int]
    total: NotRequired[int]
    total_page: NotRequired[int]
