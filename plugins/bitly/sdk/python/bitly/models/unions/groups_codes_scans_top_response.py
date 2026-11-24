from __future__ import annotations

from typing import TypeAlias

from ..sorted_links import SortedLinks, SortedLinksDict
from ..top_links_and_qr_codes import TopLinksAndQrCodes, TopLinksAndQrCodesDict

GroupsCodesScansTopResponse: TypeAlias = SortedLinks | TopLinksAndQrCodes

GroupsCodesScansTopResponseDict: TypeAlias = SortedLinksDict | TopLinksAndQrCodesDict
