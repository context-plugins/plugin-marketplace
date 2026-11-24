from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Resolved(str, Enum):
    """Where an upload would actually land right now — including Fillo's short-lived transit staging. null means uploads
    are blocked."""

    GDRIVE = "gdrive"
    S3 = "s3"
    BOX = "box"
    TRANSIT = "transit"

    __str__ = str.__str__


ResolvedOrStr: TypeAlias = Annotated[Resolved | str, open_enum_validator(Resolved)]
