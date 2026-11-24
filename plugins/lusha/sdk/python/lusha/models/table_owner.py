from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TableOwner(SdkBaseModel):
    """Identifies the user acting on the table, and resolves to a user on your account. Required on every table-route
    call when authenticating with an API key (there is no signed-in user) — omitting it returns ``400``. Optional for
    OAuth/token callers, since the caller is already identified by the token; still accepted if you want to act on
    behalf of another owner."""

    email: Optional[EmailStr] = UNSET
    """Must resolve to an existing user on the account tied to your API key."""


class TableOwnerDict(TypedDict):
    email: NotRequired[EmailStr]
