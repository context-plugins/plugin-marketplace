from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Details2(SdkBaseModel):
    limit: Optional[int] = UNSET
    """Maximum number of ``QUEUED`` tasks your organization can hold."""


class Details2Dict(TypedDict):
    limit: NotRequired[int]
