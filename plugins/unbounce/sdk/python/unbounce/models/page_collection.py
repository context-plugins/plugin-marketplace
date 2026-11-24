from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .page import Page, PageDict


class PageCollection(SdkBaseModel):
    pages: Optional[list[Page]] = UNSET


class PageCollectionDict(TypedDict):
    pages: NotRequired[list[PageDict]]
