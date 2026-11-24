from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RatingGroupedCitation(SdkBaseModel):
    """Rating source information with supporting websites"""

    title: Optional[str] = UNSET
    """Source title"""

    url: Optional[str] = UNSET
    """Source URL"""

    supporting_websites: Optional[list[Any]] = UNSET
    """Array of supporting website references"""


class RatingGroupedCitationDict(TypedDict):
    title: NotRequired[str]
    url: NotRequired[str]
    supporting_websites: NotRequired[list[Any]]
