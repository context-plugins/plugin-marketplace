from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PhoneNumbers(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    primary_phone: Optional[str] = Field(default=UNSET, alias="primaryPhone")
    additional_phones: Optional[list[str]] = Field(default=UNSET, alias="additionalPhones")


class PhoneNumbersDict(TypedDict):
    primary_phone: NotRequired[str]
    additional_phones: NotRequired[list[str]]
