from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StateDoiTServiceAccountsApi(str, Enum):
    """The token's stored state: ``active`` while it is enabled, ``disabled`` once it has been turned off. This is not a
    liveness signal — a token whose ``expiresTime`` has passed stops authenticating but keeps the state it was stored
    with, so ``active`` here does not by itself mean the token still works; compare ``expiresTime``. Only these two
    values can be set."""

    ACTIVE = "active"
    DISABLED = "disabled"

    __str__ = str.__str__


StateDoiTServiceAccountsApiOrStr: TypeAlias = Annotated[
    StateDoiTServiceAccountsApi | str, open_enum_validator(StateDoiTServiceAccountsApi)
]
