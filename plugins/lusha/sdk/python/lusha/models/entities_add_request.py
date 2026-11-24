from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .table_owner import TableOwner, TableOwnerDict


class EntitiesAddRequest(SdkBaseModel):
    entity_ids: list[str] = Field(alias="entityIds")
    """Lusha IDs as strings — ``personId`` for contacts, ``lushaCompanyId`` for companies. Accepts either the encrypted
    token (``v{N}.…``, as returned by Search/Enrich/Get Entities) or the legacy numeric ID. An ID that is neither a
    valid token nor numeric returns ``400``."""

    company_ids: Optional[list[str]] = Field(default=UNSET, alias="companyIds")
    """Contacts tables only. One ``lushaCompanyId`` per contact (encrypted token or numeric), index-aligned with
    ``entityIds``, to help pair company-level enrichment to the right company for each contact. Ignored on companies
    tables."""

    owner: TableOwner
    """Identifies the user acting on the table, and resolves to a user on your account. Required on every table-route
    call when authenticating with an API key (there is no signed-in user) — omitting it returns ``400``. Optional for
    OAuth/token callers, since the caller is already identified by the token; still accepted if you want to act on
    behalf of another owner."""


class EntitiesAddRequestDict(TypedDict):
    entity_ids: list[str]
    company_ids: NotRequired[list[str]]
    owner: TableOwnerDict
