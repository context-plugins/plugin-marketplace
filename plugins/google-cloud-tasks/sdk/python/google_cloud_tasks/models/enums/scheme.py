from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Scheme(str, Enum):
    """Scheme override. When specified, the task URI scheme is replaced by the provided value (HTTP or HTTPS)."""

    SCHEME_UNSPECIFIED = "SCHEME_UNSPECIFIED"
    HTTP = "HTTP"
    HTTPS = "HTTPS"

    __str__ = str.__str__


SchemeOrStr: TypeAlias = Annotated[Scheme | str, open_enum_validator(Scheme)]
