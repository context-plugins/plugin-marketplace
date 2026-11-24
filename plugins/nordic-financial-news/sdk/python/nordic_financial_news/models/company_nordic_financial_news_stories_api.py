from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class CompanyNordicFinancialNewsStoriesApi(SdkBaseModel):
    id: Optional[str] = UNSET
    """Unique company identifier"""

    name: Optional[str] = UNSET
    """Company name"""

    ticker: OptionalNullable[str] = UNSET
    """Primary stock ticker"""


class CompanyNordicFinancialNewsStoriesApiDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    ticker: NotRequired[str | None]
