from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.provider1 import Provider1OrStr


class Account(SdkBaseModel):
    id: str
    provider: Provider1OrStr
    label: str
    """The account's display name — also the exact value a removal must confirm with."""

    selected: bool
    """True when the key's project currently uses this account."""

    project_count: int = Field(alias="projectCount")
    form_destination_count: int = Field(alias="formDestinationCount")


class AccountDict(TypedDict):
    id: str
    provider: Provider1OrStr
    label: str
    selected: bool
    project_count: int
    form_destination_count: int
