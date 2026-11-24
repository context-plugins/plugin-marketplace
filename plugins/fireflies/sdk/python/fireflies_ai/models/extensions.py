from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Extensions(SdkBaseModel):
    code: Optional[str] = UNSET


class ExtensionsDict(TypedDict):
    code: NotRequired[str]
