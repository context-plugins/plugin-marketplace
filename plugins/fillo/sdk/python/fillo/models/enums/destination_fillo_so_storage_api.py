from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DestinationFilloSoStorageApi(str, Enum):
    """The destination pinned on the form. ``none`` means the form follows the workspace default."""

    GDRIVE = "gdrive"
    BOX = "box"
    S3 = "s3"
    R2 = "r2"
    NONE = "none"

    __str__ = str.__str__


DestinationFilloSoStorageApiOrStr: TypeAlias = Annotated[
    DestinationFilloSoStorageApi | str, open_enum_validator(DestinationFilloSoStorageApi)
]
