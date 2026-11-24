from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetApiV1ResultsResultidResponse(SdkBaseModel):
    status_code: Optional[int] = UNSET
    """HTTP status returned by the MrScraper service."""

    data: Optional[Any] = UNSET
    """Parsed JSON or response text supplied by the service."""

    headers: Optional[Any] = UNSET
    """Response headers with credential-bearing headers filtered out."""


class GetApiV1ResultsResultidResponseDict(TypedDict):
    status_code: NotRequired[int]
    data: NotRequired[Any]
    headers: NotRequired[Any]
