from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_eventarc_v1_pipeline_mediation_transformation2 import (
    GoogleCloudEventarcV1PipelineMediationTransformation2,
    GoogleCloudEventarcV1PipelineMediationTransformation2Dict,
)


class GoogleCloudEventarcV1PipelineMediation(SdkBaseModel):
    """Mediation defines different ways to modify the Pipeline."""

    transformation: Optional[GoogleCloudEventarcV1PipelineMediationTransformation2] = UNSET
    """Optional. How the Pipeline is to transform messages"""


class GoogleCloudEventarcV1PipelineMediationDict(TypedDict):
    transformation: NotRequired[GoogleCloudEventarcV1PipelineMediationTransformation2Dict]
