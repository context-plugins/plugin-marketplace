from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.code_connect_jobs_api import CodeConnectJobsApiOrStr


class JobsResult(SdkBaseModel):
    """Result object containing a list of URLs or null. Otherwise if a step failed contains an error response."""

    code: Optional[CodeConnectJobsApiOrStr] = UNSET
    """In case of failed job, displays error code."""

    details: Optional[str] = UNSET
    """In case of failed job, displays details of the error."""

    title: Optional[str] = UNSET
    """In case of failed job, displays error title."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """In case of success, Always "link"."""

    url: Optional[str] = UNSET
    """In case of success, URL of the updated (or created) resources."""


class JobsResultDict(TypedDict):
    code: NotRequired[CodeConnectJobsApiOrStr]
    details: NotRequired[str]
    title: NotRequired[str]
    type_: NotRequired[str]
    url: NotRequired[str]
