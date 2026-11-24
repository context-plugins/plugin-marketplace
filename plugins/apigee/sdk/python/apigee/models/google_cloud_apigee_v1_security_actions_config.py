from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1SecurityActionsConfig(SdkBaseModel):
    """SecurityActionsConfig reflects the current state of the SecurityActions feature. This is a singleton resource:
    https://google.aip.dev/156"""

    name: Optional[str] = UNSET
    """This is a singleton resource, the name will always be set by SecurityActions and any user input will be ignored.
    The name is always: ``organizations/{org}/environments/{env}/security_actions_config``"""

    enabled: Optional[bool] = UNSET
    """The flag that controls whether this feature is enabled. This is ``unset`` by default. When this flag is
    ``false``, even if individual rules are enabled, no SecurityActions will be enforced."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The update time for configuration."""


class GoogleCloudApigeeV1SecurityActionsConfigDict(TypedDict):
    name: NotRequired[str]
    enabled: NotRequired[bool]
    update_time: NotRequired[str]
