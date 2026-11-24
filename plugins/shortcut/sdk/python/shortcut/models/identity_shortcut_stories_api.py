from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type1 import Type1OrStr


class IdentityShortcutStoriesApi(SdkBaseModel):
    """The Identity of the VCS user that authored the Commit."""

    model_config = ConfigDict(extra="forbid")

    entity_type: str
    """A string description of this resource."""

    name: str | None
    """This is your login in VCS."""

    type_: Type1OrStr | None = Field(alias="type")
    """The service this Identity is for."""


class IdentityShortcutStoriesApiDict(TypedDict):
    entity_type: str
    name: str | None
    type_: Type1OrStr | None
