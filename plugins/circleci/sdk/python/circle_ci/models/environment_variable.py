from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class EnvironmentVariable(SdkBaseModel):
    variable: Optional[str] = UNSET
    """The name of the environment variable"""

    created_at: Optional[RFC3339DateTime] = UNSET
    """When the variable was created"""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """When the variable was last updated"""

    context_id: Optional[UUID] = UNSET
    """The ID of the context this variable belongs to"""


class EnvironmentVariableDict(TypedDict):
    variable: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
    context_id: NotRequired[UUID]
