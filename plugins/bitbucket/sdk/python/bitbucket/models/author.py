from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .account import Account, AccountDict


class Author(SdkBaseModel):
    """All Of object, author."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    raw: Optional[str] = UNSET
    """The raw author value from the repository. This may be the only value available if the author does not match a
    user in Bitbucket."""

    user: Optional[Account] = UNSET


class AuthorDict(TypedDict):
    type_: NotRequired[str]
    raw: NotRequired[str]
    user: NotRequired[AccountDict]
