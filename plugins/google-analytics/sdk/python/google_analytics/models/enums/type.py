from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """Required. Immutable. The type of this DataStream resource."""

    DATA_STREAM_TYPE_UNSPECIFIED = "DATA_STREAM_TYPE_UNSPECIFIED"
    WEB_DATA_STREAM = "WEB_DATA_STREAM"
    ANDROID_APP_DATA_STREAM = "ANDROID_APP_DATA_STREAM"
    IOS_APP_DATA_STREAM = "IOS_APP_DATA_STREAM"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
