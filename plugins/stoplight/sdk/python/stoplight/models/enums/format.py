from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Format(str, Enum):
    OAS_JSON = "oas.json"
    OAS_YAML = "oas.yaml"
    RAML08_YAML = "raml08.yaml"
    RAML10_YAML = "raml10.yaml"
    STOPLIGHT_JSON = "stoplight.json"
    STOPLIGHT_YAML = "stoplight.yaml"

    __str__ = str.__str__


FormatOrStr: TypeAlias = Annotated[Format | str, open_enum_validator(Format)]
