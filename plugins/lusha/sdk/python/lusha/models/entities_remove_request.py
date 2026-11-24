from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .table_owner import TableOwner, TableOwnerDict


class EntitiesRemoveRequest(SdkBaseModel):
    entity_ids: list[str] = Field(alias="entityIds")
    """Accepts either the encrypted token (``v{N}.…``, as returned by Get Entities) or the legacy numeric ID. Unresolved
    IDs are echoed back in ``invalidIds`` in the exact form you sent them."""

    owner: TableOwner
    """Identifies the user acting on the table, and resolves to a user on your account. Required on every table-route
    call when authenticating with an API key (there is no signed-in user) — omitting it returns ``400``. Optional for
    OAuth/token callers, since the caller is already identified by the token; still accepted if you want to act on
    behalf of another owner."""


class EntitiesRemoveRequestDict(TypedDict):
    entity_ids: list[str]
    owner: TableOwnerDict
