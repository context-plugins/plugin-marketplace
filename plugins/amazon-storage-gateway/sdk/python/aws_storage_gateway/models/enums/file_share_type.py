from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FileShareType(str, Enum):
    NFS = "NFS"
    SMB = "SMB"

    __str__ = str.__str__


FileShareTypeOrStr: TypeAlias = Annotated[FileShareType | str, open_enum_validator(FileShareType)]
