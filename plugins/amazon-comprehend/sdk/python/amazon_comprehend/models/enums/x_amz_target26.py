from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget26(str, Enum):
    COMPREHEND_20171127_UPDATE_ENDPOINT = "Comprehend_20171127.UpdateEndpoint"

    __str__ = str.__str__


XAmzTarget26OrStr: TypeAlias = Annotated[XAmzTarget26 | str, open_enum_validator(XAmzTarget26)]
