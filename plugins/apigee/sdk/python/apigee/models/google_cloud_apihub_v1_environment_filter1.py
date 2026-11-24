from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1EnvironmentFilter1(SdkBaseModel):
    """Optional. The filter to apply on the resources managed by the gateway plugin instance. If provided this filter
    applies environment specific filtering."""

    environments: Optional[list[str]] = UNSET
    """Optional. If provided, only environments in this list are matched. This field is ignored if ``all_environments``
    is true."""

    all_environments: Optional[bool] = Field(default=UNSET, alias="allEnvironments")
    """Optional. Indicates if this filter should match all environments or only a subset of environments. If set to
    true, all environments are matched."""


class GoogleCloudApihubV1EnvironmentFilter1Dict(TypedDict):
    environments: NotRequired[list[str]]
    all_environments: NotRequired[bool]
