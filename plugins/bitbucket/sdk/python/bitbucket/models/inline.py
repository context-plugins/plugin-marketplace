from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Inline(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    from_: Optional[int] = Field(default=UNSET, alias="from")
    """The comment's anchor line in the old version of the file. If the comment is a multi-line comment, this is the
    ending line number in the old version of the file."""

    to: Optional[int] = UNSET
    """The comment's anchor line in the new version of the file. If the comment is a multi-line comment, this is the
    ending line number in the new version of the file."""

    start_from: Optional[int] = UNSET
    """The starting line number in the old version of the file, if the comment is a multi-line comment. This is null
    otherwise."""

    start_to: Optional[int] = UNSET
    """The starting line number in the new version of the file, if the comment is a multi-line comment. This is null
    otherwise."""

    path: str
    """The path of the file this comment is anchored to."""


class InlineDict(TypedDict):
    from_: NotRequired[int]
    to: NotRequired[int]
    start_from: NotRequired[int]
    start_to: NotRequired[int]
    path: str
