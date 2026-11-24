from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.association_tier import AssociationTierOrStr


class Company(SdkBaseModel):
    id: str
    """Unique company identifier"""

    name: str
    """Company name"""

    ticker: OptionalNullable[str] = UNSET
    """Primary stock ticker"""

    is_primary: bool
    """Whether this company is the primary subject of the article"""

    association_tier: AssociationTierOrStr
    """How the company relates to the article. ``principal`` (subject, partner, investor, competitor) is the default
    set; ``peripheral`` (source, advisor, passing mention) appears only when ``include_peripheral=true``. Always
    present."""


class CompanyDict(TypedDict):
    id: str
    name: str
    ticker: NotRequired[str | None]
    is_primary: bool
    association_tier: AssociationTierOrStr
