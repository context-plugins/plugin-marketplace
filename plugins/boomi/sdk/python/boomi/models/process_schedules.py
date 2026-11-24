from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProcessSchedules(SdkBaseModel):
    """Schedule configuration for an integration process."""

    id: Optional[str] = UNSET
    """Unique identifier of the process schedule."""

    atom_id: Optional[str] = Field(default=UNSET, alias="atomId")
    """ID of the Atom on which this schedule runs."""

    process_id: Optional[str] = Field(default=UNSET, alias="processId")
    """ID of the process this schedule applies to."""

    schedule: Optional[Any] = UNSET
    """Scheduling parameters including frequency and timing."""


class ProcessSchedulesDict(TypedDict):
    id: NotRequired[str]
    atom_id: NotRequired[str]
    process_id: NotRequired[str]
    schedule: NotRequired[Any]
