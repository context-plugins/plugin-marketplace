from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class PaginationParams(SdkBaseModel):
    page: float = 0.0
    """Page number (0-1000)"""

    size: float = 20.0
    """Page size (10-50)"""


class PaginationParamsDict(TypedDict):
    page: NotRequired[float]
    size: NotRequired[float]
