from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum_connect_jobs_api import DatumConnectJobsApi, DatumConnectJobsApiDict


class JobsMfa400Error(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[DatumConnectJobsApi]
    """Error data."""


class JobsMfa400ErrorDict(TypedDict):
    type_: str
    correlation_id: str
    data: list[DatumConnectJobsApiDict]
