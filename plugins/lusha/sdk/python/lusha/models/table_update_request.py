from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.visibility import VisibilityOrStr
from .table_owner import TableOwner, TableOwnerDict


class TableUpdateRequest(SdkBaseModel):
    """``name``, ``visibility``, and ``archived`` are all optional — send any subset; omitted fields stay unchanged.
    Sending none of them is a no-op. A partial update re-reads the persisted table first, so fields you don't send are
    never clobbered."""

    name: Optional[str] = UNSET
    visibility: Optional[VisibilityOrStr] = UNSET
    archived: Optional[bool] = UNSET
    """Set ``true`` to archive the table (hides it from default List Tables results), ``false`` to restore it."""

    owner: TableOwner
    """Identifies the user acting on the table, and resolves to a user on your account. Required on every table-route
    call when authenticating with an API key (there is no signed-in user) — omitting it returns ``400``. Optional for
    OAuth/token callers, since the caller is already identified by the token; still accepted if you want to act on
    behalf of another owner."""


class TableUpdateRequestDict(TypedDict):
    name: NotRequired[str]
    visibility: NotRequired[VisibilityOrStr]
    archived: NotRequired[bool]
    owner: TableOwnerDict
