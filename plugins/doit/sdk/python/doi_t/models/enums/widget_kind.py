from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class WidgetKind(str, Enum):
    """Determines which property is populated in the widget's ``result``."""

    MONETARY_METRIC = "monetary_metric"

    __str__ = str.__str__


WidgetKindOrStr: TypeAlias = Annotated[WidgetKind | str, open_enum_validator(WidgetKind)]
