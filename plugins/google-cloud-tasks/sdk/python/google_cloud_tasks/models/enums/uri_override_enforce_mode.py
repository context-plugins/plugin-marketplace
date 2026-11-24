from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class UriOverrideEnforceMode(str, Enum):
    """URI Override Enforce Mode When specified, determines the Target UriOverride mode. If not specified, it defaults
    to ALWAYS."""

    URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED = "URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED"
    IF_NOT_EXISTS = "IF_NOT_EXISTS"
    ALWAYS = "ALWAYS"

    __str__ = str.__str__


UriOverrideEnforceModeOrStr: TypeAlias = Annotated[
    UriOverrideEnforceMode | str, open_enum_validator(UriOverrideEnforceMode)
]
