from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CrawlResult(SdkBaseModel):
    title: str
    link: str
    content: str
    metadata: Optional[Any] = UNSET


class CrawlResultDict(TypedDict):
    title: str
    link: str
    content: str
    metadata: NotRequired[Any]
