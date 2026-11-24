from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PropertyType(str, Enum):
    """Immutable. The property type for this Property resource. When creating a property, if the type is
    "PROPERTY_TYPE_UNSPECIFIED", then "ORDINARY_PROPERTY" will be implied."""

    PROPERTY_TYPE_UNSPECIFIED = "PROPERTY_TYPE_UNSPECIFIED"
    PROPERTY_TYPE_ORDINARY = "PROPERTY_TYPE_ORDINARY"
    PROPERTY_TYPE_SUBPROPERTY = "PROPERTY_TYPE_SUBPROPERTY"
    PROPERTY_TYPE_ROLLUP = "PROPERTY_TYPE_ROLLUP"

    __str__ = str.__str__


PropertyTypeOrStr: TypeAlias = Annotated[PropertyType | str, open_enum_validator(PropertyType)]
