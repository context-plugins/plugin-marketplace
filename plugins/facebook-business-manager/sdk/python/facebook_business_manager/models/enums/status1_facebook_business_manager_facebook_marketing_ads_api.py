from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1FacebookBusinessManagerFacebookMarketingAdsApi(str, Enum):
    ACTIVE = "ACTIVE"
    PAUSED = "PAUSED"
    DELETED = "DELETED"
    ARCHIVED = "ARCHIVED"

    __str__ = str.__str__


Status1FacebookBusinessManagerFacebookMarketingAdsApiOrStr: TypeAlias = Annotated[
    Status1FacebookBusinessManagerFacebookMarketingAdsApi | str,
    open_enum_validator(Status1FacebookBusinessManagerFacebookMarketingAdsApi),
]
