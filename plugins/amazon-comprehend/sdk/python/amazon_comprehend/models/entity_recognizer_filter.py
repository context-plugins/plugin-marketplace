from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status9 import Status9OrStr


class EntityRecognizerFilter(SdkBaseModel):
    status: Optional[Status9OrStr] = Field(default=UNSET, alias="Status")
    """The status of an entity recognizer."""

    recognizer_name: Optional[str] = Field(default=UNSET, alias="RecognizerName")
    """The name that you assigned the entity recognizer."""

    submit_time_before: Optional[RFC3339DateTime] = Field(default=UNSET, alias="SubmitTimeBefore")
    """Filters the list of entities based on the time that the list was submitted for processing. Returns only jobs
    submitted before the specified time. Jobs are returned in descending order, newest to oldest."""

    submit_time_after: Optional[RFC3339DateTime] = Field(default=UNSET, alias="SubmitTimeAfter")
    """Filters the list of entities based on the time that the list was submitted for processing. Returns only jobs
    submitted after the specified time. Jobs are returned in ascending order, oldest to newest."""


class EntityRecognizerFilterDict(TypedDict):
    status: NotRequired[Status9OrStr]
    recognizer_name: NotRequired[str]
    submit_time_before: NotRequired[RFC3339DateTime]
    submit_time_after: NotRequired[RFC3339DateTime]
