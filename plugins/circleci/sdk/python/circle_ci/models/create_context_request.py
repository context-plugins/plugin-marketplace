from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .owner import Owner, OwnerDict


class CreateContextRequest(SdkBaseModel):
    name: str
    """The name of the context"""

    owner: Owner


class CreateContextRequestDict(TypedDict):
    name: str
    owner: OwnerDict
