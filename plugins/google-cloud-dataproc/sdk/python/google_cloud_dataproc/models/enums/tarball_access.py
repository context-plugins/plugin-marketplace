from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TarballAccess(str, Enum):
    """Optional. (Optional) The access type to the diagnostic tarball. If not specified, falls back to default access of
    the bucket"""

    TARBALL_ACCESS_UNSPECIFIED = "TARBALL_ACCESS_UNSPECIFIED"
    GOOGLE_CLOUD_SUPPORT = "GOOGLE_CLOUD_SUPPORT"
    GOOGLE_DATAPROC_DIAGNOSE = "GOOGLE_DATAPROC_DIAGNOSE"

    __str__ = str.__str__


TarballAccessOrStr: TypeAlias = Annotated[TarballAccess | str, open_enum_validator(TarballAccess)]
