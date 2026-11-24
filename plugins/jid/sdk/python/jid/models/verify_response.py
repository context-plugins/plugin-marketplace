from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .decision import Decision, DecisionDict
from .fact import Fact, FactDict
from .identifier import Identifier, IdentifierDict
from .receipt import Receipt, ReceiptDict
from .status_jid_verify_api import StatusJidVerifyApi, StatusJidVerifyApiDict


class VerifyResponse(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    url: Optional[str] = UNSET
    file_checked_at: Optional[str] = UNSET
    owner_status: Optional[str] = UNSET
    status: Optional[StatusJidVerifyApi] = UNSET
    identifiers: Optional[list[Identifier]] = UNSET
    facts: Optional[list[Fact]] = UNSET
    not_in_sources: Optional[list[str]] = UNSET
    terms: Optional[str] = UNSET
    decision: Optional[Decision] = UNSET
    receipt: Optional[Receipt] = UNSET


class VerifyResponseDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    url: NotRequired[str]
    file_checked_at: NotRequired[str]
    owner_status: NotRequired[str]
    status: NotRequired[StatusJidVerifyApiDict]
    identifiers: NotRequired[list[IdentifierDict]]
    facts: NotRequired[list[FactDict]]
    not_in_sources: NotRequired[list[str]]
    terms: NotRequired[str]
    decision: NotRequired[DecisionDict]
    receipt: NotRequired[ReceiptDict]
