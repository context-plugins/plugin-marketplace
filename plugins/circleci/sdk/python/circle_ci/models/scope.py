from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Scope(SdkBaseModel):
    """The scope of the webhook"""

    id: Optional[UUID] = UNSET
    """The scope ID"""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """The scope type"""


class ScopeDict(TypedDict):
    id: NotRequired[UUID]
    type_: NotRequired[str]
