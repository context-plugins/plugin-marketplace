from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """The entity type. For entity detection using the built-in model, this field contains one of the standard entity
    types listed below. For custom entity detection, this field contains one of the entity types that you specified when
    you trained your custom model."""

    PERSON = "PERSON"
    LOCATION = "LOCATION"
    ORGANIZATION = "ORGANIZATION"
    COMMERCIAL_ITEM = "COMMERCIAL_ITEM"
    EVENT = "EVENT"
    DATE = "DATE"
    QUANTITY = "QUANTITY"
    TITLE = "TITLE"
    OTHER = "OTHER"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
