from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Platform2(str, Enum):
    """Ticket platform."""

    DOIT = "doit"
    GOOGLE_CLOUD_PLATFORM = "google_cloud_platform"
    AMAZON_WEB_SERVICES = "amazon_web_services"
    MICROSOFT_AZURE = "microsoft_azure"

    __str__ = str.__str__


Platform2OrStr: TypeAlias = Annotated[Platform2 | str, open_enum_validator(Platform2)]
