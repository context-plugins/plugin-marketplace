from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type4 import Type4OrStr


class SourceAuth(SdkBaseModel):
    type_: Type4OrStr = Field(alias="type")
    """The authorization type to use. Valid options are OAUTH, CODECONNECTIONS, or SECRETS_MANAGER."""

    resource: Optional[str] = UNSET
    """The resource value that applies to the specified authorization type."""


class SourceAuthDict(TypedDict):
    type_: Type4OrStr
    resource: NotRequired[str]
