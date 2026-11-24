from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CompanyCountResponse(SdkBaseModel):
    count: int
    """Number of companies matching the filters."""


class CompanyCountResponseDict(TypedDict):
    count: int
