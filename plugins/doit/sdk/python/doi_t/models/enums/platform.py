from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Platform(str, Enum):
    """The Cloud Platform."""

    GOOGLE_CLOUD = "google-cloud"
    AMAZON_WEB_SERVICES = "amazon-web-services"
    MICROSOFT_AZURE = "microsoft-azure"

    __str__ = str.__str__


PlatformOrStr: TypeAlias = Annotated[Platform | str, open_enum_validator(Platform)]
