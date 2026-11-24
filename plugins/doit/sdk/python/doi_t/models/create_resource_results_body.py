from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .resource_result_request import ResourceResultRequest, ResourceResultRequestDict


class CreateResourceResultsBody(SdkBaseModel):
    """Request body for creating or replacing resource results for an insight."""

    resource_results: list[ResourceResultRequest] = Field(alias="resourceResults")
    """A list of resource-level results for creating or updating an insight."""


class CreateResourceResultsBodyDict(TypedDict):
    resource_results: list[ResourceResultRequestDict]
