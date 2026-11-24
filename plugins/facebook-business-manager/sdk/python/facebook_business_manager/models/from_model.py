from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FromModel(SdkBaseModel):
    """The person or Page that made the comment"""

    id: Optional[str] = UNSET
    name: Optional[str] = UNSET


class FromModelDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
