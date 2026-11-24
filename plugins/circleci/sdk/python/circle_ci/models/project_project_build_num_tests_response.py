from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .test_metadata_circle_ci_rest_api_v1_test_metadata_api import (
    TestMetadataCircleCiRestApiV1TestMetadataApi,
    TestMetadataCircleCiRestApiV1TestMetadataApiDict,
)


class ProjectProjectBuildNumTestsResponse(SdkBaseModel):
    tests: Optional[list[TestMetadataCircleCiRestApiV1TestMetadataApi]] = UNSET
    """List of test results"""


class ProjectProjectBuildNumTestsResponseDict(TypedDict):
    tests: NotRequired[list[TestMetadataCircleCiRestApiV1TestMetadataApiDict]]
