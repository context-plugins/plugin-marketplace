from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Person(SdkBaseModel):
    kind: Literal["person"] = "person"
    urn: str
    display: str
    """Text to render the mention with. Empty when LinkedIn did not give us the member's name — see needsDisplayName."""

    headline: Optional[str] = UNSET
    photo_url: Optional[str] = Field(default=UNSET, alias="photoUrl")
    needs_display_name: Optional[bool] = Field(default=UNSET, alias="needsDisplayName")
    """True when the member was resolved but their name was not. Supply the name yourself: LinkedIn only renders a
    mention when the text matches the member's name exactly (case sensitive), so a vanity slug never works."""


class PersonDict(TypedDict):
    kind: Literal["person"]
    urn: str
    display: str
    headline: NotRequired[str]
    photo_url: NotRequired[str]
    needs_display_name: NotRequired[bool]
