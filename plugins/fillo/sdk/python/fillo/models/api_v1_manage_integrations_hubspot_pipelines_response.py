from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .pipeline import Pipeline, PipelineDict


class ApiV1ManageIntegrationsHubspotPipelinesResponse(SdkBaseModel):
    pipelines: list[Pipeline]


class ApiV1ManageIntegrationsHubspotPipelinesResponseDict(TypedDict):
    pipelines: list[PipelineDict]
