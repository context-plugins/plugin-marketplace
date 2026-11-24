from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IdentityScope(str, Enum):
    ISSUER_CIK = "issuer_cik"

    __str__ = str.__str__


IdentityScopeOrStr: TypeAlias = Annotated[IdentityScope | str, open_enum_validator(IdentityScope)]
