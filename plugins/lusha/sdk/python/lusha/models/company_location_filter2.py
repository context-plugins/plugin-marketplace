from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompanyLocationFilter2(SdkBaseModel):
    """Site-level office location filter. At least ``country`` is required."""

    country: str
    state: Optional[str] = UNSET


class CompanyLocationFilter2Dict(TypedDict):
    country: str
    state: NotRequired[str]
