from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortDimensions(str, Enum):
    """Orders the columns produced by ``dimensions``, both in the console and in a rendered ``fileOutput`` export. It
    does not reorder the ``rows`` of a JSON result. ``a_to_z`` orders the columns by the dimension value, which for the
    ``year``/``month``/``day`` dimensions of a time series means chronologically. The default ``desc`` orders them by
    the metric instead, so a monthly report charts its priciest month first rather than in time order — set ``a_to_z``
    for a time series you intend to export. A report with a forecast is always charted chronologically and ignores this
    field, and a comparative ``displayValues`` mode requires ``a_to_z``."""

    ASC = "asc"
    DESC = "desc"
    A_TO_Z = "a_to_z"

    __str__ = str.__str__


SortDimensionsOrStr: TypeAlias = Annotated[SortDimensions | str, open_enum_validator(SortDimensions)]
