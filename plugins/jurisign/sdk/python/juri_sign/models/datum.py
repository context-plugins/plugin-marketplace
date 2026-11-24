from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class Datum(SdkBaseModel):
    nom: Optional[str] = UNSET
    prenom: Optional[str] = UNSET
    email: Optional[str] = UNSET
    telephone: OptionalNullable[str] = UNSET
    status: Optional[str] = UNSET
    sent_at: OptionalNullable[RFC3339DateTime] = UNSET
    signed_at: OptionalNullable[RFC3339DateTime] = UNSET
    error_message: OptionalNullable[str] = UNSET


class DatumDict(TypedDict):
    nom: NotRequired[str]
    prenom: NotRequired[str]
    email: NotRequired[str]
    telephone: NotRequired[str | None]
    status: NotRequired[str]
    sent_at: NotRequired[RFC3339DateTime | None]
    signed_at: NotRequired[RFC3339DateTime | None]
    error_message: NotRequired[str | None]
