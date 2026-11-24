from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1SourceEnvironment(SdkBaseModel):
    """Message representing the source environment details."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Optional. The time at which the environment was created at the source."""

    source_environment_uri: Optional[str] = Field(default=UNSET, alias="sourceEnvironmentUri")
    """The location where additional information about source environments can be found. The location should be relative
    path of the environment manifest with respect to a plugin instance."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Optional. The time at which the environment was last updated at the source."""

    source_environment: Optional[str] = Field(default=UNSET, alias="sourceEnvironment")
    """Required. The name of the environment at the source. This should map to Deployment."""


class GoogleCloudApihubV1SourceEnvironmentDict(TypedDict):
    create_time: NotRequired[str]
    source_environment_uri: NotRequired[str]
    update_time: NotRequired[str]
    source_environment: NotRequired[str]
