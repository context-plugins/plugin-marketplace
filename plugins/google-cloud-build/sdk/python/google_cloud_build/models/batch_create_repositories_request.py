from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .create_repository_request import CreateRepositoryRequest, CreateRepositoryRequestDict


class BatchCreateRepositoriesRequest(SdkBaseModel):
    """Message for creating repositoritories in batch."""

    requests: Optional[list[CreateRepositoryRequest]] = UNSET
    """Required. The request messages specifying the repositories to create."""


class BatchCreateRepositoriesRequestDict(TypedDict):
    requests: NotRequired[list[CreateRepositoryRequestDict]]
