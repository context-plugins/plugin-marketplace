from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusFacebookBusinessManagerFacebookMarketingAdsApi(str, Enum):
    ACTIVE = "ACTIVE"
    PAUSED = "PAUSED"

    __str__ = str.__str__


StatusFacebookBusinessManagerFacebookMarketingAdsApiOrStr: TypeAlias = Annotated[
    StatusFacebookBusinessManagerFacebookMarketingAdsApi | str,
    open_enum_validator(StatusFacebookBusinessManagerFacebookMarketingAdsApi),
]
