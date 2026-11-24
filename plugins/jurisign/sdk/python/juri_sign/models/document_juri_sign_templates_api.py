from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DocumentJuriSignTemplatesApi(SdkBaseModel):
    title: Optional[str] = UNSET
    original_filename: Optional[str] = UNSET
    page_count: Optional[int] = UNSET


class DocumentJuriSignTemplatesApiDict(TypedDict):
    title: NotRequired[str]
    original_filename: NotRequired[str]
    page_count: NotRequired[int]
