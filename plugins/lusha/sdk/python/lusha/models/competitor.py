from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Competitor(SdkBaseModel):
    id: Optional[str] = UNSET
    """Lusha company ID of the competitor"""

    name: Optional[str] = UNSET
    """Company name of the competitor"""

    domain: Optional[str] = UNSET
    """Primary domain of the competitor"""


class CompetitorDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    domain: NotRequired[str]
