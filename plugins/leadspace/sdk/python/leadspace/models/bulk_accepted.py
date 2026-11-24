from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BulkAccepted(SdkBaseModel):
    id: Optional[str] = UNSET
    """The polling endpoint URI to extract the bulk results"""


class BulkAcceptedDict(TypedDict):
    id: NotRequired[str]
