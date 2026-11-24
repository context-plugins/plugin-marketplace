from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StartScanRequest(SdkBaseModel):
    """Body for POST /api/v1/scans."""

    url: str
    page_limit: Optional[int] = Field(default=UNSET, alias="pageLimit")


class StartScanRequestDict(TypedDict):
    url: str
    page_limit: NotRequired[int]
