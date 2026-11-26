from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Source(str, Enum):
    PUBLISHER_NEWS = "publisher_news"
    SEC_FORM4 = "sec_form4"
    SEC_FORM8K = "sec_form8k"
    SEC_FORM6K = "sec_form6k"
    EARNINGS_READS = "earnings_reads"
    EARNINGS_SCHEDULE = "earnings_schedule"
    ECONOMIC_CALENDAR = "economic_calendar"

    __str__ = str.__str__


SourceOrStr: TypeAlias = Annotated[Source | str, open_enum_validator(Source)]
