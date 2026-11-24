from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResourceClassCreation(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """The unique identifier of the resource class"""

    resource_class: Optional[str] = UNSET
    """The resource class name in namespace/name format"""

    description: Optional[str] = UNSET
    """A description of the resource class"""

    token: Optional[str] = UNSET
    """The resource class token. This is only displayed once and cannot be retrieved again. Store it securely."""


class ResourceClassCreationDict(TypedDict):
    id: NotRequired[UUID]
    resource_class: NotRequired[str]
    description: NotRequired[str]
    token: NotRequired[str]
