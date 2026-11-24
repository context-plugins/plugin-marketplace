from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr


class CompleteSnapshotResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = Field(default=UNSET, alias="Status")
    """The status of the snapshot."""


class CompleteSnapshotResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
