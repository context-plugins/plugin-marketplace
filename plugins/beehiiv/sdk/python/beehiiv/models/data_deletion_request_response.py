from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_deletion_request_info import DataDeletionRequestInfo, DataDeletionRequestInfoDict


class DataDeletionRequestResponse(SdkBaseModel):
    data: Optional[DataDeletionRequestInfo] = UNSET


class DataDeletionRequestResponseDict(TypedDict):
    data: NotRequired[DataDeletionRequestInfoDict]
