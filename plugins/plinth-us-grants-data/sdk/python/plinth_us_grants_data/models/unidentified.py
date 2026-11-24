from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Unidentified(SdkBaseModel):
    """Grants held OUT of a recipient ranking because their recipient is not an organization."""

    grants: Optional[int] = UNSET
    dollars: Optional[int] = UNSET
    note: Optional[str] = UNSET
    unavailable: Optional[str] = UNSET
    """Present only when the size could not be computed. The ranking above is unaffected."""


class UnidentifiedDict(TypedDict):
    grants: NotRequired[int]
    dollars: NotRequired[int]
    note: NotRequired[str]
    unavailable: NotRequired[str]
