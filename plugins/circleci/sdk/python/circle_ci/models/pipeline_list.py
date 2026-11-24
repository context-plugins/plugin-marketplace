from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pipeline_circle_ci_rest_api_v2_pipeline_api import (
    PipelineCircleCiRestApiV2PipelineApi,
    PipelineCircleCiRestApiV2PipelineApiDict,
)


class PipelineList(SdkBaseModel):
    items: Optional[list[PipelineCircleCiRestApiV2PipelineApi]] = UNSET
    """List of pipelines"""

    next_page_token: Optional[str] = UNSET
    """Token for retrieving the next page"""


class PipelineListDict(TypedDict):
    items: NotRequired[list[PipelineCircleCiRestApiV2PipelineApiDict]]
    next_page_token: NotRequired[str]
