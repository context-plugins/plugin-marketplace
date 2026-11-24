from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Odometer(SdkBaseModel):
    """Source-backed odometer readings in miles and kilometres. Missing readings may be null; unknown mileage is not
    zero."""

    mi: OptionalNullable[float] = UNSET
    km: OptionalNullable[float] = UNSET


class OdometerDict(TypedDict):
    mi: NotRequired[float | None]
    km: NotRequired[float | None]
