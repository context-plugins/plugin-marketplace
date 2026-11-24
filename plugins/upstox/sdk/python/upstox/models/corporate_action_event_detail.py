from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CorporateActionEventDetail(SdkBaseModel):
    name: Optional[str] = UNSET
    """Name of the event detail field"""

    value: Optional[str] = UNSET
    """Value of the event detail field"""


class CorporateActionEventDetailDict(TypedDict):
    name: NotRequired[str]
    value: NotRequired[str]
