from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class VehicleSeries(SdkBaseModel):
    """Canonical model-family / series resolved from the generation catalog."""

    key: OptionalNullable[str] = UNSET
    name: OptionalNullable[str] = UNSET


class VehicleSeriesDict(TypedDict):
    key: NotRequired[str | None]
    name: NotRequired[str | None]
