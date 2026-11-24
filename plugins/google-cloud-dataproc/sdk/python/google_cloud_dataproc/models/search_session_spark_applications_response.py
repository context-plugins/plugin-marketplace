from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .spark_application import SparkApplication, SparkApplicationDict


class SearchSessionSparkApplicationsResponse(SdkBaseModel):
    """A list of summary of Spark Applications"""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """This token is included in the response if there are more results to fetch. To fetch additional results, provide
    this value as the page_token in a subsequent SearchSessionSparkApplicationsRequest."""

    spark_applications: Optional[list[SparkApplication]] = Field(default=UNSET, alias="sparkApplications")
    """Output only. High level information corresponding to an application."""


class SearchSessionSparkApplicationsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    spark_applications: NotRequired[list[SparkApplicationDict]]
