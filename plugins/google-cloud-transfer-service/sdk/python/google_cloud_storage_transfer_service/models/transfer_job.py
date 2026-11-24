from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status3 import Status3OrStr
from .event_stream2 import EventStream2, EventStream2Dict
from .logging_config2 import LoggingConfig2, LoggingConfig2Dict
from .notification_config2 import NotificationConfig2, NotificationConfig2Dict
from .replication_spec1 import ReplicationSpec1, ReplicationSpec1Dict
from .schedule1 import Schedule1, Schedule1Dict
from .transfer_spec1 import TransferSpec1, TransferSpec1Dict


class TransferJob(SdkBaseModel):
    """This resource represents the configuration of a transfer job that runs periodically."""

    notification_config: Optional[NotificationConfig2] = Field(default=UNSET, alias="notificationConfig")
    """Notification configuration."""

    transfer_spec: Optional[TransferSpec1] = Field(default=UNSET, alias="transferSpec")
    """Transfer specification."""

    creation_time: Optional[str] = Field(default=UNSET, alias="creationTime")
    """Output only. The time that the transfer job was created."""

    logging_config: Optional[LoggingConfig2] = Field(default=UNSET, alias="loggingConfig")
    """Logging configuration."""

    event_stream: Optional[EventStream2] = Field(default=UNSET, alias="eventStream")
    """Specifies the event stream for the transfer job for event-driven transfers. When EventStream is specified, the
    Schedule fields are ignored."""

    status: Optional[Status3OrStr] = UNSET
    """Status of the job. This value MUST be specified for ``CreateTransferJobRequests``. **Note:** The effect of the
    new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to
    DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current
    operation."""

    schedule: Optional[Schedule1] = UNSET
    """Specifies schedule for the transfer job. This is an optional field. When the field is not set, the job never
    executes a transfer, unless you invoke RunTransferJob or update the job to have a non-empty schedule."""

    service_account: Optional[str] = Field(default=UNSET, alias="serviceAccount")
    """Optional. The user-managed service account to which to delegate service agent permissions. You can grant Cloud
    Storage bucket permissions to this service account instead of to the Transfer Service service agent. Either the
    service account email (``SERVICE_ACCOUNT_NAME@PROJECT_ID.iam.gserviceaccount.com``) or the unique ID
    (``123456789012345678901``) are accepted. See
    https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions for required permissions."""

    latest_operation_name: Optional[str] = Field(default=UNSET, alias="latestOperationName")
    """The name of the most recently started TransferOperation of this JobConfig. Present if a TransferOperation has
    been created for this JobConfig."""

    deletion_time: Optional[str] = Field(default=UNSET, alias="deletionTime")
    """Output only. The time that the transfer job was deleted."""

    description: Optional[str] = UNSET
    """A description provided by the user for the job. Its max length is 1024 bytes when Unicode-encoded."""

    name: Optional[str] = UNSET
    """A unique name (within the transfer project) assigned when the job is created. If this field is empty in a
    CreateTransferJobRequest, Storage Transfer Service assigns a unique name. Otherwise, the specified name is used as
    the unique name for this job. If the specified name is in use by a job, the creation request fails with an
    ALREADY_EXISTS error. This name must start with ``"transferJobs/"`` prefix and end with a letter or a number, and
    should be no more than 128 characters. For transfers involving PosixFilesystem, this name must start with
    ``transferJobs/OPI`` specifically. For all other transfer types, this name must not start with ``transferJobs/OPI``.
    Non-PosixFilesystem example: ``"transferJobs/^(?!OPI)[A-Za-z0-9-._~]*[A-Za-z0-9]$"`` PosixFilesystem example:
    ``"transferJobs/OPI^[A-Za-z0-9-._~]*[A-Za-z0-9]$"`` Applications must not rely on the enforcement of naming
    requirements involving OPI. Invalid job names fail with an INVALID_ARGUMENT error."""

    project_id: Optional[str] = Field(default=UNSET, alias="projectId")
    """The ID of the Google Cloud project that owns the job."""

    replication_spec: Optional[ReplicationSpec1] = Field(default=UNSET, alias="replicationSpec")
    """Replication specification."""

    last_modification_time: Optional[str] = Field(default=UNSET, alias="lastModificationTime")
    """Output only. The time that the transfer job was last modified."""


class TransferJobDict(TypedDict):
    notification_config: NotRequired[NotificationConfig2Dict]
    transfer_spec: NotRequired[TransferSpec1Dict]
    creation_time: NotRequired[str]
    logging_config: NotRequired[LoggingConfig2Dict]
    event_stream: NotRequired[EventStream2Dict]
    status: NotRequired[Status3OrStr]
    schedule: NotRequired[Schedule1Dict]
    service_account: NotRequired[str]
    latest_operation_name: NotRequired[str]
    deletion_time: NotRequired[str]
    description: NotRequired[str]
    name: NotRequired[str]
    project_id: NotRequired[str]
    replication_spec: NotRequired[ReplicationSpec1Dict]
    last_modification_time: NotRequired[str]
