from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PostExpandField(str, Enum):
    STATS = "stats"
    FREE_WEB_CONTENT = "free_web_content"
    FREE_EMAIL_CONTENT = "free_email_content"
    FREE_RSS_CONTENT = "free_rss_content"
    PREMIUM_WEB_CONTENT = "premium_web_content"
    PREMIUM_EMAIL_CONTENT = "premium_email_content"
    RECIPIENTS = "recipients"

    __str__ = str.__str__


PostExpandFieldOrStr: TypeAlias = Annotated[PostExpandField | str, open_enum_validator(PostExpandField)]
