from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .commit import Commit, CommitDict
from .links3 import Links3, Links3Dict


class RefBitbucketCommitsApi(SdkBaseModel):
    """A ref object, representing a branch or tag in a repository."""

    type_: str = Field(alias="type")
    links: Optional[Links3] = UNSET
    name: Optional[str] = UNSET
    """The name of the ref."""

    target: Optional[Commit] = UNSET


class RefBitbucketCommitsApiDict(TypedDict):
    type_: str
    links: NotRequired[Links3Dict]
    name: NotRequired[str]
    target: NotRequired[CommitDict]
