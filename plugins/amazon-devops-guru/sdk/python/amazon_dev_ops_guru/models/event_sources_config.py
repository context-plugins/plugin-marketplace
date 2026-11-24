from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .amazon_code_guru_profiler_integration import (
    AmazonCodeGuruProfilerIntegration,
    AmazonCodeGuruProfilerIntegrationDict,
)


class EventSourcesConfig(SdkBaseModel):
    amazon_code_guru_profiler: Optional[AmazonCodeGuruProfilerIntegration] = Field(
        default=UNSET, alias="AmazonCodeGuruProfiler"
    )


class EventSourcesConfigDict(TypedDict):
    amazon_code_guru_profiler: NotRequired[AmazonCodeGuruProfilerIntegrationDict]
