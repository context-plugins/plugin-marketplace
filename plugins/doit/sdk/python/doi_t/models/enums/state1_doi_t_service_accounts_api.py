from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State1DoiTServiceAccountsApi(str, Enum):
    """``active`` to enable the token, ``disabled`` to stop it authenticating. Any other value, ``deleted`` and
    ``expired`` included, returns ``400``. Re-enabling a token whose expiry has passed returns ``422``."""

    ACTIVE = "active"
    DISABLED = "disabled"

    __str__ = str.__str__


State1DoiTServiceAccountsApiOrStr: TypeAlias = Annotated[
    State1DoiTServiceAccountsApi | str, open_enum_validator(State1DoiTServiceAccountsApi)
]
