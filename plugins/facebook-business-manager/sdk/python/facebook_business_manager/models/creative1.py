from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Creative1(SdkBaseModel):
    id: Optional[str] = UNSET
    """The ID of the associated ad creative"""


class Creative1Dict(TypedDict):
    id: NotRequired[str]
