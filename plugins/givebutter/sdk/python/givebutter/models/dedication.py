from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.dedication_type import DedicationTypeOrStr


class Dedication(SdkBaseModel):
    type_: DedicationTypeOrStr = Field(alias="type")
    name: str
    recipient_name: str | None
    recipient_email: EmailStr | None


class DedicationDict(TypedDict):
    type_: DedicationTypeOrStr
    name: str
    recipient_name: str | None
    recipient_email: EmailStr | None
