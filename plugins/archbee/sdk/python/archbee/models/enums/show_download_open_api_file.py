from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ShowDownloadOpenApiFile(str, Enum):
    """OPTIONAL. You can show/hide the download link of the imported Open API file in the Open API tree."""

    TRUE = "true"
    FALSE = "false"

    __str__ = str.__str__


ShowDownloadOpenApiFileOrStr: TypeAlias = Annotated[
    ShowDownloadOpenApiFile | str, open_enum_validator(ShowDownloadOpenApiFile)
]
