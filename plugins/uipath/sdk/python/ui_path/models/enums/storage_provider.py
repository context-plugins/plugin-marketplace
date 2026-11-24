from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StorageProvider(str, Enum):
    """Cloud storage backend provider"""

    UI_PATH = "UiPath"
    AZURE = "Azure"
    AMAZON = "Amazon"
    MINIO = "Minio"

    __str__ = str.__str__


StorageProviderOrStr: TypeAlias = Annotated[StorageProvider | str, open_enum_validator(StorageProvider)]
