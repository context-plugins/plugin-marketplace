from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ReplyDeletion(SdkBaseModel):
    id: str
    """Review ID."""

    deleted: Literal["False"] = "False"
    """Always ``false``: the deletion is queued."""

    status: Literal["queued"] = "queued"


class ReplyDeletionDict(TypedDict):
    id: str
    deleted: Literal["False"]
    status: Literal["queued"]
