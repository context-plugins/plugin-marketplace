from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .revision import Revision, RevisionDict


class RevisionResponse(SdkBaseModel):
    revision: Revision
    """An immutable snapshot of an Object at a point in time."""


class RevisionResponseDict(TypedDict):
    revision: RevisionDict
