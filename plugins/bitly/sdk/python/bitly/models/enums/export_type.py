from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExportType(str, Enum):
    """Which export shape to produce."""

    LINK_ENGAGEMENTS_BATCH = "link_engagements_batch"
    LINKS_LIST = "links_list"
    QR_CODES_LIST = "qr_codes_list"

    __str__ = str.__str__


ExportTypeOrStr: TypeAlias = Annotated[ExportType | str, open_enum_validator(ExportType)]
