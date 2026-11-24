from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter(SdkBaseModel):
    """Filter scores by component path. Used custom filter instead of AIP-160 as the use cases are highly constrained
    and predictable."""

    score_path: Optional[str] = Field(default=UNSET, alias="scorePath")
    """Optional. Return scores for this component. Example:
    "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source"
    """


class GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilterDict(TypedDict):
    score_path: NotRequired[str]
