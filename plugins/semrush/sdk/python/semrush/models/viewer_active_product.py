from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ViewerActiveProduct(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """UUID of product"""

    value: Optional[int] = UNSET
    """Amount of bought product (1 for one-time products, >1 in other cases)"""


class ViewerActiveProductDict(TypedDict):
    id: NotRequired[UUID]
    value: NotRequired[int]
