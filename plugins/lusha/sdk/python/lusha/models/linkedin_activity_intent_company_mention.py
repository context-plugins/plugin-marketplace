from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class LinkedinActivityIntentCompanyMention(SdkBaseModel):
    """A company referenced in a LinkedIn activity intent post."""

    id: OptionalNullable[str] = UNSET
    """Lusha company ID, or null if the company couldn't be resolved to a Lusha record."""

    name: Optional[str] = UNSET
    linkedin_url: Optional[str] = Field(default=UNSET, alias="linkedinUrl")


class LinkedinActivityIntentCompanyMentionDict(TypedDict):
    id: NotRequired[str | None]
    name: NotRequired[str]
    linkedin_url: NotRequired[str]
