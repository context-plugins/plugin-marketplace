from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .known_gender import KnownGender, KnownGenderDict


class GetCelebrityInfoResponse(SdkBaseModel):
    urls: Optional[list[str]] = Field(default=UNSET, alias="Urls")
    """An array of URLs pointing to additional celebrity information."""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the celebrity."""

    known_gender: Optional[KnownGender] = Field(default=UNSET, alias="KnownGender")


class GetCelebrityInfoResponseDict(TypedDict):
    urls: NotRequired[list[str]]
    name: NotRequired[str]
    known_gender: NotRequired[KnownGenderDict]
