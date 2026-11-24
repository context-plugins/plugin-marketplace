from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1FacebookBusinessManagerFacebookMarketingCampaignsApi(str, Enum):
    """The configured status of the campaign"""

    ACTIVE = "ACTIVE"
    PAUSED = "PAUSED"
    DELETED = "DELETED"
    ARCHIVED = "ARCHIVED"

    __str__ = str.__str__


Status1FacebookBusinessManagerFacebookMarketingCampaignsApiOrStr: TypeAlias = Annotated[
    Status1FacebookBusinessManagerFacebookMarketingCampaignsApi | str,
    open_enum_validator(Status1FacebookBusinessManagerFacebookMarketingCampaignsApi),
]
