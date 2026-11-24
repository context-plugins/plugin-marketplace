from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .transfer_job1 import TransferJob1, TransferJob1Dict


class UpdateTransferJobRequest(SdkBaseModel):
    """Request passed to UpdateTransferJob."""

    update_transfer_job_field_mask: Optional[str] = Field(default=UNSET, alias="updateTransferJobFieldMask")
    """The field mask of the fields in ``transferJob`` that are to be updated in this request. Fields in ``transferJob``
    that can be updated are: description, transfer_spec, notification_config, logging_config, and status. To update the
    ``transfer_spec`` of the job, a complete transfer specification must be provided. An incomplete specification
    missing any required fields is rejected with the error INVALID_ARGUMENT."""

    transfer_job: Optional[TransferJob1] = Field(default=UNSET, alias="transferJob")
    """Required. The job to update. ``transferJob`` is expected to specify one or more of five fields: description,
    transfer_spec, notification_config, logging_config, and status. An ``UpdateTransferJobRequest`` that specifies other
    fields are rejected with the error INVALID_ARGUMENT. Updating a job status to DELETED requires
    ``storagetransfer.jobs.delete`` permission."""

    project_id: Optional[str] = Field(default=UNSET, alias="projectId")
    """Required. The ID of the Google Cloud project that owns the job."""


class UpdateTransferJobRequestDict(TypedDict):
    update_transfer_job_field_mask: NotRequired[str]
    transfer_job: NotRequired[TransferJob1Dict]
    project_id: NotRequired[str]
