from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ValueType(str, Enum):
    """Data type of the asset value"""

    TEXT = "Text"
    INTEGER = "Integer"
    BOOL = "Bool"
    CREDENTIAL = "Credential"
    WINDOWS_CREDENTIAL = "WindowsCredential"
    KEY_VALUE_LIST = "KeyValueList"

    __str__ = str.__str__


ValueTypeOrStr: TypeAlias = Annotated[ValueType | str, open_enum_validator(ValueType)]
