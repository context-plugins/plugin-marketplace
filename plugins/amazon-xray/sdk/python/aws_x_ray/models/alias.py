from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Alias(SdkBaseModel):
    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The canonical name of the alias."""

    names: Optional[list[str]] = Field(default=UNSET, alias="Names")
    """A list of names for the alias, including the canonical name."""

    type_: Optional[str] = Field(default=UNSET, alias="Type")
    """The type of the alias."""


class AliasDict(TypedDict):
    name: NotRequired[str]
    names: NotRequired[list[str]]
    type_: NotRequired[str]
