from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExtractionMethod(str, Enum):
    """PAGINATION (default, up to ~820 results); MAP_MARKERS (fastest, up to ~500, less data per row);
    PAGINATION_WITH_ZOOM_IN (exhaustive recursive zoom, always runs async)."""

    PAGINATION_WITH_ZOOM_IN = "PAGINATION_WITH_ZOOM_IN"
    PAGINATION = "PAGINATION"
    MAP_MARKERS = "MAP_MARKERS"

    __str__ = str.__str__


ExtractionMethodOrStr: TypeAlias = Annotated[ExtractionMethod | str, open_enum_validator(ExtractionMethod)]
