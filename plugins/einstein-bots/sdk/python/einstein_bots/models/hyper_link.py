from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HyperLink(SdkBaseModel):
    """Hyperlink object included in the Links schema"""

    href: Optional[str] = UNSET
    """Link to the endpoint"""


class HyperLinkDict(TypedDict):
    href: NotRequired[str]
