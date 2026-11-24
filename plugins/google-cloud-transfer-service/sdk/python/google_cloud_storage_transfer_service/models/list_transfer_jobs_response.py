from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .transfer_job import TransferJob, TransferJobDict


class ListTransferJobsResponse(SdkBaseModel):
    """Response from ListTransferJobs."""

    transfer_jobs: Optional[list[TransferJob]] = Field(default=UNSET, alias="transferJobs")
    """A list of transfer jobs."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """The list next page token."""


class ListTransferJobsResponseDict(TypedDict):
    transfer_jobs: NotRequired[list[TransferJobDict]]
    next_page_token: NotRequired[str]
