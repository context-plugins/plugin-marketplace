from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.log_action import LogActionOrStr
from .enums.log_action_state import LogActionStateOrStr


class LoggingConfig(SdkBaseModel):
    """Specifies the logging behavior for transfer operations. Logs can be sent to Cloud Logging for all transfer types.
    See `Read transfer logs <https://cloud.google.com/storage-transfer/docs/read-transfer-logs>`__ for details."""

    log_actions: Optional[list[LogActionOrStr]] = Field(default=UNSET, alias="logActions")
    """Specifies the actions to be logged. If empty, no logs are generated."""

    log_action_states: Optional[list[LogActionStateOrStr]] = Field(default=UNSET, alias="logActionStates")
    """States in which ``log_actions`` are logged. If empty, no logs are generated."""

    enable_onprem_gcs_transfer_logs: Optional[bool] = Field(default=UNSET, alias="enableOnpremGcsTransferLogs")
    """For PosixFilesystem transfers, enables `file system transfer logs
    <https://cloud.google.com/storage-transfer/docs/on-prem-transfer-log-format>`__ instead of, or in addition to, Cloud
    Logging. This option ignores [LoggableAction] and [LoggableActionState]. If these are set, Cloud Logging will also
    be enabled for this transfer."""


class LoggingConfigDict(TypedDict):
    log_actions: NotRequired[list[LogActionOrStr]]
    log_action_states: NotRequired[list[LogActionStateOrStr]]
    enable_onprem_gcs_transfer_logs: NotRequired[bool]
