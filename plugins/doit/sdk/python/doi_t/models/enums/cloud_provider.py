from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CloudProvider(str, Enum):
    """The cloud provider associated with the commitment."""

    GOOGLE_CLOUD = "google-cloud"
    AMAZON_WEB_SERVICES = "amazon-web-services"
    MICROSOFT_AZURE = "microsoft-azure"

    __str__ = str.__str__


CloudProviderOrStr: TypeAlias = Annotated[CloudProvider | str, open_enum_validator(CloudProvider)]
