from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusArchbeePublicFileManagerApi(str, Enum):
    """Response Status"""

    OK = "OK"
    NOT_OK = "Not OK"

    __str__ = str.__str__


StatusArchbeePublicFileManagerApiOrStr: TypeAlias = Annotated[
    StatusArchbeePublicFileManagerApi | str, open_enum_validator(StatusArchbeePublicFileManagerApi)
]
