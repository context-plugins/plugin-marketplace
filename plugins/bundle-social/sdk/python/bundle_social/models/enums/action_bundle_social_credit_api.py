from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ActionBundleSocialCreditApi(str, Enum):
    TWITTER_CONTENT_CREATE = "TWITTER_CONTENT_CREATE"
    TWITTER_CONTENT_CREATE_WITH_URL = "TWITTER_CONTENT_CREATE_WITH_URL"
    TWITTER_CONTENT_MANAGE = "TWITTER_CONTENT_MANAGE"
    TWITTER_INTERACTION_DELETE = "TWITTER_INTERACTION_DELETE"
    TWITTER_POST_READ = "TWITTER_POST_READ"
    TWITTER_USER_READ = "TWITTER_USER_READ"
    TWITTER_USER_INTERACTION_CREATE = "TWITTER_USER_INTERACTION_CREATE"

    __str__ = str.__str__


ActionBundleSocialCreditApiOrStr: TypeAlias = Annotated[
    ActionBundleSocialCreditApi | str, open_enum_validator(ActionBundleSocialCreditApi)
]
