from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_amazon_dev_ops_guru_event_sources_api import StatusAmazonDevOpsGuruEventSourcesApiOrStr


class AmazonCodeGuruProfilerIntegration(SdkBaseModel):
    status: Optional[StatusAmazonDevOpsGuruEventSourcesApiOrStr] = Field(default=UNSET, alias="Status")
    """The status of the CodeGuru Profiler integration. Specifies if DevOps Guru is enabled to consume recommendations
    that are generated from Amazon CodeGuru Profiler."""


class AmazonCodeGuruProfilerIntegrationDict(TypedDict):
    status: NotRequired[StatusAmazonDevOpsGuruEventSourcesApiOrStr]
