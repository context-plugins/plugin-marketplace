from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Source(SdkBaseModel):
    """An object containing references to the source of the error."""

    parameter: Optional[str] = UNSET
    """String indicating which URI query parameter caused the error."""

    pointer: Optional[str] = UNSET
    """Location to the object or attribute that the error relates to."""


class SourceDict(TypedDict):
    parameter: NotRequired[str]
    pointer: NotRequired[str]
