from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class VersionsUnpublishResponse(SdkBaseModel):
    data: Optional[Any] = UNSET


class VersionsUnpublishResponseDict(TypedDict):
    data: NotRequired[Any]
