from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1DomainnamesRequest1(SdkBaseModel):
    description: Optional[str] = UNSET
    """A description of the DomainName."""


class V1DomainnamesRequest1Dict(TypedDict):
    description: NotRequired[str]
