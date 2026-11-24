from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class JobsLinks(SdkBaseModel):
    """Links to the resources."""

    self: str
    """URL of the resource"""

    source: Optional[str] = UNSET
    """Resource that initiated creation of this Job. For example, for operations on Connection, this is a Connection
    URL. This is only returned for Connection jobs and not for Statement jobs."""


class JobsLinksDict(TypedDict):
    self: str
    source: NotRequired[str]
