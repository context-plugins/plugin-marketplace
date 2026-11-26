from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .hyper_link import HyperLink, HyperLinkDict


class Links(SdkBaseModel):
    """List of Einstein Bots API endpoints for HATEOS compliancy."""

    model_config = ConfigDict(extra="forbid")

    self: HyperLink
    """Hyperlink object included in the Links schema"""

    messages: Optional[HyperLink] = UNSET
    """Hyperlink object included in the Links schema"""

    session: Optional[HyperLink] = UNSET
    """Hyperlink object included in the Links schema"""


class LinksDict(TypedDict):
    self: HyperLinkDict
    messages: NotRequired[HyperLinkDict]
    session: NotRequired[HyperLinkDict]
