from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Relationship(SdkBaseModel):
    director: Optional[bool] = UNSET
    """True if the stakeholder is a company director."""

    executive: Optional[bool] = UNSET
    """True if the stakeholder is an executive."""


class RelationshipDict(TypedDict):
    director: NotRequired[bool]
    executive: NotRequired[bool]
