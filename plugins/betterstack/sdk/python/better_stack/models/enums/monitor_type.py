from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MonitorType(str, Enum):
    STATUS = "status"
    EXPECTED_STATUS_CODE = "expected_status_code"
    KEYWORD = "keyword"
    KEYWORD_ABSENCE = "keyword_absence"
    PING = "ping"
    TCP = "tcp"
    UDP = "udp"
    SMTP = "smtp"
    POP = "pop"
    IMAP = "imap"
    DNS = "dns"
    PLAYWRIGHT = "playwright"

    __str__ = str.__str__


MonitorTypeOrStr: TypeAlias = Annotated[MonitorType | str, open_enum_validator(MonitorType)]
