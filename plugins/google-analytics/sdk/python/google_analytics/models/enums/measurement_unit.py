from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MeasurementUnit(str, Enum):
    """Required. The type for the custom metric's value."""

    MEASUREMENT_UNIT_UNSPECIFIED = "MEASUREMENT_UNIT_UNSPECIFIED"
    STANDARD = "STANDARD"
    CURRENCY = "CURRENCY"
    FEET = "FEET"
    METERS = "METERS"
    KILOMETERS = "KILOMETERS"
    MILES = "MILES"
    MILLISECONDS = "MILLISECONDS"
    SECONDS = "SECONDS"
    MINUTES = "MINUTES"
    HOURS = "HOURS"

    __str__ = str.__str__


MeasurementUnitOrStr: TypeAlias = Annotated[MeasurementUnit | str, open_enum_validator(MeasurementUnit)]
