from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .artifact_circle_ci_rest_api_v2_job_api import ArtifactCircleCiRestApiV2JobApi, ArtifactCircleCiRestApiV2JobApiDict


class ArtifactList(SdkBaseModel):
    items: Optional[list[ArtifactCircleCiRestApiV2JobApi]] = UNSET
    """List of artifacts"""

    next_page_token: Optional[str] = UNSET
    """Token for retrieving the next page"""


class ArtifactListDict(TypedDict):
    items: NotRequired[list[ArtifactCircleCiRestApiV2JobApiDict]]
    next_page_token: NotRequired[str]
