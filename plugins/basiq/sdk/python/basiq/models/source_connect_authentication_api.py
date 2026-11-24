from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SourceConnectAuthenticationApi(SdkBaseModel):
    """An object containing references to the source of the error."""

    parameter: Optional[str] = UNSET
    """String indicating which URI query parameter caused the error."""


class SourceConnectAuthenticationApiDict(TypedDict):
    parameter: NotRequired[str]
