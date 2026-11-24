from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateSubscriptionRequest(SdkBaseModel):
    signal_types: Optional[list[str]] = Field(default=UNSET, alias="signalTypes")
    """New signal types to subscribe to"""

    url: Optional[str] = UNSET
    """New webhook URL"""

    name: Optional[str] = UNSET
    """New subscription name"""

    is_active: Optional[bool] = Field(default=UNSET, alias="isActive")
    """Enable or disable subscription"""

    regenerate_secret: Optional[bool] = Field(default=UNSET, alias="regenerateSecret")
    """Generate new webhook secret (secret will be returned in response)"""


class UpdateSubscriptionRequestDict(TypedDict):
    signal_types: NotRequired[list[str]]
    url: NotRequired[str]
    name: NotRequired[str]
    is_active: NotRequired[bool]
    regenerate_secret: NotRequired[bool]
