from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BaseChannel(SdkBaseModel):
    name: Optional[str] = UNSET
    guid: Optional[str] = UNSET
    created: Optional[str] = UNSET
    """ISO TIMESTAMP"""

    modified: Optional[str] = UNSET
    """ISO_TIMESTAMP"""

    group_guid: Optional[str] = UNSET


class BaseChannelDict(TypedDict):
    name: NotRequired[str]
    guid: NotRequired[str]
    created: NotRequired[str]
    modified: NotRequired[str]
    group_guid: NotRequired[str]
