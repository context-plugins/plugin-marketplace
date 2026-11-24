from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.access_level import AccessLevelOrStr


class FoldersRequest1(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the folder."""

    access_level: OptionalNullable[AccessLevelOrStr] = Field(default=UNSET, alias="accessLevel")
    """The access level of the folder within the workspace."""


class FoldersRequest1Dict(TypedDict):
    name: NotRequired[str]
    access_level: NotRequired[AccessLevelOrStr | None]
