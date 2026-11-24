from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class ParentCompany(SdkBaseModel):
    """Parent company, if this is a subsidiary"""

    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    ticker: OptionalNullable[str] = UNSET


class ParentCompanyDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    ticker: NotRequired[str | None]
