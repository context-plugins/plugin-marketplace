from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RequireSso(str, Enum):
    """SSO authentication requirement for this organization. Possible values: "none", "any". Omitted when no auth
    requirements are configured."""

    NONE = "none"
    ANY = "any"

    __str__ = str.__str__


RequireSsoOrStr: TypeAlias = Annotated[RequireSso | str, open_enum_validator(RequireSso)]
