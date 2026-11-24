from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SubscriptionExpandedUtmChannel(str, Enum):
    """The acquisition channel"""

    WEBSITE = "website"
    IMPORT = "import"
    EMBED = "embed"
    API = "api"
    REFERRAL = "referral"
    RECOMMENDATION = "recommendation"
    MAGIC_LINK = "magic_link"
    BOOST = "boost"
    BOOST_SEND = "boost_send"
    BOOST_DIRECT_LINK = "boost_direct_link"
    INTEGRATION = "integration"
    PRODUCT = "product"
    GROUP_INVITE = "group_invite"

    __str__ = str.__str__


SubscriptionExpandedUtmChannelOrStr: TypeAlias = Annotated[
    SubscriptionExpandedUtmChannel | str, open_enum_validator(SubscriptionExpandedUtmChannel)
]
