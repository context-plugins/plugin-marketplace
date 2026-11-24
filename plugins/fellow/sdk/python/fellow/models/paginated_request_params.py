from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class PaginatedRequestParams(SdkBaseModel):
    """Parameters sent in a request to paginate a queryset."""

    cursor: OptionalNullable[str] = UNSET
    page_size: int = 20


class PaginatedRequestParamsDict(TypedDict):
    cursor: NotRequired[str | None]
    page_size: NotRequired[int]
