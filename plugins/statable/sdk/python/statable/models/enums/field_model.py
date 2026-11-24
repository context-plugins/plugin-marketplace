from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FieldModel(str, Enum):
    """Field name WITHOUT the visit:/event: prefix. Geo fields take codes, not names (country/region = ISO/subdivision
    codes, city = numeric geoname_id — the values geo breakdowns return). The ``event`` field filters by a custom event
    name (an ``event:name`` breakdown value) and restricts the whole query to that event's sessions; it accepts ONLY
    operator ``is`` with a single non-standard value (not ``pageview`` / ``engagement``) — other forms return
    ``invalid_filter``."""

    BROWSER = "browser"
    BROWSER_VERSION = "browser_version"
    OS = "os"
    OS_VERSION = "os_version"
    DEVICE = "device"
    COUNTRY = "country"
    CITY = "city"
    REGION = "region"
    HOSTNAME = "hostname"
    UTM_SOURCE = "utm_source"
    UTM_MEDIUM = "utm_medium"
    UTM_CAMPAIGN = "utm_campaign"
    UTM_CONTENT = "utm_content"
    UTM_TERM = "utm_term"
    ENTRY_PAGE = "entry_page"
    EXIT_PAGE = "exit_page"
    SOURCE = "source"
    CHANNEL = "channel"
    REFERRER = "referrer"
    PAGE = "page"
    CODE = "code"
    EVENT = "event"

    __str__ = str.__str__


FieldModelOrStr: TypeAlias = Annotated[FieldModel | str, open_enum_validator(FieldModel)]
