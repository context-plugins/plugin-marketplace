from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Scope(str, Enum):
    """Required. The scope of the attribute. It represents the resource in the API Hub to which the attribute can be
    linked."""

    SCOPE_UNSPECIFIED = "SCOPE_UNSPECIFIED"
    API = "API"
    VERSION = "VERSION"
    SPEC = "SPEC"
    API_OPERATION = "API_OPERATION"
    DEPLOYMENT = "DEPLOYMENT"
    DEPENDENCY = "DEPENDENCY"
    DEFINITION = "DEFINITION"
    EXTERNAL_API = "EXTERNAL_API"
    PLUGIN = "PLUGIN"

    __str__ = str.__str__


ScopeOrStr: TypeAlias = Annotated[Scope | str, open_enum_validator(Scope)]
