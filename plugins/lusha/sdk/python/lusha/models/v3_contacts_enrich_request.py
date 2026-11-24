from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reveal import RevealOrStr


class V3ContactsEnrichRequest(SdkBaseModel):
    ids: list[str]
    reveal: Optional[list[RevealOrStr]] = UNSET
    waterfall_enabled: bool = Field(default=True, alias="waterfallEnabled")
    """Whether this call is allowed to fall through to your enabled third-party providers when Lusha's own data has no
    match, for the fields requested via ``reveal``. Defaults to ``true`` whenever Data Waterfall is enabled on your
    account (Account > Waterfall) - pass ``false`` to opt this specific call out. Has no effect if Data Waterfall or no
    providers are enabled on your account. Provider order isn't configurable - Lusha manages that internally."""

    table_id: Optional[str] = Field(default=UNSET, alias="tableId")
    """Optional. If provided, these contacts are also added to this table (if not already present) and the revealed
    fields' columns are populated. See the Tables API."""


class V3ContactsEnrichRequestDict(TypedDict):
    ids: list[str]
    reveal: NotRequired[list[RevealOrStr]]
    waterfall_enabled: NotRequired[bool]
    table_id: NotRequired[str]
