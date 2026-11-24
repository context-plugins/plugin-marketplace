from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TitleReportingReportsApi(str, Enum):
    """Title of the error"""

    CONNECTION_SOURCE_NOT_SUPPORTED = "Connection source not supported."
    INVALID_USERS_FILTER_MAXIMUM_5_USERS_ALLOWED = "Invalid users filter. Maximum 5 users allowed."
    THE_FOLLOWING_ACCOUNTS_ARE_DUPLICATED_121_332_232_949_433 = "The following accounts are duplicated: \n['121', '332'], ['232', '949', '433']."
    FOLLOWING_USER_ID_S_ACCOUNT_ID_S_HAVE_BEEN_ENTERED_MORE_THAN_ONCE_123_123 = "Following user ID(s)/account ID(s) have been entered more than once: \n[\"123\", \"123\"]."

    __str__ = str.__str__


TitleReportingReportsApiOrStr: TypeAlias = Annotated[
    TitleReportingReportsApi | str, open_enum_validator(TitleReportingReportsApi)
]
