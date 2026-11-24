from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .include import Include, IncludeDict


class CompanyFilters(SdkBaseModel):
    include: Optional[Include] = UNSET
    exclude: Optional[Any] = UNSET
    """Same structure as include, for exclusion filters"""


class CompanyFiltersDict(TypedDict):
    include: NotRequired[IncludeDict]
    exclude: NotRequired[Any]
