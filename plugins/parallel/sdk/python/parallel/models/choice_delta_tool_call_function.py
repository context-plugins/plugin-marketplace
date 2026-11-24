from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ChoiceDeltaToolCallFunction(SdkBaseModel):
    arguments: Optional[str] = UNSET
    name: Optional[str] = UNSET


class ChoiceDeltaToolCallFunctionDict(TypedDict):
    arguments: NotRequired[str]
    name: NotRequired[str]
