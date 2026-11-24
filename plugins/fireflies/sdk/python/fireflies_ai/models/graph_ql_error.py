from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .extensions import Extensions, ExtensionsDict


class GraphQlError(SdkBaseModel):
    message: Optional[str] = UNSET
    code: Optional[str] = UNSET
    friendly: Optional[bool] = UNSET
    extensions: Optional[Extensions] = UNSET


class GraphQlErrorDict(TypedDict):
    message: NotRequired[str]
    code: NotRequired[str]
    friendly: NotRequired[bool]
    extensions: NotRequired[ExtensionsDict]
