from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1ManageFormsDuplicateRequest(SdkBaseModel):
    name: Optional[str] = UNSET
    """Defaults to "<source name> (copy)"."""


class ApiV1ManageFormsDuplicateRequestDict(TypedDict):
    name: NotRequired[str]
