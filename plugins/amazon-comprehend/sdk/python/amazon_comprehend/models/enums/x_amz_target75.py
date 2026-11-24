from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget75(str, Enum):
    COMPREHEND_20171127_IMPORT_MODEL = "Comprehend_20171127.ImportModel"

    __str__ = str.__str__


XAmzTarget75OrStr: TypeAlias = Annotated[XAmzTarget75 | str, open_enum_validator(XAmzTarget75)]
