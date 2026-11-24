from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Platform1(str, Enum):
    """The cloud platform."""

    GOOGLE_CLOUD = "google-cloud"
    AMAZON_WEB_SERVICES = "amazon-web-services"

    __str__ = str.__str__


Platform1OrStr: TypeAlias = Annotated[Platform1 | str, open_enum_validator(Platform1)]
