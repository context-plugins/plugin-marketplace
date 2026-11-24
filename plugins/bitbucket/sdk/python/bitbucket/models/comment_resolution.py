from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .account import Account, AccountDict


class CommentResolution(SdkBaseModel):
    """The resolution object for a Comment."""

    type_: str = Field(alias="type")
    user: Optional[Account] = UNSET
    created_on: Optional[RFC3339DateTime] = UNSET
    """The ISO8601 timestamp the resolution was created."""


class CommentResolutionDict(TypedDict):
    type_: str
    user: NotRequired[AccountDict]
    created_on: NotRequired[RFC3339DateTime]
