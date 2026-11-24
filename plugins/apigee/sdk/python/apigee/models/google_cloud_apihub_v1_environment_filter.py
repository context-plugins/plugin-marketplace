from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1EnvironmentFilter(SdkBaseModel):
    """Filter for environments."""

    environments: Optional[list[str]] = UNSET
    """Optional. If provided, only environments in this list are matched. This field is ignored if ``all_environments``
    is true."""

    all_environments: Optional[bool] = Field(default=UNSET, alias="allEnvironments")
    """Optional. Indicates if this filter should match all environments or only a subset of environments. If set to
    true, all environments are matched."""


class GoogleCloudApihubV1EnvironmentFilterDict(TypedDict):
    environments: NotRequired[list[str]]
    all_environments: NotRequired[bool]
