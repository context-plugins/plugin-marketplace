from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ParamModel(SdkBaseModel):
    additional: Optional[dict[str, str]] = UNSET
    name: str
    value: str


class ParamModelDict(TypedDict):
    additional: NotRequired[dict[str, str]]
    name: str
    value: str
