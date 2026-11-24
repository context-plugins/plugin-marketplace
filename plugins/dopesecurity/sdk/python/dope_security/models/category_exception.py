from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.restriction1 import Restriction1OrStr
from .enums.type import TypeOrStr


class CategoryException(SdkBaseModel):
    """Per-entity override of a category restriction"""

    restriction: Restriction1OrStr
    """The action applied for this entity"""

    page: Optional[str] = UNSET
    """Optional block/warning page identifier"""

    name: Optional[str] = UNSET
    """Human-readable entity name (returned on read APIs)"""

    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    """Entity type (returned on read APIs)"""


class CategoryExceptionDict(TypedDict):
    restriction: Restriction1OrStr
    page: NotRequired[str]
    name: NotRequired[str]
    type_: NotRequired[TypeOrStr]
