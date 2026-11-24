from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExportType1(str, Enum):
    LINK_ENGAGEMENTS_BATCH = "link_engagements_batch"
    LINKS_LIST = "links_list"
    QR_CODES_LIST = "qr_codes_list"

    __str__ = str.__str__


ExportType1OrStr: TypeAlias = Annotated[ExportType1 | str, open_enum_validator(ExportType1)]
