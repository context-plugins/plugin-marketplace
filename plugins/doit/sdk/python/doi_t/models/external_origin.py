from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type3 import Type3OrStr


class ExternalOrigin(SdkBaseModel):
    """Origin info for cost splitting."""

    id: Optional[str] = UNSET
    """ID of the origin."""

    type_: Optional[Type3OrStr] = Field(default=UNSET, alias="type")
    """Type of the origin."""


class ExternalOriginDict(TypedDict):
    id: NotRequired[str]
    type_: NotRequired[Type3OrStr]
