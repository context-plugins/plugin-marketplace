from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .account import Account, AccountDict


class Committer(SdkBaseModel):
    """All Of object, committer."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    raw: Optional[str] = UNSET
    """The raw committer value from the repository. This may be the only value available if the committer does not match
    a user in Bitbucket."""

    user: Optional[Account] = UNSET


class CommitterDict(TypedDict):
    type_: NotRequired[str]
    raw: NotRequired[str]
    user: NotRequired[AccountDict]
