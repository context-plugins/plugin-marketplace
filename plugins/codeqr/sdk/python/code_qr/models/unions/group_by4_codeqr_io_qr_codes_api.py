from __future__ import annotations

from typing import TypeAlias

from ..enums.group_by1 import GroupBy1OrStr
from ..enums.group_by2 import GroupBy2OrStr
from ..enums.group_by3 import GroupBy3OrStr
from ..enums.group_by_codeqr_io_links_api import GroupByCodeqrIoLinksApiOrStr

GroupBy4CodeqrIoQrCodesApi: TypeAlias = GroupByCodeqrIoLinksApiOrStr | GroupBy1OrStr | GroupBy2OrStr | GroupBy3OrStr
"""The field to group the QR codes."""

GroupBy4CodeqrIoQrCodesApiDict: TypeAlias = GroupByCodeqrIoLinksApiOrStr | GroupBy1OrStr | GroupBy2OrStr | GroupBy3OrStr
