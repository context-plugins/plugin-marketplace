from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """The cache instance type. Valid values are SMALL MEDIUM LARGE XLARGE LARGE_2X LARGE_4X LARGE_8X (not available in
    all regions) LARGE_12X Historically, instance types were identified by an EC2-style value. As of July 2020, this is
    deprecated, and the generic identifiers above should be used. The following legacy instance types are available, but
    their use is discouraged: T2_SMALL: A t2.small instance type. T2_MEDIUM: A t2.medium instance type. R4_LARGE: A
    r4.large instance type. R4_XLARGE: A r4.xlarge instance type. R4_2XLARGE: A r4.2xlarge instance type. R4_4XLARGE: A
    r4.4xlarge instance type."""

    T2_SMALL = "T2_SMALL"
    T2_MEDIUM = "T2_MEDIUM"
    R4_LARGE = "R4_LARGE"
    R4_XLARGE = "R4_XLARGE"
    R4_2_XLARGE = "R4_2XLARGE"
    R4_4_XLARGE = "R4_4XLARGE"
    R4_8_XLARGE = "R4_8XLARGE"
    SMALL = "SMALL"
    MEDIUM = "MEDIUM"
    LARGE = "LARGE"
    XLARGE = "XLARGE"
    LARGE_2_X = "LARGE_2X"
    LARGE_4_X = "LARGE_4X"
    LARGE_8_X = "LARGE_8X"
    LARGE_12_X = "LARGE_12X"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
