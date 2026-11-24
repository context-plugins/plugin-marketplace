from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum1_connect_jobs_api import Datum1ConnectJobsApi, Datum1ConnectJobsApiDict


class JobsMfa401Error(SdkBaseModel):
    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Datum1ConnectJobsApi]
    """Error data."""

    type_: str = Field(alias="type")
    """Always "list"."""


class JobsMfa401ErrorDict(TypedDict):
    correlation_id: str
    data: list[Datum1ConnectJobsApiDict]
    type_: str
