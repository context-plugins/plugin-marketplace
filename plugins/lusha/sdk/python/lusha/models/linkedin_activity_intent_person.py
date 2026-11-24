from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class LinkedinActivityIntentPerson(SdkBaseModel):
    """A person referenced in a LinkedIn activity intent post (author or mention)."""

    id: OptionalNullable[str] = UNSET
    """Lusha contact ID, or null if the person couldn't be resolved to a Lusha record."""

    full_name: Optional[str] = Field(default=UNSET, alias="fullName")
    linkedin_url: Optional[str] = Field(default=UNSET, alias="linkedinUrl")


class LinkedinActivityIntentPersonDict(TypedDict):
    id: NotRequired[str | None]
    full_name: NotRequired[str]
    linkedin_url: NotRequired[str]
