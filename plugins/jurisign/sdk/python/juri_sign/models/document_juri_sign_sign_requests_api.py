from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DocumentJuriSignSignRequestsApi(SdkBaseModel):
    id: Optional[UUID] = UNSET
    title: Optional[str] = UNSET
    page_count: Optional[int] = UNSET


class DocumentJuriSignSignRequestsApiDict(TypedDict):
    id: NotRequired[UUID]
    title: NotRequired[str]
    page_count: NotRequired[int]
