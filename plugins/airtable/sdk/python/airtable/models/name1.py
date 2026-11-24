from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Name1(SdkBaseModel):
    """The user's name components."""

    given_name: Optional[str] = Field(default=UNSET, alias="givenName")
    """The user's first name."""

    family_name: Optional[str] = Field(default=UNSET, alias="familyName")
    """The user's last name."""


class Name1Dict(TypedDict):
    given_name: NotRequired[str]
    family_name: NotRequired[str]
