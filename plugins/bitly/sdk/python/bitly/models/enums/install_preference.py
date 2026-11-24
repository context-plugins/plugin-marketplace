from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InstallPreference(str, Enum):
    NO_INSTALL = "no_install"
    AUTO_INSTALL = "auto_install"
    PROMOTE_INSTALL = "promote_install"

    __str__ = str.__str__


InstallPreferenceOrStr: TypeAlias = Annotated[InstallPreference | str, open_enum_validator(InstallPreference)]
