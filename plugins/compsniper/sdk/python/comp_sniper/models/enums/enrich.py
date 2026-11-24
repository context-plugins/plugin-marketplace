from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Enrich(str, Enum):
    """Adds public seller location, approximate sold-count evidence, and average ship time. Sold date, listed date,
    colors, description, category, and condition are already returned when present in the native search response. This
    still uses one CompSniper request."""

    TRUE = "true"
    FALSE = "false"

    __str__ = str.__str__


EnrichOrStr: TypeAlias = Annotated[Enrich | str, open_enum_validator(Enrich)]
