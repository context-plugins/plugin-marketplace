from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class TapeRecoveryPointInfo(SdkBaseModel):
    tape_arn: Optional[str] = Field(default=UNSET, alias="TapeARN")
    """The Amazon Resource Name (ARN) of the virtual tape."""

    tape_recovery_point_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="TapeRecoveryPointTime")
    """The time when the point-in-time view of the virtual tape was replicated for later recovery. The default timestamp
    format of the tape recovery point time is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z' format."""

    tape_size_in_bytes: Optional[int] = Field(default=UNSET, alias="TapeSizeInBytes")
    """The size, in bytes, of the virtual tapes to recover."""

    tape_status: Optional[str] = Field(default=UNSET, alias="TapeStatus")
    """The status of the virtual tapes."""


class TapeRecoveryPointInfoDict(TypedDict):
    tape_arn: NotRequired[str]
    tape_recovery_point_time: NotRequired[RFC3339DateTime]
    tape_size_in_bytes: NotRequired[int]
    tape_status: NotRequired[str]
