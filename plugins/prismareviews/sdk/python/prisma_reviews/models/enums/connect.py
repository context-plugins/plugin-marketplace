from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Connect(str, Enum):
    """How ``POST /v1/connections`` connects it."""

    OAUTH = "oauth"
    CREDENTIALS = "credentials"
    LISTING_URL = "listing_url"

    __str__ = str.__str__


ConnectOrStr: TypeAlias = Annotated[Connect | str, open_enum_validator(Connect)]
