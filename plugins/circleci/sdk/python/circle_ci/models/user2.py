from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class User2(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """The unique identifier of the user"""

    login: Optional[str] = UNSET
    """The login name of the user"""

    name: Optional[str] = UNSET
    """The display name of the user"""


class User2Dict(TypedDict):
    id: NotRequired[UUID]
    login: NotRequired[str]
    name: NotRequired[str]
