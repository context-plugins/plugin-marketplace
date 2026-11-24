from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Recipient(SdkBaseModel):
    """Extra keys are accepted and become available as {{merge fields}} in the bulk template."""

    nom: str
    prenom: str
    email: EmailStr
    telephone: OptionalNullable[str] = UNSET
    adresse: OptionalNullable[str] = UNSET


class RecipientDict(TypedDict):
    nom: str
    prenom: str
    email: EmailStr
    telephone: NotRequired[str | None]
    adresse: NotRequired[str | None]
