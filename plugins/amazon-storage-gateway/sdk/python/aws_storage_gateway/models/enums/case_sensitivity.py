from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CaseSensitivity(str, Enum):
    """The case of an object name in an Amazon S3 bucket. For ClientSpecified, the client determines the case
    sensitivity. For CaseSensitive, the gateway determines the case sensitivity. The default value is
    ClientSpecified."""

    CLIENT_SPECIFIED = "ClientSpecified"
    CASE_SENSITIVE = "CaseSensitive"

    __str__ = str.__str__


CaseSensitivityOrStr: TypeAlias = Annotated[CaseSensitivity | str, open_enum_validator(CaseSensitivity)]
