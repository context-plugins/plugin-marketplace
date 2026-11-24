from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeShortcutLinkedFilesApi(str, Enum):
    """The integration type of the file (e.g. google, dropbox, box)."""

    GOOGLE = "google"
    URL = "url"
    DROPBOX = "dropbox"
    BOX = "box"
    ONEDRIVE = "onedrive"

    __str__ = str.__str__


TypeShortcutLinkedFilesApiOrStr: TypeAlias = Annotated[
    TypeShortcutLinkedFilesApi | str, open_enum_validator(TypeShortcutLinkedFilesApi)
]
