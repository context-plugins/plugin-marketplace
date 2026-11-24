from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .value import Value, ValueDict


class FieldModel(SdkBaseModel):
    name: Optional[str] = UNSET
    """Field name"""

    value: Optional[Value] = UNSET


class FieldModelDict(TypedDict):
    name: NotRequired[str]
    value: NotRequired[ValueDict]
