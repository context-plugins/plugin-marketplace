from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Source2ReportingReportsApi(SdkBaseModel):
    pointer: Optional[str] = UNSET
    """The location to the object or attribute that the error relates to"""

    parameter: Optional[str] = UNSET
    """A string indicating which URI query parameter caused the error."""


class Source2ReportingReportsApiDict(TypedDict):
    pointer: NotRequired[str]
    parameter: NotRequired[str]
