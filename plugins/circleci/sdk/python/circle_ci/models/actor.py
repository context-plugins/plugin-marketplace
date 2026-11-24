from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Actor(SdkBaseModel):
    login: Optional[str] = UNSET
    """The login of the actor"""

    avatar_url: Optional[str] = UNSET
    """The avatar URL of the actor"""


class ActorDict(TypedDict):
    login: NotRequired[str]
    avatar_url: NotRequired[str]
