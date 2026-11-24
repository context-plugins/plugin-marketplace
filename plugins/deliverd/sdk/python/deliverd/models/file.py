from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.encoding import EncodingOrStr


class File(SdkBaseModel):
    path: str
    content: str
    encoding: Optional[EncodingOrStr] = UNSET


class FileDict(TypedDict):
    path: str
    content: str
    encoding: NotRequired[EncodingOrStr]
