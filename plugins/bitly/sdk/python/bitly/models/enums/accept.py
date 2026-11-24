from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Accept(str, Enum):
    APPLICATION_JSON = "application/json"
    IMAGE_SVG_XML = "image/svg+xml"
    IMAGE_PNG = "image/png"

    __str__ = str.__str__


AcceptOrStr: TypeAlias = Annotated[Accept | str, open_enum_validator(Accept)]
