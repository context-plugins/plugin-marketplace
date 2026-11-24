from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PropertyTypeGoogleAnalyticsAdminAccountSummariesApi(str, Enum):
    """The property's property type."""

    PROPERTY_TYPE_UNSPECIFIED = "PROPERTY_TYPE_UNSPECIFIED"
    PROPERTY_TYPE_ORDINARY = "PROPERTY_TYPE_ORDINARY"
    PROPERTY_TYPE_SUBPROPERTY = "PROPERTY_TYPE_SUBPROPERTY"
    PROPERTY_TYPE_ROLLUP = "PROPERTY_TYPE_ROLLUP"

    __str__ = str.__str__


PropertyTypeGoogleAnalyticsAdminAccountSummariesApiOrStr: TypeAlias = Annotated[
    PropertyTypeGoogleAnalyticsAdminAccountSummariesApi | str,
    open_enum_validator(PropertyTypeGoogleAnalyticsAdminAccountSummariesApi),
]
