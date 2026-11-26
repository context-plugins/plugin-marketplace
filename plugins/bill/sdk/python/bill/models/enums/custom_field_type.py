from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomFieldType(str, Enum):
    """Enum representing the custom field kind in the Spend API."""

    CUSTOM_SELECTOR = "CUSTOM_SELECTOR"
    NOTE = "NOTE"

    __str__ = str.__str__


CustomFieldTypeOrStr: TypeAlias = Annotated[CustomFieldType | str, open_enum_validator(CustomFieldType)]
