from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.unit import UnitOrStr


class AppEvent1(SdkBaseModel):
    unit: Optional[UnitOrStr] = UNSET
    """Specifies the unit represented by the value field. **Mutually exclusive with currency.**"""

    currency: str
    """ISO 4217 currency for the value field. **Mutually exclusive with unit.**"""

    id: Optional[UUID] = UNSET
    """Globally unique id of the event."""

    event: Optional[str] = UNSET
    """name of the event, e.g. level_success."""

    dimensions: Optional[dict[str, str]] = UNSET
    """additional information about the event. Can contain any key for dimensions."""

    value: Optional[float] = UNSET
    """Specifies the numerical value for the set unit/currency, eg 1004 milliseconds, 1 count, or 5.99 USD. If both Unit
    and Currency are not set, value is always set to 0."""

    country_code: Optional[str] = Field(default=UNSET, alias="countryCode")
    """ISO 3166-1 alpha-2 country code of where the event happened"""

    happened_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="happenedAt")
    """when did the event happen?"""


class AppEvent1Dict(TypedDict):
    unit: NotRequired[UnitOrStr]
    currency: str
    id: NotRequired[UUID]
    event: NotRequired[str]
    dimensions: NotRequired[dict[str, str]]
    value: NotRequired[float]
    country_code: NotRequired[str]
    happened_at: NotRequired[RFC3339DateTime]
