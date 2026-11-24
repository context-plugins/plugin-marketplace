from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Context(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """The unique identifier of the context"""

    name: Optional[str] = UNSET
    """The name of the context"""

    created_at: Optional[RFC3339DateTime] = UNSET
    """When the context was created"""


class ContextDict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
