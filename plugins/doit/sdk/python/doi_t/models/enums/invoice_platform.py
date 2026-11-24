from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InvoicePlatform(str, Enum):
    """Platform identifier for invoice source."""

    GOOGLE_CLOUD = "google-cloud"
    AMAZON_WEB_SERVICES = "amazon-web-services"
    MICROSOFT_AZURE = "microsoft-azure"
    G_SUITE = "g-suite"
    OFFICE_365 = "office-365"
    SUPERQUERY = "superquery"
    LOOKER = "looker"
    NAVIGATOR = "navigator"
    SOLVE = "solve"

    __str__ = str.__str__


InvoicePlatformOrStr: TypeAlias = Annotated[InvoicePlatform | str, open_enum_validator(InvoicePlatform)]
