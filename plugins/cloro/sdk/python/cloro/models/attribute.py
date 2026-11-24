from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Attribute(SdkBaseModel):
    key: Optional[str] = UNSET
    """Attribute label"""

    value: Optional[str] = UNSET
    """Attribute value"""


class AttributeDict(TypedDict):
    key: NotRequired[str]
    value: NotRequired[str]
