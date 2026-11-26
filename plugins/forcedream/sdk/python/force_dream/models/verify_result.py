from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.fields_signed import FieldsSignedOrInt


class VerifyResult(SdkBaseModel):
    verified: Optional[bool] = UNSET
    task_id: Optional[str] = UNSET
    key_id: Optional[str] = UNSET
    algorithm: Optional[str] = UNSET
    fields_signed: Optional[FieldsSignedOrInt] = UNSET
    """8 for proofs without external_cost_hash, 10 for proofs with it."""

    trustless: Optional[bool] = UNSET
    message: Optional[str] = UNSET
    note: Optional[str] = UNSET


class VerifyResultDict(TypedDict):
    verified: NotRequired[bool]
    task_id: NotRequired[str]
    key_id: NotRequired[str]
    algorithm: NotRequired[str]
    fields_signed: NotRequired[FieldsSignedOrInt]
    trustless: NotRequired[bool]
    message: NotRequired[str]
    note: NotRequired[str]
