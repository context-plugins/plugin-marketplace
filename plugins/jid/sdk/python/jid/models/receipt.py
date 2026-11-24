from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .signature import Signature, SignatureDict


class Receipt(SdkBaseModel):
    receipt_id: Optional[str] = UNSET
    url: Optional[str] = UNSET
    statement: Optional[Any] = UNSET
    """Exactly what was signed: type, version, receipt_id, issued_at, issuer, entity, inputs, decision, rules_version,
    reasons (code, met, effect, fact_ids, source, verified_at, fresh_until), facts (id, predicate, source, value_sha256,
    verified_at), terms."""

    signature: Optional[Signature] = UNSET
    verify: Optional[str] = UNSET


class ReceiptDict(TypedDict):
    receipt_id: NotRequired[str]
    url: NotRequired[str]
    statement: NotRequired[Any]
    signature: NotRequired[SignatureDict]
    verify: NotRequired[str]
