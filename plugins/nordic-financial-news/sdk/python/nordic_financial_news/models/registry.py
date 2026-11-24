from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .share_capital import ShareCapital, ShareCapitalDict


class Registry(SdkBaseModel):
    """Official company registry data from Nordic registries (e.g. Bolagsverket, PRH). Null if no registry data
    exists."""

    source: OptionalNullable[str] = UNSET
    """Name of the official registry"""

    registered_name: OptionalNullable[str] = UNSET
    """Official registered company name"""

    company_form: OptionalNullable[str] = UNSET
    """Legal form of the company"""

    city: OptionalNullable[str] = UNSET
    """Registered city"""

    founded: OptionalNullable[str] = UNSET
    """Founding or registration date"""

    employees: OptionalNullable[int] = UNSET
    """Number of employees"""

    industry: OptionalNullable[str] = UNSET
    """Industry classification from registry"""

    bankruptcy: OptionalNullable[bool] = UNSET
    """Whether the company is in bankruptcy proceedings"""

    under_liquidation: OptionalNullable[bool] = UNSET
    """Whether the company is under liquidation"""

    share_capital: OptionalNullable[ShareCapital] = UNSET
    """Registered share capital"""

    institutional_sector: OptionalNullable[str] = UNSET
    """Institutional sector classification"""

    deregistered_at: OptionalNullable[str] = UNSET
    """Date the company was deregistered, if applicable"""

    deregistration_reason: OptionalNullable[str] = UNSET
    """Reason for deregistration"""


class RegistryDict(TypedDict):
    source: NotRequired[str | None]
    registered_name: NotRequired[str | None]
    company_form: NotRequired[str | None]
    city: NotRequired[str | None]
    founded: NotRequired[str | None]
    employees: NotRequired[int | None]
    industry: NotRequired[str | None]
    bankruptcy: NotRequired[bool | None]
    under_liquidation: NotRequired[bool | None]
    share_capital: NotRequired[ShareCapitalDict | None]
    institutional_sector: NotRequired[str | None]
    deregistered_at: NotRequired[str | None]
    deregistration_reason: NotRequired[str | None]
